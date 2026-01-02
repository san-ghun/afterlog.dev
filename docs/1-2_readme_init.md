# README / 운영 가이드 (초안)

### afterlog.dev

A minimal, markdown-driven blog for logging thoughts after building systems.

---

### 글 작성 방법

1. `src/content/{section}` 아래에 Markdown 파일 생성
2. Frontmatter 작성

```yaml
title: "Post Title"
description: "Short summary for SEO and GEO"
date: YYYY-MM-DD
section: thinking
tags: [tag1, tag2]
draft: false
```

3. 본문 작성 (서두에 1~2문장 요약 권장)
4. 미디어 파일은 `public/assets/posts/{slug}/` 경로에 위치

---

### 태그 가이드 (Standard Tags)

태그 폭발을 방지하기 위해 아래 표준 태그를 우선적으로 사용한다.
* `systems`, `architecture`, `cli`, `automation`
* `rhythm`, `meta-thinking`, `philosophy`
* `product`, `dev-log`, `experiment`

---

### 섹션 가이드

* **thinking**: 철학, 메타 사고, 질문
* **systems**: 설계, 구조, 아키텍처
* **making**: 프로젝트 구현 기록
* **notes**: 짧은 관찰과 아이디어
* **logs**: 주간/월간 회고

---

### 운영 원칙

* 완결된 글보다 진행 중인 사고를 기록한다
* 발행 주기보다 사고의 지속성을 우선한다
* 수정은 자유롭게, 삭제는 최소화한다

---

### 배포

* main 브랜치 push 시 자동 배포
* 배포 결과는 CDN 기반 정적 페이지

---

### 장기 운영 팁

* `/now` 페이지를 주기적으로 갱신
* notes/logs를 가장 가볍게 유지
* 핵심 글은 홈에 고정
