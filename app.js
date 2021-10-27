// PASSWORD GENERATOR

// Character Generator Functions

// Function that accepts a string value as an argument and returns a random index number from the string argument
function randomIndex(str){
    return Math.floor(Math.random() * str.length);
  }
  
  // Example of the randomIndex function
  console.log(randomIndex(`chicken`)); // 0, 1, 2, 3, 4, 5, 6
  
  // Function that returns a random lowercase letter
  function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    // Returning a random letter using a random index in the "letters" string
    return letters[randomIndex(letters)];
  }
  
  // Example of the getRandomLower function
  console.log(getRandomLower()); // Random lowercase letter
  
  // Function that returns a random uppercase letter
  function getRandomUpper(){
    // Running the "getRandomLower" function to create a random letter and setting that value to the letter variable
    const letter = getRandomLower();
    // Changing the random letter to an uppercase letter and returning it from the function
    return letter.toUpperCase();
  }
  
  // Example of the getRandomUpper function
  console.log(getRandomUpper()); // Random uppercase letter
  
  
  
  // COMMIT AFTER GENERATORS