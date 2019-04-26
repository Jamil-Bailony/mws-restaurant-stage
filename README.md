# MWS Restaurant Stage
This is my final project at Udacity. In this project, I was given a web-based application that help others find the nearest restaurant to where they live and provide others review. My job in this project is to incrementally convert a static webpage to a mobile-ready web application and take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. I have also to add a service worker to begin the process of creating a seamless offline experience for your users. 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Dependencies](#dependencies)
* [License](#License)

## Installation

Clone this project to your computer using ```git clone``` command:

```bash
https://github.com/Jamil-Bailony/mws-restaurant-stage.git
```
or download it as a zip file to your computer from the repository.

## Usage

In order to view or use this project, you have to start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don’t even need to know Python. For most cases, it’s already installed on your computer. 

* In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don’t have Python installed, navigate to Python’s website to download and install the software.

* **Note** - For Windows systems, Python 3.x is installed as python by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.

## Dependencies

You should enable JavaScript in your browser to be able to use this project. If you want to use build tools, you have to install [Node.js](https://nodejs.org/en/download/) first. Then, install [gulp@3.9.1](https://gulpjs.com/) (refer to [this](https://libraries.io/npm/gulp/3.9.1) article). After that, you have to install the packages in the package.json file then you will be able to use the build tools. Python also needed to start up an http server to serve up the site files.

```bash
# install packages
npm install

# run the default task to use build tools
gulp
```

## License

This project is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
