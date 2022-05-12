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
  },
};
