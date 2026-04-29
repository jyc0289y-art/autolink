# AutoLink SL 활성 작업일지 (Active Work Log)

> **이 파일은 항상 최신 작업 상태를 반영합니다.** 매 작업 단위마다 갱신.
> **최종 갱신**: 2026-04-29 21:15:00 KST
> **세션**: P29.1.1.0
> **상위 인덱스**: [`docs/_INDEX.md`](../_INDEX.md)
> **달성률 트래커**: [`docs/20260429_195604_AutoLink_달성률_트래커.md`](../20260429_195604_AutoLink_달성률_트래커.md)

---

## 📌 현재 작업 컨텍스트 (Latest)

**Phase**: 1 (즉시 실행)
**진행 단계**: Web3Forms 가입 완료 → 코드 적용 → 푸시 → 작업일지 시스템 구축
**다음 우선순위**: 브랜드 AutoLink → AutoLink SL 리브랜딩 (BMW 상표 충돌 회피)

---

## 📜 작업 이력 (시간 역순)

### [2026-04-29 22:05:00] 의뢰 폼 재설계 (계약 보호 Step 1)
- **무엇을**: 6변수 루브릭을 공개 폼에서 제거 → 백엔드 내부 도구로 환원. 자연어 자유기술란을 메인으로 승격
- **왜**: 사장님 의뢰자가 6변수를 이해하지 못함 → 폼 이탈 + 자동 견적 신뢰성 부족 → 위약금/배상 리스크
- **결과물**:
  - [`site/index.html`](../../site/index.html): 폼 전면 재설계
    - 상단 `legal-notice` 박스 추가 ("문의 단계", "계약 아님", "검토 후 별도 견적", "거절 가능")
    - 자연어 자유기술란 (필수, 사장님 친화 예시 placeholder)
    - 결과물 형태 multi-select 체크박스
    - 3중 약관 동의 (계약 단계 명시 / 약관 위반 거절 / 검토 거절)
    - "문의 접수하기" 버튼 + "1~2 영업일 내 회신" 안내
  - [`site/thank-you.html`](../../site/thank-you.html): 신규 — 4단계 절차 + 샘플 첨부 권장 + 문의 메일 안내
  - [`site/style.css`](../../site/style.css): legal-notice / agreement / checkbox-grid / thank-you-card 스타일
  - [`site/script.js`](../../site/script.js): 견적 계산 로직 제거 (백엔드로 이동), captureMetadata 단순화
- **다음 단계**: Step 2 — SKILL.md 3-게이트 재설계 (자동 검토 → 진영 대표 수동 검토 → 정식 견적 발송)

### [2026-04-29 21:15:00] Gmail MCP 우회 설계 — Chrome MCP 기반 SKILL 재작성
- **무엇을**: Scheduled Task SKILL.md를 Chrome MCP 기반으로 전면 재작성
- **왜**: Gmail MCP OAuth 토큰 권한 부족 + 재연결 시 Google 400 에러 발생 → 즉시 작동 가능한 우회 필요
- **결과물**: `~/.claude/scheduled-tasks/autolink-intake/SKILL.md` (Chrome MCP 버전)
- **우회 설계 핵심**:
  - Chrome MCP로 jyc0289y@gmail.com 받은편지함 직접 조작
  - 라벨 자동 생성 불가 → 별표(★) + 사전 수동 생성 라벨 사용
  - read_page로 메일 본문 추출, 답장 UI로 Draft 생성
- **한계**: Chrome 상시 가동 필수, UI 변경에 취약, 토큰 비용 증가
- **후속**: ACT-007 (Gmail MCP 복구) 완료 시 API 기반으로 재전환

### [2026-04-29 21:10] Gmail MCP 재연결 시도 → Google 400 에러
- **무엇을**: 사용자가 Connectors 페이지에서 Gmail 재연결 시도
- **결과**: Google OAuth 측 400 에러 (서버 거부)
- **추정 원인**: OAuth 토큰 캐시 충돌 또는 redirect_uri 불일치
- **해결책 검토**: 
  - 옵션 1: Google 권한 페이지에서 Anthropic 캐시 정리 후 재시도
  - 옵션 2: 다른 Gmail Connector (Pipedream 등) 사용
  - **옵션 3 채택**: Chrome MCP 우회 (즉시 작동, 추후 옵션 1로 복구)

