var React = require('react');
var Popular = require('./popular.js');
var ReactRouter = require('react-router-dom'),
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('nav.js');

class App extends React.Component {
  render() {
    return (
      <Router>
      <Nav />
      <div className='container'>
        <Route path='/popular' component={Popular} />
      </div>
      </Router>
    )
  }
}

module.exports = App;
