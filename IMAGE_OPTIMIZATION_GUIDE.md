# Image Optimization Guide

## Options to Reduce Image Size

### 1. **WebP Conversion** ⭐ Recommended

- Converts PNG/JPEG to WebP format
- **Savings**: 40-80% size reduction
- **Quality**: Maintains visual quality
- **Browser Support**: 95%+ modern browsers
- **Best for**: Most images in your portfolio

### 2. **JPEG Optimization**

- Optimizes existing JPEG files
- **Savings**: 15-35% size reduction
- **Quality**: Near-perfect visual quality
- **Best for**: Photos and complex images

### 3. **PNG Optimization**

- Compresses PNG files
- **Savings**: 30-50% size reduction
- **Quality**: Lossless compression
- **Best for**: Images with transparency

### 4. **Resize Large Images**

- Resizes images over 1920px to 1920px width
- **Savings**: 40-60% additional reduction
- **Quality**: Maintains aspect ratio
- **Best for**: Hero images and covers

## Quick Start

### Option A: Automated Optimization & Upload

Run the optimization script:

```bash
npm run optimize-and-upload
```

This will:

1. ✅ Convert PNG/JPEG to WebP (maintains quality)
2. ✅ Optimize all images
3. ✅ Show size reduction stats
4. ✅ Upload optimized images to Supabase
5. ✅ Clean up temporary files

**Expected Results:**

- Original size: ~62 MB
- Optimized size: ~20-30 MB
- **Savings**: ~50-60% reduction

### Option B: Manual Optimization

If you want more control:

1. **Optimize individual images:**

```bash
npx sharp-cli -i input.png -o output.webp -q 85
```

2. **Batch optimize:**

```bash
# Install sharp-cli
npm install -g sharp-cli

# Optimize all PNGs in public/
find public -name "*.png" -exec sharp-cli -i {} -o {}.webp -q 85 \;
```

## Comparison: Optimization Methods

| Method         | Quality   | Size Reduction | Browser Support | Effort       |
| -------------- | --------- | -------------- | --------------- | ------------ |
| WebP           | Excellent | 40-80%         | 95%+            | Automatic ✅ |
| JPEG Optimized | Excellent | 15-35%         | 100%            | Automatic ✅ |
| PNG Optimized  | Excellent | 30-50%         | 100%            | Automatic ✅ |
| Manual Resize  | Good      | 40-60%         | 100%            | Manual       |

## Recommendations for Your Portfolio

### Immediate Actions

1. **Run automated optimization:**

   ```bash
   npm run optimize-and-upload
   ```

   Expected: Reduce 62 MB → ~25 MB (60% savings)

2. **Delete old images from Supabase:**
   - Upload optimized WebP versions
   - Remove original PNG/JPEG files
   - Saves additional storage space

### Long-term Strategy

1. **Use WebP by default**
   - Browser support: 95%+
   - Fallback: Serve PNG for old browsers
2. **Responsive images**

   - Load smaller images on mobile
   - Load larger images on desktop
   - Use `srcset` attribute

3. **Lazy loading**
   - Already implemented with `LazyImage` component
   - Images load when in viewport
   - Improves initial page load

## Performance Impact

**Before Optimization:**

- Total size: ~62 MB
- Load time: 3-5 seconds
- Mobile impact: High data usage

**After Optimization:**

- Total size: ~25 MB
- Load time: 1-2 seconds
- Mobile impact: Reduced by 60%

## Next Steps

1. **Run optimization:**

   ```bash
   npm run optimize-and-upload
   ```

2. **Test in browser:**

   - Visit http://localhost:5173
   - Verify images look good
   - Check file sizes in DevTools

3. **Update imageUtils.ts** (if needed):

   - Add `.webp` extensions
   - Update fallback logic

4. **Deploy:**
   ```bash
   npm run build
   vercel --prod
   ```

## Quality Settings

| Setting       | Quality   | File Size  | Use Case              |
| ------------- | --------- | ---------- | --------------------- |
| `quality: 90` | Excellent | Medium     | Photos, hero images   |
| `quality: 85` | Very Good | Small      | **Recommended** ⭐    |
| `quality: 80` | Good      | Very Small | Icons, thumbnails     |
| `quality: 75` | Fair      | Smallest   | When size is critical |

**Our settings:** Quality 85 (WebP), Quality 85 (JPEG) - Best balance of quality and size.