### [2026-04-29 20:58:04] 작업일지 시스템 구축
- **무엇을**: `docs/_INDEX.md` 마스터 인덱스 + `docs/worklog/` 작업일지 디렉토리 생성
- **왜**: 사용자 요청 — 다른 세션 전환 시 컨텍스트 복원 + 기록물 간 연결성 확보
- **결과물**:
  - [`docs/_INDEX.md`](../_INDEX.md) — 전체 기록물 마스터 인덱스
  - [`docs/worklog/_active.md`](_active.md) — 본 활성 작업일지
- **다음 단계**: GitHub 푸시 + 트래커 갱신

### [2026-04-29 20:55] Web3Forms Access Key 발급 + 코드 적용
- **무엇을**: 
  - Chrome MCP로 Web3Forms 가입 (jyc0289y@gmail.com, authuser=3)
  - 약관 동의 + Free 플랜 선택
  - Form 생성 ("AutoLink SL Intake", 도메인 jyc0289y-art.github.io/autolink)
  - Access Key 발급: `b586904a-959b-4a65-a2fb-f3aef0710c6e`
  - `site/index.html` Line 173 access_key 교체
- **왜**: 의뢰서 폼이 실제 이메일로 전송되도록 활성화
- **이슈**: 
  - 첫 시도에서 시스템 등록 이메일(jyc0289y)과 Chrome 로그인 이메일(jyc0289p) 불일치 → 재시도
  - Cloudflare Turnstile 봇 검증은 자동 통과
- **검증**: Form 생성 성공 화면 캡처 확인됨

### [2026-04-29 20:50] KIPRIS 상표 검색 결과 수신
- **무엇을**: 백그라운드 에이전트가 KIPRIS에서 상표 검색 완료
- **왜**: 브랜드명 법적 안전성 확인
- **핵심 발견**:
  - 🔴 **AutoLink (영문)**: BMW가 35류(광고·사업관리)에 단독 등록 → 직접 충돌 위험
  - 🟢 **AutoLink SL**: 미등록, 안전
  - ✅ **CrawlLink**: 완전 클린
  - 🟢 **FlowLink**: 매우 낮은 위험
- **사용자 결정**: AutoLink SL로 변경 (BMW 회피 + SL 브랜드 일관성)
- **후속 액션 필요**: 코드/문서 전반 AutoLink → AutoLink SL 리브랜딩

### [2026-04-29 20:30] GitHub 리포 + Pages 배포 활성화
- **무엇을**: 
  - `git init` + 초기 커밋
  - `gh repo create autolink --public` (jyc0289y-art 계정)
  - `gh api -X POST /repos/.../pages -f build_type=workflow` Pages 활성화
- **결과물**:
  - 리포: https://github.com/jyc0289y-art/autolink
  - 라이브 URL: https://jyc0289y-art.github.io/autolink/

### [2026-04-29 20:11] 크몽 시안 + 트래커 + 타임라인 작성
- [`brand/kmong/listing-draft.md`](../../brand/kmong/listing-draft.md)
- [`docs/20260429_195604_AutoLink_달성률_트래커.md`](../20260429_195604_AutoLink_달성률_트래커.md)
- [`docs/build-timeline.md`](../build-timeline.md)

### [2026-04-29 20:10] Scheduled Task SKILL.md 작성
- **위치**: `~/.claude/scheduled-tasks/autolink-intake/SKILL.md`
- **기능**: cron 1시간, Gmail 의뢰 메일 분석 → 한국어 보고 + 다국어 응대 초안 3선택지

### [2026-04-29 20:05] 브라우저 검증 통과
- 데스크탑(1280px) + 모바일(375px) 반응형 ✅
- KO/EN/JA 다국어 전환 ✅
- 실시간 견적 계산 (점수 6 → 12, 등급 S → B) ✅
- Cloudflare Preview에서 모든 섹션 렌더링 확인

