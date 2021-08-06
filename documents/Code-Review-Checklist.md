# [React Native JS] Code review checklist

1. **Code formatting:**

   - Use `prettier` extension with rules in your file `.prettierrc`

   ```json
   {
     "singleQuote": true,
     "printWidth": 120,
     "jsxBracketSameLine": true,
     "trailingComma": "all",
     "jsxSingleQuote": true,
     "tabWidth": 2,
     "useTab": false
   }
   ```

   - Make sure your code formatted after you save, you can choose of `format selection` or `format on save` on your IDE it's up to you.

2. **Code linter:**
   - Install `ESLint` extension on your IDE.
   - Make sure `Eslint` is running
3. **Naming conventions:**
   - Folder name: `PascalCase`
   - File name: `index.ts`, `[page].tsx`, `[ComponentName].tsx`, `[ComponentName].module.scss`
   - Component, interface or class name: `PascalCase`
   - Function and variable name: `camelCase`
4. **React/JSX style guide:**
   - Best practice style guide, please refer: [https://airbnb.io/javascript/react/](https://airbnb.io/javascript/react/)
5. **CSS/SCSS style guide:**
   - We will use SCSS for this project, you can learn more here: [https://sass-lang.com/](https://sass-lang.com/)
   - Rules when use `!important`:
     - Always look for a way to use specificity before even considering !important
     - Only use !important on page-specific CSS that overrides foreign CSS (from external libraries, like Bootstrap or normalize.css).
     - Never use !important when you're writing a plugin/mashup.
     - Never use !important on site-wide CSS.
   - Please use BEM instead of nested classes [https://cssguidelin.es/#bem-like-naming](https://cssguidelin.es/#bem-like-naming)
     - What's BEM: [http://getbem.com/naming/](http://getbem.com/naming/)
     - Why BEM?: [https://dev.to/hebashakeel/bem-in-a-nutshell-2n7i](https://dev.to/hebashakeel/bem-in-a-nutshell-2n7i)
     - BEM with SCSS: [https://css-tricks.com/using-sass-control-scope-bem-naming/](https://css-tricks.com/using-sass-control-scope-bem-naming/)
6. **Folder structure conventions:**

   ```jsx
   /
    - documents/    -> // all documents, digrams for project
    - public/      -> // Contain assets files: fonts, images...
    - components/  -> // Universal components, reusable components for multiple pages/components
    - libs/
        - constants/   -> // Common variables, constants... can be use in global scope
        - hooks/    -> // Custom hooks for pages/components
        - utils*.ts     -> // utilily functions
    - pages/
    - styles/       -> // Global styles, variables, mixins...
    - .prettierrc
    - .gitignore
    - .eslintrc
    - ...
   ```

   - Folder `pages/`, you can refer to this documentation from NextJS here: [https://nextjs.org/docs/routing/introduction](https://nextjs.org/docs/routing/introduction)

7. **Component conventions:**

   - Please create component for reusable as much as possible
   - Separate logic to split files, then import and use, to shorten the code for easy reading and understanding, easy debugging and future expansion
   - Each child component must be separated by a blank line:

   ```html
   <Layout>
     <header>Content header</header>

     <Container>
       <input />

       <Paragraph />

       <button>Submit</button>
     </Container>

     <footer>Footer here</footer>
   </Layout>
   ```

8. **Putting imports in an order:**
   - You can use the VSCode shortcuts:
     - Mac: `Option + Shift + O`
     - Windows/Linux: `Alt + Shift + O`
9. **Don’t Repeat Yourself**
   - One of the basic principles of software development is `Don’t Repeat Yourself`.
   - We must not write the same piece of code twice.
   - Whenever you write the same piece of code twice, you must try to refactor it into something reusable, even if not completely.
   - You can create your own reusable components.
   - For example, if your app contains multiple input fields, you can create a reusable `<TextInput>` component and use it across any screen within your app.
   - Not only input fields, if your app contains multiple buttons, but you can also create a reusable `<Button>` component and use it anywhere within your app.
   - Likewise, you can create any number of reusable components based on your app architecture.
10. **Avoid inline stylings:**
    - Using inline stylings is much harder to maintain if a change is to be made there will be hundreds of places in the code you will have to search and change unless all styles are clearly defined with unique class names in a CSS stylesheet.
    - For any property you want to change, you would have to simply modify the corresponding class name properties in the stylesheet, all the divs that use the class name will be affected.
    - A well-defined stylesheet is extremely helpful while building complex React Native apps.
11. **Exception handling:**
    - Please use the `try` and `catch` blocks to handle exceptions within a React Native app.
12. **Commenting Conventions:**
    - _Please remove unused code first if possible, don't comment on it, it's very messy and hard to read, you can find it again on git history, no need to keep it for future._
    - Place the comment on a separate line, not at the end of a line of code.
    - Begin comment text with an uppercase letter.
    - End comment text with a period.
    - Insert one space between the comment delimiter (//) and the comment text.
13. **Always perform data validations:**
    - You can use a third party library or do it yourself if the validation is simple
14. **Perform the API Calls in `useEffect()`**
15. Add loading spinners while fetching the data or waiting for an API response
    - This is something that is very easy to implement.
    - Adding Loading Indicators makes your app look more responsive and professional to users.
16. **Don’t put logs in the release build:**
    - Having many `console.log` statements can slow your app down, especially if you are using logging libraries such as redux-logger.
    - Be sure to disable all logs (manually or with a script) when doing a release build.
17. **Lock dependencies:**
    - If your `package.json` file has a dependency that looks like
      `"some-cool-library": "^0.4.2"`, you might want to remove the `^` character in order to lock the dependency on that specific version.
    - This will ensure that you don’t import breaking changes from the new versions of the library into your project.
    - Use command `npm ci` when reinstall dependencies.
18. **Review your code before creating a pull/merge request:**
    - Review your code at least once before creating a pull or merge request
