# About Githubistic

The objective is to build a repository search application using the Github repository search API (https://docs.github.com/en/rest/reference/search#search-repositories) that displays the results of a query. The app can query the API directly.

The list should be able to sort by GitHub's default sort key (best match) and number of stars and also should be able to filter by language.

Each result when selected should route to a detailed screen that displays information about the repository. The results should contain the repository name, description, number of stars, language, and the owners name.

## Tech Stack & Libraries

- Typescript
- React
- Redux
- Redux-Toolkit
- Styled-Components
- Material-UI
- Reselect

## CLI

- create-react-app
- react-app-rewired

## CI/CD

- Vercel

## Deployed URL

- https://githubistic.vercel.app/

## Goal

1. Search Input
2. Search results
3. Sort results
4. Filter results
5. Detailed Result Page
6. Responsive Design

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
