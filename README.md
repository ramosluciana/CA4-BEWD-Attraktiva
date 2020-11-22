Full web application stack (front end and back end)

Attraktiva is an online shop to sell furniture, similar to Ikea, the application still need to be improved, however it allows to visualize the products as it informations and description

On the development of this app I used Next.js framework, just I thought would be easy to work with once it doesn’t require any configuration of webpack, it come with its configuration and also provide some good features and add tools.

However, for it to work I had to create a pages and static folder, next.js won’t work without it, because it works with a file system-based routing, that is the reason why on the project structure I have those 2 folders.

The static directory contains the page logo, the ccs file for the styling the app, and a products.json file containing a list of products which was basically used to populate the database for the first time.

The page directory would take care of all routes in the application, all the pages inside it contain their own react components.
Each page is consisting of multiple components, those components can be found on components folder;
E.g. Product page contains the components Add Product to cart, Product Attributes and Product Summary.


•	Add Product to cart – As the name says basically would allow the user to add a product cart;
•	Product Attributes - Basically make a request to the API/product file, and create the structure to allow the user to see product description, buttons, etc
•	Product Summary – Just allow to see a summary of the product photo, name, price, etc.

To modelling the structure, the way I want the elements/data in the pages to be displayed I create the folder models which contain the modelling file for it component of the app.

The component library semantic UI react was used to help with the structure and appearance of the app because it provides several elements (buttons, Icons, Menu, etc) which facilitate on styling the app.

The folder utils basically contains some js file to create the database connection, the baseURL code which will be use control the requests, and some other files which I didn’t have time to work with.

Cloudinary was used to take image file uploaded on the create new product page and return it as a media url to be store in the database, the connections for the database and cloudinary is on the file next.config.js




