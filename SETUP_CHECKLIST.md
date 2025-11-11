# Admin Panel Setup Checklist

## Pre-Setup
- [ ] Node.js 18+ installed
- [ ] MongoDB installed locally OR MongoDB Atlas account created
- [ ] Git installed
- [ ] Text editor/IDE ready (VS Code recommended)

## Repository Setup
- [ ] Clone: `git clone https://github.com/Vetri1867/OMR-schuduler-2.git`
- [ ] Navigate: `cd OMR-schuduler-2`
- [ ] Install: `npm install`

## Database Configuration

### Option A: Local MongoDB
- [ ] Start MongoDB service
  - Windows: `mongod`
  - Mac: `brew services start mongodb-community`
  - Linux: `sudo systemctl start mongod`
- [ ] Verify connection: `mongosh`
- [ ] Set `MONGODB_URI=mongodb://localhost:27017` in .env.local

### Option B: MongoDB Atlas (Cloud)
- [ ] Create MongoDB Atlas account (mongodb.com)
- [ ] Create new cluster
- [ ] Get connection string
- [ ] Set `MONGODB_URI=<connection-string>` in .env.local

## Environment Variables (.env.local)
Create/Edit `.env.local` file:
\`\`\`
MONGODB_URI=mongodb://localhost:27017
ADMIN_EMAIL=vetrivendhanmuni@gmail.com
ADMIN_PASSWORD=Vetri@1867
\`\`\`

- [ ] MongoDB URI configured
- [ ] Admin email set
- [ ] Admin password updated to Vetri@1867

## Start Application
- [ ] Run: `npm run dev`
- [ ] Verify: http://localhost:3000 loads
- [ ] Check console for errors

## Test User Registration
- [ ] Go to: http://localhost:3000/register
- [ ] Create test user with:
  - Email: testuser@example.com
  - Password: Test@1234
  - Username: testuser
  - Phone: 9876543210
- [ ] Verify: User registered successfully

## Test User Login
- [ ] Go to: http://localhost:3000/login
- [ ] Login with testuser credentials
- [ ] Verify: Redirected to user dashboard

## Test Admin Panel
- [ ] Go to: http://localhost:3000/admin/login
- [ ] Enter admin credentials:
  - Email: vetrivendhanmuni@gmail.com
  - Password: Vetri@1867
- [ ] Verify: Admin dashboard loads
- [ ] Verify: Test user appears in user list
- [ ] Check: User details visible (email, phone, username)

## Verify Database
- [ ] Open MongoDB Shell: `mongosh`
- [ ] Select database: `use omr_scheduler`
- [ ] View users: `db.users.find()`
- [ ] Verify: Test user in database
- [ ] Check: Password is hashed (encrypted)

## Security Verification
- [ ] Admin password NOT visible in code
- [ ] Admin credentials in .env.local (gitignored)
- [ ] Passwords encrypted in database
- [ ] Admin login required for /admin routes
- [ ] User passwords hashed with bcryptjs

## Final Steps
- [ ] All tests passed
- [ ] Application ready for production
- [ ] Backup .env.local file
- [ ] Document custom configurations

## Troubleshooting

### MongoDB Connection Fails
- [ ] MongoDB service running?
- [ ] Correct URI in .env.local?
- [ ] Network access allowed (if Atlas)?

### Admin Login Fails
- [ ] .env.local updated with new password?
- [ ] Development server restarted?
- [ ] Credentials match exactly?

### Users Not Showing
- [ ] MongoDB connected?
- [ ] Users registered through /register?
- [ ] Database selection correct?

---
**Status**: Ready for deployment ✓
**Database**: MongoDB ✓
**Admin Password**: Vetri@1867 ✓
