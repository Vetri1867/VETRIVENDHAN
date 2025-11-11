# MongoDB Connection - Quick Fix (5 Minutes)

## What's Wrong?
Your `.env.local` has: `YourAtlasPassword` - this is a PLACEHOLDER, not your real password!

## How to Fix:

### Option A: Use MongoDB Connection String (Recommended)
1. Login: https://account.mongodb.com
2. Go: Databases → Connect → Drivers (Node.js)
3. Copy the full connection string
4. Paste into `.env.local` as MONGODB_URI
5. Restart: `npm run dev`

### Option B: Manual Fix
1. Get password from: Database Access → Database Users → Edit
2. Replace in `.env.local`:
   \`\`\`
   BEFORE: mongodb+srv://vetrivendhanmuni:YourAtlasPassword@cluster0...
   AFTER:  mongodb+srv://vetrivendhanmuni:YourRealPassword@cluster0...
   \`\`\`
3. Restart: `npm run dev`

## Verify Connection Works:
1. Go to: http://localhost:3000/register
2. Create account: `test@example.com` / `test123`
3. Go to: http://localhost:3000/admin/login
4. Login: `vetrivendhanmuni@gmail.com` / `Vetri@1867`
5. Check if test user appears in the dashboard ✓

## Why No HTML Files?
- This is Next.js (not plain HTML)
- `.tsx` files automatically become HTML
- No need to create `.html` files manually
