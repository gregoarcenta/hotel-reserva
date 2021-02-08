export function arrowPrev() {
   let $arrowLeft = document.querySelector(".fa-arrow-left");
   if ($arrowLeft) {
      $arrowLeft.addEventListener("click", (e) => {
         history.back();
      });
   }
}
