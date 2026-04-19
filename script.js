// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Booking form submission
const bookingForm = document.getElementById('bookingForm');
const bookingConfirmation = document.getElementById('bookingConfirmation');

const planPrices = {
  prueba: { label: 'Clase de Prueba', price: '$5' },
  mensual: { label: 'Plan Mensual (8 clases)', price: '$40' },
  particular: { label: 'Clase Particular', price: '$15/sesión' }
};

const classLabels = {
  ingles: '🇺🇸 Inglés',
  espanol: '🇻🇪 Español',
  particular: '📚 Clase Particular'
};

bookingForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const parentName = document.getElementById('parentName').value.trim();
  const studentName = document.getElementById('studentName').value.trim();
  const studentAge = document.getElementById('studentAge').value;
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const classType = document.getElementById('classType').value;
  const plan = document.getElementById('plan').value;
  const day = document.getElementById('preferredDay').value;
  const time = document.getElementById('preferredTime').value;

  if (!parentName || !studentName || !studentAge || !whatsapp || !classType || !plan || !day || !time) {
    showToast('Por favor completa todos los campos obligatorios.', 'error');
    return;
  }

  // Build confirmation details
  const planInfo = planPrices[plan] || {};
  const confirmDetails = document.getElementById('confirmDetails');
  confirmDetails.innerHTML = `
    <div style="display:grid;gap:10px;">
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e2e8f0;">
        <span style="font-weight:700;color:#64748b;font-size:0.9rem;">Estudiante</span>
        <span style="font-weight:800;">${studentName}, ${studentAge} años</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e2e8f0;">
        <span style="font-weight:700;color:#64748b;font-size:0.9rem;">Clase</span>
        <span style="font-weight:800;">${classLabels[classType] || classType}</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e2e8f0;">
        <span style="font-weight:700;color:#64748b;font-size:0.9rem;">Plan</span>
        <span style="font-weight:800;">${planInfo.label || plan}</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e2e8f0;">
        <span style="font-weight:700;color:#64748b;font-size:0.9rem;">Horario preferido</span>
        <span style="font-weight:800;">${capitalize(day)} · ${time}</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;">
        <span style="font-weight:700;color:#64748b;font-size:0.9rem;">Total a pagar</span>
        <span style="font-weight:900;color:#2563eb;font-size:1.1rem;">${planInfo.price || ''}</span>
      </div>
    </div>
  `;

  document.getElementById('confirmName').textContent = parentName;
  document.getElementById('confirmStudent').textContent = studentName;

  bookingForm.classList.add('hidden');
  bookingConfirmation.classList.remove('hidden');
  bookingConfirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function resetForm() {
  bookingForm.reset();
  bookingConfirmation.classList.add('hidden');
  bookingForm.classList.remove('hidden');
  document.getElementById('agendar').scrollIntoView({ behavior: 'smooth' });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Toast notification
function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 28px;
    background: ${type === 'error' ? '#ef4444' : '#10b981'};
    color: white;
    padding: 14px 22px;
    border-radius: 12px;
    font-family: Nunito, sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    z-index: 9999;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    animation: slideIn 0.3s ease;
    max-width: 320px;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.trust-item, .service-card, .step, .testimonial-card, .price-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Style injection for slideIn keyframe
const style = document.createElement('style');
style.textContent = '@keyframes slideIn { from { opacity:0; transform:translateX(30px); } to { opacity:1; transform:translateX(0); } }';
document.head.appendChild(style);
