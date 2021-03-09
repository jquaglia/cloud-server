# Lab 16: AWS Cloud Servers

Deploy a Node.js server to AWS EC2

## Author: Jason Quaglia

- [link to github repository](https://github.com/jquaglia/cloud-server)

## Deployed Links

- [link to GUI aws deployment](http://cloudserver-env.eba-b25fv7r6.us-west-2.elasticbeanstalk.com/)

- [link to CLI aws deployment](http://cloudserver4-env.eba-bviahw6v.us-west-2.elasticbeanstalk.com/)

## Processes

- Ensure you have AWS account

- Ensure you have your access and secret keys

### GUI deployed server

- Ensure repo has server setup but has no database

- PORT is set in .env file

- Zip all files together for application, except package-lock.json and node_modules folder

- In Elastic Beanstalk console - create new application

- Select create new application

- Give the application a name

- Select platform: Node.js

- Select upload your code, and upload the zipped file

### CLI deployed site

- Make sure you have AWS CLI and EB CLI installed with access and secret key

- run `eb init` from the repo you want to upload

- select all the initialization options that you want

- run `eb create` with the name of the env you want to create

- go check AWS to see if the app is up and running

## The Setup to just test basic functionality on your machine

### Getting Started

1. Clone down the repository

1. Run the command `npm install`

1. Create a `.env` file with `PORT` variable

### Testing the Server

1. Run the command `npm test` to test the server

### Running the Server

1. To run the server locally, run `nodemon`

1. Open up your browser to the localhost you set your `PORT` variable to

## UML

![UML Diagram](./assets/UML.png)
