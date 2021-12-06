import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/v1/employees/';

export default class AddEmployee extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             employeeId: null,
             firstName: '',
             lastName: '',
             emailAddress: '',
             employee: []
        }
    }

    componentDidMount = () => {
        axios.get(apiUrl)
            .then(response => {
                this.setState({
                  employeeId: response.data.employeeId,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    emailAddress: response.data.emailAddress
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(apiUrl)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        employee: response.data.map(employee => employee.employeeId),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeEmployeeId = (e) => {
        this.setState({
            Id: e.target.value
        })
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    onChangeEmailAddress = (e) => {
        this.setState({
            emailAddress: e.target.value
        })
    }

    onSubmit = (e) => {

        const employees = {
            employeeId: this.state.employeeId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailAddress: this.state.emailAddress
        }

        console.log(employees);

        axios.post(apiUrl, employees)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div class="container">
                <br/>
                <h1>Add Employee</h1>
                <br/>
                <div>
                    <form class="addForm" onSubmit={this.onSubmit} action="/view">
                    <div>
                        <label>First Name:  </label><br/>
                        <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeFirstName} /><br/>
                        <label>Last Name:  </label><br/>
                        <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.onChangeLastName} />
                    </div>
                    <div>
                        <label>Email:    </label><br/>
                        <input type="text" placeholder="Email Address" required value={this.state.emailAddress} onChange={this.onChangeEmailAddress} />
                    </div>
                    <div>
                        <br/>
                        <input type="submit" value="Submit" />
                        <a href="/view"><button>Cancel</button> </a>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}