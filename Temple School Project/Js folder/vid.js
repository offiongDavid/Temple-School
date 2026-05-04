// const lenis = new Lenis();

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

lucide.createIcons();

//  NAVBAR SECTION

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

function openMenu() {
  navMenu.classList.remove('-translate-x-full');
  overlay.classList.add('opacity-100');
  overlay.classList.remove('pointer-events-none');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  navMenu.classList.add('-translate-x-full');
  overlay.classList.remove('opacity-100');
  overlay.classList.add('pointer-events-none');
  document.body.classList.remove('menu-open');
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// 🔥 MOBILE ACCORDION (THIS IS WHAT YOU NEED)
document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
  toggle.addEventListener('click', function (e) {
    if (window.innerWidth >= 1024) return;

    e.preventDefault();
    e.stopPropagation();

    const parent = this.closest('li, .relative, .group');

    // ALWAYS find the nearest submenu inside THIS block only
    const submenu = parent.querySelector('.submenu');

    if (!submenu) return;

    const isOpen = submenu.classList.contains('dropdown-open');

    // close ONLY siblings at same level
    const siblings = parent.parentElement.children;

    Array.from(siblings).forEach((sibling) => {
      const open = sibling.querySelector('.submenu.dropdown-open');
      if (open) open.classList.remove('dropdown-open');
    });

    // toggle current
    submenu.classList.toggle('dropdown-open');
  });
});
//ENDING

// make sure GSAP plugin is registered

// make sure GSAP plugin is registered
gsap.registerPlugin(ScrollTrigger);

/* =========================
   COUNTERS (SLOW + PREMIUM)
========================= */
function animateCounters() {
  document.querySelectorAll('.counter').forEach((counter) => {
    const target = +counter.getAttribute('data-target');

    let obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 3.5,
      ease: 'power2.out',
      onUpdate: () => {
        counter.innerText = Math.floor(obj.val).toLocaleString();
      },
      scrollTrigger: {
        trigger: counter,
        start: 'top 90%',
        once: true,
      },
    });
  });
}

/* =========================
   YEAR COUNTER
========================= */
function animateYear() {
  const yearEl = document.getElementById('yearCounter');

  if (!yearEl) return; // safety check

  let obj = { year: 0 };

  gsap.to(obj, {
    year: 2004,
    duration: 3.5,
    ease: 'power2.out',
    onUpdate: () => {
      yearEl.innerText = Math.floor(obj.year);
    },
    scrollTrigger: {
      trigger: yearEl,
      start: 'top 90%',
      once: true,
    },
  });
}

/* =========================
   CARD REVEAL
========================= */
gsap.from('.stat-card', {
  scrollTrigger: {
    trigger: '.stat-card',
    start: 'top 85%',
  },
  opacity: 0,
  y: 40,
  stagger: 0.15,
  duration: 1,
  ease: 'power3.out',
});

document.addEventListener('DOMContentLoaded', () => {
  animateCounters();
  animateYear();

  // lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  animateCounters();
  animateYear();

  // lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
});

// visit form section
let step = 0;

/* MODAL */
function openModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');

  gsap.from('#modalBox', {
    y: 40,
    opacity: 0,
    duration: 0.4,
  });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
}

/* STEP CONTROL */
function updateStepUI() {
  document.getElementById('stepWrapper').style.transform =
    `translateX(-${step * 100}%)`;

  document.getElementById('backBtn').classList.toggle('hidden', step === 0);
  document.getElementById('nextBtn').innerText = step === 2 ? 'Submit' : 'Next';

  document.querySelectorAll('.step-circle').forEach((el, i) => {
    el.classList.toggle('active', i <= step);
  });
}

function nextStep() {
  if (step < 2) {
    step++;
    updateStepUI();
  } else {
    submitForm();
  }
}

function prevStep() {
  if (step > 0) {
    step--;
    updateStepUI();
  }
}

/* SUBMIT (MAILTO) */
function submitForm() {
  const body = `
Parent Name: ${parentName.value}
Child Name: ${childName.value}
Grade: ${grade.value}
Email: ${email.value}

Phone: ${phone.value}
Reason: ${reason.value}
Other: ${other.value}

Date: ${date.value}
Time: ${time.value}
Source: ${source.value}
  `;

  window.location.href =
    'mailto:info@templeschoolng.com?subject=Visit Booking&body=' +
    encodeURIComponent(body);
}

