import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import About from './About'
import CourseMainPage from './CourseMainPage'
import Blog from './Blog'
import ContactForm from './ContactForm'

class App extends React.Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/curriculahub" component={CourseMainPage} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/joinus" component={ContactForm} />
        </Switch>
      </div>
    )
  }
}

export default App;
