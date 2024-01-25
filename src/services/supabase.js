import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://uudaoezrnzhflttqpazx.supabase.co'
const supabaseKey = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1ZGFvZXpybnpoZmx0dHFwYXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0MDM4OTMsImV4cCI6MjAxNzk3OTg5M30.8jCyqiWiJ_E9ejiDXXsUqIcv6iMEtOauu5hMKkbvcY4"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;