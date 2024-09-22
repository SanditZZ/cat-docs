import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cat Docs",
  description: "Cat Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: "Home", link: "/"},
      {text: "Why Cat Docs?", link: "/why-cat-docs/why"},
    ],

    sidebar: [
      {
        text: "Why Cat Docs?",
        items: [{text: "Why", link: "/why-cat-docs/why"}],
      },
      {
        text: "History",
        items: [{text: "Origin of Domestic Cats", link: "/history/origin"}]
      },
      {
        text: "Statistics",
        items: [{text: "Breeds", link: "/statistics/breeds"}],
      },
      {
        text: "Feeding Guidelines",
        items: [{text: "Feeding Guidelines", link: "/feeding-guidelines/things-cat-cannot-eat"}],
      },
      {
        text: "Grooming Guidelines",
        items: [{text: "Grooming Guidelines", link: "/grooming-guidelines/groom"}],
      },
      {
        text: "Frequently Asked Questions",
        items: [{text: "Frequently Asked Questions", link: "/frequently-asked-questions/faqs"}],
      },
      {
        text: "Fun Facts",
        items: [{text: "Fun Facts", link: "/fun-facts/facts"}],
      },
      {
        text: "Content Creation Guidelines",
        items: [
          {text: "Adding a New Section", link: "/content-creation-guidelines/adding-a-section"},
          {text: "Adding a Page to an Existing Section", link: "/content-creation-guidelines/adding-a-page-to-existing-section"},
        ],
      },
    ],

    socialLinks: [
      {icon: "github", link: "https://github.com/SanditZZ/cat-docs"},
    ],
  },
  cleanUrls: true,
  srcDir: "./src",
});

