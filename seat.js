/* -------------------------------------------------------------
   1. DATA STRUCTURES (REAL HOLLYWOOD & BOLLYWOOD MOVIES DATA)
------------------------------------------------------------- */
const indianCities = [
  "Mumbai", "Delhi-NCR", "Bengaluru", "Hyderabad", "Rourkela",
  "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur",
  "Surat", "Lucknow", "Chandigarh", "Kochi", "Indore",
  "Bhubaneswar", "Nagpur", "Coimbatore", "Visakhapatnam", "Patna", "Vadodara"
];

const moviesList = [
  // Hollywood Movies
  {
    id: 'h1',
    title: 'Oppenheimer',
    category: 'hollywood',
    isImax: true,
    language: 'English',
    certificate: 'A',
    rating: 8.9,
    genre: 'Biography, Drama, History',
    duration: '3h 00m',
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80',
    tiers: { executive: 220, club: 350, recliner: 550 }
  },
  {
    id: 'h2',
    title: 'Dune: Part Two',
    category: 'hollywood',
    isImax: true,
    language: 'English',
    certificate: 'UA',
    rating: 9.0,
    genre: 'Action, Adventure, Sci-Fi',
    duration: '2h 46m',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
    tiers: { executive: 240, club: 380, recliner: 600 }
  },
  {
    id: 'h3',
    title: 'Avatar: Way of Water',
    category: 'hollywood',
    isImax: true,
    language: 'English / Hindi',
    certificate: 'UA',
    rating: 8.7,
    genre: 'Action, Sci-Fi',
    duration: '3h 12m',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
    tiers: { executive: 250, club: 400, recliner: 650 }
  },
  {
    id: 'h4',
    title: 'Spider-Man: Spider-Verse',
    category: 'hollywood',
    isImax: false,
    language: 'English / Hindi',
    certificate: 'U',
    rating: 8.8,
    genre: 'Animation, Action',
    duration: '2h 20m',
    poster: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=400&q=80',
    tiers: { executive: 200, club: 300, recliner: 480 }
  },
  {
    id: 'h5',
    title: 'The Dark Knight',
    category: 'hollywood',
    isImax: false,
    language: 'English',
    certificate: 'UA',
    rating: 9.1,
    genre: 'Action, Crime, Drama',
    duration: '2h 32m',
    poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80',
    tiers: { executive: 180, club: 250, recliner: 420 }
  },

  // Bollywood Movies
  {
    id: 'b1',
    title: 'Jawan',
    category: 'bollywood',
    isImax: false,
    language: 'Hindi',
    certificate: 'UA',
    rating: 8.5,
    genre: 'Action, Thriller',
    duration: '2h 49m',
    poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&q=80',
    tiers: { executive: 200, club: 320, recliner: 520 }
  },
  {
    id: 'b2',
    title: 'Stree 2',
    category: 'bollywood',
    isImax: false,
    language: 'Hindi',
    certificate: 'UA',
    rating: 8.6,
    genre: 'Comedy, Horror',
    duration: '2h 27m',
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=400&q=80',
    tiers: { executive: 190, club: 280, recliner: 450 }
  },
  {
    id: 'b3',
    title: 'Pathaan',
    category: 'bollywood',
    isImax: true,
    language: 'Hindi',
    certificate: 'UA',
    rating: 8.2,
    genre: 'Action, Drama',
    duration: '2h 26m',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80',
    tiers: { executive: 200, club: 300, recliner: 500 }
  },
  {
    id: 'b4',
    title: 'Brahmāstra: Part One',
    category: 'bollywood',
    isImax: true,
    language: 'Hindi',
    certificate: 'UA',
    rating: 8.0,
    genre: 'Action, Fantasy',
    duration: '2h 47m',
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=400&q=80',
    tiers: { executive: 190, club: 290, recliner: 490 }
  },
  {
    id: 'b5',
    title: 'Dangal',
    category: 'bollywood',
    isImax: false,
    language: 'Hindi',
    certificate: 'U',
    rating: 8.9,
    genre: 'Action, Biography, Drama',
    duration: '2h 41m',
    poster: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=400&q=80',
    tiers: { executive: 180, club: 250, recliner: 400 }
  }
];

// Auditorium Row Configurations (Executive at starting/front, Recliner at last/back)
const seatTiersConfig = [
  { name: 'Executive', rows: ['A', 'B'], key: 'executive' },
  { name: 'Club / VIP', rows: ['C', 'D', 'E'], key: 'club' },
  { name: 'Recliner', rows: ['F', 'G'], key: 'recliner' }
];

