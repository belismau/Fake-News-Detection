import Home from './Home';
import FnD from './FnD';

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
    return(
        <Router>
            <Switch>
                <Route 
                    path="/" 
                    exact 
                    component={Home} 
                />
                <Route 
                    path="/app" 
                    exact 
                    component={FnD} 
                />
                <Redirect 
                    from='*' 
                    to='/' 
                />
            </Switch>
        </Router>
    )
}

export default App;