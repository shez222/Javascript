// function vigenereCipher(text, key, encrypt = true) {
  
//   key = key.toUpperCase();
//   var flag = 0;
//   if (text===text.toLowerCase()) {
//     text = text.toUpperCase();
//     flag = 1;
//   }
  
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let result = '';

//   let keyIndex = 0;
//   for (let i = 0; i < text.length; i++) {
//     const char = text[i];
//     if (!alphabet.includes(char)) {
//       result += char;
//       continue;
//     }

//     const keyChar = key[keyIndex % key.length];
//     const keyShift = alphabet.indexOf(keyChar);

//     const charIndex = alphabet.indexOf(char);
//     let shiftedIndex;

//     if (encrypt) {
//       shiftedIndex = (charIndex + keyShift) % alphabet.length;
//     } else {
//       shiftedIndex = (charIndex - keyShift + alphabet.length) % alphabet.length;
//     }

//     result += alphabet[shiftedIndex];

//     keyIndex++;
//   }
//   if (flag===1) {
//     result = result.toLowerCase();
//   }

//   return result;
// }

// const plainText = "vigenercypher,cryptography";
// const key = "lemon";

// const EM = vigenereCipher(plainText, key, true);
// const DM = vigenereCipher(EM, key, false);

// console.log("Plain Text: ", plainText);
// console.log("Encrypted Text: ", EM); 
// console.log("Decrypted Text: ", DM); 
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(alphabet.length);