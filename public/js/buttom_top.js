export function buttomTop() {
   const buttomTop = document.querySelector(".arriba");
   if (buttomTop) {
      document.addEventListener("scroll", () => {
         const scrollY = window.pageYOffset;
         //console.log(scrollY);
         if (scrollY > 700) {
            buttomTop.classList.remove("arriba-hidden");
         } else {
            buttomTop.classList.add("arriba-hidden");
         }
      });
      buttomTop.addEventListener("click", (e) => {
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
         });
      });
   }
}
