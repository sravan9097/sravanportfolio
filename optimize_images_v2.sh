#!/bin/bash

# Better image optimization script
# This script uses more effective compression methods

echo "Starting better image optimization..."

# Create backup directory
mkdir -p public/backup_images_v2

# Function to optimize image with better methods
optimize_image() {
    local file="$1"
    local backup_file="public/backup_images_v2/$(basename "$file")"
    
    echo "Optimizing: $file"
    
    # Create backup
    cp "$file" "$backup_file"
    
    # Get original size
    original_size=$(stat -f%z "$file")
    
    # Optimize based on file type
    if [[ "$file" == *.png ]]; then
        # For PNG, try to reduce dimensions if they're too large
        # Get image dimensions
        dimensions=$(sips -g pixelWidth -g pixelHeight "$file" | grep -E "(pixelWidth|pixelHeight)" | awk '{print $2}')
        width=$(echo "$dimensions" | head -1)
        height=$(echo "$dimensions" | tail -1)
        
        echo "  Original dimensions: ${width}x${height}"
        
        # If image is very large, resize it
        if [[ $width -gt 1920 ]] || [[ $height -gt 1080 ]]; then
            echo "  Resizing large image..."
            sips -Z 1920 "$file" --out "$file.tmp"
            mv "$file.tmp" "$file"
        fi
        
        # Try to optimize PNG with better quality settings
        sips -s format png --matchTo '/System/Library/ColorSync/Profiles/Generic RGB Profile.icc' "$file" --out "$file.tmp"
        mv "$file.tmp" "$file"
        
    elif [[ "$file" == *.jpg ]] || [[ "$file" == *.jpeg ]]; then
        # For JPG, try different quality settings
        echo "  Optimizing JPEG..."
        
        # Get image dimensions
        dimensions=$(sips -g pixelWidth -g pixelHeight "$file" | grep -E "(pixelWidth|pixelHeight)" | awk '{print $2}')
        width=$(echo "$dimensions" | head -1)
        height=$(echo "$dimensions" | tail -1)
        
        echo "  Original dimensions: ${width}x${height}"
        
        # If image is very large, resize it
        if [[ $width -gt 1920 ]] || [[ $height -gt 1080 ]]; then
            echo "  Resizing large image..."
            sips -Z 1920 "$file" --out "$file.tmp"
            mv "$file.tmp" "$file"
        fi
        
        # Try different quality settings for JPEG
        sips -s format jpeg -j 80 "$file" --out "$file.tmp"
        mv "$file.tmp" "$file"
    fi
    
    # Get new size
    new_size=$(stat -f%z "$file")
    
    # Calculate reduction
    reduction=$(( (original_size - new_size) * 100 / original_size ))
    
    echo "  Original: ${original_size} bytes"
    echo "  Optimized: ${new_size} bytes"
    echo "  Reduction: ${reduction}%"
    echo ""
}

# List of the largest images to optimize (over 200KB)
large_images=(
    "public/sharechatLead/researchImiage.png"
    "public/sharechatLead/sampletemplate.png"
    "public/profile_photo.jpg"
    "public/Hero_Images/designsystemhero.png"
    "public/sharechatLead/custombgTemplate.png"
    "public/Hero_Images/Objects.png"
    "public/bcwebsite/templates.png"
    "public/Hero_Images/Roles.png"
    "public/sharechatLead/mindmapping.png"
    "public/bcwebsite/organisms.png"
    "public/bcwebsite/wireframeFirst.png"
    "public/bcexperience/Single_Member_View.png"
    "public/bcexperience/checkin_creation.png"
    "public/sharechatLead/userflow.png"
    "public/bcexperience/Team-View.png"
    "public/Hero_Images/sharechatCover.png"
    "public/Hero_Images/BC_experience_cover.png"
    "public/bcwebsite/atoms.png"
    "public/Hero_Images/check_in_flow.png"
    "public/bcwebsite/beautifulcodeCover.png"
    "public/design-system/designsystemimage.png"
    "public/Hero_Images/check_in_flow_1.png"
    "public/bcwebsite/theme1screen2.png"
    "public/bcwebsite/atoms&molecules.png"
    "public/Hero_Images/check_in_flow_2.png"
    "public/bcwebsite/wireframe1.png"
    "public/sharechatLead/Wireframe1.png"
    "public/bcwebsite/theme2screen2.png"
    "public/sharechatLead/Wireframe2.png"
    "public/bcwebsite/compounds.png"
    "public/Hero_Images/Site_Map.png"
    "public/bcwebsite/theme2screen1.png"
    "public/sharechatLead/template1.png"
    "public/Hero_Images/team_view_1.png"
    "public/bcwebsite/wireframe2.png"
    "public/bcwebsite/theme1screen1.png"
    "public/sharechatLead/layout.png"
    "public/design-system/components.png"
    "public/Hero_Images/team_settings.png"
)

# Optimize each large image
for image in "${large_images[@]}"; do
    if [[ -f "$image" ]]; then
        optimize_image "$image"
    else
        echo "Warning: $image not found"
    fi
done

echo "Image optimization complete!"
echo "Backups saved in public/backup_images_v2/"
echo ""
echo "Summary of optimizations:"
echo "========================" 