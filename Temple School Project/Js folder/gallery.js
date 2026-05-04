// const lenis = new Lenis();

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

   lucide.createIcons()

   //  NAVBAR SECTION

   const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

function openMenu(){
  navMenu.classList.remove("-translate-x-full");
  overlay.classList.add("opacity-100");
  overlay.classList.remove("pointer-events-none");
  document.body.classList.add("menu-open");
}

function closeMenu(){
  navMenu.classList.add("-translate-x-full");
  overlay.classList.remove("opacity-100");
  overlay.classList.add("pointer-events-none");
  document.body.classList.remove("menu-open");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);


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
// visit form section
let step = 0;

/* MODAL */
function openModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");

  gsap.from("#modalBox", {
    y: 40,
    opacity: 0,
    duration: 0.4
  });
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
}

/* STEP CONTROL */
function updateStepUI() {
  document.getElementById("stepWrapper").style.transform = `translateX(-${step * 100}%)`;

  document.getElementById("backBtn").classList.toggle("hidden", step === 0);
  document.getElementById("nextBtn").innerText = step === 2 ? "Submit" : "Next";

  document.querySelectorAll(".step-circle").forEach((el, i) => {
    el.classList.toggle("active", i <= step);
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
    "mailto:info@templeschoolng.com?subject=Visit Booking&body=" +
    encodeURIComponent(body);
}

/* INIT */
updateStepUI();


// footer section
gsap.registerPlugin(ScrollTrigger);

gsap.from(".footer-col", {
  scrollTrigger: {
    trigger: ".footer-columns",
    start: "top 85%"
  },
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out"
});


/* GOLD LINE ANIMATION */
gsap.to("#facilitiesLine", {
  width: "120px",
  duration: 1
});



const API_URL = "https://sheetdb.io/api/v1/vt0ab05suj8o3";

let albums = [];
let currentFilter = {
  category: "all",
  type: "all"
};

let swiperInstance = null;

async function fetchData() {
  const res = await fetch(API_URL);
  const data = await res.json();

  albums = data.map(item => ({
    title: item.title,
    date: item.date,
    category: item.category,
    type: item.type,
    coverImage: item.coverImage,
    albumImages: item.images.split(",").map(i => i.trim())
  }));

  render();
}

function getFilteredAlbums() {
  return albums.filter(a => {
    const categoryMatch =
      currentFilter.category === "all" || a.category === currentFilter.category;

    const typeMatch =
      currentFilter.type === "all" || a.type === currentFilter.type;

    return categoryMatch && typeMatch;
  });
}

function render() {
  const grid = document.getElementById("grid");
  const filtered = getFilteredAlbums();

  // fade out old
  gsap.to("#grid .card", {
    opacity: 0,
    y: 20,
    duration: 0.25,
    stagger: 0.05,
    onComplete: () => {

      grid.innerHTML = "";

      filtered.forEach((a, index) => {
        const card = document.createElement("div");
        card.className = "card cursor-pointer group";

        card.innerHTML = `
        
        <!-- PREMIUM STACK EFFECT -->
        <div class="relative perspective">

          <div class="absolute inset-0 bg-[#E7E0CF] rounded-xl translate-x-3 translate-y-3"></div>
          <div class="absolute inset-0 bg-[#D8CFB5] rounded-xl translate-x-1.5 translate-y-1.5"></div>

          <img 
            src="${a.coverImage}" 
            class="relative rounded-xl w-full h-64 object-cover shadow-lg transform group-hover:rotate-0 rotate-2 transition duration-300"
          />

        </div>

        <h3 class="text-[#0B1C3D] mt-4 font-semibold text-lg">
          ${a.title}
        </h3>

        <p class="text-[#C8A96A] text-sm">
          ${a.date}
        </p>

        `;

        card.onclick = () => openModal(a);
        grid.appendChild(card);
      });

      // fade in new
      gsap.from("#grid .card", {
        opacity: 0,
        y: 40,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out"
      });
    }
  });
}

function openModal(album) {
  const modal = document.getElementById("modal");
  const wrapper = document.getElementById("swiperWrapper");
  const title = document.getElementById("modalTitle");

  title.innerText = album.title;

  wrapper.innerHTML = "";

  album.albumImages.forEach(img => {
    wrapper.innerHTML += `
      <div class="swiper-slide">
        <img src="${img}" class="w-full h-[380px] object-cover rounded-xl" />
      </div>
    `;
  });

  modal.classList.remove("hidden");

  gsap.from("#modal .bg-white", {
    scale: 0.85,
    opacity: 0,
    duration: 0.25,
    ease: "power2.out"
  });

  // destroy previous swiper (IMPORTANT)
  if (swiperInstance) swiperInstance.destroy(true, true);

  swiperInstance = new Swiper(".swiper", {
    loop: true,

    autoplay: {
      delay: 2500,   // 🔥 auto slide every 2.5s
      disableOnInteraction: false
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
}

// CLOSE MODAL (IMPROVED)
function closeModal() {
  const modal = document.getElementById("modal");

  gsap.to(modal, {
    opacity: 0,
    duration: 0.2,
    onComplete: () => {
      modal.classList.add("hidden");
      modal.style.opacity = 1;
    }
  });
}

// FILTER SYSTEM (FIXED + PREMIUM)
document.querySelectorAll(".filter").forEach(btn => {
  btn.onclick = () => {

    document.querySelectorAll(".filter").forEach(b => {
      b.classList.remove("bg-teal-500", "text-white");
      b.classList.add("bg-gray-200");
    });

    btn.classList.add("bg-teal-500", "text-white");

    if (btn.dataset.type) {
      currentFilter.type = btn.dataset.type;
    }

    if (btn.dataset.category) {
      currentFilter.category = btn.dataset.category;
    }

    render();
  };
});

fetchData();    

// preloader starting point
gsap.to("#wipeLayer", {
  scaleX: 1,
  duration: 0.8,
  ease: "power2.inOut"
});

// LOGO REVEAL
gsap.to("#logoReveal", {
  opacity: 1,
  y: -10,
  duration: 0.8,
  delay: 0.5,
  ease: "power2.out"
});

// TEXT FADE
gsap.to("#loadingText", {
  opacity: 0.7,
  duration: 0.8,
  delay: 0.7
});

// preloader
gsap.to("#preloaderLogo", {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power2.out"
});

gsap.from("#preloaderLogo", {
  scale: 0.92,
  duration: 1,
  ease: "power2.out"
});

// VERY LIGHT FLOAT (OPTIONAL BUT NICE)
gsap.to("#preloaderLogo", {
  y: -6,
  duration: 2,
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1
});

window.addEventListener("load", () => {

  gsap.to("#preloaderLogo", {
    opacity: 0,
    scale: 0.96,
    duration: 0.5,
    ease: "power2.inOut"
  });

  gsap.to("#preloader", {
    opacity: 0,
    duration: 0.5,
    delay: 0.1,
    onComplete: () => {
      document.getElementById("preloader").style.display = "none";
    }
  });

});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {

    if (this.getAttribute("href").startsWith("#")) return;

    e.preventDefault();
    const href = this.getAttribute("href");

    const preloader = document.getElementById("preloader");
    preloader.style.display = "flex";

    gsap.fromTo("#preloader",
      { opacity: 0 },
      { opacity: 1, duration: 0.4 }
    );

    gsap.fromTo("#preloaderLogo",
      { scale: 0.92, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6 }
    );

    setTimeout(() => {
      window.location.href = href;
    }, 500);

  });
});

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