# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages.

### Prerequisites

1.  **Update `package.json`**:
    Open `my-portfolio/package.json`. Find the `homepage` field and replace the placeholder values with your GitHub username and the name of this repository. It should look like this:
    `"homepage": "https://<your-username>.github.io/<your-repo-name>/"`

2.  **GitHub Repository**:
    Ensure you have created a GitHub repository for this project and that your local `my-portfolio` directory is a git repository with the GitHub repository set as a remote.
    If you haven't initialized your local repository or added a remote, you can typically do so with:
    ```bash
    # Navigate to your project directory if you aren't already there
    # cd my-portfolio

    # Initialize git (if not already done)
    # git init

    # Add your GitHub repository as a remote
    # git remote add origin https://github.com/<your-username>/<your-repo-name>.git
    ```

### Deployment Steps

This project uses the `gh-pages` package to simplify deployment.

1.  **Install `gh-pages`**:
    If you don't have it installed as a dev dependency, you can add it by running:
    ```bash
    npm install --save-dev gh-pages
    ```
    Or if you use yarn:
    ```bash
    yarn add --dev gh-pages
    ```

2.  **Add Deploy Script to `package.json`**:
    Open `my-portfolio/package.json` and add the following scripts to your `scripts` section:
    ```json
    "scripts": {
      // ... your existing scripts (start, build, test, eject)
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```
    The `predeploy` script ensures your application is built before deployment. The `deploy` script will push the contents of your `build` directory to a branch named `gh-pages`.

3.  **Deploy**:
    Run the deploy script:
    ```bash
    npm run deploy
    ```
    Or if you use yarn:
    ```bash
    yarn deploy
    ```
    This command will create a `gh-pages` branch (if it doesn't exist), push your `build` directory's contents to it, and then GitHub Pages will serve your site from this branch.

4.  **Configure GitHub Pages in Repository Settings**:
    - Go to your repository on GitHub.
    - Click on the "Settings" tab.
    - Navigate to the "Pages" section in the left sidebar.
    - Under "Build and deployment", for "Source", select "Deploy from a branch".
    - Under "Branch", select `gh-pages` as the source branch and `/ (root)` as the folder.
    - Click "Save".

    It might take a few minutes for your site to be live at the URL specified in your `homepage` field.

### Note on `build` folder
The `gh-pages` deployment method handles the `build` folder by pushing its contents to a separate `gh-pages` branch. You typically should keep the `build` folder in your `.gitignore` file on your main development branch (e.g., `main` or `master`) to avoid committing build artifacts directly to it. The `gh-pages` package takes care of what needs to be on the deployment branch.
```
