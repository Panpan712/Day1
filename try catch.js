try {
    let user = { name: "Aung Aung" };
    console.log(user.age.toUpperCase()); 
  } catch (error) {
    console.log("Error caught:", error.message);
  } finally {
    console.log("Finished running try-catch block.");
  }
  