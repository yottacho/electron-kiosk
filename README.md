# electron-kiosk

일렉트론으로 키오스크 만들기 템플릿

라즈베리파이에서 사용하기 위해 만들어 봤는데, 내장 크롬 브라우저를 써도 되지만 사용자 기능 추가에 어려움이 있어 일렉트론으로도 테스트

![시작은 헬로우월드부터](./images/20230826.jpg)

전체화면으로 창을 띄우는데 키보드의 alt 를 누르면 시스템 메뉴에 접근할 수 있다.

## Getting started

### Start app

```
npm start
```

### Building distributables

arm64 linux와 크로스 빌드하기 위해서는 `packages.json`과 `forge.config.js` 에서 rpm, deb 관련내용 몽땅 삭제하고 zip만 남긴다.

make 명령은 exe 설치파일 또는 rpm, deb까지 만들고 package 명령은 단순하게 파일 빌드만 한다.

```
npm run make

# arm linux (no exe)
npm run package -- --arch arm64 --platform linux
```

### Publishing

publish는 특정 사이트로 업로드한다.

```
npm run publish
```
