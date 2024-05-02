function caesarCipher(message, shift, action) {
    var result = "";

    if (action === "encrypt") {
      shift = shift;
    } else if (action === "decrypt") {
      shift = -shift;
    } else {
      return "Invalid action specified!";
    }
  
    for (var i = 0; i < message.length; i++) {
      var char = message[i];
  
      // uppercase
      if (char.match(/[A-Z]/)) {
        var charCode = ((char.charCodeAt(0) - 65 + shift + 26) % 26) + 65;
        result += String.fromCharCode(charCode);
      }
      // lowercase
      else if (char.match(/[a-z]/)) {
        var charCode = ((char.charCodeAt(0) - 97 + shift + 26) % 26) + 97;
        result += String.fromCharCode(charCode);
      }
      // different characters
      else {
        result += char;
      }
    }
  
    return result;
  }
  

  var plaintext = "ceasercypher,cryptography";
  var shift = 3;
  
  var EM = caesarCipher(plaintext, shift, "encrypt");
  var DM = caesarCipher(EM, shift, "decrypt");
  
  console.log("Original message: " + plaintext);
  console.log("Cipher Encrypted : " + EM);
  console.log("Cipher Decrypted : " + DM);
  //122-97+3+26
  