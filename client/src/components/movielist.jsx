import React from "react"
import movies from "./movies.jsx"

function MovieList(props) {
    console.log(props.item)
    return (
   <div>
       <ul>{props.item}</ul>
  </div>
    )

  }
  
  export default MovieList;