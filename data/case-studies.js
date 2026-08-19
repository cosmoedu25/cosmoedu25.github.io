/* 교육 사례 추가: 아래 배열에 학교별 객체를 복사해 추가합니다. */
window.COSMO_CASE_STUDIES = [
  {
    id: 'buwon',
    institution: '○○고등학교',
    type: '고등학교 AI 융합 프로젝트',
    year: '2026',
    title: '교과 아이디어를 실제 웹앱과 디지털 작품으로',
    summary: 'AI를 활용해 진로·건강·문학·역사 주제를 탐구하고, 학생마다 실행 가능한 웹 결과물을 완성한 프로젝트 수업입니다.',
    portalUrl: 'https://app.cosmoedu.co.kr/school/buwon',
    cover: 'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/92f9fcf7-800a-41a4-88a4-550a5d55c16e.png',
    stats: [
      ['5개', 'AI 융합 프로젝트 영역'],
      ['1일', '집중 프로젝트 운영'],
      ['웹 기반', '학생별 실행 결과물']
    ],
    tracks: [
      ['진로', '진로 로드맵 앱', 'AI와 함께 자신의 진로를 탐색하고 인터랙티브 로드맵으로 표현합니다.'],
      ['체육·건강', '운동·에너지 관리 앱', '생활 습관과 운동 목표를 정하고 개인 맞춤형 관리 앱을 제작합니다.'],
      ['국어·미술', 'AI 시화 그리기', '직접 쓴 시와 생성형 AI 이미지를 결합해 디지털 시화를 완성합니다.'],
      ['국어·문학', '스핀오프 문학창작', '명작을 새롭게 해석하고 후속 이야기를 디지털 작품으로 공동 집필합니다.'],
      ['역사·과학', '과거 AI 원리 증명', '역사 사료를 분석하고 AI를 활용해 원리와 가설을 검증합니다.']
    ],
    results: [
      {
        title: 'GrowFit 운동 성장 코치',
        category: '체육·건강 × 바이브코딩',
        description: '오늘의 컨디션에 따라 운동 루틴을 조정하고 완료율을 기록하는 반응형 웹앱입니다.',
        image: 'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/92f9fcf7-800a-41a4-88a4-550a5d55c16e.png',
        url: 'https://app.cosmoedu.co.kr/api/s3/play/dXNlcnMvZG9vcHlvL2h0bWwv7ZSE66Gc7KCd7Yq4LTIwMjYwNzA5MDIyNzQ3Lw/'
      },
      {
        title: '나의 운동 성장 프로젝트',
        category: '체육·건강 × 데이터 기록',
        description: '개인의 운동 목표와 성장 기록을 시각적으로 관리하는 학생 제작 프로젝트입니다.',
        image: 'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/784755b9-a6f8-4231-960c-18a298308e22.png',
        url: 'https://app.codingnplay.co.kr/api/s3/play/dXNlcnMvaG5kczk5L2h0bWwv7ZSE66Gc7KCd7Yq4LTIwMjYwNzEyMDQzNzE5Lw/'
      },
      {
        title: 'AI 운동 코치',
        category: 'AI × 체육',
        description: '다이어트·근력·체력·유연성 등 선택한 목표에 맞춰 운동을 추천하는 웹앱입니다.',
        image: 'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/231e17f3-3cb4-4a04-8a5e-51bc63fc03ce.png',
        url: 'https://app.cosmoedu.co.kr/api/s3/play/dXNlcnMvc3R1ZGVudDAwL2h0bWwv7ZSE66Gc7KCd7Yq4LTIwMjYwNzE0MDAwNTE3Lw/'
      },
      {
        title: '개인 맞춤 식단',
        category: '건강 × 생활 데이터',
        description: '개인 조건과 목표를 바탕으로 식단을 제안하는 생활 밀착형 프로젝트입니다.',
        image: 'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/3cb6c7cd-a8ca-4d81-a371-52bb2ece5a6a.png',
        url: 'https://app.cosmoedu.co.kr/api/s3/play/dXNlcnMvc3R1ZGVudDAwL2h0bWwv7ZSE66Gc7KCd7Yq4LTIwMjYwNzE0MDEwMjU5Lw/'
      },
      {
        title: '얼어붙은 교실의 영민이',
        category: '국어 × 스핀오프 문학',
        description: '이야기를 재해석하고 이미지와 글을 결합해 완성한 디지털 문학 작품입니다.',
        image: 'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/9539eef5-b7f0-4cbb-a722-1ead597ae933.png',
        url: 'https://kr.object.ncloudstorage.com/educodingnplaycontents/users/student11/creative/share/198_1783910667470.html'
      },
      {
        title: '두 형제의 봄',
        category: '국어 × 디지털 창작',
        description: '문학적 상상력을 이미지와 슬라이드로 표현한 학생 창작 결과물입니다.',
        image: 'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/80360fb0-2f27-4b01-8005-c10e1bb4cfe4.png',
        url: 'https://kr.object.ncloudstorage.com/educodingnplaycontents/users/cosmoschool/creative/share/184_1783911072630.html'
      },
      {
        title: '파우스트',
        category: '고전문학 × AI 시화',
        description: '고전 작품에서 받은 영감을 시각 이미지와 함께 재구성한 디지털 작품입니다.',
        image: 'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/cb63d2ba-c1a2-4427-b7de-799921bbf627.png',
        url: 'https://kr.object.ncloudstorage.com/educodingnplaycontents/users/student01/creative/share/197_1783911892210.html'
      },
      {
        title: '랜덤 룰렛 앱',
        category: '컴퓨팅사고 × 바이브코딩',
        description: '확률과 사용자 입력을 활용해 직접 실행할 수 있도록 만든 웹 도구입니다.',
        image: 'https://onag54aw13447.edge.naverncp.com/pong/thumbnails/797f96b9-59cf-490b-be12-85a38be2d458.png',
        url: 'https://app.codingnplay.co.kr/api/s3/play/dXNlcnMvc3R1ZGVudDAwL2h0bWwv7ZSE66Gc7KCd7Yq4LTIwMjYwNzE0MDAxMDQxLw/'
      }
    ]
  }
];
