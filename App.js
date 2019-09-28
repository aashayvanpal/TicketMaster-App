// Problem Statement
// TICKET-MASTER

//To-do
// Built a front-end application to keep track of all the tickets raised using ReactJs and bootstrap for Styling.


// This App provides the user a form to create tickets

// Display all the tickets in a table
// Allow the user to check and uncheck the status of the ticket Dynamic reporting based on the status of the ticket.
// Search a ticket based on the priority of the ticket
// Search a ticket based on the ticket code. 



import React from 'react';
import logo from './logo.svg';
import './App.css';
import TicketMaster from './TicketMaster/TicketMaster.js'
import UserForm from './Forms/UserForm.js'
import UserTable from './components/UserTable.js'

function App() {
  return (
  //  <Form1 />
  <div>
    <TicketMaster />
    <UserForm />
    <UserTable />
  </div>
  
  );
}

export default App;
