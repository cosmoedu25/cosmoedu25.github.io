/*
 * 1DAY 출강 콘텐츠 관리
 * 매월 새 콘텐츠는 아래 배열에 객체를 추가하고 featuredMonth를 지정합니다.
 */
window.COSMO_ONEDAY_PROGRAMS = [
  {
    id:'fitness-app', featuredMonth:'2026-09', icon:'💪', theme:'#2563eb', category:'AI × 체육·건강',
    title:'AI 운동 성장 앱 만들기', audience:'초등 5학년 ~ 고등', duration:'권장 4차시',
    summary:'나의 운동 목표와 생활 습관을 반영한 개인 맞춤형 건강관리 웹앱을 만듭니다.',
    description:'학생이 자신의 운동 목표와 필요한 기능을 직접 정하고, AI와 대화하며 웹앱을 설계·제작합니다. 코드를 외우기보다 문제를 나누고 기능을 구체적으로 설명하며 결과를 테스트하는 경험에 집중합니다.',
    outcomes:['운동·건강 주제 탐구','앱 화면과 기능 기획','AI와 바이브코딩','실행·테스트·발표'],
    flow:[['도입','건강관리 앱 사례와 AI 협업 방법 이해'],['기획','사용자·목표·핵심 기능과 화면 구성'],['제작','AI와 대화하며 웹앱 구현 및 기능 추가'],['완성','테스트·수정 후 결과물 발표와 공유']],
    cover:'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/92f9fcf7-800a-41a4-88a4-550a5d55c16e.png',
    samples:[
      {title:'GrowFit 운동 성장 코치',image:'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/92f9fcf7-800a-41a4-88a4-550a5d55c16e.png',url:'https://app.cosmoedu.co.kr/api/s3/play/dXNlcnMvZG9vcHlvL2h0bWwv7ZSE66Gc7KCd7Yq4LTIwMjYwNzA5MDIyNzQ3Lw/'},
      {title:'AI 운동 코치',image:'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/231e17f3-3cb4-4a04-8a5e-51bc63fc03ce.png',url:'https://app.cosmoedu.co.kr/api/s3/play/dXNlcnMvc3R1ZGVudDAwL2h0bWwv7ZSE66Gc7KCd7Yq4LTIwMjYwNzE0MDAwNTE3Lw/'}
    ]
  },
  {
    id:'career-map', featuredMonth:'2026-09', icon:'🧭', theme:'#7c3aed', category:'AI × 진로',
    title:'나의 진로 로드맵 앱', audience:'중등 ~ 고등', duration:'권장 3~4차시',
    summary:'관심 분야와 강점을 탐색하고 실행 계획을 인터랙티브 진로 로드맵으로 표현합니다.',
    description:'AI를 정답 제공 도구가 아닌 질문과 탐색의 파트너로 활용합니다. 자신의 관심과 경험을 정리하고 직업·전공 정보를 조사한 뒤, 앞으로의 실행 계획을 보여주는 웹 결과물을 만듭니다.',
    outcomes:['강점과 관심 분야 탐색','진로 정보 조사·선별','단계별 실행 계획','인터랙티브 로드맵 제작'],
    flow:[['탐색','나의 관심·강점·경험 키워드 찾기'],['조사','직업과 전공 정보를 AI와 함께 탐색'],['설계','단기·중기 진로 목표와 실행 계획 구성'],['제작','진로 로드맵 웹앱 완성 및 발표']],
    cover:'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/a3fca766-4a78-4d70-8389-a36818dd89d7.png', samples:[]
  },
  {
    id:'ai-poem', featuredMonth:'2026-09', icon:'🎨', theme:'#db2777', category:'AI × 국어·미술',
    title:'AI 시화 만들기', audience:'초등 3학년 ~ 고등', duration:'권장 2~3차시',
    summary:'직접 쓴 시와 생성형 AI 이미지를 결합해 한 편의 디지털 시화로 완성합니다.',
    description:'주제와 감정을 언어로 표현하고, 시의 분위기를 시각 요소로 번역하는 융합 창작 수업입니다. 이미지 결과를 비교하고 수정하는 과정에서 생성형 AI를 비판적·창의적으로 사용하는 방법을 배웁니다.',
    outcomes:['주제와 감정 언어화','시 쓰기와 퇴고','AI 이미지 생성·선별','디지털 시화 전시'],
    flow:[['감상','시와 이미지가 만나는 다양한 표현 사례'],['창작','주제 선정·시 쓰기·표현 다듬기'],['시각화','프롬프트 작성과 이미지 비교·선택'],['전시','시화 편집·작품 설명·온라인 공유']],
    cover:'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/cb63d2ba-c1a2-4427-b7de-799921bbf627.png',
    samples:[{title:'파우스트',image:'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/cb63d2ba-c1a2-4427-b7de-799921bbf627.png',url:'https://kr.object.ncloudstorage.com/educodingnplaycontents/users/student01/creative/share/197_1783911892210.html'}]
  },
  {
    id:'literary-spinoff', featuredMonth:'2026-09', icon:'📖', theme:'#d97706', category:'AI × 국어·문학',
    title:'명작 스핀오프 문학창작', audience:'초등 5학년 ~ 고등', duration:'권장 3차시',
    summary:'명작의 인물과 세계관을 새롭게 해석해 나만의 후속 이야기를 디지털 작품으로 만듭니다.',
    description:'원작의 핵심 사건과 인물을 분석하고, 바꾸고 싶은 관점과 새로운 갈등을 설계합니다. AI와 공동 집필하되 학생이 서사의 방향을 판단하고 수정하며 창작의 주도권을 갖습니다.',
    outcomes:['원작 구조와 인물 분석','새로운 관점·갈등 설계','AI 공동 집필과 퇴고','디지털 문학 작품 완성'],
    flow:[['분석','원작의 인물·사건·세계관 핵심 찾기'],['기획','새 관점과 이어질 사건 설계'],['집필','AI와 초안 작성 후 학생 중심의 수정·퇴고'],['출판','이미지·본문 편집과 온라인 작품 발표']],
    cover:'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/9539eef5-b7f0-4cbb-a722-1ead597ae933.png',
    samples:[
      {title:'얼어붙은 교실의 영민이',image:'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/9539eef5-b7f0-4cbb-a722-1ead597ae933.png',url:'https://kr.object.ncloudstorage.com/educodingnplaycontents/users/student11/creative/share/198_1783910667470.html'},
      {title:'두 형제의 봄',image:'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/80360fb0-2f27-4b01-8005-c10e1bb4cfe4.png',url:'https://kr.object.ncloudstorage.com/educodingnplaycontents/users/cosmoschool/creative/share/184_1783911072630.html'}
    ]
  },
  {
    id:'history-ai', featuredMonth:'2026-09', icon:'🏛️', theme:'#059669', category:'AI × 역사·과학',
    title:'과거의 AI 원리 증명', audience:'중등 ~ 고등', duration:'권장 3~4차시',
    summary:'역사 사료 속 기술과 판단을 분석하고 오늘날 AI 원리와 연결해 탐구 결과를 표현합니다.',
    description:'사료와 근거를 바탕으로 가설을 세우고, AI의 분류·예측·패턴 인식 개념과 비교합니다. 학생은 정보의 신뢰성을 검토하고 탐구 결과를 디지털 발표물이나 웹 프로젝트로 정리합니다.',
    outcomes:['사료 조사와 출처 확인','가설 설정과 근거 비교','AI 원리와 교과 연결','탐구 결과 디지털 표현'],
    flow:[['질문','역사 속 기술과 판단 사례에서 탐구 질문 찾기'],['조사','사료·자료 수집과 출처 신뢰도 확인'],['검증','AI 개념과 비교해 가설 및 근거 정리'],['발표','디지털 탐구 결과물 제작과 토론']],
    cover:'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/74124112-dad1-441f-8e1c-e69737f13711.png', samples:[]
  }
];
