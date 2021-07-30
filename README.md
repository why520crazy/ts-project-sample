# ts-project-sample

TypeScript Multiple Project Sample

## Source Structure
```
packages
├── app
│   ├── src
│   │   └── main.ts
│   └── tsconfig.json
├── lib1
│   ├── package.json
│   ├── src
│   │   ├── module1
│   │   │   └── index.ts
│   │   └── public-api.ts
│   └── tsconfig.json
└── tsconfig.json
```

## Output Structure

```
dist
├── app
│   └── main.js
├── lib1
│   ├── module1
│   │   ├── index.d.ts
│   │   └── index.js
│   ├── public-api.d.ts
│   └── public-api.js
└── tsconfig.tsbuildinfo
```


## Commands
```
npm run build         // build lib1 and app
npm run build:lib1    // build lib1
npm run build:app     // build app
```