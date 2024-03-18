import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "notBad_Blog",
  description: "notbad_blog",
  base: "/vitepress-notBad-Blog",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { 
        text: 'apple',
        items:[
          {
          text: 'MacをGet!!',
          link: 'https://www.apple.com/jp/'
        },
      ],
         },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'ブログ記事一覧', link: '/posts/postList' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/rockrollcake' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: '© Mako Agawa'
      
    }
  },
})
