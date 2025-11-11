# OMR Scheduler - Admin Panel Setup Guide

## Database Information
- **Database Type**: MongoDB
- **Database Name**: omr_scheduler
- **Collections**: 
  - `users` - Stores all registered users with encrypted passwords
  - Admin credentials stored in environment variables

## Step-by-Step Setup

### Step 1: Prerequisites
- Node.js 18+ installed
- MongoDB installed locally OR MongoDB Atlas account
- Git (to clone the repository)

### Step 2: Clone Repository
\`\`\`bash
git clone https://github.com/Vetri1867/OMR-schuduler-2.git
cd OMR-schuduler-2
\`\`\`

### Step 3: Install Dependencies
\`\`\`bash
npm install
\`\`\`

### Step 4: Configure Environment Variables
Edit `.env.local` file in the project root:

\`\`\`env
# MongoDB Connection (local)
MONGODB_URI=mongodb://localhost:27017

# Admin Credentials
ADMIN_EMAIL=vetrivendhanmuni@gmail.com
ADMIN_PASSWORD=Vetri@1867
\`\`\`

**For MongoDB Atlas (Cloud):**
\`\`\`env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
ADMIN_EMAIL=vetrivendhanmuni@gmail.com
ADMIN_PASSWORD=Vetri@1867
\`\`\`

### Step 5: Start MongoDB (if using local)
\`\`\`bash
# On Windows (with MongoDB installed)
mongod

# On Mac (with Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
\`\`\`

### Step 6: Initialize Database
The database automatically initializes on first run. To manually set up, run:
\`\`\`bash
npm run dev
# Visit http://localhost:3000/register to create test users
\`\`\`

### Step 7: Run the Application
\`\`\`bash
npm run dev
\`\`\`

Application runs at: http://localhost:3000

## Application URLs

### User Routes
- **Register (New User)**: http://localhost:3000/register
- **Login (Existing User)**: http://localhost:3000/login
- **User Dashboard**: http://localhost:3000/dashboard

### Admin Routes
- **Admin Login**: http://localhost:3000/admin/login
- **Admin Dashboard**: http://localhost:3000/admin

## Default Admin Login
- **Email**: vetrivendhanmuni@gmail.com
- **Password**: Vetri@1867

## Admin Dashboard Features

### View User Details
- Email address
- Phone number
- Username
- Registration date
- Last login time

### User Management
- Search users by email or username
- Delete users
- View user activity logs
- Export user data

### Database Location
Users are stored in: `omr_scheduler.users` collection

### View Data Using MongoDB CLI
\`\`\`bash
# Connect to MongoDB
mongosh

# Select database
use omr_scheduler

# View all users
db.users.find()

# Search specific user
db.users.findOne({ email: "user@example.com" })

# Count total users
db.users.countDocuments()
\`\`\`

## Security Features
- Passwords encrypted with bcryptjs (never stored as plain text)
- Admin credentials stored in environment variables
- Session-based authentication with cookies
- Database indexes prevent duplicate emails
- Admin panel requires authentication

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB service is running
- Check MONGODB_URI in .env.local
- Verify credentials if using MongoDB Atlas

### Admin Login Not Working
- Verify ADMIN_EMAIL and ADMIN_PASSWORD in .env.local
- Restart the development server after changing env variables

### Users Not Showing in Admin Panel
- Check MongoDB connection
- Ensure users registered properly at /register
- View database directly using mongosh

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/admin/login` - Admin login

### User Management (Admin Only)
- `GET /api/admin/users` - Get all users
- `POST /api/admin/users` - Create user
- `DELETE /api/admin/users/[userId]` - Delete user

## Database Schema

### Users Collection
\`\`\`javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  username: String (unique),
  phone: String,
  createdAt: Date,
  updatedAt: Date
}
\`\`\`

## Next Steps
1. Configure MongoDB connection
2. Start the application
3. Create test users at /register
4. Login as admin at /admin/login
5. View users in admin dashboard
