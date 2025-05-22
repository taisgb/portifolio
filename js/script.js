// DOM
document.addEventListener("DOMContentLoaded", () => {
  // Pré-carregamento
  const preloader = document.querySelector(".preloader")
  window.addEventListener("load", () => {
    preloader.classList.add("hidden")
    setTimeout(() => {
      preloader.style.display = "none"
    }, 500)
  })

  // Ano no footer
  document.getElementById("year").textContent = new Date().getFullYear()

  // Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu")
  const mainNav = document.getElementById("main-nav")

  mobileMenuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active")

    // Toggle entre menu e close icons
    const icon = mobileMenuBtn.querySelector("i")
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Menu cel
  document.addEventListener("click", (event) => {
    if (
      !mainNav.contains(event.target) &&
      !mobileMenuBtn.contains(event.target) &&
      mainNav.classList.contains("active")
    ) {
      mainNav.classList.remove("active")
      const icon = mobileMenuBtn.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Fechar menu cel qdo clicka no menu
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav.classList.contains("active")) {
        mainNav.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  })

  // efeiro scroll
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Ativar menu no scroll
  const sections = document.querySelectorAll("section")
  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active")
      }
    })
  })

  // Filtro portifolio
  const filterButtons = document.querySelectorAll(".filter-button")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      
      this.classList.add("active")

      
      const filterValue = this.getAttribute("data-filter")

      
      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.style.display = "block"
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "scale(1)"
          }, 100)
        } else {
          item.style.opacity = "0"
          item.style.transform = "scale(0.8)"
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Testimonial Slider
  /* const testimonials = document.querySelectorAll(".testimonial")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".prev-testimonial")
  const nextBtn = document.querySelector(".next-testimonial")
  let currentIndex = 0

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => testimonial.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    testimonials[index].classList.add("active")
    dots[index].classList.add("active")
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length
    showTestimonial(currentIndex)
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
    showTestimonial(currentIndex)
  } */

  // Event listeners for testimonial controls
  /* nextBtn.addEventListener("click", nextTestimonial)
  prevBtn.addEventListener("click", prevTestimonial)

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index
      showTestimonial(currentIndex)
    })
  }) */

  // Auto-rotate testimonials
/*   let testimonialInterval = setInterval(nextTestimonial, 5000) */

  // Pause auto-rotation on hover
/*   const testimonialSlider = document.querySelector(".testimonial-slider")
  testimonialSlider.addEventListener("mouseenter", () => {
    clearInterval(testimonialInterval)
  })

  testimonialSlider.addEventListener("mouseleave", () => {
    testimonialInterval = setInterval(nextTestimonial, 5000)
  }) */

  // Back to top button
  const backToTopBtn = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add("visible")
    } else {
      backToTopBtn.classList.remove("visible")
    }
  })

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Form validação
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const messageInput = document.getElementById("message")
      let isValid = true

      // Validação Simples
      if (nameInput.value.trim() === "") {
        isValid = false
        nameInput.style.borderColor = "red"
      } else {
        nameInput.style.borderColor = ""
      }

      if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
        isValid = false
        emailInput.style.borderColor = "red"
      } else {
        emailInput.style.borderColor = ""
      }

      if (messageInput.value.trim() === "") {
        isValid = false
        messageInput.style.borderColor = "red"
      } else {
        messageInput.style.borderColor = ""
      }

      if (!isValid) {
        e.preventDefault()
      }
    })
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // AOS
  const AOS = window.AOS

  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  })
})

// Lazy load
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]")

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.removeAttribute("data-src")
          imageObserver.unobserve(img)
        }
      })
    })

    lazyImages.forEach((img) => imageObserver.observe(img))
  } else {
    
    lazyImages.forEach((img) => {
      img.src = img.dataset.src
      img.removeAttribute("data-src")
    })
  }
})


function addProjectStructuredData() {
  const portfolioItems = document.querySelectorAll(".portfolio-item")
  const projectsData = []

  portfolioItems.forEach((item, index) => {
    const title = item.querySelector("h3").textContent
    const description = item.querySelector("p").textContent
    const imageUrl = item.querySelector("img").src
    const projectUrl = item.querySelector("a")?.href || window.location.href

    projectsData.push({
      "@type": "WebSite",
      name: title,
      description: description,
      url: projectUrl,
      image: imageUrl,
      author: {
        "@type": "Person",
        name: "Taís Guimarães",
      },
    })
  })

  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: project,
    })),
  })

  document.head.appendChild(script)
}

// CHAMAR FUNÇÃO DEPOIS DO DOM CARREGADO
document.addEventListener("DOMContentLoaded", addProjectStructuredData)


function handleUrlParameters() {
  const urlParams = new URLSearchParams(window.location.search)
  const section = urlParams.get("section")

  if (section) {
    const targetSection = document.getElementById(section)
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: "smooth" })
      }, 500)
    }
  }
}

document.addEventListener("DOMContentLoaded", handleUrlParameters)
