# kuan-vscode

hello extension, this is myself habit.

### keybindings

```json
{
  "keybindings": [
  {
    "key": "cmd+d",
    "command": "editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "cmd+s",
    "command": "workbench.action.files.saveAll"
  },
  {
    "key": "cmd+[",
    "command": "-editor.action.outdentLines"
  },
  {
    "key": "cmd+]",
    "command": "-editor.action.indentLines"
  },
  {
    "key": "cmd+[",
    "command": "workbench.action.navigateBackInEditLocations"
  },
  {
    "key": "cmd+]",
    "command": "workbench.action.navigateForwardInEditLocations"
  },
  {
    "key": "cmd+alt+c",
    "command": "kuan-vscode.copyMousePosition",
    "when": "editorTextFocus"
  }
  ]
}
```


### snippets


| prefix     | body                 |
| --------   | -------------------- |
| `clg`        | `console.log($1)`    |
| `clo`        | `console.log('$1', $1)`    |
| `clj`        | `console.log('${1:first}', JSON.stringify(${1:first}, null, 2))`    |
| `vuesetup` | `sfc setup script`   |
