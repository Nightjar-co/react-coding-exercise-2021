![Nightjar](https://avatars1.githubusercontent.com/u/33653623?s=100&v=4)

# 📋 Nightjar React Coding Exercise

## What you need to do

### 1. Initial setup

1. Create a private fork of the repository. (Create your own repository, add this repository as a remote, and pull down this source as a base)
2. Make sure you have recent enough versions of NodeJS and Yarn installed. We used NodeJS v10.16.3 and Yarn 1.19.1.
3. Open a terminal and `cd` to your local working copy.
4. Execute `yarn` to install dependencies.
5. Execute `yarn start`. It should open a browser onto http://localhost:3000/ and you should see a list of Vivid event
   tiles in the browser. If you don’t, your first task is to get it running successfully!

As you proceed through the subsequent steps, commit to git as you normally would and push your commits to your fork.
The idea is to do things like you would in a real project:

- adopt the house code style;
- make your changes look like they belong in the codebase;
- minimise surprises for future developers;
- be neat and tidy.

### 2. Display the total number of events in the title

The events load asynchronously in the browser. While they are loading, keep the title unchanged i.e. “Results”. When
they are ready, have the title change to “Results: n events found” where _n_ is the total number of events that were
received.

![Illustration of results count](https://raw.githubusercontent.com/Nightjar-co/react-coding-exercise-2021/main/screenshots/results-count.png)

### 3. Display a loading indicator while the events are loading

Events load really fast locally, but that might not be the case in the real world. We can do better than
`<p>Loading...</p>`! Use your own judgement to design and build a spinner or other visual indication that the content
is on its way. Make it in line with the Vivid visual identity.

You might find the [Redux Dev Tools extension](https://github.com/zalmoxisus/redux-devtools-extension) useful for this
task, so you can hold the UI in its loading state without any code changes.

### 4. Error handling

Try visiting http://localhost:3000/music and see what happens.

The API returned an error, but the UI isn’t doing anything with it. We can do better than that! Use your own judgement
to design and build a friendly error message.

**Note**: we don’t want you to fix the error or stop it from occurring, we just want to render a friendly message to the
user in scenarios such as this.

### 5. Implement favourites

Go back to http://localhost:3000/ and try clicking the ♡ icon on a tile. Is it working?

![Illustration of favourites button](https://raw.githubusercontent.com/Nightjar-co/react-coding-exercise-2021/main/screenshots/favourites-button.png)

If you check in the Redux dev tools extension, you see that an action is dispatched but the state doesn’t change. Let’s
fix that!

There is a RESTful API for favourites already included in this repo, so we just need you to integrate with it. The API
endpoints are:

- **GET** `/api/favourites`: returns an array of event ids.
- **PUT** `/api/favourites/:id`: adds the event with id given in the `:id` url segment to the user’s favourites, which
  are stored in the session (i.e. cookies need to be enabled on the client)
- **DELETE** `/api/favourites/:id`: removes the event with id given in the `:id` url segment from the user’s favourites

Try them out in a client of your choosing (e.g. Postman) to satisfy yourself that they are working.

Now integrate them! When complete, your favourites should be persisted across page reloads. Try to make your
implementation fit in with our existing codebase, by adopting our code style and using similar architecture.

### 6. Thank you 🎉

Don’t forget to push your work up to your fork of the repo, and let us know you’re ready for us to take a look!

# General documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and has been
enhanced with server-side rendering, Redux, JSS and Standard code style.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn start:prod`

Runs the app in production mode. Intended for use on the server, but should be used locally when you need to test in
production mode. Executes the built assets in the `build/` folder.

*Note*: There is a safety check in case you have never run `yarn build` when you run `yarn start:prod`, but it doesn’t
check whether those files are up to date. So make sure you’ve run `yarn build` yourself before starting the server in
production mode.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
