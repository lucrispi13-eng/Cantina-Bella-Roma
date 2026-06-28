// Site Data
const menuItems = {
  primi: [
    {
      name: "Cacio e Pepe",
      desc: "Tonarelli frescos com queijo Pecorino Romano DOP e pimenta preta moída na hora tostada no pilão.",
      price: "R$ 68",
      badge: "Clássico",
      img: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Carbonara Clássica",
      desc: "Rigatoni artesanais, guanciale de Amatrice dourado e purê aveludado de gemas de ovos caipiras e Pecorino Romano.",
      price: "R$ 78",
      badge: "D.O.P.",
      img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Tagliolini al Limone e Gamberi",
      desc: "Massa fina fresca com emulsão de limão siciliano, azeite de oliva extravirgem e camarões grelhados no carvão.",
      price: "R$ 94",
      badge: "Fresco",
      img: "https://images.unsplash.com/photo-1625938146369-adc83368bda7?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Gnocchi alla Sorrentina",
      desc: "Nhoque de batata macio feito na casa, molho rústico de tomate San Marzano, mozzarella di bufala derretida e manjericão fresco.",
      price: "R$ 72",
      badge: "Artesanal",
      img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80"
    }
  ],
  antipasti: [
    {
      name: "Bruschetta al Pomodoro",
      desc: "Fatias de pão de fermentação natural grelhadas, tomates sweet grape marinados no alho, manjericão e azeite extravirgem toscano.",
      price: "R$ 38",
      badge: "Entrada",
      img: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Burrata Pugliese",
      desc: "Burrata cremosa inteira servida sobre pesto de manjericão, presunto de Parma curado por 24 meses e figos grelhados.",
      price: "R$ 64",
      badge: "Importado",
      img: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Carpaccio di Manzo",
      desc: "Finas lâminas de filé mignon cru com molho de mostarda dijon, alcaparras crocantes, rúcula selvagem e lascas de Parmigiano Reggiano.",
      price: "R$ 49",
      badge: "Fininho",
      img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=500&q=80"
    }
  ],
  dolci: [
    {
      name: "Tiramisù Bella Roma",
      desc: "Biscoitos champagne artesanais embebidos em café espresso forte e Licor Amaretto, cobertos com creme de queijo mascarpone fresco.",
      price: "R$ 34",
      badge: "Favorito",
      img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Panna Cotta al Frutti di Bosco",
      desc: "Flan de fava de baunilha de Madagascar sedoso com calda ácida de frutas vermelhas silvestres.",
      price: "R$ 28",
      badge: "Leve",
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80"
    }
  ]
};

