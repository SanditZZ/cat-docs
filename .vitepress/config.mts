import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cat Docs',
  description: 'Cat Docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Why Cat Docs?', link: '/why-cat-docs/why' },
    ],

    sidebar: [
      {
        text: 'Why Cat Docs?',
        items: [{ text: 'Why', link: '/why-cat-docs/why' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/SanditZZ/cat-docs' }],
  },
  cleanUrls: true,
});
