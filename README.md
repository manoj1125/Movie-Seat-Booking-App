MoviesBuzz 🎬🍿

MoviesBuzz is a feature-rich, modern, and fully responsive movie ticket booking web application built with clean HTML5, Tailwind CSS, and vanilla JavaScript. Designed to offer a premium user experience similar to BookMyShow, it features real Hollywood & Bollywood movie catalogs, dynamic showtime filters, 20+ Indian city location switching, tiered auditorium seating, live GST price calculation, authentication gating, and instant QR ticket confirmation.

🌟 Key Features

🏙️ 20+ Indian Cities Location Switcher: Dynamically select cities like Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Rourkela, Pune, and more to update theater choices instantly.

🎬 Real Hollywood & Bollywood Collection: Curated collection featuring rating badges, IMAX tags, certificate age ratings, genres, and category filtering (Hollywood, Bollywood, IMAX 3D, Top Rated).

💺 Realistic Tiered Auditorium Seating:

Executive Rows (A, B): Front section closest to the curved cinema screen.

Club / VIP Rows (C, D, E): Middle prime view section.

Recliner Rows (F, G): Back section offering luxury seating.

🔐 Authentication & Sign-In System: Integrated auth modal with login/register tabs and guest checkout mode. Non-logged-in users are automatically prompted to sign in before selecting seats or proceeding to checkout.

💰 Automated Price Breakdown: Real-time calculation of subtotal, 18% GST & convenience fee, dynamic total pricing, and seat selection limits (max 8 seats per booking).

🎟️ Instant QR Ticket Modal: Beautiful confirmation modal featuring booking ID generation (BUZZ-XXXXXX), theater summary, and a scannable QR ticket cutout graphic.

📱 Fully Responsive & Dark Mode Aesthetic: Built using Tailwind CSS with smooth hover animations, custom scrollbars, and cinema screen glow effects.

🚀 Tech Stack

HTML5: Semantic layout and modal structures.

Tailwind CSS (v3 CDN): Modern styling, utility classes, and responsive grids.

Vanilla JavaScript (ES6+): Dynamic DOM manipulation, state management, event handling, and local storage state persistence.

FontAwesome 6: Crisp vector icon set.

📁 Project Structure

moviesbuzz/
├── index.html        # Main HTML layout & modal markups
├── stylesheet.css    # Custom seat states, screen glow & scrollbar styling
├── seat.js           # Movie data, seating matrix logic & app state
└── README.md         # Project documentation


⚡ Quick Start / Local Installation

Clone the Repository:

git clone https://github.com/your-username/moviesbuzz.git


Navigate into Project Directory:

cd moviesbuzz


Run the Application:
Open index.html directly in your browser, or serve it using Live Server in VS Code.

🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the issues page.

📜 License

This project is open source and available under the MIT License.
