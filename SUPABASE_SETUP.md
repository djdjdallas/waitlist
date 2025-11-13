# Supabase Setup Guide

This guide will help you set up Supabase for the CleanPing waitlist functionality.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Your CleanPing project running locally

## Step 1: Create a Supabase Project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Choose your organization
4. Fill in:
   - **Project Name**: CleanPing (or your preferred name)
   - **Database Password**: Create a strong password (save it securely)
   - **Region**: Choose closest to your users
5. Click "Create new project"
6. Wait 2-3 minutes for your project to be provisioned

## Step 2: Create the Waitlist Table

1. In your Supabase project dashboard, go to **Table Editor** (left sidebar)
2. Click **"New table"**
3. Configure the table:
   - **Name**: `waitlist`
   - **Description**: "CleanPing waitlist signups"
   - Enable **Row Level Security (RLS)** ✅

4. Add the following columns:

| Column Name     | Type        | Default Value       | Primary | Required | Extra Settings                |
|----------------|-------------|---------------------|---------|----------|-------------------------------|
| id             | int8        | Auto-generated      | ✅      | ✅       | Identity, Auto-increment      |
| created_at     | timestamptz | now()               |         | ✅       |                               |
| name           | text        |                     |         | ✅       |                               |
| email          | text        |                     |         | ✅       | Create unique index           |
| phone          | text        |                     |         |          |                               |
| property_count | int4        |                     |         |          |                               |

5. Click **Save**

## Step 3: Configure Row Level Security (RLS)

Since we want anyone to be able to join the waitlist, we need to set up a policy:

1. Go to **Authentication** > **Policies**
2. Find the `waitlist` table
3. Click **"New Policy"**
4. Choose **"Create a policy from scratch"**
5. Configure:
   - **Policy name**: `Enable insert for everyone`
   - **Policy command**: `INSERT`
   - **Target roles**: `public`
   - **USING expression**: `true`
   - **WITH CHECK expression**: `true`
6. Click **Review** then **Save policy**

Alternatively, you can run this SQL in the **SQL Editor**:

```sql
-- Enable insert for everyone (to join waitlist)
CREATE POLICY "Enable insert for everyone" ON waitlist
FOR INSERT
TO public
WITH CHECK (true);

-- Optional: Enable read for authenticated users only (for admin viewing)
CREATE POLICY "Enable read for authenticated users only" ON waitlist
FOR SELECT
TO authenticated
USING (true);
```

## Step 4: Get Your API Credentials

1. Go to **Project Settings** (gear icon in sidebar)
2. Click **API** in the left menu
3. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (under "Project API keys")

## Step 5: Configure Environment Variables

1. In your project root, create a `.env.local` file:

```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

3. **IMPORTANT**: Never commit `.env.local` to git (it's already in `.gitignore`)

## Step 6: Test the Integration

1. Restart your development server:

```bash
npm run dev
```

2. Open http://localhost:3000
3. Scroll to the waitlist form
4. Fill it out and submit
5. Check your Supabase dashboard **Table Editor** > `waitlist` to see the new entry

## Step 7: View Waitlist Submissions

### Option A: Supabase Dashboard
- Go to **Table Editor** > `waitlist`
- You'll see all submissions with timestamps

### Option B: SQL Queries
Go to **SQL Editor** and run:

```sql
-- View all waitlist entries
SELECT * FROM waitlist ORDER BY created_at DESC;

-- Count total signups
SELECT COUNT(*) as total_signups FROM waitlist;

-- Count by property count
SELECT property_count, COUNT(*) as hosts
FROM waitlist
WHERE property_count IS NOT NULL
GROUP BY property_count
ORDER BY property_count DESC;

-- Get emails for export
SELECT email FROM waitlist ORDER BY created_at DESC;
```

### Option C: Export to CSV
1. Go to **Table Editor** > `waitlist`
2. Click the **"..."** menu
3. Select **"Export to CSV"**

## Optional Enhancements

### Add Email Notifications

You can set up automatic email notifications when someone joins:

1. Go to **Database** > **Webhooks**
2. Create a webhook that triggers on `INSERT` to `waitlist`
3. Connect to services like:
   - SendGrid
   - Mailgun
   - Your own API endpoint

### Add Analytics

Track conversion metrics by adding these columns:

```sql
ALTER TABLE waitlist ADD COLUMN utm_source text;
ALTER TABLE waitlist ADD COLUMN utm_medium text;
ALTER TABLE waitlist ADD COLUMN utm_campaign text;
ALTER TABLE waitlist ADD COLUMN referrer text;
```

Then update the form to capture these values from URL parameters.

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure `.env.local` exists and has the correct values
- Restart your dev server after creating `.env.local`

### Form submission fails
- Check browser console for errors
- Verify RLS policy is set correctly
- Make sure email field is unique in your table

### Can't see data in Supabase
- Check you're looking at the correct table (`waitlist`)
- Verify the form is actually submitting (check Network tab)
- Look for errors in the Supabase logs (Project Settings > Logs)

## Next Steps

- Set up email notifications for new signups
- Create an admin dashboard to view and export waitlist
- Add analytics tracking (Google Analytics, Plausible, etc.)
- Set up automated email campaigns with Mailchimp/ConvertKit

## Support

- Supabase Docs: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com
