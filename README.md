# kuan-vscode

hello extension, this is myself habit.

### keybindings

```json
{
  "keybindings": [
    {
      "key": "shift+cmd+k",
      "command": "git.sync"
    },
    {
      "key": "cmd+r",
      "command": "editor.action.startFindReplaceAction"
    },
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
      "key": "alt+cmd+s",
      "command": "workbench.action.files.save"
    },
    {
      "command": "workbench.action.openEditorAtIndex1",
      "key": "alt+1",
      "mac": "alt+1"
    },
    {
      "command": "workbench.action.openEditorAtIndex2",
      "key": "alt+2",
      "mac": "alt+2"
    },
    {
      "command": "workbench.action.openEditorAtIndex3",
      "key": "alt+3",
      "mac": "alt+3"
    },
    {
      "command": "workbench.action.openEditorAtIndex4",
      "key": "alt+4",
      "mac": "alt+4"
    },
    {
      "key": "shift+alt+f",
      "command": "-editor.action.formatDocument",
      "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
    },
    {
      "key": "shift+alt+f",
      "command": "-editor.action.formatDocument.none",
      "when": "editorTextFocus && !editorHasDocumentFormattingProvider && !editorReadonly"
    },
    {
      "key": "shift+alt+f",
      "command": "-notebook.formatCell",
      "when": "editorHasDocumentFormattingProvider && editorTextFocus && inCompositeEditor && notebookEditable && !editorReadonly && activeEditor == 'workbench.editor.notebook'"
    },
    {
      "key": "shift+alt+f",
      "command": "eslint.executeAutofix"
    }
  ]
}
```


### snippets


| prefix     | body                 |
| --------   | -------------------- |
| `c`        | `console.log($1)`    |
| `vuesetup` | `sfc setup script`   |
