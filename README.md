This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

## Folder Structure

Folder structure has api, app, components, routing and store.

### API

This folder has the common approach of calling the API using axios npm library's core request modified function and accordingly to get common error and success functions to handle the api response.

### APP

This folder has the action, reducer.js, saga, selector and default state files to make action for the reducer and then calls the saga function to make api call and the once the reducer is updated the Gobal State updates the UI as well

### Components

This Folder consists of the Screens and Sub components that are used in the parent components so that code can be optimised.

### Routing 

Complete app routing for the Components are carried out from here

### Store

It consists of Store created by cobining the reducers and Root saga file where we all saga actions, after this root saga file and reducers are import and are exceuted together with middleware to run the watcher of saga whenever any change is detected.
