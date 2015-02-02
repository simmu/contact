#contact

This is my first write up on creating a simple web application from plain form post to SPA using different front-end/tooling and backend technologies or frameworks/libraries. I will start with a classic one, which you do form post for every actions. 


**Everything starts with an idea** 
For this write up, I have decided to create a simple contact list management. We will treat this as we are making a product from ground up.


**The Product**
A simple contact list management that will help user organized their contact list information. It should have the following core features:

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
Have Node and mongo installed and running. There are many tutorials on how to install these software, so we will not cover it.



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
    
    
**Step 5: UI**
Lets get our hands dirty and work on the markup for the UI. We will start with index.html and it will be the contact list view. All the markup changes will be in git commit order.
    Step 5 - Initial index.html

    

    
    
    


