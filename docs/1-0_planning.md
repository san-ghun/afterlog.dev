# afterlog.dev 개발 기획안

## 1. 프로젝트 개요

**목표**: Markdown 기반 콘텐츠 관리, 미니멀·가독성 중심 다크 테마, 모바일 퍼스트, SEO + GEO 최적화를 갖춘 개인 블로그 구축.

**한 문장 정의**: 만들고 실행한 이후에 남는 사유의 로그를 기록하는 정적 블로그.

---

## 2. 핵심 요구사항 (Requirements)

### Functional

* Markdown/MDX로 콘텐츠 작성·관리
* 카테고리 기반 섹션 제공: thinking, systems, making, notes, logs
* 초안 관리(`draft: true`)
* 이전/다음 글 네비게이션
* OG 이미지 및 메타 자동 생성

### Non-Functional

* Lighthouse SEO 90+ 목표
* 모바일 퍼스트, 반응형
* 정적 배포 (CDN)
* 장기 유지보수 용이성

---

## 3. 기술 스택

* **Framework**: Astro
* **Content**: Astro Content Collections + Markdown/MDX
* **Styling**: Vanilla CSS (커스텀 테마)
* **Deploy**: Cloudflare Workers

---

## 4. 정보 구조 (IA)

```
/           (Home)
/about      (소개)
/now        (현재 집중)
/thinking   (사유)
/systems    (설계)
/making     (제작)
/notes      (단문 노트)
/logs       (회고)
```

---

## 5. 콘텐츠 모델

### Frontmatter 표준

```yaml
title: string
description: string
date: YYYY-MM-DD
updated: YYYY-MM-DD
section: thinking | systems | making | notes | logs
tags: string[]
draft: boolean
```

---

## 6. 디자인 시스템

### 컬러 (Catppuccin 기반)

* Background: #0f1115
* Surface: #16181d
* Text: #e6e6e6
* Muted: #a0a0a0
* Accent: #8aadf4
* Terminal Green: #a6da95

### 타이포

* Body: system-ui / Inter
* Code: JetBrains Mono
* Max width: 68ch
* Line-height: 1.7~1.8

---

## 7. 레이아웃 원칙

* 사이드바 없음
* 여백 중심
* 인터랙션 최소화
* 다크 모드 기본

---

## 8. SEO & GEO 전략

### SEO

* Title/Description 메타 자동화
* Canonical URL
* Sitemap.xml
* robots.txt

### GEO (LLM 친화)

* 서두 요약 1~2문장
* 명확한 소제목
* 정의/선언 문장 포함

---

## 9. 산출물

* GitHub Repository
* 배포 URL
* 기본 콘텐츠 3편
* README (운영 가이드)

---

## 10. 성공 기준

* 모바일 가독성 만족
* 글 작성 → 배포까지 5분 이내
* 검색/AI 요약 노출 가능 구조

---

## 11. 향후 확장

* 검색
* 노트 그래프
* 커뮤니티 레이어 (afterlog.dev/community)

---

**비고**: 본 기획안은 장기 운영을 전제로 하며, 디자인/구조는 향후 변경 없이 확장 가능하도록 설계한다.
