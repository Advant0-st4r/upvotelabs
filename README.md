UpvoteLabs
A React SPA for discovering and validating startup ideas with community feedback. Built with Vite, TypeScript, Clerk (auth), Supabase (backend prep), and shadcn-ui.
Quick Start

Clone: git clone https://github.com/Advant0-st4r/upvotelabs
Install: npm install
Env: Add .env with Clerk/Supabase keys (see .env.example)
Dev: npm run dev
Build: npm run build

Structure

src/pages/: Routes (Landing, Discovery, etc.)
src/components/ui/: shadcn-ui components
src/lib/: Utils, mocks, Supabase client

APIs

Auth: Clerk (client-side)
Data: Supabase (mocks for now; replace in mockData.ts)

Hosted on Supabase.
