# JS Santa Application:  

This is basic application based on React Frontend + NodeJS backend server with express to achieve this.

## Running the code. 

As the application here is built on Glitch, Glitch only provides one port to work per application. This means that to serve both backend and frontend, 
we first need to create a build of the frontend code using vite:  

```yml

vite build

```

As per the settings provided in the vite config file, this outputs the file to a folder named public. Then we can use our backend server to serve the public folder.

```yml

npm run start

```

This runs the backend server on port 3000, which can be accesed here : https://chemical-salt-juniper.glitch.me/

Any changes on the frontend react code necessitates a rebuild.

## Submitting the form:

This is achieved via react routing and use of package **axios**. On every submit, we use axios to fetch the json data for comparison.
Based on the data validity, we will then show the user the correct route.

## Send email every 15s:

From the frontend, we can send a backend API request every 15s (using useEffect hook), with the message data.
From the backend server, we use the package **nodemailer** to send a mail from SMTP erethreal email. The details for the same can be seen in the .env file

## App structure: 

1. **/public** : Location for the built app
2. **/src/client** : Client side functionality for sending an Email
3. **/src/components** : Contains all the application components
4. **/src/server** : Server side code for sending emails 

## Tesing:

The testing was done using **jest** on react. Most of the dev dependencies, like **jest-environment-jsdom**, and others,  were introduced for a smooth test case setup and execution.
The application currently has a coverage of > 95%

To run the test cases in the application, please run: 

```yml

npm run test

```

To run the test cases along with the coverage report, please run:

```yml

npm run test:coverage

```

## UI/UX 

Considering the UI was not the highest priority point, it has been left largely untouched, and the css files removed.
However, in the case that the UI interferes with the user action, some **bootstrap** classes have been used.

