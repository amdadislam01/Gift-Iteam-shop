// User Authentication System
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// DOM Elements
const userButton = document.getElementById('user-button');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeLoginModal = document.getElementById('close-login-modal');
const closeSignupModal = document.getElementById('close-signup-modal');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignupFromLogin = document.getElementById('show-signup-from-login');
const showLoginFromSignup = document.getElementById('show-login-from-signup');
const profileDropdown = document.getElementById('profile-dropdown');
const logoutButton = document.getElementById('logout-button');

// Toggle Login Modal
userButton.addEventListener('click', (e) => {
    if (currentUser) {
        profileDropdown.classList.toggle('hidden');
        e.stopPropagation();
    } else {
        loginModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
});

// Close Modals
closeLoginModal.addEventListener('click', () => {
    loginModal.classList.remove('open');
    document.body.style.overflow = '';
});

closeSignupModal.addEventListener('click', () => {
    signupModal.classList.remove('open');
    document.body.style.overflow = '';
});

// Switch between modals
showSignupFromLogin.addEventListener('click', () => {
    loginModal.classList.remove('open');
    signupModal.classList.add('open');
});

showLoginFromSignup.addEventListener('click', () => {
    signupModal.classList.remove('open');
    loginModal.classList.add('open');
});

// Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check user in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserUI();
        loginModal.classList.remove('open');
        document.body.style.overflow = '';
        showToast('Login successful!');
    } else {
        showToast('Invalid email or password', 'error');
    }
});

// Signup Form Submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    // Validation
    if (!name || !email || !password || !confirmPassword) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }
    
    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Check if user exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.email === email);
    
    if (userExists) {
        showToast('Email already registered', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password, // Note: In production, hash this password
        createdAt: new Date().toISOString(),
        orders: []
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Login the new user
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserUI();
    signupModal.classList.remove('open');
    document.body.style.overflow = '';
    
    // Clear form
    signupForm.reset();
    showToast('Account created successfully!');
});

// Logout Function
logoutButton.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
    profileDropdown.classList.add('hidden');
    showToast('Logged out successfully');
});

// Update UI based on login state
function updateUserUI() {
    const userIcon = userButton.querySelector('i');
    if (currentUser) {
        userIcon.classList.remove('fa-user');
        userIcon.classList.add('fa-user-circle');
        // You could add the user's name or avatar here
    } else {
        userIcon.classList.remove('fa-user-circle');
        userIcon.classList.add('fa-user');
    }
}

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white font-medium ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!userButton.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown.classList.add('hidden');
    }
    
    if (loginModal.classList.contains('open') && !document.querySelector('#login-modal > div').contains(e.target) && !userButton.contains(e.target)) {
        loginModal.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    if (signupModal.classList.contains('open') && !document.querySelector('#signup-modal > div').contains(e.target) && !document.querySelector('#show-signup-from-login').contains(e.target)) {
        signupModal.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// Initialize user UI
updateUserUI();