# MongoDB Atlas Connection Checklist

## Project Information
- Project ID: `68d143564357d8364326c392`
- Database Name: `omr_scheduler`
- Your Email: `vetrivendhanmuni@gmail.com`
- Admin Password: `Vetri@1867`

## Pre-Connection Tasks
- [ ] Have MongoDB Atlas account created and logged in
- [ ] Know which cluster you want to use
- [ ] Have database username and password ready

## MongoDB Atlas Setup (If Not Done)
- [ ] Create Database User in "Database Access" section
  - Username: (your choice)
  - Password: (strong password)
  - Permissions: Read and write to any database
- [ ] Whitelist IP Address in "Network Access"
  - [ ] Add Current IP Address OR
  - [ ] Add 0.0.0.0/0 for local development
- [ ] Get Connection String
  - Go to: Databases → Connect → Drivers → Node.js
  - Copy the connection string

## Update Project Files
- [ ] Replace `[username]` in connection string
- [ ] Replace `[password]` in connection string
- [ ] Paste into `.env.local` MONGODB_URI
- [ ] Save `.env.local`

## Test Connection
- [ ] Restart development server: `npm run dev`
- [ ] Check console for any connection errors
- [ ] No "MONGODB_URI not found" error
- [ ] Go to http://localhost:3000/register
- [ ] Create a test user with email and phone
- [ ] Successfully registered message

## Verify in Admin Panel
- [ ] Go to http://localhost:3000/admin/login
- [ ] Login: vetrivendhanmuni@gmail.com / Vetri@1867
- [ ] Admin dashboard loads without error
- [ ] Test user appears in user list
- [ ] Can see email, phone, username, created date

## Verify in MongoDB Atlas
- [ ] Go to MongoDB Atlas website
- [ ] Navigate to Databases section
- [ ] Click "Browse Collections"
- [ ] Select database: `omr_scheduler`
- [ ] Select collection: `users`
- [ ] Your test user appears in the collection
- [ ] Can see all fields: email, password (hashed), phone, username

## Final Verification
- [ ] Create 2-3 more test users at /register
- [ ] All users visible in admin dashboard
- [ ] All users visible in MongoDB Atlas
- [ ] Can delete users from admin panel
- [ ] Deleted users removed from MongoDB Atlas
- [ ] No console errors during operations

## Troubleshooting If Connection Fails

**If you see "connection timeout":**
- [ ] Check IP is whitelisted in Network Access
- [ ] Verify internet connection
- [ ] Try adding "0.0.0.0/0" to Network Access

**If you see "authentication failed":**
- [ ] Verify username is correct
- [ ] Verify password is correct (case-sensitive!)
- [ ] Check no special characters need URL encoding
- [ ] Recreate database user if forgotten password

**If data not appearing:**
- [ ] Refresh MongoDB Atlas page in browser
- [ ] Restart `npm run dev`
- [ ] Clear browser cache/cookies
- [ ] Check that users were created at /register

## Success Indicators
- Admin panel loads without errors
- Users appear in admin dashboard within 5 seconds of registration
- Data visible in MongoDB Atlas within 10 seconds of registration
- Can search and delete users from admin panel
- All user operations reflected in MongoDB Atlas immediately
