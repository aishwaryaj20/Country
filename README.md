
### Project Name: Countries By Currency

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview
The Countries By Currency project is a React application that allows users to search for countries based on a specific currency code. It fetches data from the REST Countries API to display a list of countries that use the entered currency along with their respective flags.

## Features
Search by Currency Code: Users can enter a currency code (e.g., USD, EUR) to find countries that use that currency.
Display Country Flags: The app displays flags of the countries associated with the entered currency.
Flex Box Layout: Countries and their flags are displayed in flex boxes, adapting to the container width.

## Technologies Used

React: Built using React library for frontend development.
JavaScript (ES6+): Used modern JavaScript for app logic.
REST Countries API: Used to fetch country data based on currency codes.
Flag CDN: Fetching flag images based on country codes.

## Code Structure

The project structure is organized into components:

## CountriesByCurrency Component:

Handles the main functionality of fetching countries by currency, displaying them, and showing associated flags.
Loader Component: Manages the loading state and displays a loading indicator while fetching data.


### Installation
# To run the application locally:

Clone the repository: git clone <repository-url>
Navigate to the project directory: cd countries-by-currency
Install dependencies: npm install
Start the development server: npm start
Access the app in your browser at http://localhost:3000

## Usage

Enter a currency code in the input field.
Click on the "Search" button to find countries associated with that currency.
View the list of countries and their flags displayed as flex boxes.

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


### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
