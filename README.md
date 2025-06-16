# Portfolio_2

## Deploying to GitHub Pages

This project is configured for deployment to GitHub Pages.

1.  Navigate to the `my-portfolio` directory:
    ```bash
    cd my-portfolio
    ```
2.  Run the deployment script:
    ```bash
    npm run deploy
    ```
    This command will build the application and push the contents of the `build` folder to a `gh-pages` branch in your repository.

3.  **Configure GitHub Repository Settings:**
    After the `npm run deploy` command successfully completes, you need to configure your GitHub repository to serve your site from the `gh-pages` branch.
    - Go to your repository settings on GitHub.
    - Navigate to the "Pages" section.
    - Under "Build and deployment", select "Deploy from a branch" as the source.
    - Choose `gh-pages` as the branch and `/ (root)` as the folder.
    - Save the changes. GitHub will then build and deploy your site.

## Live Application

Once deployed and configured, the application will be available at:
[https://proxiee.github.io/Portfolio_Showcase/](https://proxiee.github.io/Portfolio_Showcase/)