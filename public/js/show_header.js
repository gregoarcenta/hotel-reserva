export function showHeader() {
   const header = document.querySelector(".navbar");
   if (header) {
      document.addEventListener("scroll", (e) => {
         const scrollY = window.pageYOffset;
         if (scrollY > 400) {
            header.classList.add("p-0");
         } else {
            header.classList.remove("p-0");
         }
      });
   }
}
