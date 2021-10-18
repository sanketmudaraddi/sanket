import React, { useState } from 'react'
import { useHistory } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import Studentlist from './rev';

// export default function AddReview(){
//     const [name,setTitle] = useState("");
//     const [sem,setAuthor] = useState("");
//     const [div,setPublication] = useState("");
//     const [eventName,setGenre] = useState("");
//     const [organizer,setRating] = useState("");
//     const history = useHistory();

//     const add = (e) => {
//         e.preventDefault();
//         if (this.state.name === "" || this.state.email === "") {
//           alert("ALl the fields are mandatory!");
//           return;
//         }
//         props.addStudentHandler(setTitle,setAuthor,setPublication,setGenre,setRating);
//         history.push('/rev');
//       };

//     return(
//         <div className="ui main">
//             <h2>Add Books</h2>
//     <form className="ui form" onSubmit={add}>
//       <div className="field">
//         <label>Book Title</label>
// <input type="text" name="title" placeholder="Title"
//   value={title}
//  onChange={(e) => setTitle(e.target.value)}
//      />
//       </div>
//       <div className="field">
//         <label>Author</label>
//         <input
//           type="text"
//           name="Author"
//           placeholder="Author"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//              />
//       </div>
//       <div className="field">
//         <label>Publication</label>
//         <input
//           type="text"
//           name="Publication"
//           placeholder="Publication"
//           value={publication}
//           onChange={(e) => setPublication(e.target.value)}
//              />
//       </div>
//       <div className="field">
//         <label>Genre</label>
//         <input
//           type="text"
//           name="Genre"
//           placeholder="Genre"
//           value={genre}
//           onChange={(e) => setGenre(e.target.value)}
//              />
//       </div>
//       <div className="field">
//         <label>Rating</label>
//         <input
//           type="number"
//           name="Rating"
//           placeholder="Rating"
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//              />
//       </div>
//       <button className="ui button blue">
//         Add</button>
//     </form>
//   </div>
//     )
// };


class AddReview extends React.Component
{
    routingFunction = (param) => {
        this.props.history.push({
            pathname: `/rev`,
        });
    }
  state = {
  title: "",author: "",publication: "",genre: "",rating: ""  
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.author === ""|| this.state.publication === ""|| this.state.genre === ""|| this.state.rating ==="") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addStudentHandler(this.state);
    this.setState({ title: "", author: "", publication: "", genre: "", rating: "" });
  };
    render(){
        return(
            <div className="ui main">
                <h2>Add Books</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Book Title</label>
    <input type="text" name="title" placeholder="Title"
      value={this.state.title}
     onChange={(e) => 
      this.setState({ title: e.target.value })}
         />
          </div>
          <div className="field">
            <label>Author</label>
            <input
              type="text"
              name="Author"
              placeholder="Author"
              value={this.state.author}
              onChange={(e) => this.setState({ author: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Publication</label>
            <input
              type="text"
              name="publication"
              placeholder="Publication"
              value={this.state.publication}
              onChange={(e) => this.setState({ publication: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              value={this.state.genre}
              onChange={(e) => this.setState({ genre: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              placeholder="rating"
              value={this.state.rating}
              onChange={(e) => this.setState({ rating: e.target.value })}
                 />
          </div>
          <button className="ui button blue">
                Add</button>
             <button className="ui button blue" onClick={this.routingFunction}>
                Display</button>
        </form>
      </div>
        )

    }
    
}
export default withRouter(AddReview);
