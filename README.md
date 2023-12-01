# 프로젝트 명

- 포트폴리오 메인 사이트

## 프로젝트 개요

- Server단(express)과 Client단(react.js)으로 사이트 구성
- proxy로 클라이언트와 API 서버 간의 인터페이스 형성
- axios로 요청, 응답 처리
- eslint, prettier를 이용하여 버그를 분석하여 해결하고 질 좋은 코드를 작성
- node.js 형식으로 cafe24 호스팅 배포

## 기술 스택

### Server

- express는 Node.js 기반의 웹 프레임워크로, 웹 애플리케이션 및 API를 개발하기 위해 사용됩니다.
- nodemon는 개발 시 자동 재시작을 제공하는 도구입니다.
- concurrently는 서버와 클라이언트를 동시에 실행할 수 있도록 도와줍니다.
- proxy는 CORS 에러를 해결하여 클라이언트에 보다 안정적인 인터페이스를 제공할 수 있습니다.
- http-proxy-middleware는 HTTP 요청을 프록시 서버로 전달하고 응답을 받을 수 있습니다.

* 학습 : CORS는 왜 발생 하는가? 요청을 보내는 클라이언트 서버와 요청을 받는 서버의 도메인이 다를 때 생기는 문제

### Client

- HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다.
- react를 사용하여 사이트를 번들링하고 관리합니다.
- gsap를 이용하여 패럴랙스 효과를 줍니다.
- lenis를 이용하여 smooth 효과를 구현합니다.
- http-proxy-middleware를 이용하여 효율적이고 유지보수를 향상시킵니다.
- axios를 이용하여 클라이언트와 서버 간에 HTTP 요청을 보내고 응답을 받습니다.
- cafe24를 통해 사이트를 배포합니다.
- git을 사용하여 파일을 관리합니다.

### eslint-config-prettier

- eslint, prettier를 설치하여 코드분석의 편의성을 높입니다.
- eslint-config-prettier를 설치하여 rule이 겹치는 충돌을 막습니다.

## 프로젝트 실행

### (중요) 개발환경 초기설정

- Express-generator는 Express환경을 간단하게 구축해줍니다.  
  `npm install -g express-generator`
- Express App 생성과 폴더 이름을 지정합니다.  
  `$ express server && cd server`
- install을 하고 앱을 실행합니다.
  `npm install`  
  `npm start`
- 클라이언트 폴더로 이름을 지정하고 리액트 프로젝트 개발 환경을 구축합니다.  
  `npx create-react-app client`
- client .json 파일에 port를 지정합니다.  
  `"scripts": {`  
  `  "start": "set PORT=3000 && react-scripts start",`
- express 폴더에 있는 bin폴더의 www파일에서 파일명과 포트번호를 변경합니다. (카페24 web.js를 인식, 포트번호는 8001)  
  `var app = require("../web");`  
  `var port = normalizePort(process.env.PORT || '8001');`
- Express API 와 React 클라이언트 연결합니다.
- client 프로젝트에서 .json 파일을 열어서 프록시를 설정합니다.  
  ` },`  
   `"proxy": {`  
   `"/api": {`  
   `"target": "https://iniapi.inicis.com/localhost8001"`  
   `},`  
   `"/apis": {`  
  `"target": "https://inirt.inicis.com/localhost3000"`  
  `}`  
  `},`  
  `"eslintConfig": {`
- client 프로젝트에서 http-proxy-middleware를 인스톨합니다.  
  `npm install http-proxy-middleware`
- client > scr > setupProxy.js 파일을 생성과 코드 작성을 합니다.  
  `const { createProxyMiddleware } = require("http-proxy-middleware");`  
  `module.exports = (app) => {`  
  `app.use(`  
  `createProxyMiddleware("/api/v1/refund", {`  
  `// server`  
  `target: "https://inirt.inicis.com/api/localhost:8001",`  
  `changeOrigin: true,`  
  `})`  
  `);`  
  `app.use(`  
  `createProxyMiddleware("/apis/v1/rental/modify", {`  
  `// client`  
  `target: "https://inirt.inicis.com/apis/localhost:3000",`
  `changeOrigin: true,`  
  `})`
