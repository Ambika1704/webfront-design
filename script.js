// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('navList');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });
}

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form validation
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

function validateEmail(email) {
  // simple RFC5322-like check
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function showError(el, msg) {
  el.textContent = msg;
}

function clearErrors() {
  [nameError, emailError, messageError].forEach(e => e.textContent = '');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();
  formSuccess.hidden = true;

  let valid = true;

  if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
    showError(nameError, 'Please enter your name (min 2 characters).');
    valid = false;
  }

  if (!validateEmail(emailInput.value.trim())) {
    showError(emailError, 'Please enter a valid email address.');
    valid = false;
  }

  if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
    showError(messageError, 'Message should be at least 10 characters.');
    valid = false;
  }

  if (valid) {
    // Simulate a successful submit
    form.reset();
    formSuccess.hidden = false;
  }
});
