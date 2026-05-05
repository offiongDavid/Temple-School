// const lenis = new Lenis({
//   duration: 1.2,
//   smooth: true,
//   smoothTouch: false,
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);


// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);


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

const images = document.querySelectorAll(".hero-img");
let current = 0;

function showNextImage() {
  const next = (current + 1) % images.length;

gsap.to(images[current], {
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
});
 gsap.fromTo(images[next],
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1.2,
    ease: "power2.out"
  }
);

  current = next;
}

// CHANGE EVERY 7 SECONDS
setInterval(showNextImage, 10000);


window.addEventListener("load", () => {

  gsap.from('.hero-section h1', {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.3,
  });

  gsap.from('.hero-section p', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    stagger: 0.2,
  });

  gsap.from('.hero-section button', {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.15,
  });

});
// Enroll section

gsap.registerPlugin(ScrollTrigger);

gsap.from('.Enroll-section h2', {
  scrollTrigger: {
    trigger: '.Enroll-section h2',
    start: 'top 80%',
    once: true,
  },
  y: 40,
  opacity: 0,
  duration: 1,
});

gsap.from('.Enroll-section .grid a', {
  scrollTrigger: {
    trigger: '.Enroll-section .grid',
    start: 'top 85%',
    once: true,
  },
  y: 60,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: 'power2.out',
});
// news section

