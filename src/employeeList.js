import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/v1/employees/';

export default class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = { employee: [] };
    }

    componentDidMount() {
        axios.get(apiUrl)
            .then(response => {
                console.log(response.data)
                const employee = response.data
                this.setState({ employee })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteEmployee(id) {

        axios.delete(apiUrl + id)
            .then(response => { console.log(response.data) });
    }

    render() {
        return (
            <div>
                <h1 class="container">Employees List</h1>
                <button class="blueBtn">Add Employee</button>
                <br/><br/>
                <table class="containerTable">
                    <thead>
                        <tr>
                            <th>First Name</th> &nbsp; &nbsp;
                            <th>Last Name</th> &nbsp; &nbsp;
                            <th>Email Address</th> &nbsp; &nbsp;
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{EmployeeList.firstName}</td> &nbsp; &nbsp;
                            <td>{EmployeeList.lastName}</td> &nbsp; &nbsp;
                            <td>{EmployeeList.emailAddress}</td> &nbsp; &nbsp;
                            <td>
                                <button class="lightBlueBtn">Update</button>
                                <button class="redBtn" onClick={(e) => { EmployeeList.deleteEmployee(EmployeeList.employee._id) }}>Delete</button>
                                <button class="lightBlueBtn">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table >
            </div>
        )
    }
}