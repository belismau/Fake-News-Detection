import sys
from ModelHandler import ModelHandler

# Getting the input from Node JS
input_news = sys.argv[1]

# Creating an instance of class ModelHandler
model_handler = ModelHandler(input_news)

model_handler.load_model()
pred = model_handler.get_prediction()
prob = model_handler.get_probability()

# Sending data back to Node JS
print('Prediction: {}\nProbability: {}'.format('pred', 'prob'))