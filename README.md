# PencilDurability

PencilDurability is an application designed to simulate how a real pencil works.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
First things first, you'll need to have Node.js and NPM installed on your computer.
You can find a tutorial on how to install them here:

[Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows "TeamTreehouse Node.js Windows Install")
[Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac "TeamTreehouse Node.js Mac Install")

After installing Node.js and NPM, you'll need to install all of the dependancies associated with the application. This can be easily done by using the terminal.

First, you'll want to go into the directory where you downloaded the application.

![Terminal cd](https://github.com/Chrisyango/PillarPencilDurability/blob/master/images/git-cd.png "Terminal cd")

Then all you have to do is run npm install.

![Terminal cd](https://github.com/Chrisyango/PillarPencilDurability/blob/master/images/npm-install.png "npm install")

After installing all the dependancies with npm install, you should be ready to start using the application!

## Running the tests

Running the tests for the application are pretty simple. As with earlier, through the terminal, go into the directory where you downloaded the application.

`cd /folder/LocationWhereApplicationWasDownloaded`

Then run npm test.

`npm test`

This will run the code

`cross-env NODE_ENV=test nyc mocha --exit`

which will run all of the tests written in the PencilDurabilityTest.js file.