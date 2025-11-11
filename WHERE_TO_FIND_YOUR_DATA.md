# Where to Find Your User Data (After Connection)

## Method 1: Admin Dashboard (Easiest)
**URL:** http://localhost:3000/admin
- **Email:** vetrivendhanmuni@gmail.com
- **Password:** Vetri@1867
- See all users with their email, phone, username, registration date
- Search, filter, delete users

## Method 2: MongoDB Atlas (Official)
1. Go to: https://account.mongodb.com
2. Click: **Databases**
3. Click: **Browse Collections**
4. Navigate: **omr_scheduler** → **users**
5. See all user documents (email, phone, username, password hash, etc.)

## Method 3: MongoDB Compass (Desktop App)
1. Download: https://www.mongodb.com/products/compass
2. New Connection → Paste your MONGODB_URI
3. Browse: omr_scheduler → users
4. Visual interface to view/edit data

## Method 4: API Endpoint (Development)
**URL:** http://localhost:3000/api/test-connection
- Shows MongoDB connection status
- Lists all collections
- Confirms database is accessible

## Method 5: API for Admin (With Authentication)
**URL:** http://localhost:3000/api/admin/users
- Requires admin authentication (cookies)
- Returns all registered users as JSON
- Use browser DevTools → Network tab to see response

## Quick Summary
\`\`\`
App Structure:
- Frontend: /app (React components in .tsx)
- API: /app/api (route handlers)
- Database: MongoDB Atlas (cloud)
- Admin Panel: /admin (authenticated)
- User Dashboard: /dashboard (after login)
