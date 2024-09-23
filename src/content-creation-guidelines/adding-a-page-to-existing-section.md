# Guidelines for Adding a new page to a already existing section in the Project

This project is using **VitePress**, and the site structure is controlled through the `config.tms` file. Based on the provided configuration, here are detailed steps to add a **new page** or a **new section** to the project.



## 1. Adding a New Page to an Existing Section

If you want to add a new page to one of the existing sections, follow these steps:

### Steps:

1. **Create the New Markdown File:**
   - Each page in VitePress is represented by a Markdown (`.md`) file.
   - Navigate to the correct directory inside the `src` folder for the section where you want to add a new page.
   - Create a new Markdown file. For example, to add a page to the "Why Cat Docs?" section:
     - Navigate to `src/why-cat-docs/`.
     - Create a new file called, for example, `new-topic.md`.

2. **Add Content to the Markdown File:**
   - Open `new-topic.md` and add the relevant content for your page.
   - Optionally, at the top of the file, you can add frontmatter to define a title or meta description:
     ```markdown
     ---
     title: New Topic
     description: Learn about the new topic in Cat Docs.
     ---
     ```

3. **Update the Sidebar Navigation:**
   - Open the `config.tms` file.
   - Find the section where you want to add the new page, and add it under `items`. For example, to add it under "Why Cat Docs?", modify it like this:
     ```typescript
     sidebar: [
       {
         text: "Why Cat Docs?",
         items: [
           { text: "Why", link: "/why-cat-docs/why" },
           { text: "New Topic", link: "/why-cat-docs/new-topic" }
         ],
       },
       // Other sections...
     ]
     ```

4. **Link the Page in the `nav` (Optional):**
   - If you want to add the new page link to the top navigation, you can update the `nav` section in the same file:
     ```typescript
     nav: [
       { text: "Home", link: "/" },
       { text: "Why Cat Docs?", link: "/why-cat-docs/why" },
       { text: "New Topic", link: "/why-cat-docs/new-topic" }  // Add this line
     ],
     ```

5. **Test the Page:**
   - Run the local server (usually with `vitepress dev` or `npm run dev`) to see the new page live in the project.

---

