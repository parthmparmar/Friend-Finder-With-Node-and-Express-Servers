# Friend-Finder-With-Node-and-Express-Servers

## Objective

The objective of this app is to allow the user to fill out a survey form and help find a friend with similar preferences.

##  Organization

The app is organized in a javascript file that runs the app and a mysql database that houses the data.

- **main file** -- server.js
    - uses express to launch the app and listen on PORT 

- **NPM packages** -- package.json
    - houses app info and required packages (useful for new install and run on servers)

- **app** -- folder

    - **data** -- friends.js 
        - stores the initial friends object (seed data)

    - **public** -- home.html & survey.html
        - html files to be served by the server on get request
        - home - main incoming page for app
        - survey - user input and app output page

    - **routing** -- apiRoutes.js & htmlRoutes.js
        - routs http request as required
        - apiRoutes - routes http GET and POST request to perform data workload and return response to user with matching friend
        - htmlRoutes - route http request with html pages from public folder


## How to Run

### app
1. clone or fork repo to your computer using git commands or github's website
2. run ```npm install``` in CLI to download required node modules to run app
3. navigate to folder with file contents in CLI (e.g. terminal)
4. enter the following line:
    - ```node server.js```
5. access using browser with URL localhost:5001
6. click "Go To Survey"
7. fill in questions
8. click "Submit"



## Deployment

link: https://find-friend-node-express.herokuapp.com/

## Technologies Used

- npm: to install required modules
- express: to enable server side http request
- node: to program server side workload and logic

## Contact

Parth Parmar -- developer of the find a friend app using the technologies mentioned above

