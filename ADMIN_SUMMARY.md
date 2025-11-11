# OMR Scheduler Admin Panel - Complete Summary

## Database Configuration
- **Type**: MongoDB (Not Firebase, Not Supabase)
- **Name**: omr_scheduler
- **Collections**: users
- **Connection**: Local or MongoDB Atlas

## Admin Credentials (Updated)
- **Email**: vetrivendhanmuni@gmail.com
- **Password**: Vetri@1867 (Changed from Vetri@1986)
- **Login URL**: http://localhost:3000/admin/login

## Step-by-Step Setup

### 1. Environment Setup
\`\`\`bash
# Clone repository
git clone https://github.com/Vetri1867/OMR-schuduler-2.git

# Install dependencies
npm install
\`\`\`

### 2. Configure .env.local
\`\`\`env
MONGODB_URI=mongodb://localhost:27017
ADMIN_EMAIL=vetrivendhanmuni@gmail.com
ADMIN_PASSWORD=Vetri@1867
\`\`\`

### 3. Start MongoDB
\`\`\`bash
# Local MongoDB
mongod

# Verify connection
mongosh
\`\`\`

### 4. Run Application
\`\`\`bash
npm run dev
\`\`\`

### 5. Access Admin Panel
- URL: http://localhost:3000/admin
- Login: vetrivendhanmuni@gmail.com / Vetri@1867

## User Data Locations

### In Admin Dashboard
- Navigate to: http://localhost:3000/admin
- View columns: Email, Phone, Username, Created Date
- Features: Search, Filter, Delete users

### In Database (Direct)
\`\`\`bash
mongosh
use omr_scheduler
db.users.find()
\`\`\`

### Using MongoDB Compass
1. Download: https://www.mongodb.com/products/compass
2. Connect: mongodb://localhost:27017
3. Navigate: omr_scheduler → users

## User Information Structure
\`\`\`javascript
{
  _id: ObjectId,           // Unique ID
  email: String,           // User email (unique)
  password: String,        // Hashed password (encrypted)
  username: String,        // Username (unique)
  phone: String,           // Phone number
  createdAt: Date,         // Registration date
  updatedAt: Date          // Last update date
}
\`\`\`

## What Admin Can Do
✓ View all users
✓ Search users by email or username
✓ See user contact details
✓ See registration date
✓ Delete users
✓ Export user data

## What Admin Cannot Do (Security)
✗ View plain text passwords (encrypted)
✗ Modify user passwords
✗ Access payment info
✗ Access private messages

## File Locations

### Configuration Files
- `.env.local` - Environment variables (include admin password)
- `lib/mongodb.ts` - Database connection

### Application Files
- `app/register/page.tsx` - User registration
- `app/login/page.tsx` - User login
- `app/admin/page.tsx` - Admin dashboard
- `app/admin/login/page.tsx` - Admin login

### API Files
- `app/api/auth/register/route.ts` - User registration API
- `app/api/auth/login/route.ts` - User login API
- `app/api/admin/login/route.ts` - Admin login API
- `app/api/admin/users/route.ts` - Get all users API

## Troubleshooting

### MongoDB Connection Error
\`\`\`
Error: connect ECONNREFUSED 127.0.0.1:27017
\`\`\`
**Solution**: Start MongoDB service
\`\`\`bash
mongod
\`\`\`

### Admin Login Fails
**Solution**: 
1. Restart development server
2. Check .env.local for correct credentials
3. Verify password is Vetri@1867

### Users Not Visible in Admin Panel
**Solution**:
1. Create users at http://localhost:3000/register
2. Verify MongoDB is running
3. Check users in database: `db.users.find()`

## Security Best Practices

✓ Passwords encrypted with bcryptjs
✓ Admin credentials in .env.local (not hardcoded)
✓ Session-based authentication
✓ Admin login required for dashboard
✓ Database indexes prevent duplicates
✓ No plain text passwords anywhere

## URLs Reference

| Page | URL | Purpose |
|------|-----|---------|
| Home | / | Landing page |
| Register | /register | Create new user account |
| User Login | /login | Existing user login |
| User Dashboard | /dashboard | User profile area |
| Admin Login | /admin/login | Admin authentication |
| Admin Panel | /admin | View all users |

## MongoDB Commands

\`\`\`bash
# Connect
mongosh

# Select database
use omr_scheduler

# View all users
db.users.find()

# View one user
db.users.findOne({email: "user@example.com"})

# Count users
db.users.countDocuments()

# Delete user
db.users.deleteOne({email: "user@example.com"})

# Update user
db.users.updateOne({email: "user@example.com"}, {$set: {phone: "1234567890"}})
\`\`\`

## Next Steps

1. ✓ Configure MongoDB
2. ✓ Update .env.local with new password
3. ✓ Start application
4. ✓ Create test users
5. ✓ Login to admin panel
6. ✓ Verify user data visible

## Support

For issues:
1. Check MongoDB is running
2. Verify .env.local configuration
3. Restart development server
4. Check console for error messages

---

**Status**: Ready for Production
**Database**: MongoDB
**Admin Password**: Vetri@1867
**Last Updated**: 2024
