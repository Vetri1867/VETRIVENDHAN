# Connect MongoDB Atlas to OMR Scheduler

## Your Project ID: 68d143564357d8364326c392

### Step 1: Get Your MongoDB Atlas Connection String

1. Go to https://account.mongodb.com/account/login
2. Log in with your MongoDB Atlas account
3. Click on your project: **68d143564357d8364326c392**
4. Click "Databases" in the left sidebar
5. Find your cluster and click "Connect"
6. Click "Drivers" → Select "Node.js" version 4.1 or later
7. Copy the connection string that looks like:
   \`\`\`
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   \`\`\`

### Step 2: Create Database User (if not already created)

1. In MongoDB Atlas, go to "Database Access" (left sidebar)
2. Click "Add New Database User"
3. Select "Password" as Authentication Method
4. Enter Username and Password
5. Select "Read and write to any database"
6. Click "Add User"

**Important**: Save the username and password you create

### Step 3: Whitelist IP Address (Allow Your Computer)

1. Go to "Network Access" in left sidebar
2. Click "Add IP Address"
3. Click "Add Current IP Address" (it auto-detects your IP)
4. Or enter "0.0.0.0/0" to allow all IPs (less secure but easier for testing)
5. Click "Confirm"

### Step 4: Get Connection String

1. Go to Databases → Connect → Drivers
2. Copy the connection string
3. Replace `<username>` with your database user username
4. Replace `<password>` with your database user password

**Example:**
\`\`\`
Original: mongodb+srv://<username>:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
Updated:  mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
\`\`\`

### Step 5: Update .env.local in Your Project

Open `.env.local` and update:

\`\`\`env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

# Admin Credentials
ADMIN_EMAIL=vetrivendhanmuni@gmail.com
ADMIN_PASSWORD=Vetri@1867
\`\`\`

Replace with your actual:
- `username` - Your MongoDB database user
- `password` - Your MongoDB database user password
- `cluster0.xxxxx.mongodb.net` - Your cluster address

### Step 6: Test the Connection

1. Restart your development server:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Watch the console for any connection errors
3. Go to http://localhost:3000/register
4. Create a test user
5. Go to http://localhost:3000/admin/login
6. Login with admin credentials (vetrivendhanmuni@gmail.com / Vetri@1867)
7. Verify the test user appears in the admin dashboard

### Step 7: Verify Data in MongoDB Atlas

1. Go to MongoDB Atlas → Databases
2. Click "Browse Collections" for your cluster
3. Select database: `omr_scheduler`
4. Select collection: `users`
5. You should see your test user data!

## Connection String Components

The MongoDB Atlas connection string has this format:
\`\`\`
mongodb+srv://[username]:[password]@[cluster].mongodb.net/?retryWrites=true&w=majority
\`\`\`

- **[username]** - Database user you created in Step 2
- **[password]** - Password for that user
- **[cluster]** - Your cluster name from MongoDB Atlas
- **retryWrites=true** - Automatically retry failed writes
- **w=majority** - Require writes acknowledged by majority of nodes

## Troubleshooting

### Connection Timeout
- Check if IP is whitelisted in "Network Access"
- Verify username and password are correct
- Ensure you're using the correct cluster name

### Authentication Failed
- Double-check username and password
- Ensure no special characters are URL-encoded incorrectly
- Verify the database user was created in "Database Access"

### Can't See Data in Atlas
- Confirm the connection string is correct
- Check that users were actually created at /register
- Wait a few seconds for data to sync
- Refresh MongoDB Atlas page

### Admin Login Not Working After Connection Change
- Restart development server: `npm run dev`
- Clear browser cookies
- Try again

## Database Created Automatically

When you first register a user, the app automatically:
1. Creates the `omr_scheduler` database (if not exists)
2. Creates the `users` collection (if not exists)
3. Inserts your user data with hashed password

No manual database creation needed!

## Next Steps

1. Complete Step 1-5 above
2. Restart `npm run dev`
3. Register at least 2 test users at http://localhost:3000/register
4. Login to admin panel at http://localhost:3000/admin/login
5. Verify users appear in the admin dashboard
6. Check MongoDB Atlas to see the data

## Security Reminder

- Never commit .env.local to GitHub
- Don't share your MongoDB connection string
- Use strong passwords for database users
- Whitelist only the IPs you need
