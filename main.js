
// Contact Form Submission Alert 
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual submission 
    alert("Thanks for contacting me! I'll get back to you soon.");
    contactForm.reset();
  });
}

// Scroll to Top Button 
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  window.onscroll = () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  };
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
  
  const slides = [
    {
      src: "../Multithread.png",
      caption: "Traffic Simulator built in Java using threads and semaphores."
    },
    {
        src: "../Multithread2.png",
        caption: "Traffic Simulator built in Java using threads and semaphores."
    },
    {
      src: "../Database.png",
      caption: "Restaurant Database using MySQL and Java"
    },
    {
        src: "../Database2.png",
        caption: "Restaurant Database using MySQL and Java"
    },
    {
        src: "../Sleepflix.png",
        caption: "Mock streaming service website that used a variety of forms for signing up and contacting support"
    },
    {
        src: "../Sleepflix2.png",
        caption: "Mock streaming service website that used a variety of forms for signing up and contacting support"
    }
  ];
  
  let index = 0;
  
  function nextImage() {
    // Get elements
    const img = document.getElementById("slideshow");
    const caption = document.getElementById("caption");
  
    // Start fade-out
    img.classList.add("fade-out");
    caption.classList.add("fade-out");
  
    // Wait for fade-out to finish, then update content
    setTimeout(() => {
      index = (index + 1) % slides.length;
      img.src = slides[index].src;
      caption.textContent = slides[index].caption;
  
      // Fade back in
      img.classList.remove("fade-out");
      caption.classList.remove("fade-out");
    }, 600); // match transition duration
  }
  
  // Auto-play every 10 seconds
  setInterval(nextImage, 10000);
  
