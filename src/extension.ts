// eslint-disable-next-line import/no-unresolved
import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  console.log('kuan-vscode activate')

  // Hello World
  let disposable = vscode.commands.registerCommand('kuan-vscode.helloWorld', () => {
    vscode.window.showInformationMessage('Hello vscode World from kuan vscode!')
  })
  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log('deactivate')
}
