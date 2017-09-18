## Operation Smile Library

This is a cross-platform CMS for publishing rich text documents to mobile devices with real-time updates. Written for [Operation Smile](http://www.operationsmile.org/), documents are authored and published via a companion WYSIWYG web app to a Firebase database for real-time updates to this Ionic/Angular2/TypeScript app.

## Instructions

To deploy, this project needs credentials to a Firebase project. Create a `./src/assets/authenticate.ts` file. In the Firebase [console](https://console.firebase.google.com/) for your project click "Add Firebase to your web app" and copy and paste the definition of the `config` variable into `authenticate.ts` to end up with something like:

```TypeScript
  export const firebaseConfig = {
    apiKey: "...",
    authDomain: "project-name.firebaseapp.com",
    databaseURL: "https://project-name.firebaseio.com",
    projectId: "project-name",
    storageBucket: "project-name.appspot.com",
    messagingSenderId: "..."
  };
```

In the root project directory, run:

```bash
$ npm install
```

To install all project dependencies and populate the `./node_modules` subfolder.

Run:

```bash
$ ionic serve -l
```

To test the app in a browser window.

## License

MIT
