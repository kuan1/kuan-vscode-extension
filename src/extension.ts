import {dirname} from 'path'
import * as vscode from 'vscode'

import { goods3Command, terminalMapping } from './goods3/goods3Command'

export function activate(context: vscode.ExtensionContext) {
  console.log('kuan-vscode activate')

  // Hello World
  let disposable = vscode.commands.registerCommand('kuan-vscode.helloWorld', () => {
    vscode.window.showInformationMessage('Hello vscode World from kuan vscode!')
  })
  context.subscriptions.push(disposable);

  // 商品3.0命令，循环依赖
  disposable = vscode.commands.registerCommand('kuan-vscode.goods3', () => {
    const filePath = vscode.window.activeTextEditor?.document.uri.fsPath
    if (filePath) {
      goods3Command(filePath)
    } else {
      vscode.window.showWarningMessage('没有找到活跃文件')
    }
  })
  context.subscriptions.push(disposable);

  // 指定目录修改
  disposable = vscode.commands.registerCommand('kuan-vscode.goods3TransofromFolder', () => {
    const filePath = vscode.window.activeTextEditor?.document.uri.fsPath
    if (filePath) {
      goods3Command(`-m 1 ${dirname(filePath)}`)
    } else {
      vscode.window.showWarningMessage('没有找到活跃文件')
    }
  })
  context.subscriptions.push(disposable);

  // 扫描模式
  disposable = vscode.commands.registerCommand('kuan-vscode.goods3Dry', () => {
    const filePath = vscode.window.activeTextEditor?.document.uri.fsPath
    if (filePath) {
      goods3Command(`-d ${filePath}`)
    } else {
      vscode.window.showWarningMessage('没有找到活跃文件')
    }
  })
  context.subscriptions.push(disposable);

  vscode.window.onDidCloseTerminal(term => terminalMapping.delete(term.name));
}

export function deactivate() {
  console.log('deactivate')
}
