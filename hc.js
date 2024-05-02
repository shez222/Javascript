// // Function to compute the modular inverse of a number
function modInverse(a, m) {
    a = (a % m + m) % m;
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) {
            return x;
        }
    }
    return 1;
}

// // Function to encrypt a message using Hill cipher
// function hillCipherEncrypt(keyMatrix, message) {
//     const keySize = keyMatrix.length;
//     const messageSize = message.length;
    
//     // Padding the message if its length is not a multiple of keySize
//     while (messageSize % keySize !== 0) {
//         message += 'X';
//     }

//     const encryptedMessage = [];
    
//     for (let i = 0; i < messageSize; i += keySize) {
//         const block = message.slice(i, i + keySize);
//         const blockVector = [];
        
//         for (let j = 0; j < keySize; j++) {
//             let sum = 0;
//             for (let k = 0; k < keySize; k++) {
//                 sum += keyMatrix[j][k] * (block.charCodeAt(k) - 65); // Assuming uppercase letters
//             }
//             blockVector.push(String.fromCharCode((sum % 26) + 65)); // Assuming modulo 26 and converting back to letters
//         }
        
//         encryptedMessage.push(blockVector.join(''));
//     }
    
//     return encryptedMessage.join('');
// }

// // Example usage
// const keyMatrix = [
//     [6, 24, 1],
//     [13, 16, 10],
//     [20, 17, 15]
// ];

// const plaintext = "HELLOHILL";

// const encryptedText = hillCipherEncrypt(keyMatrix, plaintext);
// console.log("Encrypted: " + encryptedText);
// Function to compute the determinant of a 2x2 matrix
function determinant(matrix) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

// Function to compute the adjugate of a 2x2 matrix
function adjugate(matrix) {
    return [
        [matrix[1][1], -matrix[0][1]],
        [-matrix[1][0], matrix[0][0]]
    ];
}

// Function to decrypt a message using Hill cipher
function hillCipherDecrypt(keyMatrix, encryptedMessage) {
    const keySize = keyMatrix.length;
    const inverseDet = modInverse(determinant(keyMatrix), 26);

    const inverseKeyMatrix = [
        [keyMatrix[1][1], -keyMatrix[0][1]],
        [-keyMatrix[1][0], keyMatrix[0][0]]
    ];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            inverseKeyMatrix[i][j] = (inverseKeyMatrix[i][j] * inverseDet + 26) % 26;
        }
    }

    const decryptedMessage = [];

    for (let i = 0; i < encryptedMessage.length; i += keySize) {
        const block = encryptedMessage.slice(i, i + keySize);
        const blockVector = [];

        for (let j = 0; j < keySize; j++) {
            let sum = 0;
            for (let k = 0; k < keySize; k++) {
                sum += inverseKeyMatrix[j][k] * (block.charCodeAt(k) - 65); // Assuming uppercase letters
            }
            blockVector.push(String.fromCharCode(((sum % 26) + 26) % 26 + 65)); // Assuming modulo 26 and converting back to letters
        }

        decryptedMessage.push(blockVector.join(''));
    }

    return decryptedMessage.join('');
}

// Example usage
const keyMatrix = [
    [6, 24, 1],
    [13, 16, 10],
    [20, 17, 15]
];
const  encryptedText = "TFJTVRLAS"
const decryptedText = hillCipherDecrypt(keyMatrix, encryptedText);
console.log("Decrypted: " + decryptedText);
