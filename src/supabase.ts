import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jrrlvoslcvriwqkdrsmb.supabase.co/";
const supabaseKey = "sb_publishable_9MF_88cN2pLmfua8vGNkfg_oZYzylUp";

export const supabase = createClient(supabaseUrl, supabaseKey);
