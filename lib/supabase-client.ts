/**
 * Supabase Client Configuration
 * 
 * This file initializes the Supabase client for use throughout the application.
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const databaseUrl = process.env.DATABASE_URL;

if (!supabaseUrl || !supabaseAnonKey || !databaseUrl) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);