# YOCO

This project is called "Donation Form", and it's a React application that allows users to make a donation to the Hope Again Recovery Home.

## Prerequisites

To run this application, you need to have Node.js and npm installed on your computer.

## Installation

To install the dependencies, run the following command:

`npm install`

## Usage

To start the application, run the following command:

`npm start`

Then, open [http://localhost:3000](http://localhost:3000/) in your browser.

## Dependencies

This application uses the following dependencies:

- React: a JavaScript library for building user interfaces.
- react-bootstrap: a UI library for Bootstrap.
- axios: a Promise-based HTTP client for the browser and Node.js.
- YocoSDK: a payment gateway SDK for South Africa.

## How it works

The application uses the YocoSDK to handle the payment process. When the user submits the donation form, the SDK shows a popup where the user can enter their payment details. If the payment is successful, the application sends a POST request to a server endpoint (/api/donate) with the payment details.

## Author

This project was created by Tersia Koetzee.
