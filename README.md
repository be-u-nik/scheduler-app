# Scheduler App

This project was developed with [NodeJs](https://nodejs.org/en/docs/).

## How to run:

1. Clone this git repository into your local repository using the cmd `git clone https://github.com/be-u-nik/scheduler-app.git`.

2. Install the node modules using the command `npm install`.

3. Run `nodemon index.js` to start the app.

4. You can test the scheduler api by opening [http://localhost:3005](http://localhost:3005) and passing a string as an argument.

## How Scheduling Works:

- I have converted the given dateTime format **2020-07-10 15:00:00.000** to **2020-07-10T15:00:00.000Z** with UTC to local time conversion adjustment.

- I have used the [node-schedule](https://www.npmjs.com/package/node-schedule) package to schedule the task execution.
