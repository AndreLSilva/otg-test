# On the Go test
Live at [https://otg-test.vercel.app/](https://otg-test.vercel.app/)

## Packages

### [Material UI](https://mui.com/material-ui/)
Used as a component library and to style components.
**Considerations:** It has been ~4 years since I've last use MUI, so it took an extra time for me to read the documentation and get familiar with it again. Probably I could use more of it's feature if I had some extra time, but I believe I used it as expected. I strongly prefer to use **Tailwind** with **Headless UI** over it, I believe it works a lot better with server-side rendering and it's more light weight.

### [Axios](https://axios-http.com/)
Used to call the API routes.

### [React-hook-form](https://www.react-hook-form.com/)
**Considerations:** I have a lot of experience with it, but didn't find anywhere in the application where there was a form to use it, so I left it aside.

### [TanStack Query](https://tanstack.com/query/latest) (React Query)
Used to manage the cache in the app.

### [Storybook](https://storybook.js.org/)
Used to build a component library of the project.
**Considerations:** I used it for all the `design-system` components it was necessary. Would have implemented stories for all of the other ones if I had more time.

## Recommended extensions

### [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
Spell check the code to assure misspells are introduced both on the code and on the built content.

### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
Integrates ESLint into VS Code.

### [GetLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
Used for git hints on the code base.

### [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
Code formatter.

### [PostCSS](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
Extended CSS features support.

### [Styled Components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
Used to better interact with the Material UI/Emotion styled function feature.