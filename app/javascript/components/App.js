import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import About from './About'
import CourseMainPage from './CourseMainPage'


class App extends React.Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/curriculahub" component={CourseMainPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
