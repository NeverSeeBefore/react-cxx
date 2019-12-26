import React from 'react';
import Header from "../../components/Header";
import Layout from "../../Layout";
import Aside from "../../components/Aside";
import { Route } from "react-router-dom";
import Welcome from '../Welcome';
import StudentList from '../student/StudentList';
import AddStudent from '../student/AddStudent';
import CourseList from '../course/CourseList';
import AddCourse from '../course/AddCourse';

export default function Admin (props) {

  return (
      <Layout header={<Header></Header>} aside={<Aside></Aside>}>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/students" exact component={StudentList}></Route>
        <Route path="/students/add" exact component={AddStudent}></Route>
        <Route path="/course" exact component={CourseList}></Route>
        <Route path="/course/add" exact component={AddCourse}></Route>
      </Layout>
    )

}

