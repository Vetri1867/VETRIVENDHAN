# OMR Scheduler - Admin Panel Setup Guide

## Overview
This guide will help you set up the complete authentication system with admin panel, user registration/login, and MongoDB database integration.

## Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

## Installation Steps

### 1. Install Dependencies
\`\`\`bash
npm install mongodb bcryptjs
\`\`\`

### 2. Setup Environment Variables
Create a `.env.local` file in the root directory:

\`\`\`env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017

# Admin Credentials
ADMIN_EMAIL=vetrivendhanmuni@gmail.com
ADMIN_PASSWORD=Vetri@1986
\`\`\`

### 3. Run the Application
\`\`\`bash
npm run dev
\`\`\`

### 4. Initialize Database
Run the setup script to create collections and indexes:

\`\`\`bash
node scripts/setup-db.ts
\`\`\`

Or use MongoDB CLI:
\`\`\`bash
npx ts-node scripts/setup-db.ts
\`\`\`

## Access Points

### Admin Panel
- **URL**: `http://localhost:3000/admin/login`
- **Email**: `vetrivendhanmuni@gmail.com`
- **Password**: `Vetri@1986`
- **Dashboard**: `http://localhost:3000/admin`

### User Registration
- **URL**: `http://localhost:3000/register`
- Create new account with username, email, phone, and password
- Passwords are hashed using bcryptjs

### User Login
- **URL**: `http://localhost:3000/login`
- Login with email and password
- Redirects to dashboard on success

### User Dashboard
- **URL**: `http://localhost:3000/dashboard`
- Accessible only after login

## Where User Data is Stored

### Database Location
- **Database**: `omr_scheduler`
- **Collection**: `users`
- **MongoDB URI**: From `MONGODB_URI` environment variable

### User Data Fields
\`\`\`
{
  _id: ObjectId,           // MongoDB auto-generated ID
  username: string,        // Unique username
  email: string,          // Unique email address
  phone: string,          // Phone number
  password: string,       // Bcrypt hashed password
  createdAt: Date         // Account creation timestamp
}
\`\`\`

### Security Notes
1. **Passwords** are hashed with bcryptjs (10 salt rounds)
2. **Admin panel** displays user info WITHOUT passwords
3. **Email and username** are unique (database indexes enforce this)
4. **Sessions** are stored in httpOnly cookies

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/admin/login` - Admin login

### Admin Operations
- `GET /api/admin/users` - Get all users (admin only)
- `POST /api/admin/users` - Create user (admin only)
- `DELETE /api/admin/users/[userId]` - Delete user (admin only)

## MongoDB Setup

### Local Setup
\`\`\`bash
# On macOS with Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
\`\`\`

### MongoDB Atlas Setup
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env.local`

## Troubleshooting

### Connection Issues
- Verify MongoDB is running: `mongosh`
- Check `MONGODB_URI` format is correct
- Ensure port 27017 is accessible

### Duplicate Key Error
- Drop and recreate collection
- Or clear indexes and re-run setup

### Password Issues
- Always use hashed passwords
- Never store plain text passwords
- Use bcryptjs for hashing

## Next Steps

1. **Production Deployment**
   - Use MongoDB Atlas instead of local
   - Add JWT tokens instead of simple tokens
   - Implement refresh tokens
   - Add rate limiting

2. **Enhanced Features**
   - Email verification
   - Password reset
   - Two-factor authentication
   - User roles and permissions

3. **Security**
   - CSRF protection
   - Input validation
   - SQL injection prevention (using MongoDB)
   - Rate limiting on auth endpoints

## Support
For issues or questions, check the API routes and ensure MongoDB is properly configured.
