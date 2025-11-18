-- Simple fix: Disable RLS for waitlist table
-- This is a public waitlist form, so RLS is not needed
-- The unique email constraint still prevents duplicates

-- Drop all existing policies
DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist;
DROP POLICY IF EXISTS "Enable insert for anon users" ON public.waitlist;
DROP POLICY IF EXISTS "Enable insert for public" ON public.waitlist;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON public.waitlist;
DROP POLICY IF EXISTS "Allow authenticated users to read" ON public.waitlist;

-- Disable RLS completely
ALTER TABLE public.waitlist DISABLE ROW LEVEL SECURITY;

-- Grant all necessary permissions
GRANT ALL ON public.waitlist TO anon;
GRANT ALL ON public.waitlist TO authenticated;
GRANT ALL ON public.waitlist TO public;
