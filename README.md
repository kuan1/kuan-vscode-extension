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
