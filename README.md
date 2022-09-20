<p align="center">
   <img width="400px" src="/assets/buddy.png">
</p>
<h1 align="center">How to automate tests with Cypress and TestRail</h1>



Hi

If you are wondering what this project is about, then let me explain.

This is the sample project for my talk **"How to automate tests with Cypress and TestRail (with Buddy and Shopware 6)".**
It was part of the Webinar that I was allowed to do with Buddy (thanks for that).
Here is a link: https://buddy.works/webinars/how-to-automate-tests-with-cypress-testrail


### Project
The provided demo project contains a full Shopware 6 plugin called "Notification Center".
It allows you to add a custom notification text to your Storefront.

## Installation

You can easily install the project by just starting Docker.
Navigate to the docker folder and run these 2 commands (if you have Docker already installed).

```ruby 
docker-compose up -d
make run
```

Congratulations, your browser should now open, and you should see a Shopware 6 Storefront.
The plugin is already installed in the Administration.

You can open the plugin configuration within the Administration or with this link: http://localhost/admin#/sw/extension/config/NotificationCenter
