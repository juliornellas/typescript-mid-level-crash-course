# Init Typescript

Example of real code.

### Typescript configuration

<code>
tsc --init
</code>

### Packeges

<code>
npm init -y
</code>

1. Create index.html file
2. Create two folders: /dist and /src
3. Inside /dist create index.js. This is were the tpescript will be compiled.
4. Inside /src create a index.ts. This is were we will write our typescript code.
5. Into index.html point to './dist/index.js'

## tsconfig.json

1. Uncomment 'outDir' and point to /dist folder:
   <code>
   "outDir":"./dist"
   </code>

## Wathcing changes

### Using Typescript

<code>tsc -w</code>

### and Lite-server

1. npm i lite-server
2. Into package.json:
   Put: "start": "lite-server"