const newsData = [
  {
    title: ' Temple School Wins 1st Place at 2026 Private School Games Basketball Competition',
    date: 'March 2026',
    link: 'https://www.instagram.com/p/DWLNR1VDPfn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    title: 'Temple School Hosts Autism Awareness Picnic 2026 in Collaboration with Greenwood House School',
    date: 'April 4, 2026',
    link: 'https://www.instagram.com/reel/DW0lb7_jtKj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    title: 'Temple School Shines at Sixth-Form Games Lagos 2025',
    date: 'November 2025',
    link: 'https://www.instagram.com/p/DRzmoslDFjM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];

const container = document.getElementById('newsContainer');

newsData.forEach((item) => {
  const card = document.createElement('a');
  card.href = item.link;

  card.className = 'block group transition';

  card.innerHTML = `
    <h4 class="text-[#0B1C39] font-semibold text-base md:text-lg font-[Poppins] leading-snug group-hover:text-[#1E4D8F] transition">
      ${item.title}
    </h4>
    <p class="text-sm text-gray-500 mt-3 font-[Inter]">
      ${item.date}
    </p>
  `;

  container.appendChild(card);
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.New h2', {
  scrollTrigger: {
    trigger: '.New h2',
    start: 'top 80%',
  },
  y: 40,
  opacity: 0,
  duration: 1,
});

gsap.from(' #newsContainer .News a', {
  scrollTrigger: {
    trigger: ' #newsContainer .News',
    start: 'top 85%',
  },
  y: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power3.out',
});

// end of news section

// tour section

const tourImages = [
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-1-1.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-13.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-4-1.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/DSC_9446_1-scaled.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-14-3-1.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-14-4-1.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-11.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-9-1.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-8-1.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-7-1.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-6-1.jpg',
  'https://www.templeschoolng.com/wp-content/uploads/2026/05/Suared-14-6.jpg',
];

const grid = document.getElementById('tourGrid');

tourImages.forEach((src) => {
  const div = document.createElement('div');

  div.className =
    'group relative overflow-hidden rounded-sm aspect-square cursor-pointer';

  div.innerHTML = `
   <img 
  src="${src}" 
  loading="eager"
  decoding="async"
  class="w-full h-full object-fill duration-500 group-hover:scale-110"
/>

    <!-- OVERLAY -->
    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
      <span class="text-white text-sm tracking-wide font-[Inter] border border-white px-4 py-1">
        View
      </span>
    </div>
  `;

  div.addEventListener('click', () => openImageModal(src));

  grid.appendChild(div);
});

function openImageModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');

  modalImg.src = src;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.add('hidden');
}

// end of tour section

 
// why choose us section
const features = [
    {
      icon: "graduation-cap",
      title: "Exceptional Faculty",
      description:
        "Our team consists of highly qualified, expert educators committed to unlocking each student’s full potential."
    },
    {
      icon: "school",
      title: "Modern Learning Environments",
      description:
        "State-of-the-art facilities, advanced laboratories, and innovative classrooms designed to inspire learning."
    },
    {
      icon: "shield-check",
      title: "Character & Integrity",
      description:
        "We instill discipline, ethics, and strong moral values that shape responsible global citizens."
    },
    {
      icon: "award",
      title: "Proven Academic Excellence",
      description:
        "A strong track record of outstanding results preparing students for top universities worldwide."
    },
    {
      icon: "monitor-smartphone",
      title: "Future-Ready Tech Integration",
      description:
        "Cutting-edge digital tools are embedded into learning to prepare students for tomorrow’s world."
    }
  ];

  const featuresGrid = document.getElementById("featuresGrid");

  features.forEach((feature) => {
    const card = document.createElement("div");

    card.className =
      "bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100";

    card.innerHTML = `
      <div class="mb-4 text-[#004A7C]">
        <i data-lucide="${feature.icon}" class="w-8 h-8"></i>
      </div>

      <h3 class="text-xl font-semibold text-[#004A7C] font-[Poppins] mb-3">
        ${feature.title}
      </h3>

      <p class="text-gray-600 text-sm md:text-base font-[Inter] leading-relaxed">
        ${feature.description}
      </p>
    `;

    featuresGrid.appendChild(card);
  });

  lucide.createIcons();

  // end of it


function getIcon(name) {
  const icons = {
    'graduation-cap': `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14v7"/></svg>`,
    building: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 21h18M9 8h6M9 12h6M9 16h6"/></svg>`,
    'shield-check': `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4"/></svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M6 21l6-4 6 4"/></svg>`,
    laptop: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="12"/><path d="M2 20h20"/></svg>`,
  };

  return icons[name];
}

// testimonial section
const testimonials = {
  parents: [
    {
      text: "This school has truly transformed my child's confidence and attitude toward learning. The difference we’ve seen at home has been incredible, and we’re genuinely grateful for the care and attention given to each student.",
      name: 'Mrs. Adewale',
     
    },
    {
      text: 'The teachers here are not only supportive but deeply committed to every child’s progress. You can tell they genuinely care, and that makes a huge difference in how children grow both academically and personally.',
      name: 'Mr. Okafor',
    
    },
    {
      text: 'It’s a safe, welcoming, and inspiring environment where children are encouraged to be themselves while striving for excellence. As a parent, that peace of mind is priceless.',
      name: 'Mrs. Bello',
         image: 'https://i.pravatar.cc/100?img=3',
    },
    {
      text: 'The academic structure is well-organized, and the discipline instilled in students is commendable. My child has become more focused, responsible, and motivated since joining.',
      name: 'Mr. Yusuf',
      
    },
  ],

  students: [
    {
      text: 'I really enjoy being in this school because the teachers make learning interesting and easy to understand. It’s a place where I feel confident to try new things.',
      name: 'Chinedu',

    },
    {
      text: 'I’ve made amazing friends here, and everyone is very friendly. It feels like a big family, and I always look forward to coming to school every day.',
      name: 'Aisha',
   
    },
    {
      text: 'There are always fun and engaging activities every term, and they make learning more exciting. I’ve discovered new interests I didn’t even know I had.',
      name: 'Daniel',
     
    },
    {
      text: 'This school has helped me discover my talents and build my confidence. The teachers always encourage us to do our best and support us every step of the way.',
      name: 'Fatima',
      
    },
  ],
};

let currentCategory = 'parents';
let swiperInstance = null;

/* CREATE SLIDE */
function createSlide(item) {
  return `
    <div class="swiper-slide">
      <div class="bg-[#FDFCF8] border border-[#004A7C]/20 rounded-2xl p-6 h-full">

        <p class="text-gray-600 mb-4">"${item.text}"</p>

        <div class="flex items-center gap-3 mt-4">
          <h4 class="font-semibold text-[#004A7C]">${item.name}</h4>
        </div>

      </div>
    </div>
  `;
}

/* INIT / REINIT SWIPER */
function initSwiper() {
  if (swiperInstance) swiperInstance.destroy(true, true);

  swiperInstance = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

/* RENDER */
function renderTestimonials() {
  const wrapper = document.getElementById('swiperWrapper');

  wrapper.innerHTML = testimonials[currentCategory].map(createSlide).join('');

  setTimeout(() => {
    initSwiper();
  }, 50);
}

/* CATEGORY SWITCH */
function switchCategory(category, btn) {
  if (category === currentCategory) return;

  currentCategory = category;

  document.querySelectorAll('.toggle-btn').forEach((b) => {
    b.classList.remove('bg-[#004A7C]', 'text-white');
    b.classList.add('border', 'border-[#004A7C]', 'text-[#004A7C]');
  });

  btn.classList.add('bg-[#004A7C]', 'text-white');

  renderTestimonials();
}

/* INIT */
renderTestimonials();
// end of testimonial section

// newsletter section

gsap.to('.newsletter-box', {
  scrollTrigger: {
    trigger: '.newsletter-box',
    start: 'top 80%',
  },
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: 'power3.out',
});

/* =========================
   ELEMENTS
========================= */
const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('email');
const successMsg = document.getElementById('successMsg');

/* =========================
   EMAIL VALIDATION
========================= */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* =========================
   FORM SUBMIT
========================= */
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // SCHOOL EMAIL (replace with real one later)
  const schoolEmail = 'info@templeschoolng.com';

  const subject = encodeURIComponent('New Newsletter Subscription');
  const body = encodeURIComponent(
    `Hello Temple School,\n\nA new user has subscribed to your newsletter.\n\nEmail: ${email}\n\nPlease add them to your mailing list.`
  );

  // OPEN MAIL CLIENT
  window.location.href = `mailto:${schoolEmail}?subject=${subject}&body=${body}`;

  // SUCCESS MESSAGE
  successMsg.classList.remove('hidden');

  // RESET INPUT
  emailInput.value = '';
});

// stats


// make sure GSAP plugin is registered
gsap.registerPlugin(ScrollTrigger);

/* =========================
   COUNTERS (SLOW + PREMIUM)
========================= */
function animateCounters() {
  document.querySelectorAll(".counter").forEach(counter => {
    const target = +counter.getAttribute("data-target");

    let obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 3.5,
      ease: "power2.out",
      onUpdate: () => {
        counter.innerText = Math.floor(obj.val).toLocaleString();
      },
      scrollTrigger: {
        trigger: counter,
        start: "top 90%",
        once: true
      }
    });
  });
}

/* =========================
   YEAR COUNTER
========================= */
function animateYear() {
  const yearEl = document.getElementById("yearCounter");

  if (!yearEl) return; // safety check

  let obj = { year: 0 };

  gsap.to(obj, {
    year: 2004,
    duration: 3.5,
    ease: "power2.out",
    onUpdate: () => {
      yearEl.innerText = Math.floor(obj.year);
    },
    scrollTrigger: {
      trigger: yearEl,
      start: "top 90%",
      once: true
    }
  });
}

/* =========================
   CARD REVEAL
========================= */
gsap.from(".stat-card", {
  scrollTrigger: {
    trigger: ".stat-card",
    start: "top 85%"
  },
  opacity: 0,
  y: 40,
  stagger: 0.15,
  duration: 1,
  ease: "power3.out"
});


document.addEventListener("DOMContentLoaded", () => {
  animateCounters();
  animateYear();

  // lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
});

document.addEventListener("DOMContentLoaded", () => {
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

const affiliateSwiper = new Swiper('.affiliateSwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.affiliateSwiper .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});
// end of affliates section

function direct() {
  window.location =
    '/Temple School Project/About Us/Gallery/image gallery.html';
}

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


function contact(){
  window.location.href = '/Temple School Project/Contact Page/Contact.html';
}


// scroll up
const scrollBtn = document.getElementById("scrollTopBtn");


window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("opacity-100");
    scrollBtn.classList.remove("opacity-0", "pointer-events-none");
  } else {
    scrollBtn.classList.remove("opacity-100");
    scrollBtn.classList.add("opacity-0", "pointer-events-none");
  }
});

// SCROLL TO TOP
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});