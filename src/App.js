import { HashRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Title from './components/Title/Title';
import POPOSList from './components/POPOSList/POPOSList';
import POPOSDetails from './components/POPOSDetails/POPOSDetails'
import About from './components/About'
import Footer from './components/Footer/Footer'

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
