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


## References
- https://github.com/microsoft/TypeScript/issues/30693
- https://github.com/microsoft/TypeScript/issues/21967
- https://github.com/microsoft/TypeScript/issues/9858
- https://haseebmajid.dev/blog/better-imports-with-babel-tspath
- https://stackoverflow.com/questions/60010702/reference-typescript-project-outside-of-the-source-folder
- https://stackoverflow.com/questions/57422458/error-ts6059-file-is-not-under-rootdir-rootdir-is-expected-to-contain-al/65676678#65676678
- https://github.com/microsoft/TypeScript/issues/37257