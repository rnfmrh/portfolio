export interface ProjectDetail {
  overview: string
  features: { title: string; description: string }[]
  challenges?: { problem: string; solution: string }[]
  teamSize?: string
  screenshots?: string[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  category: '업무' | '개인' | '인턴'
  period: string
  description: string
  role: string
  highlights: string[]
  techStack: string[]
  image?: string
  detail: ProjectDetail
}

export const projects: Project[] = [
  {
    id: 'smartthings-pro',
    title: 'SmartThings Pro',
    subtitle: '삼성 IoT 통합 관리 플랫폼',
    category: '업무',
    period: '2024',
    description:
      '삼성 SmartThings Pro의 메인 대시보드 및 메뉴 화면을 개발했습니다. 다양한 IoT 디바이스의 상태를 한눈에 파악할 수 있는 카드 기반 대시보드를 설계하고, 공통 컴포넌트 구조를 개선하여 재사용성을 높였습니다.',
    role: 'Frontend Developer',
    highlights: [
      '메인 대시보드 카드 UI 설계 및 구현',
      '공통 컴포넌트 구조 개선 및 재사용성 향상',
      '메뉴 화면 기능 개발 및 유지보수',
      '다국어(i18n) 리소스 적용 및 관리',
    ],
    techStack: ['Vue 3', 'Pinia', 'Vite', 'ECharts', 'Vue I18n', 'Axios', 'SASS'],
    detail: {
      overview:
        '삼성 SmartThings Pro는 IoT 디바이스를 통합 관리하는 B2B 플랫폼입니다. 메인 대시보드의 카드 UI와 메뉴 화면을 담당하여, 현재 실서비스에 반영되어 사용 중입니다.',
      features: [
        {
          title: '대시보드 카드 UI',
          description:
            '다양한 IoT 디바이스 상태를 카드 형태로 시각화하는 컴포넌트를 설계하고 구현했습니다. 카드 추가/삭제/정렬 기능과 디바이스 타입별 동적 렌더링을 지원합니다.',
        },
        {
          title: '공통 컴포넌트 구조 개선',
          description:
            '기존 컴포넌트의 재사용성을 분석하고, 공통 로직을 분리하여 컴포넌트 구조를 개선했습니다. 이를 통해 신규 메뉴 화면 개발 시 개발 속도를 높였습니다.',
        },
        {
          title: '다국어(i18n) 지원',
          description:
            'Vue I18n 기반의 다국어 체계를 활용하여 신규 화면 및 기능에 다국어 리소스를 적용하고 관리했습니다.',
        },
      ],
      teamSize: 'Frontend 팀 협업',
    },
  },
  {
    id: 'sphere-parking',
    title: 'Sphere Parking',
    subtitle: '주차장 모니터링 시스템',
    category: '업무',
    period: '2025',
    description:
      'SVG Canvas 기반으로 주차장의 실시간 상태를 시각화하는 모니터링 시스템을 개발했습니다. DB 데이터를 기반으로 주차장 탑뷰를 렌더링하고, 주차장 추가 및 평면도 관리 기능을 구현했습니다.',
    role: 'Frontend Developer',
    highlights: [
      'SVG Canvas 기반 주차장 탑뷰 시각화',
      '실시간 주차 상태 모니터링 기능',
      '주차장 / 평면도 CRUD 및 API 연동',
      'Vue 3 + TypeScript 아키텍처 설계',
    ],
    techStack: ['Vue 3', 'TypeScript', 'Pinia', 'SVG', 'Vite', 'SASS'],
    detail: {
      overview:
        'SVG Canvas 환경에서 주차장의 실시간 상태를 표시하고 모니터링하는 시스템입니다. DB 정보를 기반으로 주차장 탑뷰를 시각화하여 관리자가 한눈에 현황을 파악할 수 있습니다.',
      features: [
        {
          title: 'SVG 기반 주차장 탑뷰 시각화',
          description:
            'SVG Canvas 위에 주차 구역을 렌더링하고, 각 구역의 점유 상태를 실시간으로 표시합니다. 확대/축소 및 팬 기능을 포함한 인터랙티브 뷰를 구현했습니다.',
        },
        {
          title: '실시간 모니터링',
          description:
            'DB에 저장된 주차 센서 데이터를 기반으로 차량 입출차 상태를 실시간 반영하며, 상태 변화 시 시각적 피드백을 제공합니다.',
        },
        {
          title: '주차장 / 평면도 관리',
          description:
            '주차장 추가, 평면도 업로드 및 관리 기능을 구현하고 관련 API를 연동했습니다.',
        },
      ],
      teamSize: 'Frontend 담당',
    },
  },
  {
    id: 'btc',
    title: 'BTC',
    subtitle: '부산 지하철 관리 웹 시스템',
    category: '업무',
    period: '2023',
    description:
      '부산 도시철도의 통합 관리 웹 시스템 프론트엔드를 개발했습니다. OpenLayers 기반 지도에서 역사 위치와 상태를 시각화하고, CCTV 영상 스트리밍 연동 및 REST API 기반 제어 로직을 구현했습니다.',
    role: 'Frontend Developer',
    highlights: [
      'OpenLayers 기반 지도 화면 구현',
      '역사 CCTV 영상 화면 연동',
      'REST API 연동 및 제어 요청 처리 로직',
      '공공 인프라 실시간 모니터링 UI',
    ],
    techStack: ['OpenLayers', 'Vite', 'jQuery', 'REST API'],
    detail: {
      overview:
        '부산 도시철도의 역사, 차량, 시설물 등을 통합 관리하는 웹 시스템의 프론트엔드를 개발했습니다. 지도 기반 UI와 CCTV 영상 연동을 통해 관제 업무를 지원합니다.',
      features: [
        {
          title: 'OpenLayers 지도 화면',
          description:
            'OpenLayers를 활용하여 부산 도시철도 노선과 역사 위치를 지도 위에 시각화했습니다. Proj4 좌표 변환을 적용하여 정확한 위치 표시를 구현했습니다.',
        },
        {
          title: 'CCTV 영상 연동',
          description:
            '역사별 CCTV 영상을 웹 화면에서 실시간으로 확인할 수 있는 영상 뷰어를 연동했습니다. GW Player를 활용한 스트리밍 재생을 구현했습니다.',
        },
        {
          title: 'REST API 제어 로직',
          description:
            'Spring 백엔드와의 REST API 연동을 통해 시설물 상태 조회, 제어 요청 등의 처리 로직을 구현했습니다.',
        },
      ],
      teamSize: 'Frontend 분업 (팀 협업)',
      screenshots: [
        new URL('../resource/image/BTC/01_Map.png', import.meta.url).href,
        new URL('../resource/image/BTC/02_Dashboard.png', import.meta.url).href,
        new URL('../resource/image/BTC/03_Sutter.png', import.meta.url).href,
        new URL('../resource/image/BTC/04_Light.png', import.meta.url).href,
      ],
    },
  },
  {
    id: 'minivilles',
    title: 'MiniVilles',
    subtitle: '보드게임 디지털화 프로젝트',
    category: '개인',
    period: '2023 ~',
    description:
      '실제 보드게임 "미니빌"을 Unity로 디지털 게임화한 개인 프로젝트입니다. 게임 로직 설계부터 UI, 네트워크 멀티플레이까지 전체를 직접 구현했으며, 완성 후 원작자에게 결과물을 공유했습니다.',
    role: 'Game Developer (1인 개발)',
    highlights: [
      '보드게임 규칙의 게임 로직 설계 및 구현',
      'Figma로 UI/UX 전체 디자인 직접 제작',
      'Midjourney AI 활용한 카드 아트워크 제작',
      'Photon 기반 멀티플레이 구현',
      '원작자에게 결과물 공유',
    ],
    techStack: ['Unity', 'C#', 'Photon'],
    detail: {
      overview:
        '실제 보드게임 "미니빌(Minivilles)"을 Unity로 디지털화한 개인 프로젝트입니다. 주사위 굴림, 카드 구매, 자원 관리 등 보드게임의 핵심 메커니즘을 충실히 구현하고, Photon을 활용한 온라인 멀티플레이를 지원합니다. 완성 후 원작자에게 결과물을 공유했습니다.',
      features: [
        {
          title: '보드게임 로직 구현',
          description:
            '주사위, 카드 효과, 자원 교환, 승리 조건 등 원작 보드게임의 규칙을 게임 로직으로 설계하고 구현했습니다.',
        },
        {
          title: 'UI/UX 디자인 및 아트워크',
          description:
            'Figma로 전체 UI/UX를 직접 디자인하고, 카드 중앙 이미지는 Midjourney AI를 활용하여 제작했습니다. 주사위는 에셋스토어에서 구매하여 적용했습니다.',
        },
        {
          title: 'Photon 멀티플레이',
          description:
            'Photon 네트워킹을 활용하여 온라인 멀티플레이를 구현했습니다. 방 생성/참여, 턴 동기화, 상태 공유 로직을 포함합니다.',
        },
        {
          title: '원작자 공유',
          description:
            '완성된 게임을 원작 보드게임 제작자에게 직접 공유하여 결과물에 대한 피드백을 요청했습니다.',
        },
      ],
      teamSize: '1인 개발',
      screenshots: [
        new URL('../resource/image/Miniviles/01_Gama.png', import.meta.url).href,
        new URL('../resource/image/Miniviles/02_Dice.png', import.meta.url).href,
        new URL('../resource/image/Miniviles/03_Give.png', import.meta.url).href,
      ],
    },
  },
  {
    id: 'asset-bundle-viewer',
    title: 'Asset Bundle Viewer',
    subtitle: '3D 에셋번들 뷰어',
    category: '인턴',
    period: '2022',
    description:
      '인턴십 기간 동안 단독으로 개발한 프로젝트입니다. 에셋번들화된 3D 오브젝트를 로드하고 실시간으로 확인할 수 있는 뷰어 도구를 제작했습니다.',
    role: 'Unity Developer (1인 개발)',
    highlights: [
      '에셋번들 로드 및 3D 오브젝트 렌더링',
      '인턴 기간 독립적으로 설계 및 개발 완료',
      '사내 에셋 관리 워크플로우 개선에 기여',
    ],
    techStack: ['Unity', 'C#', 'Asset Bundle'],
    detail: {
      overview:
        '인턴십 기간 동안 단독으로 기획, 설계, 개발을 완료한 프로젝트입니다. 에셋번들화된 3D 오브젝트를 로드하여 실시간으로 미리보기할 수 있는 뷰어 도구로, 사내 에셋 관리 워크플로우 개선에 기여했습니다.',
      features: [
        {
          title: '에셋번들 로드 및 렌더링',
          description:
            '에셋번들 파일을 동적으로 로드하고, 포함된 3D 오브젝트를 씬에 렌더링하여 실시간으로 확인할 수 있는 기능을 구현했습니다.',
        },
        {
          title: '3D 오브젝트 인터랙션',
          description:
            '로드된 오브젝트의 회전, 확대/축소 등 기본적인 뷰어 조작 기능을 구현하여 다양한 각도에서 에셋을 확인할 수 있도록 했습니다.',
        },
        {
          title: '사내 워크플로우 개선',
          description:
            '기존에는 Unity 에디터를 통해서만 확인 가능했던 에셋번들을 별도 뷰어로 빠르게 확인할 수 있게 하여 에셋 검수 과정을 효율화했습니다.',
        },
      ],
      teamSize: '1인 개발 (인턴)',
    },
  },
]
