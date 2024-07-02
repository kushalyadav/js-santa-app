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


# Pre-provided text:
# IMPORTANT! READ before starting

By default for anonymous users (non logged in), your code and app will only remain on glitch.com for 5 days.
In order to not lose your challenge, please create a glitch.com account and log in to glitch.com before proceeding.

The following README contains instructions to guide you through the coding challenge, please read them carefully.

# JS coding challenge:

## How to create and submit your app using glitch

1. **Login to glitch**: make sure you are logged in to glitch.com

2. **Clone**: Go to this URL: https://glitch.com/~js-santa-app and click the `Remix your own` button to clone the code. This will copy all the code to a new, randomly generated URL (e.g. https://glitch.com/edit/#!/capable-toothpaste). This is your URL to code on, no other candidates will have this URL.

3. **Code**: You can edit the code directly in the Glitch editor or use your editor of choice (VSCode, Sublime, etc) and copy paste the files into Glitch. Git import and export is also available in the Tools menu on the bottom left. How you edit the code is entirely up to you, so long as your finished work is viewable at the URL created in the previous step.

> **NOTE**: Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

4. **Turn in**: When you finish coding, send your URL to us so we can review your code.

## Objectives overview:

The webapp should display a form for children to enter their id and a free text message to santa.

When submitting the form, the server should check:

1.  that the child is registered
2.  that the child is less than 10 years old.
    To this purpose, the server can fetch user and profiles data in JSON format from:

- https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json
- https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json

If the child is not registered (no match for the user id) or more than 10years old, the webapp should display a basic error page with an error message explaining the problem.\
If the child is registered and less than 10 years old, the server should show a page indicating that the request has been received.

Every 15seconds, the server should send an email with information on all pending (not yet sent) requests including:

- child username (eg. charlie.brown)
- child's address (eg. 219-1130, Ikanikeisaiganaibaai, Musashino-shi, Tokyo)
- request free text as was input in the form

Email sender should be set as do_not_reply@northpole.com, and sent to santa@northpole.com

## Tips and detailed instructions:

- Somebody started to work on the app, but left it unfinished and did not use any modern technology. We added React for you to have a clean base but feel free to use any other technology you might prefer.
- The UI and UX of the application for this challenge is not the priority. The pages/email do not need to look good, as long as they convey the information effectively.
- You should fetch the JSON data at every form submission (consider it as an API).
- For the sake of the challenge, you can keep the requests in-memory only.
- You are encouraged to select and use npm packages as needed (you can add packages by editing package.json, or using `npm install` from the glitch console).
- To get an smtp server for emails, go to https://ethereal.email/ and click "Create Ethereal Account".\
  This will give you an account (take note of your username and pwd if you need to re-logon later) and smtp server (actual emails do not get delivered).\
  Go to https://ethereal.email/messages to see the emails that have been received by the smtp server.

## Some things we will look for in your submission

- Code quality (readability, use of modern syntax...)
- Does the app work as designed (cf. objectives overview)
- App architecture (folder structure, configuration management...)
- Documentation (why did you choose to change or add a package...)

## Tips on usage of glitch

Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.
When your app is running, you can access logs and console using the "Tools" button at the bottom left.
