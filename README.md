# Fake News Detection
Web app built with React.js and Flask which presents a report about Fake News Detection with Logistic Regression and Ensemble Methods, together with the model (created with Jupyter Notebook for testing several input news).

## Installation

This web app has a client and a server. The client created with React is used to present the website and serve its routes. The client side is fetching /handlenews with the user input to send the information to Flask server, which uses the created model to return a result.

### Client

To run the web app (run it on http://localhost:3000), follow the steps below.

``` 
$ cd app 
```

``` 
$ npm install 
```

``` 
$ npm start 
```

### Server

To run the server (run it on http://localhost:3001), follow the steps below.

``` 
$ cd server
```

``` 
$ flask run --port=3001
```

## Inspiration
Inspiration taken from several articles:

- ["Detecting Fake News With and Without Code"](https://towardsdatascience.com/detecting-fake-news-with-and-without-code-dd330ed449d9)
- ["Fake News Detection using NLP and Machine Learning in Python"](https://medium.com/@sid321axn/fake-news-detection-using-nlp-and-machine-learning-in-python-wisdom-ml-6f548b0691a7)
- ["Your First Machine Learning Project in Python Step-By-Step"](https://machinelearningmastery.com/machine-learning-in-python-step-by-step/)
- ["Advanced Python Project – Detecting Fake News with Python"](https://data-flair.training/blogs/advanced-python-project-detecting-fake-news/)
