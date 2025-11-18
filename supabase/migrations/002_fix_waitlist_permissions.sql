-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist;
DROP POLICY IF EXISTS "Allow authenticated users to read" ON public.waitlist;

-- Grant necessary permissions to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON public.waitlist TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;

-- Grant permissions to authenticated users
GRANT SELECT ON public.waitlist TO authenticated;

-- Disable RLS temporarily to set up fresh policies
ALTER TABLE public.waitlist DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create a permissive policy for anonymous inserts
CREATE POLICY "Enable insert for anon users" ON public.waitlist
  AS PERMISSIVE
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for authenticated users to read
CREATE POLICY "Enable read for authenticated users" ON public.waitlist
  AS PERMISSIVE
  FOR SELECT
  TO authenticated
  USING (true);

-- Alternative: If still having issues, you can also allow public role
GRANT INSERT ON public.waitlist TO public;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO public;

CREATE POLICY "Enable insert for public" ON public.waitlist
  AS PERMISSIVE
  FOR INSERT
  TO public
  WITH CHECK (true);
