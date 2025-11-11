# Complete Step-by-Step MongoDB Atlas Setup

## STEP 1: Access Your MongoDB Project

\`\`\`
1. Open https://account.mongodb.com
2. Login with your credentials
3. Look for Project ID: 68d143564357d8364326c392
4. Click on it to enter the project
\`\`\`

## STEP 2: Create Database User

\`\`\`
1. In your project, go to: SECURITY → Network Access
   OR click the "Database Access" tab on left

2. If first time:
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Username: (choose any name, e.g., "omr_user")
   - Password: (create strong password)
   - User Privileges: "Read and write to any database"
   - Click "Add User"

3. Save this username and password somewhere safe!
\`\`\`

## STEP 3: Whitelist Your IP

\`\`\`
1. Go to: SECURITY → Network Access

2. Click "Add IP Address"

3. Options:
   - Auto-detect: Click "Add Current IP Address"
   - Manual: Enter your IP address
   - Testing: Enter "0.0.0.0/0" (allows all IPs)

4. Click "Confirm"

5. Wait 1-2 minutes for changes to take effect
\`\`\`

## STEP 4: Get Connection String

\`\`\`
1. Go to: DEPLOYMENT → Databases

2. Find your cluster and click "Connect"

3. Select "Drivers"

4. Select "Node.js" version 4.1 or later

5. You'll see a connection string like:
   mongodb+srv://<username>:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
\`\`\`

## STEP 5: Replace Credentials in Connection String

\`\`\`
Take the connection string and replace:
- <username> with your database username from STEP 2
- <password> with your database password from STEP 2

Example:
FROM: mongodb+srv://<username>:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
TO:   mongodb+srv://omr_user:MySecurePass123@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
\`\`\`

## STEP 6: Update Your Project

\`\`\`
1. In your project folder, find .env.local file

2. Update MONGODB_URI with your connection string:

   MONGODB_URI=mongodb+srv://omr_user:MySecurePass123@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
   ADMIN_EMAIL=vetrivendhanmuni@gmail.com
   ADMIN_PASSWORD=Vetri@1867

3. Save the file

4. IMPORTANT: Do NOT commit .env.local to GitHub!
\`\`\`

## STEP 7: Restart Your App

\`\`\`
1. In terminal, stop your app (Ctrl+C)

2. Run: npm run dev

3. Check console - you should see:
   "Connected to database" (or no errors)

4. If error appears, check:
   - Is your IP whitelisted?
   - Is username/password correct?
   - Is internet connection working?
\`\`\`

## STEP 8: Test Registration

\`\`\`
1. Go to: http://localhost:3000/register

2. Fill form:
   - Email: test@example.com
   - Phone: 1234567890
   - Username: testuser
   - Password: Test@1234

3. Click "Register"

4. Should see: "Registration successful!"

5. If error: Check connection and try again
\`\`\`

## STEP 9: Login to Admin Panel

\`\`\`
1. Go to: http://localhost:3000/admin/login

2. Enter:
   - Email: vetrivendhanmuni@gmail.com
   - Password: Vetri@1867

3. Click "Login"

4. Should see admin dashboard with user list

5. Your test user should appear in the list!
\`\`\`

## STEP 10: Verify in MongoDB Atlas

\`\`\`
1. Go to MongoDB Atlas website

2. Navigate to: DEPLOYMENT → Databases

3. Click "Browse Collections" on your cluster

4. Select database: omr_scheduler

5. Select collection: users

6. You should see your test user data:
   - Email: test@example.com
   - Username: testuser
   - Phone: 1234567890
   - Password: (hashed, not readable)

7. Data appears within 5-10 seconds of registration
\`\`\`

## VERIFICATION CHECKLIST

✓ MongoDB Atlas connection successful
✓ User registration works
✓ Admin login works
✓ User appears in admin dashboard
✓ User appears in MongoDB Atlas
✓ Data syncs in real-time between app and database

## If Connection Fails

### Error: "connection timeout"
- Check if IP is whitelisted in MongoDB Atlas
- Wait 2-3 minutes after adding IP whitelist
- Try restarting npm run dev

### Error: "authentication failed"
- Verify username spelling (case-sensitive)
- Verify password spelling (case-sensitive)
- Check no @ or : in password (URL encode if needed)
- Recreate database user if unsure

### Error: "MONGODB_URI not found"
- Check .env.local file exists in project root
- Check MONGODB_URI is spelled correctly
- Make sure no extra spaces before/after

### Data not showing in admin panel
- Refresh browser page (Ctrl+R)
- Clear browser cache
- Restart npm run dev
- Check MongoDB Atlas for data

## You're Done!

Your OMR Scheduler is now connected to MongoDB Atlas!

🎉 You can:
- Register users at /register
- Login as admin at /admin/login
- View all users in admin dashboard
- See real-time data sync to MongoDB Atlas
- Delete/manage users from admin panel

Enjoy your admin panel! 🚀
