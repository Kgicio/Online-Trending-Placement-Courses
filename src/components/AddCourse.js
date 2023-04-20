import React,{Fragment,useEffect,useState} from 'react';
import { Form, FormGroup, Input,Container,Button } from "reactstrap"; 
import base_url from './../api/bootapi';
import axios from "axios";
const AddCourse=()=>{
    useEffect(() => {
        document.title="Add Course || Explore the opportunities";
    }, []);
    const [course,setCourse]=useState({});
    const handleForm=(e) => {
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        )
    }
return ( 
    <Fragment>
        <h1 className="text-center my-3">Fill Course Details</h1>
        <Form onSubmit={handleForm}>
          <FormGroup>
            <label for="userId">Course Id</label>
            <Input type="text" placeholder="Enter here" name="userId" id="userId"
            onChange={(e) => {
                setCourse({ ...course,id: e.target.value });
            }}
            />
            </FormGroup>  
            <FormGroup>
                <label for="title">Course Title</label>
                <Input type="text" placeholder="Enter title here" id="title"
                onChange={(e) => {
                    setCourse({ ...course,title: e.target.value });
                }}
                />
            </FormGroup>
            <FormGroup>
                <label for="description">Course Description</label>
                <Input type="textarea" placeholder="Enter description here" id="description" style={{height : 150 }}
                onChange={(e) => {
                    setCourse({ ...course, description: e.target.value });
                }}
                />
            </FormGroup>
            <Container>
                <Button type="submit" color="success">Add Course</Button>
                <Button type = "reset" color="warning ml-2" onClick={(e)=>{
                setCourse({});
                }}>Clear</Button>
            </Container>
        </Form>

    </Fragment>
);
};
export default AddCourse;