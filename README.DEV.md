## VS Code Marketplace

Token：https://dev.azure.com/luzhongkuan/_usersSettings/tokens（Marketplace → Manage）

```bash
npm install -g @vscode/vsce
vsce login luzhongkuan
vsce publish
```

只打 vsix：

```bash
vsce package
```

## Open VSX（Cursor）

一次性：Eclipse 账号（GitHub Username 与 open-vsx 登录同一号）→ open-vsx.org GitHub 登录 → Settings「Log in with Eclipse」→ 签 Publisher Agreement → 生成 Token 存为 `OVSX_PAT`

```bash
npx ovsx create-namespace luzhongkuan -p "$OVSX_PAT"
npx ovsx publish -p "$OVSX_PAT"
```

已有 vsix：

```bash
npx ovsx publish ./kuan-vscode-0.0.17.vsix -p "$OVSX_PAT"
```

检查：https://open-vsx.org/extension/luzhongkuan/kuan-vscode

## 本地安装 vsix

`Cmd+Shift+P` → `Extensions: Install from VSIX...`
