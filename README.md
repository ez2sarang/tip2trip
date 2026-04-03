# Tip2Trip 경주 🏯

경주 여행 가이드 웹앱 — 천년 신라의 역사를 품은 경주의 모든 것을 안내합니다.

## 소개

**Tip2Trip 경주**는 경주 여행을 계획하는 여행객을 위한 종합 여행 가이드 웹앱입니다. 주요 관광명소, 맛집, 여행 팁을 한눈에 확인할 수 있습니다.

## 주요 기능

- 🏯 **관광명소** — 불국사, 석굴암, 첨성대, 동궁과 월지 등 8개 주요 명소 상세 정보
- 🍜 **맛집 & 음식** — 황남빵, 경주 쌈밥 등 지역 특산 음식 소개
- 💡 **여행 팁** — 교통, 숙박, 계절별 방문 정보, 사진 촬영 팁
- 📅 **계절별 가이드** — 봄·여름·가을·겨울 시즌별 추천 여행 코스

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 시작하기

```bash
# 의존성 설치
npm install --ignore-scripts

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
npm start
```

## 배포

Vercel에 배포할 수 있습니다:

```bash
npx vercel --prod
```

## 프로젝트 구조

```
tip2trip/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈페이지
│   ├── attractions/        # 관광명소 페이지
│   ├── food/               # 맛집 페이지
│   └── tips/               # 여행 팁 페이지
├── components/
│   ├── Navigation.tsx      # 네비게이션
│   ├── Footer.tsx          # 푸터
│   ├── HeroSection.tsx     # 히어로 섹션
│   ├── FeaturedAttractions.tsx
│   ├── SeasonGuide.tsx
│   ├── QuickTips.tsx
│   ├── AttractionCard.tsx
│   └── PageHeader.tsx
└── public/
```
