/**
 * Created by ikonovalov on 11/05/17.
 */

module.exports = {

    printHelpAndExit: () => {
        console.log(require('command-line-usage')([
            {
                content: require('../src/ansi-header').dim.green,
                raw: true
            },
            {
                header: 'Description',
                content: "Offline decryption and verification SLOC tool."
            },
            {
                header: 'Options',
                optionList: require('./cli-options').definitions
            },
            {
                header: 'Example',
                content: 'dredd --tag sample/tag.json --file sample/payload.encypted --public sample/secp256k1.pub',
                raw: true
            }
        ]));
        process.exit(0);
    },

    printVersionAndExit: () => {
        console.log(require('../package.json').version);
        process.exit(0);
    }
};