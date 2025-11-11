# Quick Start Guide - OMR Scheduler Admin Panel

## Database Used: MongoDB

### 1. Install & Configure (5 minutes)
\`\`\`bash
npm install
# Update .env.local with MongoDB connection
\`\`\`

### 2. Environment Variables (.env.local)
\`\`\`env
MONGODB_URI=mongodb://localhost:27017
ADMIN_EMAIL=vetrivendhanmuni@gmail.com
ADMIN_PASSWORD=Vetri@1867
\`\`\`

### 3. Start Application
\`\`\`bash
npm run dev
\`\`\`

### 4. Access Points

| URL | Purpose | Credentials |
|-----|---------|------------|
| http://localhost:3000/register | Register new user | Create account |
| http://localhost:3000/login | User login | Email + password |
| http://localhost:3000/admin/login | Admin login | vetrivendhanmuni@gmail.com / Vetri@1867 |
| http://localhost:3000/admin | Admin dashboard | View all users |

## View User Data

### In Admin Dashboard
1. Go to http://localhost:3000/admin/login
2. Enter admin credentials
3. See all users with: Email, Phone, Username, Registration Date

### In MongoDB (Direct Access)
\`\`\`bash
mongosh
use omr_scheduler
db.users.find()
\`\`\`

## User Details Visible to Admin
- Email address
- Phone number
- Username
- Account creation date
- Last login time
- User status

## What's NOT Visible (Security)
- Passwords (encrypted with bcryptjs)
- Payment information
- Private messages

## File Structure
\`\`\`
├── app/
│   ├── register/          # User registration page
│   ├── login/             # User login page
│   ├── dashboard/         # User dashboard
│   ├── admin/             # Admin dashboard
│   └── api/
│       ├── auth/          # Auth endpoints
│       └── admin/         # Admin endpoints
├── lib/
│   ├── mongodb.ts         # Database connection
│   └── auth.ts            # Authentication logic
├── components/
│   └── admin-dashboard.tsx # Admin dashboard UI
└── .env.local             # Environment config
\`\`\`

## Important Notes
- Admin password changed: **Vetri@1867**
- MongoDB must be running before app starts
- All passwords are hashed and never stored as plain text
- Admin panel requires authentication
- User data is securely stored in MongoDB
