import React from 'react';
import Search from './form.jsx'
import movies from "./movies.jsx"
import Movielist from "./movielist.jsx"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: movies
     }
  }

  //
  /*
  filterMovies = (value) => {
    let filteredMovies = this.state.list
    filteredMovies = filteredMovies.filter((movie) => {
      let movieName = this.state.list.title.toLowerCase()
      return movieName.indexOf(
        value.toLowerCase()) !== -1
    })
    this.setState({
      filteredMovies
    })
  }
*/


  render() { 
    return ( 
      <div>
      <h1>Movies</h1>
      < Search/>
    <div>
    {this.state.list.map(item => (<li>{item.title}</li>))}
    </div>
    </div>
     );
  }
}
 

export default App;