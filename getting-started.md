## Getting Started

### Install Node.js and npm

Before you can run the book tracking app, you need to have Node.js and npm (Node Package Manager) installed on your machine. Follow these steps to install Node.js and npm:

**Windows**

1. Go to the official Node.js website: https://nodejs.org/.
2. Click on the "Download" button to download the Node.js installer for Windows.
3. Run the downloaded installer and follow the prompts to install Node.js and npm.
4. Verify that Node.js and npm are installed by opening a Command Prompt window and running the commands `node -v` and `npm -v`. If installed correctly, these commands should display the version numbers for Node.js and npm, respectively.

**macOS**

1. Go to the official Node.js website: https://nodejs.org/.
2. Click on the "Download" button to download the Node.js installer for macOS.
3. Run the downloaded installer and follow the prompts to install Node.js and npm.
4. Verify that Node.js and npm are installed by opening a Terminal window and running the commands `node -v` and `npm -v`. If installed correctly, these commands should display the version numbers for Node.js and npm, respectively.

### Clone the Repositories

Next, you need to clone the front-end and back-end repositories for the book tracking app. Follow these steps to clone the repositories:

1. Install Git on your machine, if you haven't already.
2. Open a terminal or command prompt on your machine.
3. To clone the front-end repository, run the command `git clone https://github.com/carlitos-1988/can-of-books-frontend.git`.
4. Navigate into the cloned front-end directory using the command `cd can-of-books-frontend`.
5. Install the necessary dependencies for the project using the command `npm install`.
6. To clone the back-end repository, open another terminal or command prompt window, and run the command `git clone https://github.com/holcombheather/can-of-books-backend.git`.
7. Navigate into the cloned back-end directory using the command `cd can-of-books-backend`.
8. Install the necessary dependencies for the project using the command `npm install`.
9. Set up a MongoDB Atlas account, create a new cluster and a new database, and obtain the connection string.
10. Create a new file named `.env` in the root directory of the back-end project, and add the following lines to it with your information:
`DB_URL=mongodb+srv://<username>:<password>@cluster.<cluster-name>.mongodb.net/<collection-name>?retryWrites=true&w-majority`

11. Create a new file named `.env` in the src directory of the front-end project, and add the following lines to it with your information:
`REACT_APP_SERVER=http://localhost:<YOUR_PORT>`

### Run the App

Now that you have cloned the repositories and installed the necessary dependencies, you can run the book tracking app. Follow these steps to run the app:

1. In the back-end project, start the server using the command `npm start`.
2. In the front-end project, start the development server using the command `npm start`.
3. Access the front-end app using the URL `http://localhost:3000` in your web browser.

Note that these steps assume you have already set up a MongoDB Atlas account and obtained a connection string. If you have not done these steps, you will need to do them before proceeding with these steps.
