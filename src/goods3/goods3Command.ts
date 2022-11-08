import * as vscode from "vscode";
import * as path from "path";
import {
  Terminal,
  TerminalOptions,
} from "vscode";

export const terminalMapping: Map<string, Terminal> = new Map<string, Terminal>()

export const goods3Command = (command: string) => {
  const cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath || ''
  const name: string = `${path.basename(cwd)} ~ goods3`;
  let terminal: Terminal | undefined;

  if (terminalMapping.has(name)) {
    terminal = terminalMapping.get(name);
  }
  if (!terminal) {
    const terminalOptions: TerminalOptions = { cwd, name };
    terminal = vscode.window.createTerminal(terminalOptions);
    terminalMapping.set(name, terminal);
  }
  terminal.show();
  terminal.sendText(`goods3 ${command}`);
}
