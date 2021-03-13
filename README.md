# caMicrosope-GSOC-21

Implementing Code Challenge for the Role Based Authentication task

Task: Make a simple API which returns a list of items using RBAC to only return ones a particular user is allowed to see. For simplicity, it is recommended using a url parameter to identify a user without worrying about security for this challenge.

The application layout has been designed has shown below.

![alt text](https://github.com/sambhavjai/caMicrosope-GSOC-21/blob/main/Backend.png)

The database used is MongoDB with Node.js and Express to design the backend API.

User has been created with different role values and there are various items with an array of roles to which they are accessible. When the the getItem route is visited, the API will return an array of items which are accessible to the user. The user will have to provide userID along with the route. 

To build this code use command `npm install` then `npm start`

The server will be hosted on your machine at port 8000 by default and the mongoDB will be hosted on default port 27017.

The API routes will be suffixed with `api`.
Eg: http://localhost:8000/api/user/create

A client service such as Postman can be used to test the route.

Following is the result snippet from postman. Here the user Id has been given in the url as `http://localhost:8000/api/item/:userId`.
The role id for the user is 0, so the API is giving back an array of items which are visible to role id 0 as the response.

![alt text](https://github.com/sambhavjai/caMicrosope-GSOC-21/blob/main/postmanSnippet.png)