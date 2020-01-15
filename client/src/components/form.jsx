
import React from 'react'
import movies from './movies.jsx'


//for (var i = 0; i < movies.length; i++) {
//    movieArray.push(movies(i))
//}

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            movieArray: [{movies}]
        }
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);   
    }
    
  handleChange(event) {
   this.setState({value: event.target.value});
   //console.log(movieArray.filter(movie.contains(this.value)))
   console.log(this.state.movieArray)
  }
  
  handleSubmit(event) {
    alert('Search commited: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}







/*
var Search = () => (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
*/

  export default Search;