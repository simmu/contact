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
        phone:@number 
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
    
**Step 5: UI - Detail Page**
    
    **Objective**
    
    detail.html
    
    We just created our first screen for the app. That wasn't that hard right? Now we have a main screen that displays list of contact names, but it doesn't do anything. We need to be able to see the detail of each contact. So, on whenever a user click on the name, the app should show them the contact detail that display the seletect contact's phone, email and address. Lets create the UI for the detail page.

    

    
