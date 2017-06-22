/**
 * Created by ikonovalov on 22/06/17.
 */

const crypto = require('crypto');

class Crypto {

    constructor() { }

    createDecipher(secretKey, options) {
        const algorithm = options.algorithm;
        const iv = options.iv;
        return {
            decipher: crypto.createDecipheriv(algorithm, secretKey, iv),
            iv: iv,
            algorithm: algorithm
        };
    }

    decryptStream(sourceStream, destinationStream, secretKey, options = {}, callback) {
        const decipherIv = this.createDecipher(secretKey, options);
        sourceStream.pipe(decipherIv.decipher).pipe(destinationStream);
        destinationStream.on('finish', () => {
            if (callback) {
                callback()
            }
        });
    }
}

module.exports = new Crypto();