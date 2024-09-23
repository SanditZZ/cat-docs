# Adding a New Section to the Project

To add a new section (e.g., a new topic with multiple pages) to your project, follow these steps:

## Steps:

1. **Create a Directory for the New Section:**
   - Inside the `src` directory, create a new folder for the section.
   - For example, if you are creating a section for **Cat Behavior**, you would create a folder called `cat-behavior`.

2. **Create a New Page (or Pages) in the Section:**
   - Inside the `cat-behavior` folder, create a Markdown file for your first page, such as `introduction.md`.
   - Add content to `introduction.md`:
     ```markdown
     ---
     title: Cat Behavior Introduction
     description: Introduction to cat behavior.
     ---
     # Cat Behavior Introduction
     Cats are fascinating creatures...
     ```

3. **Update the Sidebar Configuration:**
   - Open the `config.tms` file and add the new section to the `sidebar` array. For example:
     ```typescript
     sidebar: [
       // Existing sections...
       {
         text: "Cat Behavior",
         items: [
           { text: "Introduction", link: "/cat-behavior/introduction" }
         ],
       },
     ]
     ```

4. **Add Pages to the Section:**
   - If your new section will have multiple pages, create additional Markdown files in the `cat-behavior` folder (e.g., `habits.md`, `communication.md`).
   - Update the sidebar as follows:
     ```typescript
     sidebar: [
       // Existing sections...
       {
         text: "Cat Behavior",
         items: [
           { text: "Introduction", link: "/cat-behavior/introduction" },
           { text: "Habits", link: "/cat-behavior/habits" },
           { text: "Communication", link: "/cat-behavior/communication" },
         ],
       },
     ]
     ```

5. **Update the `nav` Section (Optional):**
   - If you want the new section to be accessible from the top navigation bar, update the `nav` array:
     ```typescript
     nav: [
       { text: "Home", link: "/" },
       { text: "Why Cat Docs?", link: "/why-cat-docs/why" },
       { text: "Cat Behavior", link: "/cat-behavior/introduction" }
     ],
     ```

6. **Test Your Changes:**
   - Start your development server and verify that the new section and its pages are accessible via the sidebar or navigation bar.


## Example for a New Section: "Cat Behavior"

### Directory Structure:
```
src/
  cat-behavior/
    introduction.md
    habits.md
    communication.md
```

### Updated Sidebar in `config.tms`:
```typescript
sidebar: [
  {
    text: "Why Cat Docs?",
    items: [{ text: "Why", link: "/why-cat-docs/why" }],
  },
  {
    text: "Cat Behavior",
    items: [
      { text: "Introduction", link: "/cat-behavior/introduction" },
      { text: "Habits", link: "/cat-behavior/habits" },
      { text: "Communication", link: "/cat-behavior/communication" }
    ],
  },
  // Other sections...
]
```
