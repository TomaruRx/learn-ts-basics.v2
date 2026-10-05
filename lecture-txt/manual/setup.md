# 環境構築のすゝめ

## 依存関係の再インストール
※作成済みの```package.json```と```package-lock.json```がある場合
```
npm ci
```
- ロックファイルに記録した依存関係を再インストールする

## npmとローカルインストール
Ctrl + Jでターミナルを開く
```
npm init -y
npm i -D --save-exact typescript@6.0.3 @types/node@24.13.6
```
- ```package.json```の作成
- 指定したverのライブラリを現在のプロジェクトにローカルインストールする

これで```package.json```と```package-lock.json```という2つのファイル及び```node_modules```というフォルダが作成される

## package.jsonの設定
package.json(講義準拠，必要最小限)
```
{
  "name": "(fileName)",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "devDependencies": {
    "@types/node": "24.13.6",
    "typescript": "6.0.3"
  }
}
```

## 設定の確認
ターミナル
```
npx tsc -v
npm list --depth=0
```
- tscのバージョン確認
- インストールしたパッケージのバージョン確認(最上位層のみ表示)

## TypeScriptの設定
ターミナル
```
npx tsc --init
```
- ```tsconfig.json```の作成

tsconfig.json(講義準拠)
```
{
  "compilerOptions": {
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "NodeNext",
    "moduleDetection": "force",
    "rootDir": "./src",
    "outDir": "./dist",
    "types": ["node"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "verbatimModuleSyntax": true,
    "noEmitOnError": true,
    "sourceMap": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"]
}
```
- ```rootDir```：ソースファイルの配置の基準の規定
- ```outDir```：生成したJavaScriptの出力場所の規定
- ```include```：どのファイルをTypeScriptのコンパイル対象にするかの規定(例：src内のすべての.tsファイルを対象にする)
- ```types```：Node.jsで使う機能の型情報を読み込むようにする規定
- ```strict```：厳密な型チェックを有効にする
- ```noEmitOnError```：型などにエラーがあるとき，新しいJSファイルを出力しないようにする

## テスト用```.ts```ファイルの作成
ルートに```src```フォルダを作成し，適当な```.ts```ファイルを作成しておく

テストプログラム(```testProgram.ts```)
```
function greetAndCalculate(name: string, a: number, b: number): string {
  const sum: number = a + b;
  return `Hello, ${name}! The sum of ${a} and ${b} is ${sum}.`;
}

const userName: string = "Alice";
const x: number = 10;
const y: number = 20;

const result: string = greetAndCalculate(userName, x, y);
console.log(result);
```
テストプログラムの実行
```
npx tsc
node dist/testProgram.js
```
- TSのコンパイラを実行
- JSプログラムの実行

## VSCodeで使用するTypeScriptをそろえる
- ルートに```.vscode```フォルダを作成
- ```.vscode/settings.json```の作成

settings.json
```
{
  "js/ts.tsdk.path": "./node_modules/typescript/lib",
  "js/ts.tsdk.promptToUseWorkspaceVersion": true
}
```
- 使用したいTypeScriptの場所の設定
- そのワークスペース版を使うか確認する案内を有効にする設定

.tsのタブへ切り替え，**Ctrl + Shift + P**から**TypeScript: Select TypeScript Version**を入力・実行


### 設定できたかの確認
- ルートのターミナルで```npx tsc -v```を実行
- .tsを開いてTypeScript: Select TypeScript Versionの先頭に丸印(・)が付いているかを確認

## tsxとVitestの追加
ターミナル
```
npm i -D --save-exact tsx@4.23.15 vitest@5.0.1 vite@8.3.0
```
- tsxとvitest(ライブラリ)のインストール

package.jsonの書き換え
```
{
  "name": "(fileName)",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "tsx watch",
    "build": "tsc",
    "typecheck": "tsc --noEmit",
    "test": "vitest",
    "test:run": "vitest run"
  },
  "devDependencies": {
    "@types/node": "24.13.6",
    "tsx": "4.23.15",
    "typescript": "6.0.3",
    "vite": "8.3.0",
    "vitest": "5.0.1"
  }
}
```
- scriptsでよく使うコマンドに名前を付ける

## VSCodeから現在のTSファイルを実行
```.vscode/tasks.json```の作成

tasks.json
```
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run Current TypeScript File",
      "type": "shell",
      "command": "npx",
      "args": ["tsx", "${file}"],
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "reveal": "always",
        "panel": "dedicated",
        "echo": true
      },
      "problemMatcher": []
    }
  ]
}
```
※"command"について，linux環境の場合は```npx```，Windows環境の場合は```npx.cmd```と記述する

.tsファイルを開いて保存したのち，**Ctrl + Shift + B**でショートカットが機能することを確認する(ビルド用のショートカットにtsxによる実行を割り当てている)

## Vitest と VSCode 拡張機能の動作確認
テストツールが動く環境になっていることを確認する

ルートに```vitest.config.js```を作成

vitest.config.json
```
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    environment: "node",
  },
});
```
- ```include```で```src```内の```.test.ts```だけをテスト対象にする
- ```environment```で，テストするコードをNode.jsの環境で動かすための指定をする

### テストプログラムのテスト
```src```に```.test.ts```ファイルを作成する

テストプログラムのテスト用プログラム(```testProgram.test.ts```)
```
import { expect, test } from "vitest";

test("10と20の合計が30になる", () => {
  expect(10 + 20).toBe(30);
});
```
- 実際の値が，期待した値と一致するかを確認する

ターミナル
```
npm run typecheck
npm run test:run
```
- テストを実行する

また，VSCode画面左側「テスト」でもテストしてみる
(拡張機能：**Vitest**をインストールしておく)

# 参考資料
[プログラミング3 第01回 講義資料](https://takeshiwada1980.github.io/Programming3-2026/lecture01.html#typescript-の基礎学習のための環境構築)