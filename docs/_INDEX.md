# AutoLink SL 기록물 인덱스 (Document Master Index)

> **최종 갱신**: 2026-04-29 20:58:04 KST
> **세션**: P29.1.1.0
> **목적**: 모든 기록물의 단일 진입점. 다른 세션에서 컨텍스트 복원 시 이 파일부터 읽을 것.

---

## 🚨 최우선 — 매 세션 시작 시 첫 번째로 읽기

| 문서 | 경로 | 목적 |
|------|------|------|
| **🔴 REMINDERS** | [`docs/REMINDERS.md`](REMINDERS.md) | 미해결 critical 이슈 (Gmail MCP 복구 등) |

## 🗂️ 기록물 분류

### 1. 사업 기획 문서
| 문서 | 경로 | 작성일 | 설명 |
|------|------|--------|------|
| 사업계획서 v1.0 | [`docs/business-plan_automation-dashboard-service.md`](business-plan_automation-dashboard-service.md) | 2026-04-29 (사용자 사전) | 6변수 루브릭, 패키지 구성, 90일 로드맵의 원본 |
| 실행계획서 v1.0 | [`docs/20260429_195057_AutoLink_실행계획서.md`](20260429_195057_AutoLink_실행계획서.md) | 2026-04-29 19:50:57 | Phase 1~3 실행 전략, 다국적 확장 |
| 크몽 상세페이지 시안 | [`brand/kmong/listing-draft.md`](../brand/kmong/listing-draft.md) | 2026-04-29 20:11 | 크몽 등록용 3단 패키지 + FAQ |

### 2. 진행 추적 문서 (지속 업데이트)
| 문서 | 경로 | 최종갱신 | 갱신 주기 |
|------|------|----------|----------|
| **달성률 트래커** ⭐ | [`docs/20260429_195604_AutoLink_달성률_트래커.md`](20260429_195604_AutoLink_달성률_트래커.md) | 2026-04-29 20:30 | 항목 완료 시마다 |
| **작업일지** ⭐ | [`docs/worklog/_active.md`](worklog/_active.md) | 2026-04-29 20:58:04 | 매 작업 단위마다 |
| **세션 로그** | [`docs/worklog/sessions/`](worklog/sessions/) | — | 세션 종료 시 |
| 제작 타임라인 (포트폴리오용) | [`docs/build-timeline.md`](build-timeline.md) | 2026-04-29 20:11 | Phase 1 종료 시 |

### 3. 운영/기술 문서
| 문서 | 경로 | 설명 |
|------|------|------|
| 프로젝트 지침 | [`.claude/CLAUDE.md`](../.claude/CLAUDE.md) | Claude Code 자동 로드 — 정체성·기술스택·규칙 |
| Scheduled Task SKILL | `~/.claude/scheduled-tasks/autolink-intake/SKILL.md` | 자동 의뢰 분석 파이프라인 (cron 1시간) |
| Production Lessons (TRAP) | [`docs/production_lessons.md`](production_lessons.md) | 시행착오 기록 (TRAP-NNN) |
| README | [`README.md`](../README.md) | 빠른 시작 가이드 |

### 4. 코드 자산
| 문서 | 경로 | 설명 |
|------|------|------|
| 메인 사이트 | [`site/index.html`](../site/index.html) | 풀 랜딩페이지 + 의뢰서 폼 |
| 디자인 시스템 | [`site/style.css`](../site/style.css) | 키네틱 타이포 + 반응형 |
| 인터랙션 | [`site/script.js`](../site/script.js) | i18n + 견적 계산 + 폼 검증 |
| GitHub Pages 배포 | [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml) | main push 시 자동 배포 |

---

## 🌐 외부 자산 (Live URLs)

| 자산 | URL | 상태 |
|------|-----|------|
| GitHub 리포 | https://github.com/jyc0289y-art/autolink | 🟢 활성 |
| 사이트 (Pages) | https://jyc0289y-art.github.io/autolink/ | 🟢 배포됨 |
| Web3Forms 폼 | (앱 내 관리) | 🟢 활성 (Free 플랜) |

---

## 🔑 핵심 식별자 / 비밀

| 항목 | 값 | 비고 |
|------|-----|------|
| Web3Forms Access Key | `b586904a-959b-4a65-a2fb-f3aef0710c6e` | 공개 키 (클라이언트 사이드 사용) |
| Web3Forms 계정 | `jyc0289y@gmail.com` (authuser=3) | Free 플랜, 250 submissions/month |
| GitHub 계정 | `jyc0289y-art` | Public repo |
| 세션번호 | P29.1.1.0 | UUID: aece72fd-efe2-4d25-963d-2e38afbad43f |

---

## 📋 다른 세션에서 컨텍스트 복원 절차

새 세션이 시작되면 다음 순서로 읽어 컨텍스트를 복원:

1. **이 파일 (`_INDEX.md`)** — 전체 지도 파악
2. **달성률 트래커** — 현재 진행 상황 (완료/진행중/대기 항목)
3. **작업일지 활성판 (`worklog/_active.md`)** — 직전 작업의 상세 맥락
4. **CLAUDE.md** — 프로젝트 규칙·식별자
5. **사업계획서 + 실행계획서** — 전략 맥락 (필요 시)
6. **production_lessons.md** — 반복 회피할 시행착오

이 순서로 읽으면 ~5분 내에 P29 전체 컨텍스트 복원 가능.

---

## 🔗 기록물 명명 규칙

- **타임스탬프 포함 문서**: `YYYYMMDD_HHMMSS_제목.md`
- **타임존**: KST (한국 표준시)
- **타임스탬프 취득**: `date "+%Y%m%d_%H%M%S"`
- **상위 인덱스 참조 의무**: 새 기록물 작성 시 반드시 이 `_INDEX.md`에 행 추가
- **상호 참조**: 모든 기록물 상단에 관련 문서 링크 1줄 이상 포함
