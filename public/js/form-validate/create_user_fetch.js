export async function createUser(body) {
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
