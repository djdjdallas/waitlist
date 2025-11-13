# CleanPing Landing Page

A modern, conversion-optimized landing page for CleanPing - the Airbnb cleaning scheduler automation app.

## Features

- **Hero section** with compelling value proposition
- **Problem statement** highlighting pain points
- **How it works** - 3-step process
- **Features showcase** with 4 key benefits
- **Social proof** with testimonials
- **Waitlist form** integrated with Supabase
- **Responsive design** - mobile, tablet, and desktop
- **CleanPing branding** - Teal color scheme (#00A699)

## Tech Stack

- **Next.js 16** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Supabase** - Backend database for waitlist
- **JavaScript** - No TypeScript

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

Follow the detailed guide in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) to:
- Create your Supabase project
- Set up the waitlist table
- Configure Row Level Security
- Get your API credentials

### 3. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
/app
  /components
    WaitlistForm.js      # Client component for waitlist form
  globals.css            # Global styles and Tailwind config
  layout.js              # Root layout
  page.js                # Main landing page
/lib
  supabase.js            # Supabase client configuration
/public                  # Static assets
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repo on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform
- Any Node.js hosting

## Customization

### Update Colors

The brand color (`#00A699`) is used throughout. To change:
1. Find and replace `#00A699` in `app/page.js`
2. Update hover state `#008c82` to match

### Update Copy

All marketing copy is in `app/page.js`. Edit:
- Headlines and taglines
- Feature descriptions
- Testimonials
- Call-to-action buttons

### Add Analytics

Add your analytics script in `app/layout.js`:

```javascript
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Analytics, Plausible, etc. */}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## Viewing Waitlist Submissions

### In Supabase Dashboard
1. Go to Table Editor
2. Select `waitlist` table
3. View all submissions

### Export to CSV
1. Table Editor > `waitlist`
2. Click "..." menu
3. Select "Export to CSV"

### SQL Queries
Run in SQL Editor:

```sql
-- View all entries
SELECT * FROM waitlist ORDER BY created_at DESC;

-- Count signups
SELECT COUNT(*) FROM waitlist;

-- Export emails
SELECT email FROM waitlist;
```

## Support & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Setup Guide](./SUPABASE_SETUP.md)

## License

MIT
