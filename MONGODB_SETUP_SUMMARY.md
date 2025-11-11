# OMR Scheduler - MongoDB Atlas Setup Summary

## Your Setup Information

| Item | Value |
|------|-------|
| MongoDB Project ID | 68d143564357d8364326c392 |
| Database Name | omr_scheduler |
| Collection | users |
| Admin Email | vetrivendhanmuni@gmail.com |
| Admin Password | Vetri@1867 |
| Environment File | .env.local |

## Files Modified/Created

1. **.env.local** - Environment variables with MongoDB connection string
2. **.env.local.example** - Template for reference
3. **MONGODB_ATLAS_CONNECTION_GUIDE.md** - Detailed connection instructions
4. **MONGODB_ATLAS_CHECKLIST.md** - Setup verification checklist
5. **STEP_BY_STEP_MONGODB_SETUP.md** - Visual step-by-step guide

## 10-Step Quick Setup

1. Go to https://account.mongodb.com
2. Login to your account
3. Create Database User (if not exists): Database Access → Add New User
4. Whitelist IP: Network Access → Add Current IP Address
5. Get Connection String: Databases → Connect → Drivers → Node.js
6. Replace <username> and <password> in connection string
7. Update `.env.local` with new MONGODB_URI
8. Restart app: `npm run dev`
9. Create test user: http://localhost:3000/register
10. Login to admin: http://localhost:3000/admin/login

## Where to View User Data

### Option 1: Admin Dashboard (Recommended)
- URL: http://localhost:3000/admin/login
- Login: vetrivendhanmuni@gmail.com / Vetri@1867
- Shows: Email, Phone, Username, Created Date, Registered Users Count

### Option 2: MongoDB Atlas UI
- Go to: https://account.mongodb.com
- Project: 68d143564357d8364326c392
- Databases → Browse Collections
- Database: omr_scheduler
- Collection: users
- Real-time view of all user data

### Option 3: MongoDB Shell (mongosh)
\`\`\`bash
mongosh "mongodb+srv://username:password@cluster.mongodb.net/omr_scheduler"
db.users.find()
db.users.findOne({ email: "test@example.com" })
\`\`\`

## Security Notes

1. **Never commit .env.local to GitHub**
   - Add to .gitignore (already done in most templates)
   - Connection string is secret

2. **Passwords are hashed**
   - Using bcryptjs algorithm
   - Never stored or displayed as plain text
   - Even admins cannot see original passwords

3. **Change admin password regularly**
   - Update in .env.local
   - Restart app for changes to take effect

4. **Whitelist only necessary IPs**
   - For development: Current IP only
   - For production: Use specific server IPs
   - Not recommended: 0.0.0.0/0 for production

## Application URLs

| Page | URL | Purpose |
|------|-----|---------|
| Home | http://localhost:3000 | Landing page |
| Register | http://localhost:3000/register | New user registration |
| Login | http://localhost:3000/login | Existing user login |
| Dashboard | http://localhost:3000/dashboard | User personal dashboard |
| Admin Login | http://localhost:3000/admin/login | Admin access |
| Admin Panel | http://localhost:3000/admin | Manage all users |

## API Endpoints

| Endpoint | Method | Purpose | Auth |
|----------|--------|---------|------|
| /api/auth/register | POST | Create new user | None |
| /api/auth/login | POST | User login | None |
| /api/admin/login | POST | Admin login | None |
| /api/admin/users | GET | Get all users | Admin |
| /api/admin/users | POST | Create user | Admin |
| /api/admin/users/[id] | DELETE | Delete user | Admin |

## User Data Structure

\`\`\`json
{
  "_id": "ObjectId",
  "email": "user@example.com",
  "password": "$2b$10$hashed_password",
  "username": "username",
  "phone": "1234567890",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
\`\`\`

## Common Tasks

### Register a New User
1. Go to http://localhost:3000/register
2. Fill in email, phone, username, password
3. Click register
4. Redirected to login page

### Login as User
1. Go to http://localhost:3000/login
2. Enter email and password
3. Redirected to personal dashboard

### Login as Admin
1. Go to http://localhost:3000/admin/login
2. Email: vetrivendhanmuni@gmail.com
3. Password: Vetri@1867
4. View all users in admin panel

### Delete a User
1. Login as admin
2. Click delete button next to user
3. User removed from database

### Change Admin Password
1. Edit `.env.local`
2. Update ADMIN_PASSWORD value
3. Restart app: `npm run dev`
4. Use new password to login

## Troubleshooting Guide

| Problem | Solution |
|---------|----------|
| Connection timeout | Whitelist IP in Network Access |
| Authentication failed | Check username/password in connection string |
| Database not found | Database creates automatically on first registration |
| Data not syncing | Refresh page, restart app, check connection |
| Admin login fails | Verify ADMIN_EMAIL and ADMIN_PASSWORD in .env.local |
| Registration errors | Check if email/username already exists |

## Next Steps

1. Complete MongoDB Atlas setup using guides above
2. Test with creating 2-3 test users
3. Verify users appear in admin panel
4. Verify users visible in MongoDB Atlas
5. Test delete functionality
6. Deploy to production (Vercel, etc.)

## Support Resources

- MongoDB Atlas Docs: https://docs.mongodb.com/manual/
- MongoDB Node.js Driver: https://mongodb.github.io/node-mongodb-native/
- Next.js Environment Variables: https://nextjs.org/docs/basic-features/environment-variables
- Your Project ID: 68d143564357d8364326c392

---

**Setup Last Updated**: 2024
**Admin Credentials Changed**: Yes (Vetri@1867)
**Database Type**: MongoDB Atlas (Cloud)
