  import logo from './logo.svg';
  import './App.css';
  import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
  import Home from './Component/home';
  import Registration from './Component/registartion';
  import About from './Component/about';
  import { useState } from 'react';
import NavigateHandler from './Hook/hooks';

  function App() {

    const [inputValues, setInputValues] = useState([])
    const [isFromEdit, setisFromEdit] = useState(false)
    const [data, setsata] = useState({});
   
    const onSubmitform = (isValid,formObject)=>{ 
        if (isValid) {
            setInputValues((prev) => [...prev, formObject]);
          console.log("Saved:", inputValues);
        }
    }

    const editData = (index)=>{
       let findObj =   inputValues.find((v,i)=>i == index)
       console.log(findObj,"findObj");
       if(findObj){
          setsata(findObj)
          setisFromEdit(true)
       }
    }
     const onTextFieldChange = (e)=>{
        console.log(data,e.target.name,e.target.value,"2222222222222");
        setsata((prev)=>(
          {
            ...prev,
            [e.target.name] : e.target.value
          }
        ))
   
    }
    return (
      <Router>
      <div className="App">
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/registartion'} onClick={e=>{setisFromEdit(false);setsata({})}}>Registration</Link>
          <Link to={'/about'}>About</Link>
        </nav> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/registartion' element={<Registration submitForm={onSubmitform} data ={data} onTextFieldChange={onTextFieldChange}/>}/>
          <Route path='/about' element={<About data={inputValues} editData = {editData}/>}/>
        </Routes> 
        </div>
      </Router>
    );
  }

  export default App;

