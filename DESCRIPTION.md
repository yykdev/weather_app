# Weather App

## expor 프로젝트 생성

1. expo init 프로젝트명

2. blank 선택 ( 기본부터 전부 직접 셋팅 )

3. expo 프로젝트 name 입력

4. yarn 사용여부 ‘Y’ 입력

## 추가 필요 라이브러리

> expo Geolocation

```
expo install expo-location
```

> axios

```
yarn add axios
```

> prop-types

```
yarn add prop-types
```

## 참고사항

간혹 Xcode가 설치 돼 있음에도 IOS 시뮬레이션을 실행 시
Xode 실행 관련 오류가 발생 하는 경우가 있다
( 다운 받거나 권한을 확인 하라는 메시지가 출력 됨. )

> sudo xcode-select -s /Applications/Xcode.app

위 명령어를 통해 Xcode 앱을 실행 할 때 관리자 계정으로 실행 하도록 터미널에 입력 해주면 됨
