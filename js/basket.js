const stickyHeader = () => {
    const navbar = document.querySelector("#navbar");
    const sticky = navbar.offsetTop;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  };
  
  stickyHeader();