# 🔴 AutoLink SL 리마인더 (READ FIRST)

> **세션 시작 시 가장 먼저 읽어야 할 파일.** CLAUDE.md, _INDEX.md보다도 우선.
> **최종 갱신**: 2026-04-29 21:25:00 KST
> **상위 인덱스**: [`docs/_INDEX.md`](_INDEX.md)
> **활성 작업일지**: [`docs/worklog/_active.md`](worklog/_active.md)

---

## 🚨 즉시 환기해야 할 이슈

### 🔴 [ACT-007] Gmail MCP 복구 — 매 세션 사용자에게 환기 필수

**2026-04-30 진행 상황 (P29.1.1.0 마지막)**:
- 사용자가 모바일 Claude 앱에서 Gmail Connector 재연결 완료 (쓰기/삭제 도구 "승인 필요" 활성화)
- BUT: P29.1.1.0 세션의 ToolSearch에서는 여전히 Gmail 도구 미노출 (서버 ID `0c984139-...`)
- → 새 세션(P29.2.1.0 권장)에서 작동 여부 즉시 검증 필요
- 동시 점검: Drive 계정 정합성 (현재 `cjy@hojinri.com` 회사 계정), GitHub Connector 추가

**현재 상태**: Gmail MCP가 OAuth 권한 부족으로 작동 불가. Chrome MCP로 우회 중.

**왜 critical인가**:
- 의뢰 수신 → 응대까지 **모든 고객 접점**이 Gmail 기반
- Chrome MCP 우회는 5~10배 느리고, 노트북 상시 가동 필요
- Phase 2 (Fiverr 진출) 시점에는 반드시 복구 — 해외 고객 응답 지연 24h = 이탈률 30%
- **응답 누락 1건 ≈ 420만 원 LTV 손실** (시그니처 #4 Premium 기준)

**복구 절차** (사용자 액션):
```
1. https://myaccount.google.com/permissions
   → 계정: jyc0289y@gmail.com
   → "Anthropic" 또는 "Claude" 항목 → 액세스 권한 삭제

2. Claude 데스크탑 → Settings → Connectors
   → Gmail 항목 "제거" → "+ 추가"
   → jyc0289y@gmail.com 계정 선택
   → Google 권한 화면에서 모든 항목 체크 → Allow

3. Claude에 "Gmail MCP 복구 완료" 라고 알리기
   → SKILL.md를 API 기반으로 즉시 재전환
```

**복구 트리거 (둘 중 하나라도 해당되면 즉시 진행)**:
- 첫 의뢰가 Gmail로 도착했을 때
- 크몽/Fiverr 등록 완료 시점
- 1주일 경과 (2026-05-06) 시점
- 노트북 절전 중 의뢰 누락 사고 발생

---

## 📌 매 세션 시작 시 체크 (Claude 자체 점검)

세션 시작 시 다음을 사용자에게 자동으로 환기:

```
🔔 AutoLink SL 진행 상황 알림
- Gmail MCP 복구: ⏳ 미완료 (D+{경과일})  ← ACT-007
- 라벨 5개 수동 생성: {완료/미완료}      ← ACT-008  
- 도메인 구매: {완료/미완료}             ← ACT-002
- 시그니처 데모 #1: {완료/미완료}        ← ACT-004

이슈 중 우선순위 1번을 먼저 처리하시겠습니까?
```

진영 대표가 다른 작업으로 시작해도, 첫 응답 끝부분에 **반드시 1줄로 환기**:
> "💡 참고: Gmail MCP 복구가 아직 미완료입니다 (Phase 2 진입 전 필수). 시간 되실 때 ACT-007 진행 권장."

---

## 🔄 ACT-007 완료 후 즉시 할 작업

1. SKILL.md를 Gmail MCP API 기반으로 재전환 (백업본: git history에 보존)
2. 5개 라벨 자동 생성 (`create_label` 호출)
3. ACT-008 자동 처리 (수동 생성 불필요해짐)
4. 본 REMINDERS.md에서 ACT-007 항목 ✅ 처리
5. 작업일지에 복구 시점 기록

---

## 다른 미해결 액션 (참고)

| ID | 항목 | 우선순위 | 트리거 |
|----|------|----------|--------|
| ACT-002 | autolinksl.com 도메인 구매 | 🟡 보통 | 브랜드 확정 후 (지금 가능) |
| ACT-003 | AutoLink → AutoLink SL 리브랜딩 | 🟢 진행 가능 | 사용자 승인됨 |
| ACT-004 | 시그니처 데모 #1 (가격 모니터링) | 🟡 보통 | Phase 1 후반 |
| ACT-005 | 포트폴리오 제안서 PDF | ⚪ 낮음 | 데모 #1 완료 후 |
| ACT-006 | 변리사 상표 출원 상담 | 🟡 보통 | 브랜드 확정 후 |
| ACT-008 | Gmail 라벨 5개 수동 생성 | 🟡 보통 | Chrome MCP 우회 사용 시 필수 |
