# OMR Scheduler - Static HTML Version

A fully functional Optical Mark Recognition scheduling system that works completely offline without any server or hosting required.

## Features

- **No Server Required** - Pure HTML, CSS, and JavaScript
- **Loading Animation** - Beautiful OMR animated logo
- **Dark Theme** - Modern dark mode design with smooth transitions
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Animations** - Glassmorphism effects and fade-in animations
- **Local Storage** - Persists user data locally
- **Dashboard** - Complete user interface with statistics and events

## Project Structure

\`\`\`
omr-scheduler/
├── index.html              # Home page
├── login.html              # User login
├── register.html           # User registration
├── admin-login.html        # Admin portal
├── dashboard.html          # User dashboard
├── styles/
│   └── main.css           # All styling
├── js/
│   ├── main.js            # Main functionality
│   ├── theme.js           # Theme management
│   ├── auth.js            # Authentication
│   └── dashboard.js       # Dashboard features
├── assets/
│   └── omr-loading.gif    # Loading animation
└── README.md              # This file
\`\`\`

## How to Use

1. **Download** - Download all files to a folder
2. **Open** - Open `index.html` in your web browser
3. **Navigate** - Click buttons to explore the site
4. **Test** - Use any email/password to login (no validation)

## Pages

- **Home** (index.html) - Landing page with navigation
- **Login** (login.html) - User authentication
- **Register** (register.html) - Create new account
- **Admin Login** (admin-login.html) - Admin portal
- **Dashboard** (dashboard.html) - Main user interface

## Features

### Authentication
- User registration with validation
- User login
- Admin separate portal
- Local session management

### Dashboard
- Statistics cards with animation
- Upcoming events list
- Quick action buttons
- Responsive sidebar navigation

### Design
- Modern glassmorphism
- Animated background blobs
- Smooth page transitions
- Dark/light theme toggle
- Loading animation overlay

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Customization

### Change Colors
Edit the CSS variables in `styles/main.css`:
\`\`\`css
--bg-primary: #0f172a;
--text-primary: #ffffff;
--accent-blue: #3b82f6;
\`\`\`

### Modify Content
Edit HTML files directly to change:
- Text and headings
- Button labels
- Dashboard statistics
- Event information

### Add New Pages
1. Create new HTML file
2. Copy HTML structure from existing pages
3. Link from navigation
4. Add JS functionality in `js/` folder

## Notes

- All data is stored locally in browser (localStorage)
- No internet connection required after initial download
- Perfect for offline demos and presentations
- Completely client-side - no backend needed

## License

Free to use and modify for any purpose.

## Support

For questions or issues, refer to the code comments in each file.
