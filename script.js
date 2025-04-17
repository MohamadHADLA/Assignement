// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

function toggleMenu() {
  navMenu.classList.toggle('show');
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);
}

// Smooth scrolling
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

// Filter projects
function filterProjects(category) {
  const projects = document.querySelectorAll('#projects article');
  projects.forEach(project => {
    if (category === 'all' || project.classList.contains(category)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Lightbox effect
const images = document.querySelectorAll('#projects img');
const modal = document.createElement('div');
modal.id = 'lightbox-modal';
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.background = 'rgba(0, 0, 0, 0.8)';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '1000';

const modalImg = document.createElement('img');
modalImg.style.maxWidth = '90%';
modalImg.style.maxHeight = '90%';
modal.appendChild(modalImg);
document.body.appendChild(modal);

images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = image.src;
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Contact form validation
const form = document.querySelector('#contact form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function validateForm(event) {
  event.preventDefault();
  let isValid = true;

  if (!nameInput.value.trim()) {
    nameInput.style.borderColor = 'red';
    isValid = false;
  } else {
    nameInput.style.borderColor = '#ccc';
  }

  if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
    emailInput.style.borderColor = 'red';
    isValid = false;
  } else {
    emailInput.style.borderColor = '#ccc';
  }

  if (!messageInput.value.trim()) {
    messageInput.style.borderColor = 'red';
    isValid = false;
  } else {
    messageInput.style.borderColor = '#ccc';
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
}

if (form) {
  form.addEventListener('submit', validateForm);
}
