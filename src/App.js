import { HashRouter as Router, Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import POPOSDetails from './POPOSDetails'
import About from './About'
import Footer from './Footer'

function App() {
    return (
        <Router>
            <div className="App">
                <Title />
                <Route exact path="/" component={POPOSList} />
                <Route exact path="/about" component={About} />
                <Route path="/details/:id" component={POPOSDetails} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
