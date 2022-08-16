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

#### To get started you must have some javascript knowledge

## **Step 1**: [Install nodejs](https://nodejs.org/en/download/)

## **Step 2**: [Install mongo](https://www.mongodb.com/docs/manual/installation/)

## **Step 3**: Lets get started with setting up your node project

1. Open a terminal and navigate to a directory of your choice
1. Create a new directory for the project
    ```
    mkdir inventory-chest
    ```

1. Run the following command 
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

2. Now we will add specific dependencies for dev
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

4. lets add a get endpoint
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
## **Step 6**: Let's test run our application!
1. To run the project, navigate to the main project dir and run the following command:
    ```
    npm start
    ```
2. You can use your browser and navigate to http://localhost:4000
3. Or you can download and test your application using [Postman](https://www.postman.com/downloads/) 

    You should see our message: **Hello, welcome to your chest!**

## **Step 7**: Now lets add routes 

Before moving forward, you might be asking yourself, what are routes?

And that is a great  question, in the context of express http requests, it refers to how the endpoints in your application respond to the client requests.

1. Before we do that, lets give a structure to our project:
    
    - In the main project folder, let add a new **src** folder

      ```
       mkdir src
      ```
    - inside src folder we will add 3 more folders (controllers, models, routes)
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
        Inside our path definition we will also add one GET method and handle it:

        ```
    app.route("/chest")
        .get((req, res) =>
            res.send("GET request successfull"))
        ```
    3. now lets add a second path for POST
        ```
    app.route("/item")
        .post((req, res) =>
            res.send("POST request successfull"))
        ```
    4. finally a third path that includes an id `/item/:itemId`
        and  we will add two different methods(PUT and DELETE) and handle the incoming request:
     ```
     app.route("/item/:itemId")
        .put((req, res) => 
            res.send("PUT request successfull"))
        .delete((req, res) => 
            res.send("DELETE request successfull"))
     ```
    5. Finally all that is left to do is to export our routes as follows:
     
         ```
    export default routes
         ```
    6. your inventoryChestRoutes.js should be looking like this:
     
        ```
        const routes = (app) => {
            app.route("/chest")
                .get((req, res) =>
                    res.send("GET request successfull"))
            app.route("/item")
                .post((req, res) =>
                    res.send("POST request successfull"))
            app.route("/item/:itemId")
                .put((req, res) => 
                    res.send("PUT request successfull"))
            .delete((req, res) => 
                    res.send("DELETE request successfull"))
} 

        export default routes

        ```
    6. Now open postman and test all the new paths we just added!

## **Step 8**: Now its time to store something in our chest

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
    5. Make sure express accepts json objects
        ```
        app.use(express.json());
        ```   
    6. Now under the /src/models folder create a new file and call it InventoryModel.js, and add the following code that defines the schema of what will be storing

        ```
        import mongoose from "mongoose";

        const Schema = mongoose.Schema

        export const ChestInventorySchema = new Schema ({
            name: String,
            created_date: { type: Date, default: Date.now }
        });
        ```
    7. Now under the /src/controllers folder create a new file and call it InventoryController.js, and add the following code instantiates an item object

        ```
        import mongoose from "mongoose";
        import { ItemSchema } from "../models/inventoryChestModel";

        const Item = mongoose.model('chest', ItemSchema)
        ```
2. Now lets add some code to save an item in our chest. 
    1. Under the /src/controllers/InventoryChestController.js add the following block of code:

        ```
        export const addNewItem = (req,res) => {
        let newItem = new Item(req.body)

        newItem.save((err, contact) => {
            if(err){
                res.send(err)
            }
            res.json(contact);

            })
        }
        ```
    2. All we need now is to wire our routes to the new code we just added, on the InventoryChestRoutes.js file add the following code:

        - At the beginning of the file:
       
       ```
        import { addNewItem } from "../controllers/InventoryChestController"
       ```

        - Now change your post route

        ```
        app.route("/item")
            .post(addNewItem)
        ```

        - Your InventoryChestRoutes.js should be looking like this now:

        ```
        import { addNewItem } from "../controllers/InventoryChestController"

        const routes = (app) => {
            app.route("/chest")
                .get((req, res) =>
                    res.send("GET request successfull"))
            app.route("/item")
                .post(addNewItem)
            app.route("/item/:itemId")
                .put((req, res) => 
                    res.send("PUT request successfull"))
                .delete((req, res) => 
                    res.send("DELETE request successfull"))
        } 

        export default routes
        ```

3. Now lets display our chest.

    1. Same process as saving an item, open /src/controllers/InventoryChestController.js and add the following block of code: 

    ```
    export const getChest = (req, res) => {
    Item.find({}, (err, item) => {
        if(err){
            res.send(err)
        }
        res.json(item)
     })
    }
    ```
    This code snipped queries our mongo database with the `Item.find`, the first argument `{}` represents everything in the database collection. So we are asking mondo to return every item stored

    2. Now same as for adding an item, lets modify our InventoryChestRoutes to point to our controller code:

        - At the beginning of the file add `getChest` to the imports:
       
       ```
        import { addNewItem, getChest } from "../controllers/InventoryChestController"
       ```

        - Now change your get route

        ```
        app.route("/item")
            .post(getChest)
        ```
4. As you may have noticed the process is to add your Controller and then make sure your route connects to that controller. A rinse and repeat process, this is how your code should look like with UPDATE, DELETE, and GET by Id:

    - InventoryChestController.js

    ```
        import mongoose from "mongoose";
        import { ItemSchema } from "../models/InventoryChestModel";

        const Item = mongoose.model('chest', ItemSchema)

        export const addNewItem = (req,res) => {
            let newItem = new Item(req.body)

            newItem.save((err, contact) => {
                if(err){
                    res.send(err)
                }
                res.json(contact);

            })
        }

        export const getChest = (req, res) => {
            Item.find({}, (err, item) => {
                if(err){
                    res.send(err)
                }
                res.json(item)

            })
        }

        export const getItemWithId = (req, res) => {
            Item.findById(req.params.itemId, (err, item) => {
                if(err){
                    res.send(err)
                }
                res.json(item)

            })
        }

        export const updateItem = (req, res) => {
            Item.findOneAndUpdate({_id: req.params.itemId}, req.body,{new: true, useFindAndModify: false }, 
                (err, item) => {
                    if(err){
                        res.send(err)
                    }
                    res.json(item)

            })
        }

        export const deleteItem = (req, res) => {
            Item.remove({_id: req.params.itemId}, (err, item) => {
                if(err){
                    res.send(err)
                }
                res.json({message: 'successfully deleted item'})

            })
        }    

    ```

    - InventoryChestRoutes.js

    ```
        import { addNewItem, 
                getChest,
                getItemWithId,
                updateItem,
                deleteItem
        } from "../controllers/InventoryChestController"

        const routes = (app) => {
            app.route("/chest")
                .get(getChest)
            app.route("/item")
                .post(addNewItem)
            app.route("/item/:itemId")
                .get(getItemWithId)
                .put(updateItem)
                .delete(deleteItem)
        } 

        export default routes
    
    ```

With these final changes, our api is complete. We are able to add a new item in our chest, update the quantity of that item, view an item by its ID, we can also view all items in our chest, we can also delete an item we don't want anymore. Now go ahead and test the application using Postman, feel free to change the code and add your own twist to it, hope you enjoyed and had fun, and most importantly learned something new.

- Mahmoud Abdel Basset