/* -------------------------------------------------------------
   2. STATE MANAGEMENT
------------------------------------------------------------- */
let state = {
  selectedCity: 'Mumbai',
  selectedMovie: null,
  selectedCinema: 'PVR: Phoenix Marketcity',
  selectedDate: '',
  selectedShowtime: '05:00 PM',
  selectedSeats: [], // Store objects: { id: 'A1', row: 'A', number: 1, tierKey: 'executive', price: 220 }
  occupiedSeats: ['A3', 'A4', 'C5', 'C6', 'D8', 'F3', 'F4'], // Pre-booked seats
  user: null, // { name: 'User Name', email: 'user@example.com' }
  currentAuthTab: 'signin'
};

/* -------------------------------------------------------------
   3. INITIALIZATION & RENDERING
------------------------------------------------------------- */
window.addEventListener('DOMContentLoaded', () => {
  populateDates();
  populateCities();
  renderMovieCatalog(moviesList);
  checkStoredUser();

  // Search input listener
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const filtered = moviesList.filter(m => 
        m.title.toLowerCase().includes(term) || m.genre.toLowerCase().includes(term)
      );
      renderMovieCatalog(filtered);
    });
  }
});

function populateCities() {
  const list = document.getElementById('cityOptionsList');
  if (!list) return;

  list.innerHTML = '';
  indianCities.forEach(city => {
    const btn = document.createElement('button');
    btn.className = 'w-full text-left px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/70 transition flex items-center justify-between';
    btn.innerHTML = `<span>${city}</span> ${city === state.selectedCity ? '<i class="fa-solid fa-check text-bmsRed"></i>' : ''}`;
    btn.onclick = (e) => {
      e.stopPropagation();
      selectCity(city);
    };
    list.appendChild(btn);
  });
}

function toggleCityDropdown(event) {
  event.stopPropagation();
  const dropdown = document.getElementById('cityDropdown');
  if (dropdown) dropdown.classList.toggle('hidden');
}

function selectCity(city) {
  state.selectedCity = city;
  const currentCitySpan = document.getElementById('currentCity');
  if (currentCitySpan) currentCitySpan.textContent = city;

  // Update cinema list according to city
  const cinemaSelect = document.getElementById('cinemaSelect');
  if (cinemaSelect) {
    cinemaSelect.innerHTML = `
      <option value="PVR: ${city} Central">PVR: ${city} Central</option>
      <option value="INOX: Mall of ${city}">INOX: Mall of ${city}</option>
      <option value="Cinepolis: Grand ${city}">Cinepolis: Grand ${city}</option>
      <option value="Miraj Cinemas: ${city}">Miraj Cinemas: ${city}</option>
    `;
    state.selectedCinema = cinemaSelect.value;
  }

  populateCities();
  const dropdown = document.getElementById('cityDropdown');
  if (dropdown) dropdown.classList.add('hidden');

  showToast(`Location set to ${city}`);
}

function populateDates() {
  const dateSelect = document.getElementById('dateSelect');
  if (!dateSelect) return;
  dateSelect.innerHTML = '';
  
  const today = new Date();
  for (let i = 0; i < 4; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const formattedDate = `${dayName}, ${d.getDate()} ${d.toLocaleDateString('en-US', { month: 'short' })}`;
    
    const opt = document.createElement('option');
    opt.value = formattedDate;
    opt.textContent = formattedDate;
    dateSelect.appendChild(opt);
  }
  state.selectedDate = dateSelect.value;
}

