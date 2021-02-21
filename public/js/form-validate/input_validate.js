import { createUser, verifyEmail } from "./user_fetch.js";
import regEx from "./regExp_validation.js";

export const validateForm = () => {
   const $form = document.getElementById("form-register");
   const $errorMessage = document.querySelector(".form-error-message");
   const $checkIcons = document.querySelectorAll(".fa-check-circle");

   let values = {
      name: false,
      apell: false,
      email: false,
      telf: false,
      password: false,
      password2: false,
   };

   if ($form) {
      document.addEventListener("keyup", validsChangeForm);
      $form.addEventListener("submit", sendFormSubmit);
   }

   function validsChangeForm(e) {
      const $input = e.target;
      if (e.target.matches(".register .form-control")) {
         switch ($input.id) {
            case "name":
               validsChangeInput($input, regEx.REGEX_NOMBRE);
               break;
            case "apell":
               validsChangeInput($input, regEx.REGEX_APELLIDO);
               break;
            case "email":
               validsChangeInput($input, regEx.REGEX_CORREO);
               break;
            case "telf":
               validsChangeInput($input, regEx.REGEX_TELEFONO);
               break;
            case "password":
               validsChangeInput($input, regEx.REGEX_PASSWORD);
               validPassword();
               break;
            case "password2":
               validPassword();
               break;

            default:
               break;
         }
      }
   }

   function validsChangeInput(input, regExp) {
      const validation = RegExp(regExp);

      if (validation.test(input.value)) {
         if (input.id === "email") {
            validEmail(input);
            return;
         }
         inputSuccess(input);
      } else {
         inputError(input, 0);
      }
   }

   function validPassword() {
      const pass = document.getElementById("password");
      const pass2 = document.getElementById("password2");
      if (pass.value === pass2.value && pass.value !== "" && pass2.value !== "") {
         inputSuccess(pass);
         inputSuccess(pass2);
      } else {
         inputError(pass2, 0);
      }
   }

   function validEmail(input) {
      document.querySelector(".loader-email").classList.remove("d-none");
      const email = document.getElementById("email").value;
      verifyEmail({ email }).then((res) => {
         if (res.status === 200) {
            document.querySelector(".loader-email").classList.add("d-none");
            inputSuccess(input);
         } else {
            document.querySelector(".loader-email").classList.add("d-none");
            inputError(input, 1);
         }
      });
   }

   function inputSuccess(input) {
      const $errorInput = input.parentElement.nextElementSibling;
      const $errorEmail = input.parentElement.nextElementSibling.nextElementSibling;
      const $checkIcon = input.nextElementSibling;

      if ($errorEmail) {
         $errorEmail.classList.add("d-none");
      }
      input.parentElement.classList.add("mb-3");
      input.classList.remove("is-invalid");
      $errorInput.classList.add("d-none");
      $checkIcon.classList.remove("d-none");
      values[input.id] = true;
   }

   function inputError(input, num) {
      let $errorInput = input.parentElement.nextElementSibling;
      const $errorEmail = input.parentElement.nextElementSibling.nextElementSibling;
      const $checkIcon = input.nextElementSibling;
      if ($errorEmail) {
         $errorEmail.classList.add("d-none");
      }
      if (num === 1) {
         input.parentElement.nextElementSibling.classList.add("d-none");
         $errorInput = input.parentElement.nextElementSibling.nextElementSibling;
      }
      input.parentElement.classList.remove("mb-3");
      input.classList.add("is-invalid");
      $errorInput.classList.remove("d-none");
      $checkIcon.classList.add("d-none");
      values[input.id] = false;
   }

   function sendFormSubmit(e) {
      e.preventDefault();
      if (
         values.name &&
         values.apell &&
         values.email &&
         values.telf &&
         values.password &&
         values.password2
      ) {
         createUser({
            name: document.getElementById("name").value,
            apellido: document.getElementById("apell").value,
            email: document.getElementById("email").value,
            telefono: document.getElementById("telf").value,
            password: document.getElementById("password").value,
         })
            .then((res) => {
               console.log(res);
               if (res.status === 200) {
                  $form.reset();
                  $errorMessage.classList.add("d-none");
                  $checkIcons.forEach((icon) => {
                     icon.classList.add("d-none");
                  });
                  location.href = "http://localhost:3000/login";
               } else {
                  $errorMessage.classList.remove("d-none");
               }
            })
            .catch((err) => console.log(err));
      } else {
         $errorMessage.classList.remove("d-none");
      }
   }
};