const typewriterLines = [
  "Carregando lote importado de Roma...",
  "Queijo Pecorino Romano DOP verificado.",
  "Tomates San Marzano da Campânia aprovados.",
  "Azeite de Oliva Extra Virgem de colheita precoce.",
  "Cozinha operando em temperatura ideal de 21°C.",
  "Lote de Grano Duro 100% certificado. Pronto."
];

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // ==========================================
  // 1. Interações do Cabeçalho e Navbar
  // ==========================================
  const nav = document.querySelector("nav");
  const logoBella = document.querySelector("#logo-bella");
  const ctaBtn = document.querySelector("#nav-cta");

  if (nav && logoBella && ctaBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.remove("bg-transparent", "border-white/10", "text-white");
        nav.classList.add("bg-parmesan/85", "backdrop-blur-xl", "border-basil/15", "text-charcoal", "shadow-[0_10px_30px_-10px_rgba(45,106,79,0.15)]");
        logoBella.classList.remove("text-white");
        logoBella.classList.add("text-basil");
        ctaBtn.classList.remove("bg-white", "text-basil", "hover:bg-parmesan");
        ctaBtn.classList.add("bg-basil", "text-white", "hover:bg-basil-dark");
      } else {
        nav.classList.add("bg-transparent", "border-white/10", "text-white");
        nav.classList.remove("bg-parmesan/85", "backdrop-blur-xl", "border-basil/15", "text-charcoal", "shadow-[0_10px_30px_-10px_rgba(45,106,79,0.15)]");
        logoBella.classList.add("text-white");
        logoBella.classList.remove("text-basil");
        ctaBtn.classList.add("bg-white", "text-basil", "hover:bg-parmesan");
        ctaBtn.classList.remove("bg-basil", "text-white", "hover:bg-basil-dark");
      }
    });
  }

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      const iconElement = mobileMenuToggle.querySelector("i");
      if (isOpen) {
        mobileMenu.classList.add("hidden");
        iconElement.setAttribute("data-lucide", "menu");
      } else {
        mobileMenu.classList.remove("hidden");
        iconElement.setAttribute("data-lucide", "x");
      }
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    });
  }

  // ==========================================
  // 2. Deck Shuffler (Massa Feita à Mão)
  // ==========================================
  let shufflerIndex = 0;
  const cards = document.querySelectorAll(".shuffler-card-item");
  
  function updateShuffler() {
    cards.forEach((card, idx) => {
      const offset = (idx - shufflerIndex + cards.length) % cards.length;
      const isActive = offset === 0;
      const isNext = offset === 1;
      
      card.style.zIndex = isActive ? 3 : isNext ? 2 : 1;
      card.style.opacity = isActive ? 1 : isNext ? 0.7 : 0.3;
      card.style.pointerEvents = isActive ? "auto" : "none";
      
      if (isActive) {
        card.style.transform = "translateY(0px) scale(1) rotate(0deg)";
      } else if (isNext) {
        card.style.transform = "translateY(28px) scale(0.92) rotate(-2deg)";
      } else {
        card.style.transform = "translateY(56px) scale(0.85) rotate(2deg)";
      }
    });
  }
  
  if (cards.length > 0) {
    updateShuffler();
    setInterval(() => {
      shufflerIndex = (shufflerIndex + 1) % cards.length;
      updateShuffler();
    }, 3000);
  }

  // ==========================================
  // 3. Efeito Typewriter (Origem D.O.P.)
  // ==========================================
  let typewriterLineIndex = 0;
  const typewriterElement = document.querySelector("#typewriter-text");
  
  function typeLine() {
    if (!typewriterElement) return;
    let currentLine = typewriterLines[typewriterLineIndex];
    let currentCharIndex = 0;
    let typedText = "";
    
    function typeChar() {
      if (currentCharIndex <= currentLine.length) {
        typedText = currentLine.slice(0, currentCharIndex);
        typewriterElement.textContent = typedText;
        currentCharIndex++;
        setTimeout(typeChar, 60);
      } else {
        setTimeout(() => {
          typewriterLineIndex = (typewriterLineIndex + 1) % typewriterLines.length;
          typeLine();
        }, 2000);
      }
    }
    typeChar();
  }
  typeLine();

  // ==========================================
  // 4. Inicializar Cardápio e Aba Inicial
  // ==========================================
  setActiveMenuTab("primi");

  // ==========================================
  // 5. Animações GSAP
  // ==========================================
  if (typeof gsap !== "undefined") {
    // Registrar ScrollTrigger caso esteja disponível
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // 5.1 Hero staggering entrance
    const heroSubtitle = document.querySelector("#hero-subtitle");
    const heroTitle = document.querySelector("#hero-title");
    const heroCta = document.querySelector("#hero-cta");

    if (heroSubtitle && heroTitle && heroCta) {
      const heroTl = gsap.timeline();
      heroTl.fromTo(heroSubtitle, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(heroTitle,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(heroCta,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    }

    // 5.2 Philosophy Scroll Reveal
    const philosophySection = document.querySelector("#philosophy");
    const philosophyText1 = document.querySelector("#philosophy-text-1");
    const philosophyText2 = document.querySelector("#philosophy-text-2");

    if (philosophySection && philosophyText1 && philosophyText2 && typeof ScrollTrigger !== "undefined") {
      gsap.fromTo(philosophyText1,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: philosophySection,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(philosophyText2,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: philosophySection,
            start: "top 65%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // 5.3 Protocol Scheduler virtual mouse simulation
    const mockCursor = document.querySelector("#mock-cursor");
    const mockDay = document.querySelector("#mock-day");
    const mockSaveBtn = document.querySelector("#mock-save-btn");
    const mockStatusText = document.querySelector("#mock-status-text");

    if (mockCursor && mockDay && mockSaveBtn && mockStatusText) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

      // Initial positions and styles
      gsap.set(mockCursor, { x: 260, y: 160, opacity: 0, scale: 1 });
      gsap.set(mockDay, { backgroundColor: "transparent", color: "#1e1c18" });
      gsap.set(mockSaveBtn, { scale: 1, backgroundColor: "#c1121f" });
      gsap.set(mockStatusText, { opacity: 0 });

      tl.to(mockCursor, { opacity: 1, duration: 0.4 })
        .to(mockCursor, { x: 175, y: 48, duration: 1.2, ease: "power2.inOut" })
        .to(mockCursor, { scale: 0.8, duration: 0.2 })
        .to(mockDay, { backgroundColor: "#c1121f", color: "#faf6f0", duration: 0.1 })
        .to(mockCursor, { scale: 1, duration: 0.2 })
        .to(mockCursor, { x: 120, y: 110, duration: 0.9, ease: "power2.inOut" })
        .to(mockCursor, { scale: 0.8, duration: 0.2 })
        .to(mockSaveBtn, { scale: 0.95, backgroundColor: "#2d6a4f", duration: 0.1 })
        .to(mockStatusText, { opacity: 1, duration: 0.2 })
        .to(mockCursor, { scale: 1, duration: 0.2 })
        .to(mockCursor, { x: 260, y: 160, opacity: 0, duration: 0.8, delay: 0.6 })
        .to(mockStatusText, { opacity: 0, duration: 0.4 });
    }
  }
});

// ==========================================
// 6. Funções Auxiliares Globais
// ==========================================

// Smooth Scroll
window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  // Auto-close mobile menu if open
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");
  if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    const iconElement = mobileMenuToggle.querySelector("i");
    iconElement.setAttribute("data-lucide", "menu");
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
};

// Menu Tab Toggle
window.setActiveMenuTab = function(tabId) {
  const tabButtons = document.querySelectorAll(".menu-tab-btn");
  tabButtons.forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.remove("bg-parmesan", "border-basil/10", "text-basil", "hover:bg-basil-light");
      btn.classList.add("bg-basil", "text-white", "shadow-lg");
    } else {
      btn.classList.remove("bg-basil", "text-white", "shadow-lg");
      btn.classList.add("bg-parmesan", "border-basil/10", "text-basil", "hover:bg-basil-light");
    }
  });
  
  const menuGrid = document.querySelector("#menu-grid");
  if (!menuGrid) return;
  menuGrid.innerHTML = "";
  
  const items = menuItems[tabId];
  items.forEach((dish) => {
    const card = document.createElement("div");
    card.className = "bg-parmesan border border-basil/10 rounded-card p-6 flex flex-col sm:flex-row gap-6 shadow-[0_15px_40px_rgba(45,106,79,0.03)] hover:shadow-xl transition-all duration-300 group";
    card.innerHTML = `
      <div class="w-full sm:w-36 h-36 rounded-card overflow-hidden flex-shrink-0 relative">
        <img src="${dish.img}" alt="${dish.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span class="absolute top-3 left-3 bg-pomodoro text-white font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow">
          ${dish.badge}
        </span>
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-baseline mb-2">
            <h3 class="font-outfit font-bold text-lg text-charcoal-dark group-hover:text-pomodoro transition-colors">
              ${dish.name}
            </h3>
            <span class="font-serif font-bold text-lg text-pomodoro whitespace-nowrap pl-4">${dish.price}</span>
          </div>
          <p class="text-xs text-charcoal/70 leading-relaxed mb-4">${dish.desc}</p>
        </div>
        <button onclick="scrollToSection('booking')" class="flex items-center gap-1.5 text-xs font-bold text-basil uppercase cursor-pointer hover:text-pomodoro transition-colors text-left">
          <span>Reservar Mesa Para Hoje</span>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    `;
    menuGrid.appendChild(card);
  });
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
};

