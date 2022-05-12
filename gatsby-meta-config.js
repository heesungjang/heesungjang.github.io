module.exports = {
  title: `heesungjang.github.io`,
  description: `heesung's personal study blog`,
  language: `en`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://heesungjang.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `heesungjang/heesungjang.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'UA-134826755-2', // Google Analytics Tracking ID
  author: {
    name: `Heesung Jang`,
    bio: {
      role: `developer`,
      description: ['who builds great things', 'who enjoys learning', 'who values people 💎'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/heesungjang`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `heesungj7@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.01 ~',
        activity: 'Started my development journey',
      },
      {
        date: '2021.06 ~ 2021.09',
        activity: 'Completed an intensive boot camp course - "sail99"',
      },
      {
        date: '2021.09 ~',
        activity: 'Frontend developer',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'UFO(유학생들의 프리한 오늘)',
        description:
          '유학생들이 기본적인 소통부터 현지 생활에 필요한 정보 교환까지 같은 환경에 있는 다른 유학생들과 교류하며 즐거움을 얻을 수 있는 통합 커뮤니티 서비스입니다. UFO의 모든 팀원들이 기획부터 디자인, 개발, 실사용자 피드백을 위한 광고까지 직접 진행했던 프로젝트입니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl: 'UFO.png',
        links: {
          github: 'https://github.com/hanghae99-final-3',
          demo: 'https://d3hi48zkmemxty.cloudfront.net/',
        },
      },
    ],
  },
};