/* INIT */
updateStepUI();

// footer section
gsap.registerPlugin(ScrollTrigger);

gsap.from('.footer-col', {
  scrollTrigger: {
    trigger: '.footer-columns',
    start: 'top 85%',
  },
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 1,
  ease: 'power3.out',
});

/* GOLD LINE ANIMATION */
gsap.to('#facilitiesLine', {
  width: '120px',
  duration: 1,
});

const VIDEO_API = 'https://sheetdb.io/api/v1/6gimqmastt0d8'; // same or new sheet

let videos = [];

async function fetchVideos() {
  const res = await fetch(VIDEO_API);
  const data = await res.json();

  videos = data.map((v) => ({
    title: v.title,
    date: v.date,
    description: v.description,
    videoId: extractVideoId(v.videoUrl),
  }));

  renderVideos();
}

// convert youtube link → embed ID
function extractVideoId(url) {
  if (!url) return '';

  const regExp =
    /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|shorts\/)([^#&?]*).*/;

  const match = url.trim().match(regExp);

  return match && match[1].length === 11 ? match[1] : '';
}

function renderVideos() {
  const grid = document.getElementById('videoGrid');
  grid.innerHTML = '';

  videos.forEach((video) => {
    const card = document.createElement('div');

    card.className =
      'cursor-pointer group bg-white rounded-xl overflow-hidden shadow';

    card.innerHTML = `
      <div class="relative">
        <img 
          <img 
  src="https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg"
  onerror="this.src='https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg'"
  class="w-full h-48 object-cover group-hover:scale-105 transition"
/>
      
      </div>

      <div class="p-4">
        <h3 class="text-[#0B1C3D] font-semibold">${video.title}</h3>
        <p class="text-[#C8A96A] text-sm">${video.date}</p>
      </div>
    `;

    card.onclick = () => openVideo(video);

    grid.appendChild(card);
  });

  gsap.from('#videoGrid div', {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    duration: 0.6,
  });
}

function openVideo(video) {
  const modal = document.getElementById('videoModal');

  document.getElementById('videoFrame').src =
    `https://www.youtube.com/embed/${video.videoId}?autoplay=1`;

  document.getElementById('videoTitle').innerText = video.title;
  document.getElementById('videoDesc').innerText = video.description;
  document.getElementById('videoDate').innerText = video.date;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');

  document.getElementById('videoFrame').src = '';
  modal.classList.add('hidden');
}

fetchVideos();

// preloader starting point
gsap.to('#wipeLayer', {
  scaleX: 1,
  duration: 0.8,
  ease: 'power2.inOut',
});

// LOGO REVEAL
gsap.to('#logoReveal', {
  opacity: 1,
  y: -10,
  duration: 0.8,
  delay: 0.5,
  ease: 'power2.out',
});

// TEXT FADE
gsap.to('#loadingText', {
  opacity: 0.7,
  duration: 0.8,
  delay: 0.7,
});

// preloader
gsap.to('#preloaderLogo', {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('#preloaderLogo', {
  scale: 0.92,
  duration: 1,
  ease: 'power2.out',
});

// VERY LIGHT FLOAT (OPTIONAL BUT NICE)
gsap.to('#preloaderLogo', {
  y: -6,
  duration: 2,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1,
});

window.addEventListener('load', () => {
  gsap.to('#preloaderLogo', {
    opacity: 0,
    scale: 0.96,
    duration: 0.5,
    ease: 'power2.inOut',
  });

  gsap.to('#preloader', {
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
    onComplete: () => {
      document.getElementById('preloader').style.display = 'none';
    },
  });
});

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) return;

    e.preventDefault();
    const href = this.getAttribute('href');

    const preloader = document.getElementById('preloader');
    preloader.style.display = 'flex';

    gsap.fromTo('#preloader', { opacity: 0 }, { opacity: 1, duration: 0.4 });

    gsap.fromTo(
      '#preloaderLogo',
      { scale: 0.92, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6 }
    );

    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});

const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add('opacity-100');
    scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
  } else {
    scrollBtn.classList.remove('opacity-100');
    scrollBtn.classList.add('opacity-0', 'pointer-events-none');
  }
});

// SCROLL TO TOP
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
