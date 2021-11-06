// Sum
// let sum = (num1, num2) => num1 + num2; 
// sum(22, 10); // 32

//Log Quote undefined 

// let cite = (author, quote) => console.log(`${author} said: "${quote}"`);
// cite('Brendan Eich', 'Always bet on JavaScript.');

// Squared number 
// let squaredNumber = num => num**2
// squaredNumber(3); // 9

// Display Division - nothing, because the function isn't called. 

// Three-way comparison 
// let compareByLength = (str1, str2) => {
//   if (str1.length < str2.length) return -1; 
//   if (str2.length < str1.length) return 1;
//   if (str1.length === str2.length) return 0;
// }
// compareByLength('patience', 'perseverance'); // -1
// compareByLength('strength', 'dignity');      //  1
// compareByLength('humor', 'grace');           //  0

// Transformation 
// "Captain Ruby".replace("Ruby", "JavaScript");

// Internationalization 1
let greet = code => {
  switch(code) {
    case "en": 
      return "Hi!";
      break; 
    case "fr": 
      return "Salut!";
      break; 
    case "pt": 
      return "Olá!";
      break; 
    case "de": 
      return "Hallo!";
      break; 
    case "sv": 
      return "Hej!";
      break; 
    case "af": 
      return "Haai!";
      break; 
  }
}

// Locale Part 1

// let extractLanguage = locale => locale.split("_")[0];

// console.log(extractLanguage('en_US.UTF-8'));  // 'en'
// console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
// console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

// Locale Part 2 

// let extractRegion = locale => locale.split(".")[0].split("_")[1];

// console.log(extractRegion('en_US.UTF-8'));  // 'US'
// console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
// console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

// Internationalization 2 
// let localGreet = locale => {
//   let language =  extractLanguage(locale);
//   let region = extractRegion(locale);
//   switch(region) {
//     case "US": 
//       return "Hey!"; 
//       break;  
//     case "GB": 
//       return "Hello!"; 
//       break; 
//     case "AU": 
//       return "Howdy!";
//       break;
//     default: 
//       return greet(language);
//   }
// }
