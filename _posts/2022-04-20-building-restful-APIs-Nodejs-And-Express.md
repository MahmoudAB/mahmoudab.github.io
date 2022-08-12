---
title:  "Building RESTful APIs with Node.js and Express"
categories: 
  - software-development
tags:
  - nodejs
  - APIs
  - rest
  - express
---

#### To get started you must have some backgroud knowledge in javascript

## **Step 1**: [Install nodejs](https://nodejs.org/en/download/)

## **Step 2**: [We will be using mongo, make sure you have that installed](https://www.mongodb.com/docs/manual/installation/)

## **Step 3**: Lets get started with setting up your node project

1. Open a terminal and navigate to a dir of your choice
1. Create a new dir for the project
    ```
    mkdir inventory-chest
    ```

1. Run the follwing command 
    ```
    npm init
    ```
   - Follow the prompts:
     - Enter your name and description
     - You can leave the rest as default for now 
     - Voila you should be all set to start coding and adding dependencies 
    
## **Step 4**: Lets add all the dependencies we need

 1. navigate to the project directory and run the following command to install the packages we need:
    ```
    npm i express body-parser express mongo mongoose nodemon
    ```

2. Now we will add specific dependencies only for dev puposes, is is doone by adding  __--save-dev__ 
   ```
   npm i --save-dev babel-cli -babel-preset-env babel-preset-stage0
   ```

3. Now lets change our startup script in the package.json file

    - in your file you will see:
    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
       },
    ```
    - change it to :
    ```
    "scripts": {
        "start": "nodemon ./index.js --exec babel-node -e js"
    }
    ```

## **Step 5**: Now lets start coding!

1. create new **index.js** file 

2. In the index.js file we will start by importing express

    ```
    import express from 'express';
    ```
3. We then declare two const
    ```
    const app = express();
    const PORT = 4000;
    ```

4. lets add a get enpoind
    ```
    app.get('/', (req, res) =>
        res.send('Hello, welcome to your chest!')
    );
    ```
5. Now lets start our sever and log that we are listening on port 4000:
    ```
    app.listen(PORT, () => 
        console.log(`Your server is sunning on port ${PORT}`)
    );
    ```
## **Step 6**: Lets test run our application!
1. To run the project, navigate to the main project dir and run the following command:
    ```
    npm start
    ```
2. You can use your browser and navigate to http://localhost:4000
3. Or you can downlaod and test your application using [Postman](https://www.postman.com/downloads/) 

    You should see our message: **Hello, welcome to your chest!**

## **Step 7**: Now lets add routes 

1. Before we do that, lets give a structure to our project:
    
    - In the main project dir, let add a new **src** dir

      ```
       mkdir src
      ```
    - inside src dir we will add 3 more dirs (controllers, models, routes)
      ```
      mkdir {controllers,models,routes}
      ```
2. Add a new file and call it inventoryChestRoutes.js under the routes dir
3. we can code our different routes
    1. start off by creating a const that will take in app and set paths as follows:
     ```
    const routes = (app) => {}

     ```
    2. lets start by defining our first path `/chest` inside the above mentions `{}`.
        Inside our path definition we will also add two methods (GET and POST) and we will handle both:
     ```
    app.route("/chest")
        .get((req, res) =>
            res.send("GET request successfull"))
        .post((req, res) => 
            res.send("POST request successfull"))
     ```
    3. And now a second path that includes an id `/chest/:chestID`
        and like our previous path we will add two different methods(PUT and DELETE) and handle the incoming request:
     ```
     app.route("/chest/:chestID")
        .put((req, res) => 
            res.send("PUT request successfull"))
        .delete((req, res) => 
            res.send("DELETE request successfull"))
     ```
    4. Finally al that is left to do is to export our routes as follows:
     ```
    export default routes

     ```
    5. your inventoryChestRoutes.js should be looking like this:
     
        ```
        const routes = (app) => {
        app.route("/chest")
            .get((req, res) =>
                res.send("GET request successfull"))
            .post((req, res) => 
                res.send("POST request successfull"))
        app.route("/chest/:chestID")
            .put((req, res) => 
                res.send("PUT request successfull"))
            .delete((req, res) => 
                res.send("DELETE request successfull"))
        } 

        export default routes

        ```
    6. Now open postman and test all the new paths we just added!

## **Step 7**: Now its time to store something in our chest

1. We will start off by defining what is an __item__ we can put in our chest. Since we are using Mongo as our database, we will need to set up our **mongo** connection: 

    0. Make sure that your local mongodb is up and running
    1. Navigate to the main project directory and open the index.js file
    2. Start by importing mongoose and body-parser (what is used to parse the data incoming from mongo to our API)
        ```
        import mongoose from 'mongoose'
        import bodyParser from 'body-parser'

        ```

    3. Set up your connection to your local mongo
        ```
        mongoose.Promise = global.Promise 
        mongoose.connect('mongodb://localhost/Chestdb',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        ```
    4. Set up the bodyParser
        ```
        // bodyparser setup
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json())
        ```
    5. Now under the /src/controllers folder create na new file and call it inventoryModel.js, add add the followinf code that defines the schema of what will be storing

        ```
        import mongoose from "mongoose";

        const Schema = mongoose.Schema

        export const ChestInventorySchema = new Schema ({
            name: String,
            created_date: { type: Date, default: Date.now }
        });
        ```
