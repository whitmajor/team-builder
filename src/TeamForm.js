import React from "react"

export default function TeamForm(props){
    const {values,update,submit} = props

const onChange =evt =>{
    const name = evt.target.name;
    const {value} = evt.target
    update(name,value);

}
const onSubmit = evt =>{
    evt.preventDefault()
    submit()
}

return(
    <form className ='form container' onSubmit ={onSubmit}>
        <div className ='form-group inputs'>
            <label>Name
                <input
                type ="text"
                name = "Name"
                value = {values.name}
                placeholder ="Type your name ...."
                maxLength = "30"
                onChange ={onChange}

                />
            </label>
            <label>Email
          <input 
              type ="email"
              name ="email"
              value ={values.email}
              placeholder ="Type an email ..."
              onchange = {onChange}
              />

            </label>
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="BackEnd">Back end Engineer</option>
            <option value="frontend">frontend Designer</option>
            <option value="designer">Ux Designer</option>
          </select>
        </label>


         <div className ="submit">
         <button> Submit </button>
           </div>
            </div>
      
        
        </form>
)
}