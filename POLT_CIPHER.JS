function POLY_CYPHER(plainText,encrypt= true) {
    let keylength = 3;
    var flag = 0;
    if (plainText===plainText.toLowerCase()) {
      plainText = plainText.toUpperCase();
      flag = 1;
    }
    let alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let M1 = "ASDFGHJKLPOIUYTRLWQZXCVBNM";
    let M2 = "QAZWSXEDCRFVTGBYHNUPJMIKOL";
    let M3 = "ZXCVBNMKIOPLUJHYTGPREDSWQA";
    let result = "";
    let keyindex = 0;
    for (let i = 0; i < plainText.length; i++) {
        let char = plainText[i];
        if (!alphabet.includes(char)) {
            result += char;
            continue;
          }
        else{
            keyindex = keyindex%keylength;
            if (encrypt) {
                let charIndex = alphabet.indexOf(char);
                if (keyindex===0) {
                    result += M1[charIndex];
                }
                else if (keyindex===1) {
                    result += M2[charIndex];
                }
                else if (keyindex===2) {
                    result += M3[charIndex];
                }
            }
            else{
                if (keyindex===0) {
                    charIndex = M1.indexOf(char);
                }
                else if (keyindex===1) {;
                    charIndex = M2.indexOf(char);
                }
                else if (keyindex===2) {
                    charIndex = M3.indexOf(char);
                }    
            result +=alphabet[charIndex];    
            }
            keyindex++;
            }
            if (flag===1) {
                result = result.toLowerCase();
            }
             
        }
        return result;        
    }
    

    const plainText = "attackatdawn";
    
    const EM = POLY_CYPHER(plainText, true);
    const DM = POLY_CYPHER(EM, false);
    
    console.log("Plain Text: ", plainText);
    console.log("Encrypted Text: ", EM); 
    console.log("Decrypted Text: ", DM); 