- server 프로젝트에서 nodemon, concurrently를 설치합니다.  
  `npm install nodemon concurrently`
- server 프로젝트의 .json에 scripts 명령어를 넣습니다.  
   `  "scripts": {`  
   `"server": "nodemon web.js",` npm run server를 입력하면 nodemon web이 실행  
   `"client": "npm start --prefix client",` npm run client를 입력하면 client폴더로 이동하여 npm start 실행  
   `"start": "concurrently \"npm run server\" \"npm run client\""` npm run start를 입력하면 npm run server와 npm run client가 동시에 실행  
  `},`
- client 프로젝트에서 react-router-dom, axios를 설치합니다.  
  `npm install --save react-router-dom axios`
- App.jsx 파일에 axios 명령어를 입력합니다.  
   `useEffect(() => {`  
   `axios`  
   `.get("/api/localhost:8001")` server의 web.js로 보냄  
   `.then((response) => console.log(response.data));` server에서 돌아온 response를 콘솔창에 출력!  
   `}, []);`
  `
- client 프로젝트에 redux를 설치합니다.  
  `npm install --save react-redux`

- 카페24 배포 git 초기설정 (node.js 호스팅)

* key를 생성합니다. (C:\Users\username\.ssh)  
  `ssh-keygen -t rsa -C "키 명칭`
* id_rsa.pub를 열고 카페24에 키를 등록합니다.
* 앱 생성하고 key 할당으로 앱에 키를 등록합니다.
* git remote 순서 client -> server -> cafe24 -> port2023-mainsite
* git 최상위 폴더에 하위폴더에 화살표 표시가 날 경우 -> 이유: 해당폴더에 .git 폴더가 생겨서 문제 발생
* 해결: .git 파일제거 -> 스테이지 파일 제거 -> add, commit, push 진행
* 문제가 발생하는 디렉토리에서 .git 파일제거  
  순서 (조회:ls -al -> 해당 파일 제거: rm -rf .git -> 확인: ls -al)
  `ls -al`  
   `rm -rf .git`  
   `ls -al`
* 스테이지에 존재하는 파일 제거  
  순서 (git rm --cached . -rf -> git status)  
  `git rm --cached . -rf`  
  `git status`
* add, comit, push 진행
* git 초기 설정  
  `git init`  
  `git add .`  
  `git commit -m ""`
* 카페 24 연결 (저장소 이름 확인 git은 제외하고 복사)  
  `git remote add cafe24 user@user01.cafe24app.com:user_user01`  
  `git push cafe24 master`

### Server

- express, nodemon, concurrently를 설치합니다.
  `$ npm install nodemon concurrently`
- http-proxy-middleware를 설치합니다.
  `npm install --save http-proxy-middleware `

### Client

- react-router-dom, sass, gsap, lenis를 설치합니다.  
  `npm install react-router-dom sass gsap @studio-freight/lenis`
- axios를 설치합니다.
  `npm install axios`
- http-proxy-middleware를 설치합니다.
  `npm install --save-dev http-proxy-middleware`

### prettier, eslint

- pretteier를 설치합니다.
  `npm install prettier --save-dev`
- eslint를 설치합니다.
  `npm install eslint --save-dev`
- eslint-config-prettier를 설치합니다.
  `npm install eslint-config-prettier --save-dev`
- node_modules > eslint-plugin-jsx-ally > .eslintrc에 코드를 추가합니다.  
   `{
  "plugins": [
  "jsx-ally"
],
"rules": {
  "jsx-a11y/rule-name": 2,
  "react/prop-types": "off",
  "no-var": "error",
  "no-multiple-empty-lines": "error",
  "no-console": "off",
  "eqeqeq": "error",
  "dot-notation": "error",
  "no-unused-vars": "error"
},
"extends": [
  "react-app",
  "eslint:recommended",
  "prettier",
  "airbnb-base",
  "plugin:jsx-a11y/recommended"
]
}`

- Client 디렉토리 > .eslintrc.cjs에 .eslintr 에 있는 rules를 추가합니다.