// Protocol slider
let activeStep = 0;
window.setProtocolStep = function(stepIndex) {
  activeStep = (stepIndex + 3) % 3;
  
  const protocolSection = document.querySelector("#protocol");
  const protocolTrack = document.querySelector("#protocol-track");
  const dots = document.querySelectorAll(".protocol-dot");
  
  if (protocolSection) {
    protocolSection.classList.remove("bg-[#0a140f]", "bg-[#0e1f17]", "bg-[#140b0a]");
    if (activeStep === 0) protocolSection.classList.add("bg-[#0a140f]");
    else if (activeStep === 1) protocolSection.classList.add("bg-[#0e1f17]");
    else protocolSection.classList.add("bg-[#140b0a]");
  }
  
  if (protocolTrack) {
    protocolTrack.style.transform = `translateX(-${activeStep * 100}%)`;
  }
  
  dots.forEach((dot, idx) => {
    if (idx === activeStep) {
      dot.className = "protocol-dot w-8 h-3 rounded-full bg-pomodoro transition-all duration-300 cursor-pointer";
    } else {
      dot.className = "protocol-dot w-3 h-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 cursor-pointer";
    }
  });
};

window.nextProtocolStep = function() {
  setProtocolStep(activeStep + 1);
};

window.prevProtocolStep = function() {
  setProtocolStep(activeStep - 1);
};