### [2026-04-29 20:00] JavaScript 인터랙션 구현
- [`site/script.js`](../../site/script.js)
- i18n (navigator.language → IP → 영어 폴백, localStorage 저장)
- 6변수 라디오 → 점수→등급→단가 즉시 계산
- 스크롤 reveal 애니메이션
- 폼 hidden 필드 자동 채움 (rubric_score, grade, estimate, language)

### [2026-04-29 19:58] CSS 디자인 시스템 구현
- [`site/style.css`](../../site/style.css)
- 흰 배경 + 검정 + 액센트 블루 (#2563eb)
- 키네틱 타이포: slideUp + fadeIn + Intersection Observer
- 반응형 768px / 480px breakpoint

### [2026-04-29 19:56] HTML 랜딩페이지 초안
- [`site/index.html`](../../site/index.html)
- 7섹션: Hero / Portfolio / Packages / Differentiators / Form / FAQ / Footer
- 6변수 루브릭 객관식 의뢰서 폼

### [2026-04-29 19:50] P29 등록 + 스캐폴딩
- 전역 레지스트리 [`~/.claude/CLAUDE.md`](file:///Users/jyc/.claude/CLAUDE.md)에 P29 추가
- P29 세션 레지스트리: [`~/.claude/registries/P29.md`](file:///Users/jyc/.claude/registries/P29.md)
- 디렉토리 구조: site/, brand/kmong/, docs/, shared/, demos/, projects/, memory/sessions/
- 프로젝트 지침: [`.claude/CLAUDE.md`](../../.claude/CLAUDE.md)

---

## 🚧 미해결 / 사용자 액션 대기

| ID | 항목 | 상태 | 트리거 조건 |
|----|------|------|-------------|
| ACT-001 | ~~Gmail MCP 재연결~~ → ACT-007로 통합 | 🔄 보류 | Chrome MCP로 우회 중 |
| ACT-007 | **Gmail MCP 복구** (옵션 1: Google 권한 캐시 정리) | 🔴 우선 액션 | (1) myaccount.google.com/permissions에서 Anthropic 제거 → (2) Connectors 재연결 → (3) 권한 화면에서 라벨/Draft 모두 체크. 복구 시 SKILL.md를 API 기반으로 재전환 |
| ACT-008 | **Gmail 라벨 5개 수동 생성** (Chrome MCP 우회 작동 조건) | 🟡 우선 액션 | jyc0289y@gmail.com Gmail에서: AutoLink/신규, AutoLink/검토중, AutoLink/수주, AutoLink/거절, AutoLink/처리완료 |
| ACT-002 | autolinksl.com 도메인 구매 | ⬜ 대기 | 사용자 결정 |
| ACT-003 | AutoLink → AutoLink SL 리브랜딩 | ⬜ 진행 가능 | 사용자 승인됨 (이전 답변) |
| ACT-004 | 시그니처 데모 #1 (가격 모니터링) 구축 | ⬜ 대기 | Phase 1 후반 |
| ACT-005 | 포트폴리오 제안서 (PDF) 작성 | ⬜ 대기 | 데모 #1 완료 후 |
| ACT-006 | 변리사 상표 출원 상담 | ⬜ 대기 | 브랜드 확정 후 |

---

## 🔄 작업일지 갱신 규칙 (다음 세션을 위한 안내)

**새 작업이 발생할 때마다 이 파일 상단(시간 역순)에 항목 추가**:

```markdown
### [YYYY-MM-DD HH:MM:SS] 작업 제목
- **무엇을**: 한 줄 요약
- **왜**: 동기/맥락
- **결과물**: 파일 경로 (마크다운 링크)
- **다음 단계**: 후속 작업
```

**완료 항목은 [`달성률 트래커`](../20260429_195604_AutoLink_달성률_트래커.md)에도 동시 반영.**

**일정 분량이 누적되면 (50항목+) 월별 아카이브로 이전**:
- `worklog/sessions/YYYY-MM_archive.md` 생성
- `_active.md`에는 최근 20개만 유지
