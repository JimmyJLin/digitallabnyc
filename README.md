## Nations Auction

#### Technologies
  * Front-end Frameworks: Angular
  * Back-end Frameworks: NodeJS + Express


#### Development Installation

###### Pre-requisites
  * NodeJS - please ensure [NodeJS](https://nodejs.org/en/) is installed on your system
  ```
  //navigate to root directory
  cd na.leanweb

  // navigate to server folder  
  cd server

  // npm install all app dependencies
  npm install

  // run the following command inside server folder
  nodemon index.js

  // default port localhost:8082

  // In the web browser, to go localhost:8082
  ```

###### Overall Directory Structure

```
na.leanweb/
  |-  app/
  |   |-  angular-app/
  |   |   |-  dealer/
  |   |   |   |-  auth/
  |   |   |   |-  dealer_sigin/
  |   |   |   |-  dealer_signup/
  |   |   |   |-  dealerProvider.js
  |   |   |   |-  public.controller.js
  |   |   |   |-  publicProvider.js
  |   |   |-  main/
  |   |   |-  partials/
  |   |   |   |-  login/
  |   |   |   |-  modals/
  |   |   |   |-  reset_password/
  |   |   |   |-  vehicle/
  |   |   |   |-  footer.html
  |   |   |   |-  header.html
  |   |   |-  vehicle/
  |   |   |   |-  vehicle_condition/
  |   |   |   |-  vehicle_add/
  |   |   |   |-  vehicle_inventory/
  |   |   |-  app.js
  |   |-  assets/
  |   |   |-  css/
  |   |   |-  fonts/
  |   |   |-  imgages/
  |   |   |-  scripts/
  |   |-  library/
  |   |-  index.html
  |-  server/
  |   |-  index.js
  |   |-  package.json
  |-  .gitignore
  |-  README.md

```

###### RESTful Routes

| Routes | Description |
| ------ | ----------- |
| Vehicle Routes |   |
| /vehicles |  view all vehicles |
| /vehicles/new |  add a vehicle |
| /vehicles/{id} |  view a specific vehicle |
| /vehicles/{id}/edit |  edit a specific vehicle |
| /vehicles/{id}/delete |  delete a specific vehicle |
|  |   |
| Marketplace Routes |   |
| /marketplaces |  view all marketplaces |
| /marketplace/new |  create a new marketplace |
| /{marketplace-id} |  view a specific marketplace |
| /{marketplace-id}/edit |  edit a specific marketplace |
| /{marketplace-id}/delete |  delete a specific marketplace |
|  |   |
| Dealer Routes |   |
| /dealers |  view all dealers |
| /dealers/new |  create a new dealer |
| /{dealer-id} |  view a specific dealer |
| /{dealer-id}/edit |  edit a specific dealer |
| /{dealer-id}/delete |  delete a specific dealer |
| /{dealer-id}/users |  list all users for a dealer |
| /{dealer-id}/marketplaces |  list all marketplaces for a dealer |
|  |   |
| Users Routes |   |
| /users |  visible only to superusers |
| /users/new |  create new user |
| /user/:id |  view a specific user |
| /user/:id/edit |  edit a specific user |
|  |   |
| Search Routes |   |
| /search |  search page |
| /search/{query} |  search results |
|  |   |
| Watchlist Routes |   |
| /watchlist |  my watchlist |
| /inventory/vehicles |  my inventory |
| /inventory |  my account settings |
|  |   |
| Messages Routes |   |
| /messages |  view all my messages |
| /messages/{id} |  view a message detail |
|  |   |
| Transaction Routes |   |
| /transactions |  view all my transactions |
| /transaction/{id} |  view a specific transaction |
