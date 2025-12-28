import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MNNIT Alumni - NCR Chapter",
  description: "Delhi NCR chapter of MNNIT Alumni association",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Alumni List', link: '/alumni-list' },
      { text: 'Past Events', link: '/past-events' },
      { text: 'Upcoming Events', link: '/upcoming-events' }
    ],

    sidebar: [
      {
        // text: 'Examples',
        items: [
          { text: 'Alumni List', link: '/alumni-list' },
          { text: 'Past Events', link: '/past-events' },
          { text: 'Upcoming Events', link: '/upcoming-events' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  cleanUrls: true
})
