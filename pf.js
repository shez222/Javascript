function playfairCipher(key, message, mode) {
    function generatePlayfairMatrix(key) {  //YA FUNC MATRIX BANANA KA LIYA HA
        key = key.replace(/ /g, "").toUpperCase();
        key = key + "ABCDEFGHIKLMNOPQRSTUVWXYZ";
        const matrix = [];
        for (let i = 0; i < key.length; i++) {
            if (!matrix.includes(key[i])) {
                matrix.push(key[i]);
            }
        }
        const playfairMatrix = [];
        for (let i = 0; i < matrix.length; i += 5) {
            playfairMatrix.push(matrix.slice(i, i + 5));
        }
        return playfairMatrix;
    }

    function findCoordinates(matrix, char) {
        for (let i = 0; i < matrix.length; i++) {
            const j = matrix[i].indexOf(char);
            if (j !== -1) {
                return [i, j];
            }
        }
    }

    function encryptDecrypt(matrix, pairs, direction) {  //MAIN FUNC
        let result = "";
        for (let pair of pairs) {
            const char1 = pair[0];
            const char2 = pair[1];
            const [i1, j1] = findCoordinates(matrix, char1);
            const [i2, j2] = findCoordinates(matrix, char2);
            if (i1 === i2) {
                result += matrix[i1][(j1 + direction + 5) % 5] + matrix[i2][(j2 + direction + 5) % 5];
            } else if (j1 === j2) {
                result += matrix[(i1 + direction + 5) % 5][j1] + matrix[(i2 + direction + 5) % 5][j2];
            } else {
                result += matrix[i1][j2] + matrix[i2][j1];
            }
        }
        return result;
    }

    const keyMatrix = generatePlayfairMatrix(key);
    message = message.replace(/ /g, "").toUpperCase();

    if (mode === "encrypt") {
        message = message.replace(/J/g, "I");
        if (message.length % 2 !== 0) {
            message += "X";
        }
        const pairs = [];
        for (let i = 0; i < message.length; i += 2) {
            pairs.push(message.slice(i, i + 2));
        }
        const encryptedMessage = encryptDecrypt(keyMatrix, pairs, 1);
        return encryptedMessage;
    } else if (mode === "decrypt") {
        const pairs = [];
        for (let i = 0; i < message.length; i += 2) {
            pairs.push(message.slice(i, i + 2));
        }
        const decryptedMessage = encryptDecrypt(keyMatrix, pairs, -1);
        return decryptedMessage.replace(/X/g, "");
    }
}


const key = "monarchy";
const PLAINTEXT = "balloon";
const EM = playfairCipher(key, PLAINTEXT, "encrypt");
const DM = playfairCipher(key, EM, "decrypt");

console.log("PLAIN TEXT:", PLAINTEXT);
console.log("Encrypted Message:", EM);
console.log("Decrypted Message:", DM);