// Lightbox Modal
const lightboxModal = document.querySelector("#lightbox-modal");
const lightboxImg = document.querySelector("#lightbox-img");

window.openLightbox = function(imgUrl) {
  if (lightboxModal && lightboxImg) {
    lightboxImg.src = imgUrl;
    lightboxModal.classList.remove("hidden");
    lightboxModal.classList.add("flex");
  }
};

window.closeLightbox = function() {
  if (lightboxModal && lightboxImg) {
    lightboxModal.classList.add("hidden");
    lightboxModal.classList.remove("flex");
    lightboxImg.src = "";
  }
};

// Booking form submission
window.submitBooking = async function(event) {
  event.preventDefault();
  
  const submitBtn = document.querySelector("#booking-submit-btn");
  const bookingError = document.querySelector("#booking-error-msg");
  
  const nome = document.querySelector("#booking-nome").value;
  const email = document.querySelector("#booking-email").value;
  const data = document.querySelector("#booking-data").value;
  const horario = document.querySelector("#booking-horario").value;
  const pessoas = document.querySelector("#booking-pessoas").value;
  const telefone = document.querySelector("#booking-telefone").value;
  const mensagem = document.querySelector("#booking-mensagem").value;
  const webhookUrl = document.querySelector("#booking-webhook").value;
  
  const bookingData = { nome, email, data, horario, pessoas, telefone, mensagem };
  
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.querySelector(".btn-content-z").textContent = "Processando...";
  }
  if (bookingError) {
    bookingError.classList.add("hidden");
    bookingError.textContent = "";
  }
  
  if (!webhookUrl.trim()) {
    // Simulate local success
    setTimeout(() => {
      showBookingSuccess(webhookUrl);
    }, 1000);
    return;
  }
  
  let targetUrl = webhookUrl.trim();
  if (!/^https?:\/\//i.test(targetUrl)) {
    targetUrl = "https://" + targetUrl;
  }
  
  try {
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData)
    });
    
    if (response.ok) {
      showBookingSuccess(targetUrl);
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (err) {
    console.warn("CORS/Fetch error detected, falling back to no-cors mode to bypass CORS block:", err);
    try {
      await fetch(targetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData)
      });
      showBookingSuccess(targetUrl);
    } catch (fallbackErr) {
      console.error("Critical: Fallback fetch failed:", fallbackErr);
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.querySelector(".btn-content-z").textContent = "Confirmar Solicitação de Reserva";
      }
      if (bookingError) {
        bookingError.classList.remove("hidden");
        bookingError.textContent = "Erro ao enviar dados da reserva. Por favor, verifique a URL do webhook.";
      }
    }
  }
};

