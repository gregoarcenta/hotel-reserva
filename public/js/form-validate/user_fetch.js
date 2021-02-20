async function createUser(body) {
   try {
      const user = await fetch("http://localhost:3000/register", {
         method: "POST",
         body: JSON.stringify(body),
         headers: {
            "Content-Type": "application/json",
         },
      });
      return user;
   } catch (error) {
      throw new Error("Hubo un error");
   }
}

async function verifyEmail(email) {
   try {
      const result = await fetch("http://localhost:3000/register/email", {
         method: "POST",
         body: JSON.stringify(email),
         headers: {
            "Content-Type": "application/json",
         },
      });
      return result;
   } catch (error) {
      throw new Error("Hubo un error " + error);
   }
}

export { createUser, verifyEmail };
