import pickle

class ModelHandler():
    def __init__(self, inputNews):
        self.inputNews = inputNews
        self.model     = None
    
    def load_model(self):
        model_file = open('../../model/logistic_regression_model.sav', 'rb')
        self.model = pickle.load(model_file)
    
    def get_prediction(self):
        return (self.model.predict([self.inputNews]))[0]
    
    def get_probability(self):
        prob = (self.model.predict_proba([self.inputNews]))[0][1]
        return round(prob, 5)