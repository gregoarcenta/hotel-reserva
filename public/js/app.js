import { arrowPrev } from "./arrow_prev_login.js";
import { buttomTop } from "./buttom_top.js";
import { showHeader } from "./show_header.js";
import { validateForm } from "./form-validate/input_validate.js";

document.addEventListener("DOMContentLoaded", (e) => {
   showHeader();
   buttomTop();
   arrowPrev();
   validateForm();
});
