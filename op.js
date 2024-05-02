function oneTimePad(message, key, mode) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    if (mode !== 'encrypt' && mode !== 'decrypt') {
        throw new Error("Mode must be 'encrypt' or 'decrypt'");
    }
    
    if (message.length !== key.length) {
        throw new Error("Message and key lengths must be the same");
    }
    
    let result = '';
    for (let i = 0; i < message.length; i++) {
        const messageChar = message[i];
        const keyChar = key[i];
        
        const alphabetIndex = alphabet.indexOf(messageChar);
        if (alphabetIndex === -1) {
            result += messageChar; // Preserve non-alphabet characters as is
            continue;
        }
        
        let shiftedIndex;
        if (mode === 'encrypt') {
            shiftedIndex = (alphabet.indexOf(messageChar) + alphabet.indexOf(keyChar)) % 26;
        } else {
            shiftedIndex = (alphabet.indexOf(messageChar) - alphabet.indexOf(keyChar) + 26) % 26;
        }
        
        result += alphabet[shiftedIndex];
    }
    
    return result;
}


const PLAINTEXT = "hello";
const key = "money";
const EM = oneTimePad(PLAINTEXT, key, 'encrypt');
console.log("Encrypted:", EM);

const DM = oneTimePad(EM, key, 'decrypt');
console.log("Decrypted:", DM);
