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
  |   |   |   |-  footer.html
  |   |   |   |-  header.html
  |   |   |-  vehicle/
  |   |   |   |-  vehicle_add/
  |   |   |   |-  vehicle_list/
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
