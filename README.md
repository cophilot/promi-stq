# PROMI Selftest Question - Web App

Selftest Question for PROMI (WS 2024/25) from TUDA.

---

## Tech Stack

This is a static web app written with Preact/Typescript and SASS.

---

## Custom Version

You can deploy a custom version for yourself and deploy it to GitHub Pages.

### 1. Fork the Repository

Fork this repository to your own GitHub account.

### 2. Adapt Questions

Go to `src/Question.ts` and adapt the questions to your needs.

### 3. Deploy to GitHub Pages

-   Make sure to give read and write access to the workflow runner in the repository settings. This can be done by navigating to `Settings > Actions > General' and then enabling _Read and write permissions_ for the Workflow Permissions.
-   A workflow is set up to deploy the app to GitHub Pages. This will run automatically when you push to the `main` branch or can be triggered manually.
-   After the Pipeline has run through go to `Settings > Pages` and set the source branch to `gh-pages` and the root to `/`.

---

## Local Installation

1. Clone the repository
2. Run "pnpm install"
3. Run "pnpm start"
4. Open "http://localhost:5173" in your browser
