import React from "react";
import axios from "axios";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";
const Course=({course,update})=>{
    const deleteCourse = (id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
        (response)=>{
          toast.success("course deleted");
          update(id);
        },
        (error) => {
            toast.error("course not deleted");
        }
    );
    };
    
    return (
        <Card>
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button>
                <Button color="primary">Update</Button>
            </Container>
        </Card>
    )

}
export default Course;