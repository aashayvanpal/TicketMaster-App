import React from 'react'

export default class UserForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            phoneno:'',
            complaint:'',
            ticketId:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({ 
            [event.target.name]:event.target.value
        })
        this.state.ticketId = Math.round(Math.random() * 10000)
    }
    handleSubmit(e){
        e.preventDefault()
        console.log('submitted!'+this.state)
        console.log('name:'+this.state.name)
        console.log('phoneno:'+this.state.phoneno)
        console.log('complaint:'+this.state.complaint)
        console.log('ticketId:'+this.state.ticketId)
        const customer = { 
            'name':this.state.name,
            'phoneno':this.state.phoneno,
            'complaint':this.state.complaint,
            'ticketId':this.state.ticketId,
        }
        console.log('customer:'+JSON.stringify(customer))

    }

    render(){
        return (
        <div>
            <h1>It works!</h1>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>phoneno</th>
                        <th>namticketId</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th>{customer.name}</th>
                    <th>{customer.phoneno}</th>
                    <th>{customer.namticketId}</th>
                </tr>
                </tbody>
            </table>
        </div>
        )
    }
}
