#contact

This is my first write up on creating a simple web application from plain form post to SPA using different front-end/tooling and backend technologies or frameworks/libraries. I will start with a classic one, which you do form post for every actions. 


**Everything starts with an idea** 
For this write up, I have decided to create a simple contact list management. We will treat this as we are making a product from ground up.


**The Product**
A simple contact list management system that will help user organize their contact list information. It should have the following core features:

    Core Features
    -------------
    Able to save user information such as Name, Address, Phone Number
    Able to edit contact information
    Able to delete contact information
    Able to search contact information


**Tech Stacks**
We have defined the product we wanted to create, now we should think about the technologies we are going to use. 
    
    Backend
    -------
    Node
    Express

    DB
    -------
    Mongo

    Frontend
    -------
    Bower
    jQuery
    materializecss
    
    Editor
    -------
    Brackets
    
    
    
**UX**
We will skip this part since it can be a seperate subject. We should make it behave like any contact management tools we can find on the market.
    

**Design**
We will use [materializecss] (http://materializecss.com/) for as our base design 
    

**Step 1 : Database Structure**
Designing your database structure. Since we use mongo, our database will be in Object literal format. We will have a simple object structure which will look like this:

    {
        first_name:@string,
        last_name:@string,
        email:@string,
        phone:@number ,
        address:@string
    }

The reason I like to have the database strcture planed out is because we can picture how our UI will be. We can always come back and add more as we see fits.
    


**Step 2 : Installation**
Have Node and mongo installed and running. There are many tutorials on how to install these softwares, so we will go over it.



**Step 3 : Site Structure**
    
    Contact App/
        | -- bower_components/
        | -- js/
        | -- css
        | -- index.html



**Step 4 : Bower**
We will create a bower package file. This will make it easier for us to share and maintain all the front-end dependencies in one file.

    {
        "name": "simple-contact",
        "version": "0.0.1",
        "dependencies": {
            "jquery": ">=2.1.1",
            "materialize": "~0.95.12"
        }
    }
    
Once you have created the bower.json file. Open your terminal and go to the current project directory and run 'Bower install'. It will install all the dependencies files for you.
    
    
**Step 5: UI - Home Page**
Lets get our hands dirty and work on the markup for the UI. We will start with index.html and it will be the contact list view. All the markup changes will be in git commit order.

    **Objective**
    
    index.html 
    
    This will be our contact application main screen. It will show a list of contact we have in the system. It will be a simple list that display user names. When a user click on the list, it will go to the detail view of the selected contact. For my own curiosity, I will use materialize design for the style.
    
**Step 5.1: UI - Detail Page**
    
    **Objective**
    
    detail.html
    
    We just created our first screen for the app. That wasn't that hard right? Now we have a main screen that displays list of contact names, but it doesn't do anything. We need to be able to see the detail of each contact. So, on whenever a user click on the name, the app should show them the contact detail that display the seletect contact's phone, email and address. Lets create the UI for the detail page.

    
**Step 5.1: UI - Connecting the dots**

    **Objective**
    
    Yay, we have created 2 screens for our app. We have a home screen that display the list of contact and detail screen that shows the detial information. Now, we will give the first breath to our app by connecting these 2 screens together. When a user click on the contact list from the home screen, it should navigate to the detail view.
    
    
**Step 5.2: UI - Where does the content came from?**
    
    **Objective**
    
    new.html
    
    So we have given life to our app. We can navigate between the screens but something is not right. Yes, the data is fake! We need a way to create a contact information. We should create a new screen that can allow us to add Name, Phone Number, Email and Address. We should make sure all the screens we have created can link to each others. 
    
    Once we have linked all these pages (index, detail and new), we have created a working concept prototype. Now, we have a sense of how our app works. We can visualize and experience the UX on our app. If you think the UX is bad, you should stop here and reiterate your thoughts on the process again. Bad UX is bad for business! Even if you have a great coding skills, without good UX, no one will use it.
    
    
**Step 6: Server**
    
    **Objective**
    
    app.js
    
    Setup a running Node.jS server using Express framework. Make sure it can serve all the pages we just created.
    
    Yay, we made it to a new milestone. We and our imaginary investors are happy with the prototype. Its time to get real. We need a server to serve our app to millions of users. The server also reponsible on saving and keeping the contact info on database. It is true that we do not need database to save our data, we could you HTML local storage 
    and it will still work. Remember, local storage only works with a single devices and it does not sync across devices. Another downside of local storage is that when a user clear their cache and data, the user will lose all the data.  
    
        Requirement:
        NPM knowledge
        Basic Node knowledge
        Basic Express Framework knowledge
    
    Since we are using node.js and express for this app, due to the nature of express framework, we will have to move all our static content to a public folder.
    http://expressjs.com/starter/static-files.html
    
**Step 6.1: Server - Add Routing to view**

    **Objectives**
    
    Move the html to views folder and setup the routing to support the following route ('/','/view','/new)
    
    

**Step 6.1: Server - Render page with JADE

    **Objectives**
    
    Learn how to use Jade (express default template) to render a page
    
    -- install jade template engine via npm
    -- make the route render the page with jade template (index.jade, new.jade, detail.jade)
    
**Step 6.2: Server - Render page with Mockup data

    **Objectives**
    index.jade
    Learn how to shape our data for rendering the page. This is a good pratice on what we want to store/get from the database. We will start with returning a list of contact.
    
   
**Bonus: Tooling - Installing nodemon

    **Objectives**
    
    By now you should realized that you have to restart the node server on each file changes. Lets' make our development easier with nodemon. Nodemon is a node module that can listen to file changes. We can tell it to restart the node server on file update. This will reduce a lot of development time.
        
    
**Step 6.2B: Server - Render page with Mockup data + route with parameter

    **Objectives**
    detail.jade
    
    We will render mockup data for detail view. We also included the 'contact_id' as a parameter to the detail route. The reason we are doign this so that the page is bookmarkable and SEO friendly.
    
    
**Step 6.3: Server - Refactor the .jade template

    **Objectives**
    layout.jade
    
    So I like to update the logo text to 'quick contact' and  now we have to update all the 3 pages. This create a lot of repeating work. With JADE layout, we can avoid these repetive work by moving this common element into the layout and have the page inherits the common elements. 
    
      
**Step 7.0: Server - Database setup    

    **Objectives**
    
    Setup our database structure using mongo.
    
    create a 'contact' db
    create a collection call contactList for storing the user contact information. Add a dummy data of first_name, last_name..etc like what we have for the detail mockup data.
    