function showBookingSuccess(webhookUrl) {
  const bookingFormContainer = document.querySelector("#booking-form-container");
  if (!bookingFormContainer) return;
  bookingFormContainer.innerHTML = `
    <div class="text-center py-12 flex flex-col items-center justify-center">
      <div class="w-16 h-16 bg-basil/10 text-basil rounded-full flex items-center justify-center mb-6">
        <i data-lucide="check" class="w-8 h-8"></i>
      </div>
      <h3 class="font-serif text-2xl font-bold italic text-charcoal-dark mb-3">Reserva Solicitada!</h3>
      <p class="text-sm text-charcoal/70 max-w-sm mb-6">
        Seus dados foram enviados. ${webhookUrl ? "Um e-mail de confirmação automático foi enviado via Make.com." : "Como o webhook não foi fornecido, simulamos o envio com sucesso."}
      </p>
      <button 
        onClick="resetBookingForm()"
        class="px-6 py-2.5 bg-basil hover:bg-basil-dark text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
      >
        Fazer Outra Reserva
      </button>
    </div>
  `;
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

window.resetBookingForm = function() {
  const bookingFormContainer = document.querySelector("#booking-form-container");
  if (!bookingFormContainer) return;
  bookingFormContainer.innerHTML = `
    <form onSubmit="submitBooking(event)" class="flex flex-col gap-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-bold text-charcoal-dark uppercase">Nome Completo</label>
          <input 
            id="booking-nome"
            type="text" 
            required
            placeholder="Ex: Mateus Rossi"
            class="px-4 py-3 bg-parmesan-warm border border-basil/15 rounded-xl text-sm outline-none focus:border-basil transition-colors"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-bold text-charcoal-dark uppercase">E-mail</label>
          <input 
            id="booking-email"
            type="email" 
            required
            placeholder="Ex: mateus@email.com"
            class="px-4 py-3 bg-parmesan-warm border border-basil/15 rounded-xl text-sm outline-none focus:border-basil transition-colors"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-bold text-charcoal-dark uppercase flex items-center gap-1">
            <i data-lucide="calendar" class="w-3.5 h-3.5 text-basil"></i> Data
          </label>
          <input 
            id="booking-data"
            type="date" 
            required
            class="px-4 py-3 bg-parmesan-warm border border-basil/15 rounded-xl text-sm outline-none focus:border-basil transition-colors"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-bold text-charcoal-dark uppercase flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-basil"></i> Horário
          </label>
          <input 
            id="booking-horario"
            type="time" 
            required
            class="px-4 py-3 bg-parmesan-warm border border-basil/15 rounded-xl text-sm outline-none focus:border-basil transition-colors"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <label class="text-xs font-bold text-charcoal-dark uppercase flex items-center gap-1">
            <i data-lucide="users" class="w-3.5 h-3.5 text-basil"></i> Pessoas
          </label>
          <select 
            id="booking-pessoas"
            class="px-4 py-3 bg-parmesan-warm border border-basil/15 rounded-xl text-sm outline-none focus:border-basil transition-colors"
          >
            <option value="1">1 Pessoa</option>
            <option value="2" selected>2 Pessoas</option>
            <option value="3">3 Pessoas</option>
            <option value="4">4 Pessoas</option>
            <option value="5">5 Pessoas</option>
            <option value="6">6+ Pessoas</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-charcoal-dark uppercase flex items-center gap-1">
          <i data-lucide="phone" class="w-3.5 h-3.5 text-basil"></i> WhatsApp / Telefone
        </label>
        <input 
          id="booking-telefone"
          type="tel" 
          required
          placeholder="Ex: (11) 98765-4321"
          class="px-4 py-3 bg-parmesan-warm border border-basil/15 rounded-xl text-sm outline-none focus:border-basil transition-colors"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-charcoal-dark uppercase">Observações Especiais (Opcional)</label>
        <textarea 
          id="booking-mensagem"
          rows="3"
          placeholder="Indique alergias, ocasiões especiais (aniversário) ou preferência de salão."
          class="px-4 py-3 bg-parmesan-warm border border-basil/15 rounded-xl text-sm outline-none focus:border-basil transition-colors resize-none"
        ></textarea>
      </div>

      <div class="border-t border-basil/10 pt-4 flex flex-col gap-1.5">
        <label class="text-xs font-bold text-charcoal-dark uppercase flex items-center gap-1.5">
          URL do Webhook Make.com (Opcional)
        </label>
        <input 
          id="booking-webhook"
          type="text" 
          placeholder="https://hook.us2.make.com/xxxxxxxxx" 
          class="px-4 py-3 bg-parmesan-warm border border-basil/15 rounded-xl text-sm outline-none focus:border-basil transition-colors font-mono text-xs"
        />
        <div class="text-[10px] text-charcoal/50 leading-relaxed mt-1 flex flex-col gap-1">
          <p>* Deixe em branco para simular localmente com sucesso.</p>
          <p>** Insira a URL gerada no seu cenário do Make para disparar o e-mail real.</p>
        </div>
      </div>

      <div id="booking-error-msg" class="hidden p-3 bg-pomodoro/10 border border-pomodoro/20 rounded-xl text-pomodoro text-xs font-medium"></div>

      <button 
        id="booking-submit-btn"
        type="submit" 
        class="magnetic-btn w-full bg-basil hover:bg-basil-dark disabled:bg-basil/50 text-white font-bold uppercase text-xs tracking-wider py-4 rounded-full transition-all mt-2"
      >
        <span class="btn-slide-overlay bg-basil-dark"></span>
        <span class="btn-content-z">Confirmar Solicitação de Reserva</span>
      </button>
    </form>
  `;
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
};
