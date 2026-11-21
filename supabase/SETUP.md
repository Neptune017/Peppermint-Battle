# Supabase sign-in setup

1. Create a Supabase project on the Free plan.
2. Open **Project Settings → API** and copy the Project URL and publishable (or anon) key into auth-config.js. Never use a service-role key in this browser app.
3. In the Supabase SQL Editor, run player_profiles.sql once. Its row-level security policies allow each signed-in user to read and update only their own save.
4. In **Authentication → URL Configuration**, set the site URL to the hosted game address and add that address to the allowed redirect URLs. The game must be opened from an HTTP(S) site; browser file:// pages cannot complete account redirects.
5. Reload the game and use **SIGN IN** to create an account or sign in.

The browser exposes window.peppermintPlayerSave.load() and window.peppermintPlayerSave.save(data) for user-owned JSON save data. Each save row is keyed to the authenticated Supabase user ID and protected by RLS. The booster wallet, display stock, and card collection save under each account in the boosters field. Match progress is not connected yet.
