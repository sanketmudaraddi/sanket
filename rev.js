import React from 'react'
import user from "../images/user.png";

const Studentlist = (props) => {
    console.log(props);

    const renderStudentList = props.students.map((student) => {
        return (
            <div className="item">
      
       <div className="content">
        <div className="header"> {student.title}</div>
        <div> {student.author} </div>
        <div> {student.publication} </div>
        <div> {student.genre} </div>
        <div> {student.rating} </div>

        </div>
    
    </div>        );
    });
            return(
        <div className="ui celled list">
    {renderStudentList}        </div>
    );

}
export default Studentlist;
    