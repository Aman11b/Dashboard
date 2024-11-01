window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    let screenHeight = window.innerHeight;
  
    // Call the animation function based on scroll position
    if (scrollY > screenHeight / 2) {
      arrangeAsHeader();
    } else {
      resetCover();
    }
  });
  function arrangeAsHeader() {
    document.querySelectorAll(".letter").forEach((letter, index) => {
      // Adjust positions to form a straight line (e.g., in the header)
      letter.style.transform = `translateY(-${50 * index}px)`; // Offset to align as heading
      letter.style.opacity = "1";
    });
  }
  
  function resetCover() {
    document.querySelectorAll(".letter").forEach((letter) => {
      letter.style.transform = ""; // Reset transformation
      letter.style.opacity = "1"; // Reset opacity
    });
  }
  .letter.final-position {
    transform: translateX(-100px); /* Move letters to the sidebar position */
    opacity: 0.8;
  }
  