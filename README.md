# 판다마켓

중고거래 마켓플레이스 서비스

## 📁 프로젝트 구조

```
📁 product/
├── 📁 components/              # 공통 컴포넌트
│   ├── 📄 ProductCard.jsx
│   ├── 📄 ProductCard.styled.js
│   ├── 📄 ProductList.jsx
│   └── 📄 ProductList.styled.js
│
├── 📁 hooks/                   # 공통 훅
│   └── 📄 useProductList.js    # 기본 리스트 가져오기 (최신순)
│
├── 📁 module/                  # 기능별 모듈
│   │
│   ├── 📁 best-product-list/   # 베스트 상품 모듈
│   │   ├── 📄 BestProductList.jsx
│   │   ├── 📄 BestProductList.styled.js
│   │   └── 📄 useBestProductList.js  # 파라미터 베스트순으로 요청해서 상위 베스트 4개 리스트 뿌리기
│   │
│   ├── 📁 filter/              # 필터 모듈
│   │   ├── 📄 Filter.jsx
│   │   ├── 📄 Filter.styled.js
│   │   └── 📄 useFilter.js     # 드롭다운 제어 (최신순, 좋아요순)
│   │
│   ├── 📁 general-product-list/ # 일반 상품 모듈
│   │   ├── 📄 GeneralProductList.jsx
│   │   ├── 📄 GeneralProductList.styled.js
│   │   └── 📄 useGeneralProductList.js    # 미션에는 아직없지만 좋아요 클릭이벤트?
│   │
│   └── 📁 pagination/          # 페이지네이션 모듈
│       ├── 📄 Pagination.jsx
│       ├── 📄 Pagination.styled.js
│       └── 📄 usePagination.js
│
└── 📁 pages/                   # 페이지 컴포넌트
    ├── 📄 ProductDetailPage.jsx
    └── 📄 ProductListPage.jsx

```

## 🎯 주요 기능

### 헤더

- 메뉴바 (네비게이션)
- 로그인 메뉴

### 메인 페이지

- **베스트 상품**: 인기 상품 목록 표시
- **전체 상품**: 모든 상품 목록
  - 상품 검색 기능
  - 상품 등록 기능
  - 정렬 기능 (최신순, 가격순 등)
  - 페이지네이션

## 🛠 기술 스택

- **Frontend**: React, JavaScript
- **라우팅**: React Router DOM
- **HTTP 클라이언트**: Axios
- **빌드 도구**: Vite
- **스타일링**: styled components

## 🚀 시작하기

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

## 📝 개발 노트

- 연습용 프로젝트로 깔끔하고 간단한 구조 유지
- 기능별로 컴포넌트 분리
- 재사용 가능한 공통 컴포넌트 활용
# codeit-panda-market
