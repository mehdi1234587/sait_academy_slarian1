-- Create registrations table for storing course registration data
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  whatsapp_number TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert registrations (public form)
CREATE POLICY "Anyone can insert registrations" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reads (admin only would read)
CREATE POLICY "Only authenticated users can view registrations" 
ON public.registrations 
FOR SELECT 
USING (false);