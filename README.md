# Twitter Clone 

## Short Description of the project

A very minimal twitter clone built using React which uses the Firebase Google Authentication for the signing in process. 
Consisting of three pages, this twitter-clone project contains the basic functionalities covered on Twitter application ie., Composing tweet, Commenting on individual tweet and deleting the tweet.

The project uses a mock backend JSON Server which provides a full fake REST API for the data.
db.json saves all the data of the application and acts as a database.

## Recent Enhancements
- Real-time timestamp update with the tweet
- Deployed on Netlify


## Future Enhancements
Future enhancements of this clone includes:
- Connecting a backend for data storage
- User specific functionalities
- A like and a comment counter
- Implementation of adding images to tweets, emojis & GIFs


## Scripts to run the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run server`

npm run sets the NODE environment variable to the node executable with which npm is executed.

"npm run server" executes- 

"server" : "json-server --watch db.json --port 5000"

This runs a local server on port 5000, and watches the db.json file for any changes.
