# 판다마켓
중고거래 마켓플레이스 서비스
사용자가 상품을 등록하고, 최신순·좋아요순으로 정렬하며, 상품 목록을 페이지 단위로 탐색할 수 있습니다.

## 프로젝트 구조
```
src
├── api 
│   └── productApi.jsx
├── App.jsx 
├── components  # 공통 UI 컴포넌트 (전역 재사용)
│   ├── Button.jsx
│   ├── CardSkeleton.jsx
│   ├── Header.jsx
│   ├── Input.jsx
│   ├── Layout.jsx
│   └── Pagination.jsx
├── main.jsx
├── product # 상품 도메인 전용 폴더
│   ├── components 
│   │   ├── ProductCard.jsx
│   │   └── ProductFilter.jsx
│   ├── hooks # 데이터/로직 분리용 커스텀 훅
│   │   ├── BestProductList.js
│   │   ├── ProductFilter.js
│   │   └── ProductList.js
│   ├── modules # 상품 영역 단위 블록 컴포넌트
│   │   ├── BestProductList.jsx
│   │   └── GeneralProductList.jsx
│   ├── pages # 라우터 페이지 단위
│   │   └── ProductListPage.jsx
│   └── styles
│       └── index.scss
└── styles # 전역 컴포넌트
    ├── custom.scss
    └── index.scss
```

## 주요 기능

### 헤더
- 상단 네비게이션 메뉴
- 중고마켓 버튼 클릭 시 `/items` 페이지 이동 (빈 페이지)
- 로그인 및 마이페이지 메뉴 포함

### 메인 페이지
- **베스트 상품**: 인기 상품만 모아 카드 형태로 출력
- **전체 상품**: 모든 상품 목록
  - 검색 필터 (useFilter 훅 기반)
  - 최신순 및 좋아요순 정렬 기능
  - 페이지네이션 기능
  - 상품 등록하기 버튼 클릭 시 `/additem` 이동 (빈 페이지)

## 기술 스택
- **Frontend**: React, JavaScript (TypeScript는 추후 확장)
- **라우팅**: React Router DOM
- **HTTP 클라이언트**: Fetch
- **빌드 도구**: Vite
- **스타일링**: Tailwind CSS 및 styled-components 혼합

## 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 개발 노트

- 학습용 프로젝트로 간결하고 유지보수 쉬운 구조 유지
- 기능별 폴더 분리(module, components, hooks)
- 재사용 가능한 공통 컴포넌트(Button, Layout, Input, Pagination) 중심으로 구성
- React Router로 페이지 이동 구조 설계 (/, /items, /additem)
- Tailwind를 학습하여 UI 및 라이브러리 스타일링
- 향후 TypeScript 전환 및 styled-components 통합 리팩토링 예정
