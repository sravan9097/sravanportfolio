#!/bin/bash

# Image optimization script for portfolio
# This script optimizes PNG and JPG images while preserving quality

echo "Starting image optimization..."

# Create backup directory
mkdir -p public/backup_images

# Function to optimize image
optimize_image() {
    local file="$1"
    local backup_file="public/backup_images/$(basename "$file")"
    
    echo "Optimizing: $file"
    
    # Create backup
    cp "$file" "$backup_file"
    
    # Get original size
    original_size=$(stat -f%z "$file")
    
    # Optimize based on file type
    if [[ "$file" == *.png ]]; then
        # For PNG, try to reduce quality while maintaining visual quality
        sips -s format png --matchTo '/System/Library/ColorSync/Profiles/Generic RGB Profile.icc' "$file" --out "$file.tmp"
        mv "$file.tmp" "$file"
    elif [[ "$file" == *.jpg ]] || [[ "$file" == *.jpeg ]]; then
        # For JPG, reduce quality to 85% (good balance)
        sips -s format jpeg -j 85 "$file" --out "$file.tmp"
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

# List of large images to optimize (over 100KB)
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
echo "Backups saved in public/backup_images/"
echo ""
echo "Summary of optimizations:"
echo "========================" 