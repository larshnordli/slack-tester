# Node.js + Express Bluemix Seed with integration to Watson Sercive and Delivery Pipeline

The Node.js Starter demonstrates a simple, reusable Node.js web application based on the Express framework.

## Prerequisites
1. **Log in to Bluemix and ensure that you are in the organization and space you wish to locate your app.**. There is no way to choose the organization or space in the Toolchain creation step, so this has to be done on beforehand
2. Ensure that you have at least one Toolchain space availble in your space
3. Ensure that your Bluemix account is connected to and authorized to control your GitHub account. *The Toolchain will automatically create a repository on your account*

## Get Started
A Node.js Seed application on Bluemix, with a pre-configured Delivery Pipeline.
This app is a proof-of-concept, but also intended for quickly setting up Prototypes.
Click the ***"Deploy to Bluemix""***-button and start developing your Angular app, with best-practices as project structure, route management, Watson Service Integration, and deployment to a test environment and production environment.

Press this button, to get your own copy of the sample running in Bluemix! It clones the project, creates Bluemix Toolchain, one Test App, one Production App and generates multi-stage pipeline that deploys applications to IBM Bluemix.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://console.ng.bluemix.net/devops/setup/deploy/?repository=https://github.com/larshnordli/NodeBluemixSeed)

## Walkthrough
1. When you click the **Deploy to Bluemix**-button, you will be taken to Bluemix's Create Toolchain page. The name you choose here will be the name of several things:
- The Toolchain  
- The Delivery Pipeline within the toolchain
- The App that is generated through the Pipelines
- The GitHub Repo that is created on your own GitHub account

**Short note on app names:** You can choose to use whatever name you'd like, but if you're planning to use this as a backend-app alongside a frontend-app, it is recommended that you use the postfix `-frontend` and `-backend` for the apps respectively. If you for example are to create a new web app named "Aviator", a good naming convention would be to have the frontend apps *aviator-frontend* (*aviator-front-test* will be created for you), in addition to *aviator-backend* (*aviator-backend-test* will be created for you).

2. When you click the **Create** button in the Toolchain page, you will get an overview of the tools integrated into the Toolchain. Ensure that the GitHub tools and the Delivery Pipeline is Configured :heavy_check_mark:.
3. To monitor the progress of the app creation, click on the Delivery Pipeline box and monitor the stages. When all stages are successfully finished, two apps are created: **Test App** with the postfix `-test`, and a **Production App** without pre- or postfix that must be manually started. This is done by clicking the small Play-button on the top of the `Production Stage` stage. *The Deploy to Production stage is manual in case there are errors outside runtime, i.e., not caught by build or deploy jobs.*

**Note:** Altough two apps are created, only one repo is created.
----

## Run the app locally
### Clone the Git Repo from your GitHub Repo created in the Toolchain

`git clone <Git URL>` to clone the repo, and get it locally,
ie `git clone https://github.com/GitHubUserName/AppName`

1. [Install Node.js][]
2. Download and extract the starter code from the Bluemix UI
3. cd into the app directory
4. Run `npm install` to install the app's dependencies
5. Run `npm start` to start the app
6. Access the running app in a browser at http://localhost:6001

[Install Node.js]: https://nodejs.org/en/download/
