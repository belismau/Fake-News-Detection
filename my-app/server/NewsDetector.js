const nodePickle = require('node-pickle');
const model = 'model.model'

class NewsDetector {
    constructor(news) {
        this.news = news;
    }

    getModel() {
        // Convert pickled object to JSON object
        nodePickle.load(model)
        .then(data => ({
            // data is a JSON object here
        }))
    }
}

export default NewsDetector;