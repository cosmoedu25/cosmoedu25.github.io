# 코스모에듀벤처 웹사이트

코스모에듀벤처는 학교 맞춤형 코딩 교육 프로그램을 제공하는 교육 기관입니다. 이 저장소는 코스모에듀벤처의 공식 웹사이트 소스 코드를 포함하고 있습니다.

## 기술 스택

- HTML5
- CSS3
- JavaScript (ES6+)
- 반응형 웹 디자인
- 웹 접근성 준수

## 파일 구조

```
/
├── css/                    # CSS 파일 디렉토리
│   ├── variables.css       # CSS 변수
│   ├── base.css            # 기본 스타일
│   ├── header.css          # 헤더 스타일
│   ├── footer.css          # 푸터 스타일
│   ├── home.css            # 홈페이지 스타일
│   ├── programs.css        # 프로그램 페이지 스타일
│   ├── about.css           # 소개 페이지 스타일
│   ├── teacher.css         # 교원연수 페이지 스타일
│   ├── popup.css           # 팝업 관련 스타일
│   └── style.css           # 메인 스타일시트 (모든 CSS 임포트)
│
├── js/                     # JavaScript 파일 디렉토리
│   ├── utils.js            # 유틸리티 함수
│   ├── header.js           # 헤더 관련 기능
│   ├── popup.js            # 팝업 관련 기능
│   ├── forms.js            # 폼 유효성 검사 기능
│   ├── programs.js         # 프로그램 데이터 관리 기능
│   ├── carousel.js         # 무한 슬라이더 기능
│   └── main.js             # 메인 JavaScript 파일 (페이지별 모듈 초기화)
│
├── data/                   # 데이터 파일 디렉토리
│   └── programs.json       # 프로그램 데이터
│
├── img/                    # 이미지 디렉토리
│   ├── logo.png            # 로고 이미지
│   ├── logo_36.png         # 작은 로고 이미지
│   ├── hero_img.jpg        # 홈페이지 배너 이미지
│   ├── mentor1.png         # 멘토 이미지
│   ├── mentor2.png         # 멘토 이미지
│   ├── mentor3.png         # 멘토 이미지
│   ├── mentor4.png         # 멘토 이미지
│   ├── program-*.jpg       # 프로그램 관련 이미지들
│   └── favicon.png         # 파비콘
│
├── index.html              # 메인 페이지
├── about.html              # 소개 페이지
├── course.html             # 프로그램 목록 페이지
├── program-detail.html     # 프로그램 상세 페이지
├── teacher.html            # 교원 연수 페이지
├── apply.html              # 교육 프로그램 신청 페이지
├── robots.txt              # 검색 엔진 로봇 제어 파일
├── sitemap.xml             # 사이트맵
└── README.md               # 프로젝트 설명 파일
```

## 주요 개선사항

원본 웹사이트에서 다음과 같은 개선 사항이 적용되었습니다:

1. **코드 모듈화**
   - CSS를 기능별로 분리하여 유지보수성 향상
   - JavaScript 모듈 패턴 적용으로 코드 구조화
   - 페이지별 필요한 모듈만 로드하도록 최적화

2. **성능 최적화**
   - 이미지 최적화 (lazy loading 적용)
   - JavaScript 디바운싱을 통한 성능 향상
   - CSS 애니메이션 최적화 (will-change 속성 사용)
   - 지연 로딩 기술 적용 (Google Form iframe)
   - 더 효율적인 무한 슬라이더 구현 (DOM 요소 중복 제거)

3. **접근성 향상**
   - 시맨틱 HTML 태그 적극 활용
   - ARIA 속성 추가 (aria-expanded, aria-controls 등)
   - 키보드 접근성 개선 (포커스 관리, ESC 키 지원)
   - 상세한 alt 텍스트 제공

4. **유지보수성 개선**
   - 프로그램 데이터를 별도 JSON 파일로 분리
   - 유틸리티 함수 모듈화
   - 모듈 간 의존성 최소화
   - 주석 처리된 불필요한 코드 제거

5. **호환성 개선**
   - 다양한 브라우저 지원 (Firefox 호환성 추가)
   - 미디어 쿼리 세분화로 다양한 화면 크기 대응
   - 모바일 최소 너비 제한 제거로 작은 화면 지원

6. **사용자 경험 개선**
   - 신청 기능을 별도 페이지로 분리하여 접근성 향상
   - 로딩 애니메이션 추가
   - 반응형 디자인 최적화

7. **SEO 최적화**
   - 메타 태그 개선
   - robots.txt 및 sitemap.xml 추가
   - 시맨틱 마크업 적용

## 사용 방법

이 웹사이트는 별도의 서버 설정 없이 웹 브라우저에서 직접 실행할 수 있습니다.

1. 저장소를 클론합니다.
2. 웹 브라우저에서 index.html 파일을 엽니다.

또는 다음 URL에서 라이브 버전을 볼 수 있습니다:
https://cosmoedu25.github.io/

## 연락처

프로젝트 관련 문의는 다음 연락처로 부탁드립니다:
- 이메일: cosmoedu@cosmoedu.co.kr
- 전화: 070-4337-4337

## 라이센스

© 2024 코스모에듀벤처. All rights reserved.
