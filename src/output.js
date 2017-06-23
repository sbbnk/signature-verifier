/*
 *  Copyright (C) 2017 Igor Konovalov
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

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