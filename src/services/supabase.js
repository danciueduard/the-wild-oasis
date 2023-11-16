import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hgviqytoxazwabtlpzoc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhndmlxeXRveGF6d2FidGxwem9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4ODkyNzksImV4cCI6MjAxNTQ2NTI3OX0.fCbWckAGsj6bpLYCoVI1ebcvAJrqVEMEKlSAV3NB3Ak";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
