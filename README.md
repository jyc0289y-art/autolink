# AutoLink SL

업무 자동화 + 웹 대시보드 서비스 (SL Corporation 산하)

> **브랜드 표기**: AutoLink SL (KIPRIS 상표 검색에서 BMW의 "Autolink" 35류 등록 발견 → SL 접미를 통한 차별화)
> **코드 경로/리포명**: `autolink` (URL 안정성 유지)

> "엑셀 노가다, 끝. 자동으로 수집. 자동으로 분석. 자동으로 보고."

## 빠른 시작

```bash
# 로컬 미리보기
cd site
python3 -m http.server 8090
# → http://localhost:8090
```

## 프로젝트 구조

```
AutoLink/
├── site/                  # GitHub Pages (랜딩페이지 + 의뢰서)
├── brand/kmong/           # 크몽 상세페이지 시안
├── docs/                  # 사업계획서, 실행계획, 달성률 트래커
├── shared/                # 크롤러·대시보드·알림 공통 모듈
├── demos/                 # 시그니처 데모 프로젝트
├── projects/              # 의뢰 건별 프로젝트
└── memory/sessions/       # 세션 레지스트리 (MOVED stub)
```

## 핵심 문서

- **사업계획서**: `docs/business-plan_automation-dashboard-service.md`
- **실행계획서**: `docs/20260429_195057_AutoLink_실행계획서.md`
- **달성률**: `docs/20260429_195604_AutoLink_달성률_트래커.md`
- **제작 타임라인**: `docs/build-timeline.md`
- **크몽 시안**: `brand/kmong/listing-draft.md`

## 자동 의뢰 파이프라인

Scheduled Task: `~/.claude/scheduled-tasks/autolink-intake/SKILL.md`

`Web3Forms → Gmail → Claude Code 분석 → 한국어 보고 + 다국어 응대 초안`

## 라이선스

SL Corporation 내부 프로젝트. 외부 공개 시 별도 협의.
