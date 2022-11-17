# e-commerce-back-end
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  This application serves as the back end of an e-commerce site, establishing a server, SQL server, and api routes to be used on the front end. The database contains tables for categories, products, and tags. 

  ## Table of Contents

  ♦︎[Installation](#installation)

  ♦︎[Usage](#usage)

  ♦︎[Contributing](#contributing)

  ♦︎[Tests](#tests)

  ♦︎[Questions](#questions)

  ## Installation

  To install the necessary dependencies, run the following command:
  ```
  npm i
  ``` 
  To initialize the SQL database, from the MySQL shell run:
  ```
  source db/schema.sql
  ```
  To seed the database run:
  ```
  npm run seed
  ```
  To initialize the server run:
  ```
  npm start
  ```

  ## Usage

  After installing the application as described above, the user can acces the data in the database by utilizing the RESTful routes via Insomia. Routes are available to get all, get one by id, create, update, and delete data via endpoints for categories, products, and tags.
  Example request bodies for POST and UPDATE routes categories, products, and tags are as follows:
  ```
  {
	"category_name": "Underwear"
}
```
```
 {
	 "product_name": "Basketball",
	 "price": 200.00,
	 "stock": 3,
	 "tagIds": [1, 2, 3, 4]
 }
 ```
 ```
 {
	"tag_name": "Black",
	"productIds": [1, 4, 5]
}
```

  A walkthrough video can be found [here](https://watch.screencastify.com/v/VLNf041bOIpB4JVyDyLD)

  ## License

  This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.


  ## Questions

  If you have any questions about the repo, open and issue or contact me directly at braddwagner@outlook.com. You can find more of my work on my [GitHub](https://github.com/braddwagner).

