
import './App.css';
import React,{useState} from 'react'
import TeamForm from './TeamForm';

const initialFormValues ={
  Name : "",
  email: "",
  role: '',

}


function App() {
  

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formError, setFormError] = useState("");
  const updateForm = (inputName, inputValue)=>{
    setFormValues({...formValues,[inputName]: inputValue});
  }
  const submitForm =()=>{
    const newTeamMember ={
      Name: formValues.Name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newTeamMember.username) {
      setFormError("C'mon yah blockhead, enter all the username!");
      setFormValues(initialFormValues);
      return;
    } else if (!newTeamMember.email) {
      setFormError("C'mon ya blockhead, enter the email!!");
      return;
    }
  }

  return (
    <div className="App">
      <h1>Team Members Form</h1>
      <TeamForm
      values = {formValues}
      update = {updateForm}
      submit = {submitForm}
      />

     
    </div>
  );
}

export default App;
