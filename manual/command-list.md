# コマンド一覧
※```package.json```要書き換え
## TypeScriptのコンパイラを実行する
```
npx tsc src/(fileName).ts
```
または
```
npm run build src/(fileName).ts
```
## 生成されたJSプログラムを実行する
```
node dist/(fileName).js
```
または
```
npx tsx src/(fileName).ts
```
または

```(fileName).ts```がアクティブな状態で**Ctrl + Shift + B**
## TSの実行
```
tsx watch src/(fileName).ts
```
または
```
npm run dev src/(fileName).ts
```
## 型チェック
```
npm run typecheck
```
## 自動テスト
```
npm run test:run
```
## テストの監視実行
```
npm run test
```