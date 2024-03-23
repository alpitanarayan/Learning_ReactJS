import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
// import Student from './Students';
// import Student  from './Student';
// import User from './Fuctional'
import Student from  './StudentClass';
// import User from './Class'
// import Profile from './Profile'
// import Login from './Login';
import User from './User';
import Member from './Members';
import Users_C from './Users';



// 
function App(){
const [data, setData] = useState(0)
  function updateData()
  {
    setData(data + 1)
  } 
  console.log("_______")
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  )
}



function NewStudents()
{
  return (
  <div className='App'>
    <h1>Props in React :)</h1>
    <Student name={"Alpita"}   />
    <Student name={"Shreya"} email= "shreya@test.com"  other = {{address:'Kolkata' ,mobile:"111"}} />
    <Student name={"Dipti"} email= "dipti@test.com" other = {{address:'Mumbai' ,mobile:"222"}} />
    <Student name={"Anu"} email= "anu@test.com"  other = {{address:'noida' ,mobile:"333"}}/>
  </div>
  )
}

//Functional PROPS
function NewStudent()
{
  const [name, setName] = useState("Alpita")
  return (  
    <div className='App'>
      <Student name = {name} />
      <button onClick={() =>{setName("Akanksha")}}>Update Name</button>
    </div>
  )
}


//Class PROPS

function NewStudentC(){
  return (
    <div className='App'>
      <h1>Props !</h1>
      <Student />
    </div>
  )
}


//GET INPUT BOX VALUE 


function Box(){
  const [data, setData] = useState(null)
  const [print, setPrint]=useState(false)
  function getData(val){
    console.log(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return(
    <div className='Box'>
      {
        print?
        <h1>{data}</h1>
        :null
      }
      <input type="text" onChange={getData}></input>
      <button onClick={()=> setPrint(true)}>  Data</button>
    </div>
  )
}



//HIDE & SHOW ELEMENT :

function HideShow(){
  const [status ,setStatus] = React.useState(true)
  return(
    <div className='hide_show'>
      {
        status? <h1>Hello World</h1> : null
      }

      <button onClick={()=> setStatus(false)}>Hide</button>
      <button onClick={()=> setStatus(true)}>Show</button>
    </div>
  )
}



//HANDLE FORM 

function Form(){
  const [name, setName] = useState("")
  const [tnc, setTnc] = useState(false)
  const [interest, setInterval] = useState("")

  function getFormData(e){
    e.preventDefault()
  }
  return (
    <div className='App'>
      <h1>Handle form in React</h1>
      <form onSubmit={getFormData}>
        {
          console.log(name, tnc, interest)
        }
        <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/><br></br>
        <select onChange={(e) => setInterval(e.target.value)}>
          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>
          <option>Hsrry Portter</option>
        </select><br></br>
        <input type='checkbox' onChange={(e) =>  setTnc(e.target.checked)} /><span>Accept Terms and Conditions</span>
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}



//PROFILE FILE CONTENT


function Profiles(){
  return(
    <div className='App'>
      <Profiles />
    </div>
  )
}


//LOGIN .JS FILE CONTENT ----->

function LoggedIn(){
  const data = true;
  return (
    <div className='App'>
      {/* <Login /> */}
    </div>
  )
}


//User Component --->

function Users(){
  function getData()
  {
    alert("Hello from App")
  }
    return (
    <div className='App'>
      <User data={getData} />
      <div style={{float: 'right'}}>
        <Member data={getData}/>
      </div>
    </div>
  )
}


//CONSTRUCTOR USING CLASS COMPONENT ------->
// from USERS file =====>

function Apps () {
  return(
    <div className='App'>
      <h1>Render Method in React</h1>
      <Users_C />
    </div>
  )
}
 


// componentDidMount method in React JS ======>

class Mount extends React.Component{
  constructor()
  {
     super();                           // so that we can use (this method ) easly
     
    }
  render() {
    return (
      <div className='App'>
        <h1>Component Did Mount</h1>
      </div>
    )
  }
}




// export default App;
// export default NewStudents;
//export default NewStudent;
// export default Box;
// export default HideShow;
// export default Form;
// export default Profiles;
// export default LoggedIn;
// export default Users ;
// export default Apps;
export default Mount;