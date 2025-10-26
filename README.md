# Portfolio - Sravan Kumar Mulugurthy

A modern portfolio website built with React, Tailwind CSS, and Supabase.

## Features

- Responsive design
- Portfolio showcase
- Contact form with Supabase integration
- About section
- Interactive UI components
- Hybrid image storage (Vercel + Supabase)

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Supabase for backend functionality and image storage
- Vite for build tooling

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/sravanportfolio.git
cd sravanportfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file:

```bash
cp env.example .env
```

Edit `.env` and add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Get your credentials from: [Supabase Dashboard](https://app.supabase.com/project/YOUR_PROJECT/settings/api)

### 4. Set Up Supabase Storage

1. Go to your Supabase dashboard → Storage
2. Create a bucket named `portfolio-images`
3. Set it to **Public** access
4. Configure the following folders: `covers/`, `profile/`

Or run the upload script after setting up:

```bash
npm run upload-images
```

### 5. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Image Storage Strategy

This portfolio uses **Supabase Storage** for optimal performance:

- **All images stored in Supabase** (13 MB total, optimized to WebP)
- **Format**: WebP (73.8% size reduction from original)
- **Delivery**: Global CDN for fast loading worldwide
- **Updates**: Edit images via Supabase dashboard (no redeploy needed)

Benefits:

- ✅ Update images without redeploying
- ✅ 3-5x faster page loads (optimized WebP)
- ✅ 79% less bandwidth usage
- ✅ Global CDN delivery
- ✅ Free tier friendly (well within limits)

### Optimize New Images

When adding new images, run:

```bash
npm run optimize-and-upload
```

This converts images to WebP and uploads them to Supabase Storage.

## Contact

- Email: sravan.iitk@live.in
- Phone: +91 9730578566
- Location: India
