# Where to View User Details - Complete Guide

## Quick Answer
**Admin Dashboard**: http://localhost:3000/admin

## Method 1: Admin Dashboard (Easiest)

### Steps:
1. Open browser
2. Go to: http://localhost:3000/admin/login
3. Login with:
   - Email: `vetrivendhanmuni@gmail.com`
   - Password: `Vetri@1867`
4. Click "View Users" or "Dashboard"
5. See all user details in table

### Visible User Information:
- Email address
- Phone number
- Username
- Registration date
- Account status
- Actions (Edit, Delete)

### Features:
- Search users by email or username
- Sort by registration date
- Delete users
- Pagination (if many users)

---

## Method 2: MongoDB Direct Access

### Requirements:
- MongoDB Shell (mongosh) installed
- MongoDB service running

### Steps:
\`\`\`bash
# Open MongoDB shell
mongosh

# Select the database
use omr_scheduler

# View all users
db.users.find()

# View specific user
db.users.findOne({ email: "testuser@example.com" })

# Search by username
db.users.findOne({ username: "testuser" })

# Count total users
db.users.countDocuments()

# View with better formatting
db.users.find().pretty()
\`\`\`

### Output Example:
\`\`\`json
{
  "_id": ObjectId("..."),
  "email": "testuser@example.com",
  "password": "$2a$10$...",
  "username": "testuser",
  "phone": "9876543210",
  "createdAt": ISODate("2024-01-15T10:30:00Z"),
  "updatedAt": ISODate("2024-01-15T10:30:00Z")
}
\`\`\`

---

## Method 3: MongoDB Compass (GUI Tool)

### Install:
1. Download: https://www.mongodb.com/products/compass
2. Install and open

### Connect:
1. Connection String: `mongodb://localhost:27017`
2. Click "Connect"

### View Users:
1. Click database: `omr_scheduler`
2. Click collection: `users`
3. See all users in table format

### Features:
- Visual database explorer
- Filter and search
- Edit data directly
- Export users to CSV

---

## Method 4: MongoDB Atlas Dashboard (If using Cloud)

### Steps:
1. Login: https://www.mongodb.com/cloud/atlas
2. Select cluster
3. Click "Collections"
4. Select database: `omr_scheduler`
5. Select collection: `users`
6. View all users

---

## API Method (For Developers)

### Get All Users (with Authorization):
\`\`\`bash
curl -X GET http://localhost:3000/api/admin/users \
  -H "Authorization: Bearer [admin_token]"
\`\`\`

### Response:
\`\`\`json
[
  {
    "_id": "...",
    "email": "testuser@example.com",
    "username": "testuser",
    "phone": "9876543210",
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
\`\`\`

---

## User Data Fields

### Available in Admin Dashboard:
| Field | Type | Example | Visible |
|-------|------|---------|---------|
| Email | String | user@example.com | Yes |
| Username | String | testuser | Yes |
| Phone | String | 9876543210 | Yes |
| Created Date | Date | 2024-01-15 | Yes |
| Updated Date | Date | 2024-01-15 | Yes |

### Available in Database (Not in Dashboard):
| Field | Type | Example | Note |
|-------|------|---------|------|
| Password | String | $2a$10$... | Encrypted, never shown |
| _id | ObjectId | ... | Unique identifier |

---

## Security Notes

### What's Encrypted:
- User passwords (bcryptjs hashing)
- Admin credentials (environment variables)

### What's NOT Stored:
- Plain text passwords
- Credit card information
- API keys
- Private messages

### Admin Access:
- Requires authentication
- Session-based (cookies)
- Credentials in .env.local
- Never hardcoded in source

---

## Common Tasks

### Find User by Email
\`\`\`bash
# MongoDB
db.users.findOne({ email: "user@example.com" })

# API
GET /api/admin/users?email=user@example.com
\`\`\`

### Find User by Phone
\`\`\`bash
# MongoDB
db.users.findOne({ phone: "9876543210" })
\`\`\`

### Count Users
\`\`\`bash
# MongoDB
db.users.countDocuments()

# UI
Admin Dashboard → Shows total at top
\`\`\`

### Delete User
\`\`\`bash
# MongoDB
db.users.deleteOne({ email: "user@example.com" })

# UI
Admin Dashboard → Click Delete button
\`\`\`

---

## Recommended Viewing Method

For daily use: **Admin Dashboard** (most user-friendly)
For advanced: **MongoDB Compass** (GUI tool)
For debugging: **MongoDB Shell** (direct access)

---

**Admin Credentials:**
- Email: vetrivendhanmuni@gmail.com
- Password: Vetri@1867
- Dashboard: http://localhost:3000/admin
