// eslint-disable-next-line import/no-unresolved
import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  console.log('kuan-vscode activate')

  const copyMousePosition = vscode.commands.registerCommand(
    'kuan-vscode.copyMousePosition',
    async () => {
      const editor = vscode.window.activeTextEditor
      if (!editor) {
        return
      }

      const { document, selection } = editor
      const position = selection.active
      const text = `${document.uri.fsPath}:${position.line + 1}:${position.character + 1}`
      await vscode.env.clipboard.writeText(text)
      vscode.window.setStatusBarMessage(`已复制 ${text}`, 2000)
    }
  )
  context.subscriptions.push(copyMousePosition)
}

export function deactivate() {
  console.log('deactivate')
}
