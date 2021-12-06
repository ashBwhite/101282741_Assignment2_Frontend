import React, { Component } from 'react'
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/v1/employees/';

export default class ViewDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeId: null,
            firstName: '',
            lastName: '',
            emailAddress: '',
            employee: []
        }
    }

    componentDidMount = () => {
        axios.get(apiUrl + this.props.Id)
            .then(response => {
                this.setState({
                    Id: response.data.Id,
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
                        employee: response.data.map(employee => employee.firstName),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeEmployeeId = (e) => {
        this.setState({
            employeeId: e.target.value
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailAddress: this.state.emailAddress
        }

        console.log(employees);

        axios.put(apiUrl + this.props.params.Id, employees)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div class="container">
                <h3>View Employee Detail</h3>
                <br/>
                <div class="displayDetails">
                    <div>
                        <strong>First Name :</strong> {this.state.firstName}
                    </div>
                    <div>
                        <strong>Last Name : </strong>{this.state.lastName}
                    </div>
                    <div>
                        <strong>Email Address: </strong>{this.state.emailAddress}
                    </div>    
                </div>
            </div>
        )
    }
}