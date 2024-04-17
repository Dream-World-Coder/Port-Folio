const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) =>{
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
  })

  function toggleDarkMode() {
    const root = document.documentElement;
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
  
    root.classList.toggle('invert');
  
    // Toggle visibility of sun and moon icons
    sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
    moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";
  }
