import pickle

class ModelHandler():
    def __init__(self, inputNews):
        self.inputNews = inputNews
        self.model     = None
    
    def load_model(self):
        model_file = open('../model/ensModel.sav', 'rb')
        self.model = pickle.load(model_file)
    
    def get_prediction(self):
        pred = (self.model.predict([self.inputNews]))[0]
        if pred == 'false':
            return 'Falskt'
        else:
            return 'Sant'
    
    def get_probability(self):
        prob = (self.model.predict_proba([self.inputNews]))[0][1]
        prob = round(prob, 3)
        prob = prob * 100
        return str(prob) + '%'