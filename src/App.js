import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      contact: '',
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.type === 'text'){
      const value = event.target.value;
      this.setState({ 
        name: value,
      });
    }
    if (event.target.type === 'email'){
      const value = event.target.value;
      this.setState({ 
        email: value,
      });
    }
    if (event.target.type === 'tel'){
      const value = event.target.value;
      this.setState({ 
        contact: value,
      });
    }
  }

  handleSubmit(event) {
    console.log('Name: ' + this.state.name);
    console.log("Email: " + this.state.email);
    console.log("Contact: " + this.state.contact)
    event.preventDefault();
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <h3>Contact Us</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="eqname" name="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange}></input>

            <input type="email" id="eqemail" name="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange}></input>

            <input type="tel" id="eqcontact" name="contact" placeholder="Your Contact" value={this.state.contact} onChange={this.handleChange}></input>

            <textarea id="subject" name="subject" placeholder="Your Query..."></textarea>

            <input type="submit" value="Submit"></input>
          </form>
        </div>
        <p>Smiles, Silery :)</p>
      </div>
    );
  }
}

export default App;
