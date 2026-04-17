import { supabase } from '../../../services/supabaseClient';

export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    const { error } = await supabase.from('ficha').select('*').limit(1);
    return !error;
  } catch {
    return false;
  }
}