/* -------------------------------------------------------------
   4. CATALOG & CATEGORY FILTERS
------------------------------------------------------------- */
function renderMovieCatalog(movies) {
  const grid = document.getElementById('moviesGrid');
  const countBadge = document.getElementById('movieCountBadge');
  if (!grid) return;

  grid.innerHTML = '';
  if (countBadge) countBadge.textContent = `${movies.length} Movies`;

  if (movies.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i class="fa-solid fa-film text-4xl mb-3 text-slate-600 block"></i>
        <p>No movies match your search criteria.</p>
      </div>
    `;
    return;
  }

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'group bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1';
    
    card.innerHTML = `
      <div class="relative overflow-hidden aspect-[2/3]">
        <img src="${movie.poster}" alt="${movie.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute top-2 left-2 flex flex-col gap-1">
          ${movie.isImax ? `<span class="bg-blue-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">IMAX</span>` : ''}
          <span class="bg-slate-900/80 backdrop-blur-md text-amber-400 text-[11px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
            <i class="fa-solid fa-star"></i> ${movie.rating}
          </span>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
      </div>
      <div class="p-3.5 flex flex-col flex-grow justify-between space-y-2">
        <div>
          <h3 class="font-bold text-sm text-white group-hover:text-bmsRed transition truncate">${movie.title}</h3>
          <p class="text-[11px] text-slate-400 truncate">${movie.genre}</p>
        </div>
        <div class="flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-slate-700/50">
          <span class="font-medium bg-slate-700/50 px-2 py-0.5 rounded text-slate-300">${movie.certificate}</span>
          <span class="font-semibold text-bmsRed">Starts ₹${movie.tiers.executive}</span>
        </div>
        <button onclick="selectMovie('${movie.id}')" class="w-full mt-2 bg-bmsRed hover:bg-bmsRedHover text-white text-xs font-bold py-2 rounded-lg transition shadow-md shadow-bmsRed/20">
          Book Tickets
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterCategory(cat) {
  document.querySelectorAll('.category-tab').forEach(tab => {
    if (tab.dataset.category === cat) {
      tab.className = 'category-tab font-medium text-bmsRed border-b-2 border-bmsRed pb-0.5';
    } else {
      tab.className = 'category-tab font-medium text-slate-400 hover:text-white pb-0.5';
    }
  });

  if (cat === 'all') {
    renderMovieCatalog(moviesList);
  } else if (cat === 'imax') {
    renderMovieCatalog(moviesList.filter(m => m.isImax));
  } else {
    renderMovieCatalog(moviesList.filter(m => m.category === cat));
  }
}

function sortMoviesByRating() {
  const sorted = [...moviesList].sort((a, b) => b.rating - a.rating);
  renderMovieCatalog(sorted);
}

/* -------------------------------------------------------------
   5. BOOKING FLOW & SEAT GENERATION
------------------------------------------------------------- */
function selectMovie(movieId) {
  const movie = moviesList.find(m => m.id === movieId);
  if (!movie) return;

  state.selectedMovie = movie;
  state.selectedSeats = [];

  document.getElementById('selectedMovieImg').src = movie.poster;
  document.getElementById('selectedMovieTitle').textContent = movie.title;
  document.getElementById('selectedMovieGenre').textContent = `${movie.genre} • ${movie.duration}`;
  document.getElementById('selectedMovieLang').textContent = movie.language;
  document.getElementById('selectedMovieCert').textContent = movie.certificate;
  document.getElementById('selectedMovieRating').innerHTML = `<i class="fa-solid fa-star"></i> ${movie.rating}/10`;

  renderShowtimes(['10:30 AM', '01:45 PM', '05:00 PM', '08:15 PM', '10:45 PM']);

  document.getElementById('movieCatalogSection').classList.add('hidden');
  document.getElementById('bookingSection').classList.remove('hidden');

  renderAuditorium();
  updateSummary();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToCatalog() {
  document.getElementById('bookingSection').classList.add('hidden');
  document.getElementById('movieCatalogSection').classList.remove('hidden');
  state.selectedMovie = null;
  state.selectedSeats = [];
}

function renderShowtimes(slots) {
  const container = document.getElementById('showtimeSlots');
  if (!container) return;
  container.innerHTML = '';

  slots.forEach((time, index) => {
    const btn = document.createElement('button');
    const isSelected = index === 2; // Default 05:00 PM
    btn.className = `px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
      isSelected
        ? 'bg-bmsRed text-white border-bmsRed shadow-md shadow-bmsRed/30'
        : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
    }`;
    btn.textContent = time;
    btn.onclick = () => {
      document.querySelectorAll('#showtimeSlots button').forEach(b => {
        b.className = 'px-3 py-1.5 text-xs font-semibold rounded-lg border bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500';
      });
      btn.className = 'px-3 py-1.5 text-xs font-semibold rounded-lg border bg-bmsRed text-white border-bmsRed shadow-md shadow-bmsRed/30';
      state.selectedShowtime = time;
      updateSummary();
    };
    container.appendChild(btn);
  });
}

function onCinemaOrTimeChange() {
  const cinemaSelect = document.getElementById('cinemaSelect');
  const dateSelect = document.getElementById('dateSelect');

  if (cinemaSelect) state.selectedCinema = cinemaSelect.value;
  if (dateSelect) state.selectedDate = dateSelect.value;

  if (state.selectedCinema.includes('PVR')) {
    state.occupiedSeats = ['A3', 'A4', 'C5', 'C6', 'D8', 'F3', 'F4'];
  } else if (state.selectedCinema.includes('INOX')) {
    state.occupiedSeats = ['B1', 'B2', 'D4', 'D5', 'E6', 'G1', 'G2'];
  } else {
    state.occupiedSeats = ['A1', 'A2', 'C1', 'C2', 'E4', 'F5', 'G7'];
  }

  state.selectedSeats = [];
  renderAuditorium();
  updateSummary();
}

function renderAuditorium() {
  const container = document.getElementById('auditoriumGrid');
  if (!container || !state.selectedMovie) return;
  container.innerHTML = '';

  seatTiersConfig.forEach(tier => {
    const tierSection = document.createElement('div');
    tierSection.className = 'w-full flex flex-col items-center space-y-2 py-2 border-b border-slate-800/50 last:border-0';

    const price = state.selectedMovie.tiers[tier.key];
    const header = document.createElement('div');
    header.className = 'w-full text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1';
    header.innerHTML = `${tier.name} — <span class="text-bmsRed font-bold">₹${price}</span>`;
    tierSection.appendChild(header);

    tier.rows.forEach(rowLabel => {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'flex items-center gap-1.5 sm:gap-2 justify-center';

      const labelLeft = document.createElement('span');
      labelLeft.className = 'w-4 text-xs font-bold text-slate-500 text-center uppercase';
      labelLeft.textContent = rowLabel;
      rowDiv.appendChild(labelLeft);

      for (let i = 1; i <= 10; i++) {
        if (i === 6) {
          const gap = document.createElement('div');
          gap.className = 'w-4 sm:w-6';
          rowDiv.appendChild(gap);
        }

        const seatId = `${rowLabel}${i}`;
        const isOccupied = state.occupiedSeats.includes(seatId);
        const isSelected = state.selectedSeats.some(s => s.id === seatId);

        const seat = document.createElement('div');
        seat.className = `seat ${isOccupied ? 'occupied' : isSelected ? 'selected' : 'available'}`;
        seat.textContent = i;
        seat.dataset.seatId = seatId;

        if (!isOccupied) {
          seat.onclick = () => toggleSeatSelection(seatId, rowLabel, i, tier.key, price);
        }

        rowDiv.appendChild(seat);
      }

      const labelRight = document.createElement('span');
      labelRight.className = 'w-4 text-xs font-bold text-slate-500 text-center uppercase';
      labelRight.textContent = rowLabel;
      rowDiv.appendChild(labelRight);

      tierSection.appendChild(rowDiv);
    });

    container.appendChild(tierSection);
  });
}

function toggleSeatSelection(seatId, row, number, tierKey, price) {
  if (!state.user) {
    showToast('Please sign in first to select seats!');
    openAuthModal('signin');
    return;
  }

  const existingIdx = state.selectedSeats.findIndex(s => s.id === seatId);

  if (existingIdx > -1) {
    state.selectedSeats.splice(existingIdx, 1);
  } else {
    if (state.selectedSeats.length >= 8) {
      showToast('Maximum 8 tickets allowed per booking.');
      return;
    }
    state.selectedSeats.push({ id: seatId, row, number, tierKey, price });
  }

  renderAuditorium();
  updateSummary();
}

function clearSelectedSeats() {
  state.selectedSeats = [];
  renderAuditorium();
  updateSummary();
}

/* -------------------------------------------------------------
   6. SUMMARY & PRICING BREAKDOWN
------------------------------------------------------------- */
function updateSummary() {
  const summaryMovieTitle = document.getElementById('summaryMovieTitle');
  const summaryCinema = document.getElementById('summaryCinema');
  const summaryShowtime = document.getElementById('summaryShowtime');
  const summaryTicketCount = document.getElementById('summaryTicketCount');
  const selectedSeatsPills = document.getElementById('selectedSeatsPills');
  const subtotalPrice = document.getElementById('subtotalPrice');
  const gstPrice = document.getElementById('gstPrice');
  const grandTotalPrice = document.getElementById('grandTotalPrice');
  const proceedBtn = document.getElementById('proceedBtn');

  if (!state.selectedMovie) return;

  if (summaryMovieTitle) summaryMovieTitle.textContent = state.selectedMovie.title;
  if (summaryCinema) summaryCinema.textContent = state.selectedCinema;
  if (summaryShowtime) summaryShowtime.textContent = `${state.selectedDate.split(',')[0]} • ${state.selectedShowtime}`;

  const count = state.selectedSeats.length;
  if (summaryTicketCount) summaryTicketCount.textContent = `${count} ${count === 1 ? 'Seat' : 'Seats'}`;

  if (selectedSeatsPills) {
    selectedSeatsPills.innerHTML = '';
    if (count === 0) {
      selectedSeatsPills.innerHTML = `<span class="text-xs text-slate-500 italic">No seats selected yet</span>`;
    } else {
      state.selectedSeats.forEach(s => {
        const pill = document.createElement('span');
        pill.className = 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5';
        pill.innerHTML = `${s.id} <i onclick="toggleSeatSelection('${s.id}')" class="fa-solid fa-xmark hover:text-white cursor-pointer ml-0.5"></i>`;
        selectedSeatsPills.appendChild(pill);
      });
    }
  }

  const subtotal = state.selectedSeats.reduce((sum, s) => sum + s.price, 0);
  const gst = subtotal > 0 ? Math.round(subtotal * 0.18) : 0;
  const grandTotal = subtotal + gst;

  if (subtotalPrice) subtotalPrice.textContent = `₹${subtotal}`;
  if (gstPrice) gstPrice.textContent = `₹${gst}`;
  if (grandTotalPrice) grandTotalPrice.textContent = `₹${grandTotal}`;

  if (proceedBtn) {
    if (count > 0) {
      proceedBtn.disabled = false;
      proceedBtn.className = 'w-full bg-bmsRed hover:bg-bmsRedHover text-white font-bold py-3 rounded-xl transition duration-200 shadow-lg shadow-bmsRed/30 flex items-center justify-center gap-2 cursor-pointer';
      proceedBtn.innerHTML = `Pay ₹${grandTotal} & Proceed <i class="fa-solid fa-arrow-right text-xs"></i>`;
    } else {
      proceedBtn.disabled = true;
      proceedBtn.className = 'w-full bg-slate-800 text-slate-500 font-bold py-3 rounded-xl transition duration-200 cursor-not-allowed flex items-center justify-center gap-2';
      proceedBtn.innerHTML = `<i class="fa-solid fa-lock text-xs"></i> Select Seats to Proceed`;
    }
  }
}

/* -------------------------------------------------------------
   7. CHECKOUT MODAL & TICKET GENERATION
------------------------------------------------------------- */
function openCheckoutModal() {
  if (!state.user) {
    showToast('Please sign in first to complete your booking!');
    openAuthModal('signin');
    return;
  }

  if (state.selectedSeats.length === 0) {
    showToast('Please select at least one seat before proceeding.');
    return;
  }

  const modal = document.getElementById('checkoutModal');
  if (!modal) return;

  const subtotal = state.selectedSeats.reduce((sum, s) => sum + s.price, 0);
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;
  const seatIds = state.selectedSeats.map(s => s.id).join(', ');

  document.getElementById('modalMovieImg').src = state.selectedMovie.poster;
  document.getElementById('modalMovieTitle').textContent = state.selectedMovie.title;
  document.getElementById('modalLanguage').textContent = `${state.selectedMovie.language} • ${state.selectedMovie.certificate}`;
  document.getElementById('modalCinema').textContent = state.selectedCinema;
  document.getElementById('modalShowtime').textContent = `${state.selectedDate} • ${state.selectedShowtime}`;
  document.getElementById('modalSeats').textContent = seatIds;
  document.getElementById('modalPaidAmount').textContent = `₹${grandTotal}`;

  const randomId = Math.floor(100000 + Math.random() * 900000);
  document.getElementById('modalBookingId').textContent = `BOOKID: BUZZ-${randomId}`;

  modal.classList.remove('hidden');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.add('hidden');
}

function finishBooking() {
  state.selectedSeats.forEach(s => {
    if (!state.occupiedSeats.includes(s.id)) {
      state.occupiedSeats.push(s.id);
    }
  });

  closeCheckoutModal();
  showToast('Booking Successful! Enjoy your movie.');
  clearSelectedSeats();
  backToCatalog();
}

/* -------------------------------------------------------------
   8. AUTHENTICATION & USER MANAGEMENT
------------------------------------------------------------- */
function openAuthModal(mode = 'signin') {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.remove('hidden');
  switchAuthTab(mode);
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.add('hidden');
}

function switchAuthTab(mode) {
  state.currentAuthTab = mode;
  const title = document.getElementById('authModalTitle');
  const tabSignIn = document.getElementById('tabSignIn');
  const tabSignUp = document.getElementById('tabSignUp');
  const nameField = document.getElementById('nameField');
  const submitBtn = document.getElementById('authSubmitBtn');

  if (mode === 'signin') {
    if (title) title.textContent = 'Sign In to MoviesBuzz';
    if (tabSignIn) tabSignIn.className = 'flex-1 py-3 text-bmsRed border-b-2 border-bmsRed transition';
    if (tabSignUp) tabSignUp.className = 'flex-1 py-3 text-slate-400 border-b-2 border-transparent hover:text-white transition';
    if (nameField) nameField.classList.add('hidden');
    if (submitBtn) submitBtn.textContent = 'Sign In';
  } else {
    if (title) title.textContent = 'Create MoviesBuzz Account';
    if (tabSignUp) tabSignUp.className = 'flex-1 py-3 text-bmsRed border-b-2 border-bmsRed transition';
    if (tabSignIn) tabSignIn.className = 'flex-1 py-3 text-slate-400 border-b-2 border-transparent hover:text-white transition';
    if (nameField) nameField.classList.remove('hidden');
    if (submitBtn) submitBtn.textContent = 'Create Account';
  }
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('authEmail').value;
  const nameInput = document.getElementById('authName').value;
  const name = state.currentAuthTab === 'signup' && nameInput ? nameInput : email.split('@')[0];

  const userObj = { name, email };
  localStorage.setItem('moviesbuzz_user', JSON.stringify(userObj));
  state.user = userObj;

  updateUserUI();
  closeAuthModal();
  showToast(`Welcome ${name}! You are now signed in.`);
}

function loginAsGuest() {
  const userObj = { name: 'Guest User', email: 'guest@moviesbuzz.com' };
  localStorage.setItem('moviesbuzz_user', JSON.stringify(userObj));
  state.user = userObj;

  updateUserUI();
  closeAuthModal();
  showToast('Logged in as Guest User.');
}

function checkStoredUser() {
  const stored = localStorage.getItem('moviesbuzz_user');
  if (stored) {
    try {
      state.user = JSON.parse(stored);
      updateUserUI();
    } catch (e) {
      console.error(e);
    }
  }
}

function updateUserUI() {
  const signInBtn = document.getElementById('signInHeaderBtn');
  const profileDropdown = document.getElementById('userProfileDropdown');
  const avatar = document.getElementById('userAvatar');
  const nameDisplay = document.getElementById('userNameDisplay');
  const emailDisplay = document.getElementById('userMenuEmail');

  if (state.user) {
    if (signInBtn) signInBtn.classList.add('hidden');
    if (profileDropdown) profileDropdown.classList.remove('hidden');

    const firstLetter = state.user.name.charAt(0).toUpperCase();
    if (avatar) avatar.textContent = firstLetter;
    if (nameDisplay) nameDisplay.textContent = state.user.name;
    if (emailDisplay) emailDisplay.textContent = state.user.email;
  } else {
    if (signInBtn) signInBtn.classList.remove('hidden');
    if (profileDropdown) profileDropdown.classList.add('hidden');
  }
}

function toggleUserDropdown(event) {
  event.stopPropagation();
  const menu = document.getElementById('userMenu');
  if (menu) menu.classList.toggle('hidden');
}

window.addEventListener('click', () => {
  const menu = document.getElementById('userMenu');
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
  const cityDrop = document.getElementById('cityDropdown');
  if (cityDrop && !cityDrop.classList.contains('hidden')) {
    cityDrop.classList.add('hidden');
  }
});

function logoutUser() {
  localStorage.removeItem('moviesbuzz_user');
  state.user = null;
  state.selectedSeats = [];
  updateUserUI();
  renderAuditorium();
  updateSummary();
  showToast('Signed out successfully.');
}

/* -------------------------------------------------------------
   9. UTILITIES & TOAST NOTIFICATIONS
------------------------------------------------------------- */
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}