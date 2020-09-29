import React, {Component} from 'react';
import Wrapper from './Components//HOC/Wrapper';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [
      {
        id:1,
        name:"tom",
        surname: "holland",
        phone: "+1-867-643-12"
      },
      {
        id:2,
        name:"andrew",
        surname: "garfield",
        phone: "+1-963-21-12"
      },
      {
        id:3,
        name:"tobey",
        surname: "maguire",
        phone: "+1-767-644-46"
      },
      {
        id:4,
        name:"drake",
        surname: "bell",
        phone: "+1-817-178-18"
      }
    ],
    newContact:{
      id: Date.now().valueOf(),
      name: "",
      surname: "",
      phone: ""      
    }
  }
  render(){
    return (
      <Wrapper>
        <ContactList contacts={this.state.contacts}/>
        <ContactForm />
      </Wrapper>
    );
  }
}


