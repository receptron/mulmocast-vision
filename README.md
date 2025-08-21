# toolsの関数定義

```
src/tools.ts
```

# その関数で生成されるサプルのデータ
```
tests/ai_referencing_80_tool_calls.ts
```

# htmlのテンプレート
```
assets/html/
```

# 80このサンプルデータを使ってhtml -> imageを生成する

```
yarn run generate_all_images
```

outdir/{timeStamp}/{index}.png に画像生成


# openaiのエージェントでprompt -> tools -> html作成

```
yarn run ai
```

プロンプトはソースに直接書いている `src/presentation.ts`