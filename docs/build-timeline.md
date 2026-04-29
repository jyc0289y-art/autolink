# AutoLink 사이트 제작 타임라인 (포트폴리오용)

> 이 문서는 AutoLink 사이트 자체가 자동화·웹 개발 능력의 증거임을 보여주기 위한 제작 과정 기록물입니다.

---

## 2026-04-29 (Day 1)

### 19:50 — 프로젝트 등록 + 스캐폴딩
- P29 AutoLink 프로젝트 전역 레지스트리 등록
- 디렉토리 구조 생성 (site/, brand/, docs/, shared/, demos/, projects/, memory/)
- .claude/CLAUDE.md (프로젝트지침)
- 사업계획서 v1.0 (사용자 사전 작성)

### 19:56 — HTML 랜딩페이지 초안
- 단일 페이지 구조: Hero / Portfolio / Packages / Differentiators / Form / FAQ / Footer
- 거대 키네틱 타이포그래피 히어로 섹션
- 6변수 루브릭 객관식 의뢰서 폼
- 실시간 견적 계산기

### 19:58 — CSS 디자인 시스템
- 컬러: 흰 배경 + 검정 + 액센트 블루 (#2563eb)
- 타이포: Inter + Noto Sans KR/JP, 9웨이트 (900) 활용
- 키네틱 효과: slideUp / fadeIn / Intersection Observer reveal
- 반응형: 768px / 480px breakpoint, 모바일 우선

### 20:00 — JavaScript 인터랙션
- i18n: KO/EN/JA 3개 언어, navigator.language 자동 감지 + localStorage 저장
- 실시간 견적: 라디오 변경 시 점수→등급→단가 즉시 업데이트
- 스크롤 reveal 애니메이션
- 폼 검증 + Web3Forms 연동 준비

### 20:05 — 브라우저 테스트 검증
- 데스크탑 1280px: 히어로 임팩트, 포트폴리오 그리드, 패키지 3단 모두 정상
- 모바일 375px: 키네틱 타이포 화면 지배, 폼 단일 컬럼, 라디오 세로 정렬
- 다국어 전환: KO ↔ EN ↔ JA 즉시 반영
- 견적 계산: 점수 6/S → 점수 12/B 전환 검증

### 20:10 — 자동 의뢰 파이프라인 설계
- Scheduled Task SKILL.md 작성 (cron 1시간 간격)
- Gmail 라벨 체계: AutoLink/신규/검토중/수주/거절/처리완료
- 매력도 평가 로직 + 응대 초안 3선택지 (적극/표준/거절)
- 다국어 의뢰 → 한국어 보고 + 고객 언어 회신 워크플로우

### 20:15 — 크몽 상세페이지 시안
- 3단 패키지 (Basic 50만 / Standard 150만 / Premium 350만)
- 차별화 4줄
- 시그니처 케이스 3건
- FAQ 5문항
- 외부 링크 정책 우회 (프로필 웹사이트 활용)

---

## 산출물 요약

| 카테고리 | 파일 | 라인 수 |
|----------|------|--------|
| HTML | site/index.html | ~280 |
| CSS | site/style.css | ~430 |
| JS (i18n + 견적) | site/script.js | ~290 |
| GitHub Pages 배포 | .github/workflows/deploy-pages.yml | ~30 |
| Scheduled Task | ~/.claude/scheduled-tasks/autolink-intake/SKILL.md | ~120 |
| 크몽 시안 | brand/kmong/listing-draft.md | ~150 |
| 실행계획서 | docs/20260429_195057_AutoLink_실행계획서.md | ~140 |
| 달성률 트래커 | docs/20260429_195604_AutoLink_달성률_트래커.md | ~75 |

**총 작업 시간: ~25분 (Phase 1 핵심 산출물 완성)**

---

## 이 사이트가 보여주는 능력 (포트폴리오 메시지)

1. **단일 페이지 풀스택 디자인** — HTML/CSS/JS 만으로 풀 랜딩페이지 + 폼 + 계산기 구현
2. **거대 키네틱 타이포그래피** — Apple 수준의 임팩트 있는 첫인상
3. **다국어 자동 감지 + 즉시 전환** — 글로벌 고객 대응
4. **실시간 견적 계산기** — 6변수 루브릭의 알고리즘적 구현
5. **자동 의뢰 파이프라인** — Gmail + Scheduled Task로 무인 응대 시스템
6. **반응형 모바일 최적화** — 모바일 우선 설계
7. **외부 의존성 최소화** — 프레임워크 없이 Vanilla JS, 운영비 0원

이 모든 것을 25분 안에 완성한 것이 AutoLink 자동화 능력의 증명입니다.
