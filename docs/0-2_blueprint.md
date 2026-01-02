# afterlog.dev — 블로그 설계 & 개발 청사진

> 목표
>
> * Markdown 중심
> * 미니멀 · 가독성 최우선
> * 다크 테마 (catppuccin 계열)
> * 모바일 퍼스트
> * SEO + GEO까지 고려한 구조

```
prompt:
- 마크다운 파일을 통해서 컨텐츠를 관리.
- 미니멀하고 가독성 중심의 깔끔한 다크 테마.
- catppuccin, 검정, 다크 그레이, 아이보리, 터미널의 녹색.
- 모바일 친화적인 responsive 디자인.
- SEO 및 GEO 최적화.
```

---

## 1. 기술 스택 결정 (확정안)

### ✅ Core

* **Astro**
* **Markdown / MDX**
* **Astro Content Collections**

👉 이유:

* 콘텐츠 중심
* 빌드 결과가 정적 HTML → SEO 최강
* 구조적 사고에 잘 맞음
* 나중에 실험(Lab) 붙이기 쉬움

---

### ✅ 배포

* **Cloudflare Pages**
* GitHub 연동

---

## 2. 프로젝트 디렉토리 구조 (실제 사용용)

```txt
afterlog/
├─ src/
│  ├─ content/
│  │  ├─ thinking/
│  │  ├─ systems/
│  │  ├─ making/
│  │  ├─ notes/
│  │  ├─ logs/
│  │  └─ config.ts
│  │
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  └─ PostLayout.astro
│  │
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ about.astro
│  │  ├─ now.astro
│  │  └─ [section]/
│  │     └─ [...slug].astro
│  │
│  ├─ styles/
│  │  ├─ theme.css
│  │  └─ typography.css
│  │
│  └─ components/
│     ├─ Header.astro
│     ├─ Footer.astro
│     ├─ PostMeta.astro
│     └─ ThemeToggle.astro (optional)
│
├─ public/
│  ├─ assets/
│  │  └─ posts/
│  │     └─ [slug]/         (이미지 및 미디어 파일)
│  ├─ favicon.svg
│  └─ og.png
│
├─ astro.config.mjs
└─ package.json
```

---

## 3. Markdown 콘텐츠 설계 (핵심)

### Frontmatter 표준 (모든 글 공통)

```md
---
title: "I Don’t Build Tools. I Build Rhythms"
description: "Why personal systems should prioritize rhythm over features."
date: 2026-01-02
updated: 2026-01-02
section: thinking
tags: [systems, rhythm, cli]
draft: false
---
```

### 원칙

* **description 필수** → SEO/GEO
* `section`은 URL + 네비게이션 기준
* `draft: true` 허용 → 실험 글 보호

---

## 4. 다크 테마 디자인 시스템

### 🎨 컬러 팔레트 (Catppuccin 기반)

```css
:root {
  --bg: #0f1115;          /* 거의 블랙 */
  --bg-soft: #16181d;     /* 다크 그레이 */
  --text: #e6e6e6;        /* 아이보리 */
  --text-muted: #a0a0a0;
  --accent: #8aadf4;     /* catppuccin blue */
  --green: #a6da95;      /* terminal green */
}
```

### 타이포그래피

* **본문**: system-ui / Inter / SF Pro
* **코드**: JetBrains Mono / Fira Code
* line-height: `1.7~1.8`
* max-width: `68ch`

```css
article {
  max-width: 68ch;
  margin: auto;
  padding: 2rem 1rem;
}
```

---

## 5. 가독성 중심 레이아웃 원칙

* ❌ 사이드바 없음
* ❌ 광고 없음
* ❌ 과한 인터랙션 없음
* ✅ 여백
* ✅ 문단 호흡
* ✅ 모바일 우선

### 모바일 기준

* 기본 font-size: `16px`
* heading은 작게, 과장 금지
* 터치 영역 충분히 확보

---

## 6. SEO + GEO 최적화 전략 (중요)

### 6.1 SEO (Search Engine)

#### 필수 메타

* `<title>`: 글 제목
* `<meta name="description">`
* canonical URL
* sitemap.xml
* robots.txt
* **RSS / Atom Feed** (afterlog.dev/rss.xml)

Astro에서:

```astro
<AstroSeo
  title={title}
  description={description}
  canonical={Astro.url}
/>
```

---

### 6.2 GEO (Generative Engine Optimization)

👉 **LLM에게 “요약되기 쉬운 글” 구조**

#### 권장 패턴

* 서두에 **1–2문장 요약**
* 명확한 소제목
* 질문형 문장
* 정의 / 선언 문장

예:

```md
> This post explores why rhythm matters more than features in personal systems.
```

👉 LLM이 인용하기 쉬움
👉 검색 + AI 응답 양쪽에 유리

---

## 7. 기본 페이지 구현 전략

### `/index`

* Intro 문장
* 고정 글 3편
* Recent logs

### `/[section]/[slug]`

* PostLayout
* Meta 정보
* 이전 / 다음 글

### `/now`

* Markdown or Astro page
* 수동 업데이트 (중요)

---

이제 afterlog는 **사유가 쌓일 물리적 공간**을 갖게 될 것.
