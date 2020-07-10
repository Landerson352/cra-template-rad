# cra-template-rad

A [Create React App](https://github.com/facebook/create-react-app) template for rapid application development.

### Included libraries

- [lodash](https://lodash.com/docs/4.17.15) & [react-use](https://github.com/streamich/react-use) utility libraries
- [react-router](https://reacttraining.com/react-router/web/guides/quick-start) for routing
- [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks) for data
- [react-hook-form](https://react-hook-form.com/api/) for forms
- [chakra-ui](https://chakra-ui.com/getting-started) & [emotion](https://emotion.sh/docs/emotion) for styling
- [react-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) for icons
- [google fonts](https://fonts.google.com/) for fonts

### Service dependencies

Create accounts with these, if you don't already have them.

- [Github](https://github.com)
- [Vercel](https://vercel.com)
- [Firebase](https://firebase.google.com)

### Recommended setup

1. [Create a project repository in Github](https://github.com/new), and check it out locally.

1. From a terminal in your local project folder:
    
    ```
    npx create-react-app . cra-template-rad
    ```

1. Create a new project in the [Firebase console](https://console.firebase.google.com/).
   - Enable *Google Sign-in* under *Authentication*. It's the easiest, because Google owns Firebase.
   - Enable *Firestore* under *Database* in unprotected *test mode*.
     > Turn test mode off eventually.
   - Create a *Web App* and copy the *Config* object from the settings.

1. Update `src/firebaseConfig.js` with *Config* object from your Firebase Web App settings.

### Develop

1. In terminal, start the local dev server:
   ```
   $ yarn dev
   ``` 

1. Follow the remainder of the instructions in your project's README.

### Deploy

1. [Import your repository in Vercel](https://vercel.com/import/git). 
   > Your code commits will auto-deploy to `staging`, and you can promote them to `production`.

1. Add your Vercel hosting domain to the *Authorized domains* under *Authentication*.
