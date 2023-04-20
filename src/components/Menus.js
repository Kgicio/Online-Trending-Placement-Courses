import React from "react";
import {ListGroup,ListGroupItem} from "reactstrap";
const Menus=()=>{
    return (
        <ListGroup>
            <ListGroupItem tag="a" href="/" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag="a" href="/add-course" action>
                Add Course
            </ListGroupItem>
            <ListGroupItem tag="a" href="/view-courses" action>
                View Courses
            </ListGroupItem>
            <ListGroupItem tag="a" href="/about" action>
                About

            </ListGroupItem>
            <ListGroupItem tag="a" href="/home" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag="a" href="/contacts" action>
                Contacts
            </ListGroupItem>
        </ListGroup>
    );
};
export default Menus;