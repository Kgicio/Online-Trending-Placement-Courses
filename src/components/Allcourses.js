import React, { useState,useEffect } from "react";
import {Button} from "reactstrap";
import Course from "./Course";
import { ToastContainer, toast } from "react-toastify";
import base_url from "./../api/bootapi";
import axios from "axios";
const AllCourse=()=>{
    useEffect(() => {
        document.title="All courses";
    },[]);
    const getAllCoursesFromServer=() => {
        axios.get(`${base_url}/courses`).then(
            (response)=>{
            console.log(response.data);
            toast.success("courses have been loaded");
            setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };
    useEffect(() => {
        getAllCoursesFromServer();
    },[]);
    const [courses,setCourses]=useState([]);
    const updateCourses=(id)=>{
        setCourses(courses.filter((c) => c.id != id));
    }
    return (
        <div>
            <Button color="primary" onClick={() => {console.log("test");
             courses.push();
             setCourses([
                ...courses,
                {
                    id: "567",
                    title: "Angular Course",
                    description: "this is beginner level course",
                 },
             ]);
         }}>Test</Button>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length>0 ? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses}/>): "No courses"
            }
        </div>
    );
};
export default AllCourse;