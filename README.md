- [slideを作成するtoolsの関数定義](./src/tools.ts)
```
    {
      name: "createSectionDividerPage",
      arguments: {
        heading: "How AI Is Reshaping Referencing",
        subheading: "From sources to systems: reliability, traceability, and credit in the age of models",
      },
    },
```
のように関数がよればる

src/runner.tsのtoolsRunnerで、その関数を呼ぶ(handler経由)
handler
  function type
    １つのfileにcreateSectionDividerPage, ....と、関数をexportで全て定義
  class type
    クラスインスタンスにして、createSectionDividerPage...と、メソッドで呼ばれる関数を定義(コンスタントなどでデータの扱いがしやすい)
  function, method共に  (toolsのarguments, {関数名, index})が引数として渡される

---

styleの変更

baseのhtmlのテンプレートの変更
defaultはassets/templates/tailwind.html
tailwind-sea.html に変更可能
```
const handler = new htmlPlugin({ outputDir, rootDir, templateOptions: {htmlTemplateFile: "tailwind-sea"}});
```

defaultのtailwind.htmlで、headerにstyleを追加、変更(headerStyle)
const handler = new htmlPlugin({ outputDir, rootDir, templateOptions: {headerStyle: darkStyle}});

assets/templates/ 以下のhtmlのテンプレートを切り替えて、かつheaderにstyleを差し込むことによってデザインを切り替えられる。
templateOptions: {htmlTemplateFile, headerStyle}

個別の関数に対応するテンプレートはassets/html/
html_class.tsに決め打ちに書いているので、ここを変更してテンプレートの切り替え、もしくはこのファイル以下のテンプレートを更新。

もしくは、htmlPluginなどのハンドラーを差し替えれば、他のテンプレートエンジンが使える（html以外のpdfなど）


- [その関数で生成される80種類のサンプルのデータ](./tests/ai_referencing_80_tool_calls.ts)
- [htmlのテンプレート](assets/html/)


### 80このサンプルデータを使ってhtml -> imageを生成する

```
yarn run generate_all_images
```

outdir/{timeStamp}/{index}.png に画像生成


### openaiのエージェントでprompt -> tools -> html作成

```
yarn run ai
```

プロンプトはソースに直接書いている `src/presentation.ts`
