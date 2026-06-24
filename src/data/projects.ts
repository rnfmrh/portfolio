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
      '다중 환경 빌드 (dev/stg/prod 등 15+ 환경)',
      '다국어(i18n) 지원',
    ],
    techStack: ['Vue 3', 'Pinia', 'Vite', 'ECharts', 'Vue I18n', 'Axios', 'SASS'],
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
      'Unity UI/UX 설계',
      '멀티플레이 백엔드 구현',
      '원작자에게 결과물 공유',
    ],
    techStack: ['Unity', 'C#', 'Photon'],
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
  },
]
