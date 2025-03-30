// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

// Get DOM elements
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-sidebar');
const menuContent = document.querySelector('.menu-content');
const menuItems = document.querySelectorAll('.menu-item');
const contentSections = document.querySelectorAll('.content-section');
const backButtons = document.querySelectorAll('.back-button');

// Function to open sidebar
function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close sidebar
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Reset menu content
    menuContent.classList.remove('active');
    contentSections.forEach(section => section.classList.remove('active'));
}

// Function to show content section
function showContentSection(sectionId) {
    // Hide all sections
    contentSections.forEach(section => section.classList.remove('active'));
    // Show selected section
    const selectedSection = document.getElementById(sectionId + '-section');
    if (selectedSection) {
        selectedSection.classList.add('active');
        menuContent.classList.add('active');
        // Close the sidebar when showing content
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Event listeners for menu items
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const href = item.getAttribute('href');
        const sectionId = href.substring(1); // Remove the # from the href
        showContentSection(sectionId);
    });
});

// Event listeners for back buttons
backButtons.forEach(button => {
    button.addEventListener('click', () => {
        menuContent.classList.remove('active');
        contentSections.forEach(section => section.classList.remove('active'));
    });
});

// Event listeners for sidebar
menuButton.addEventListener('click', openSidebar);
closeButton.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        } else if (menuContent.classList.contains('active')) {
            menuContent.classList.remove('active');
            contentSections.forEach(section => section.classList.remove('active'));
        }
    }
});

// FAQ Toggle functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other FAQ items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Logout confirmation
const confirmLogoutBtn = document.querySelector('.confirm-logout-btn');
if (confirmLogoutBtn) {
    confirmLogoutBtn.addEventListener('click', () => {
        // Add your logout logic here
        console.log('Logging out...');
        closeSidebar();
    });
}

// Cancel logout
const cancelBtn = document.querySelector('.cancel-btn');
if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
        menuContent.classList.remove('active');
        contentSections.forEach(section => section.classList.remove('active'));
    });
}

// Emergency SOS button
const emergencyBtn = document.querySelector('.emergency-btn');
if (emergencyBtn) {
    emergencyBtn.addEventListener('click', () => {
        // Add your emergency contact logic here
        alert('Emergency contacts are being notified!');
    });
}

// Add smooth scrolling for menu items
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Chatbot functionality
const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const messageInput = document.getElementById('messageInput');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');

// Toggle chat window
chatButton.addEventListener('click', () => {
    chatWindow.classList.add('active');
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.remove('active');
});

// Send message function
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    if (isUser) {
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">
                <i class="fas fa-robot bot-icon"></i>
                <p>${message}</p>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle send message
function handleSendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, true);
        messageInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const responses = [
                "I'm here to help! How can I assist you?",
                "Thanks for your message. Let me help you with that.",
                "I understand. Is there anything specific you'd like to know?",
                "I'll be happy to help you with your request."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse);
        }, 1000);
    }
}

sendMessage.addEventListener('click', handleSendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});

// Close chat window when clicking outside
document.addEventListener('click', (e) => {
    if (!chatWindow.contains(e.target) && !chatButton.contains(e.target) && chatWindow.classList.contains('active')) {
        chatWindow.classList.remove('active');
    }
})

// Login Authentication Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginOverlay = document.getElementById('login-overlay');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
        // Show login overlay if not logged in
        loginOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('login-password').value.trim();
        const rememberMe = document.getElementById('remember').checked;
        
        // Simple authentication (in real app, this would be a server request)
        if (username === 'demo' && password === 'password') {
            // Store login state
            if (rememberMe) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
            } else {
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('username', username);
            }
            
            // Show success animation
            loginError.textContent = '';
            loginError.style.color = '#4CAF50';
            loginError.textContent = 'Login successful!';
            
            // Fade out login overlay
            setTimeout(() => {
                loginOverlay.classList.remove('active');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }, 1000);
            
        } else {
            // Show error
            loginError.textContent = 'Invalid username or password';
            loginForm.classList.add('shake');
            setTimeout(() => {
                loginForm.classList.remove('shake');
            }, 500);
        }
    });
    
    // Add logout functionality (example for a logout button if you add one)
    /*
    document.getElementById('logout-button').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        location.reload();
    });
    */
});