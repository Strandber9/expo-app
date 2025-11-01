# Expo로 React Native Web 프로젝트 시작 가이드

이 가이드는 Expo를 사용해 React Native Web 프로젝트를 생성하고 실행하는 방법을 단계별로 설명합니다.


## 1. Expo 프로젝트 생성 (공식 권장)

기존 expo-cli, expo init은 더 이상 사용하지 않습니다.
이제는 아래와 같이 프로젝트를 생성하세요:

```bash
npx create-expo-app my-app
```
- 템플릿 선택: `blank (TypeScript)` 또는 원하는 템플릿 선택
- 디렉토리 이동: `cd my-app`

> 참고: expo-cli, expo init은 Node.js 17 이상에서 지원되지 않으며, 공식적으로도 사용이 중단되었습니다.


## 2. 프로젝트 실행

### 모바일(Expo Go 앱 사용)
```bash
npm start
```
또는
```bash
npx expo start
```
- QR코드를 스마트폰의 Expo Go 앱으로 스캔하면 바로 앱을 미리볼 수 있습니다.

### 웹 브라우저
```bash
npx expo start --web
```
- 또는 `npx expo start` 후 터미널에서 `w` 입력
- 기본 브라우저에서 React Native Web 앱이 실행됩니다.


## 3. 주요 명령어 요약
- `npx expo start` : 개발 서버 실행 (모바일/웹 동시 지원)
- `npx expo start --web` : 웹 전용 개발 서버 실행
- `expo install <패키지명>` : Expo 호환 패키지 설치
- `npx expo export` : 정적 웹사이트로 내보내기(웹 배포용)


## 4. 참고 사항
- Expo Go 앱은 [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) 또는 [App Store](https://apps.apple.com/app/expo-go/id982107779)에서 설치
- 웹 지원은 Expo SDK 33 이상에서 기본 제공
- 네이티브 모듈이 필요한 경우 `eas build` 사용

---

추가적인 설정, 배포, 네이티브 모듈 연동 등은 [공식 Expo 문서](https://docs.expo.dev/)를 참고하세요.
