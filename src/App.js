import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/todoList'

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
