/*
 * @Description: description
 * @Author: kunyu.cao@hlifetech.com
 * @Date: 2021-10-13 00:09:58
 * @LastEditors: kunyu.cao@hlifetech.com
 * @LastEditTime: 2021-10-13 00:20:59
 */

const vscode = require('vscode');

function activate(context) {
    vscode.languages.registerCompletionItemProvider('plaintext', {
        provideCompletionItems: (document, position) => {
            console.log('context', context);
            console.log('document', document);
            console.log('position', position);
            return [
                {
                    label: 'mySuggestion',
                    insertText: 'mySuggestion'
                }
            ]
        }
    }, ['.'])
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;
