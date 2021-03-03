import React,{useEffect,useRef} from 'react'
import classes from './Cockpit.css'

const cockpit=(props)=>{
  const toggleBtnRef=useRef()
    let btnClass=[classes.Button];
   
   useEffect(()=>{
     console.log('CockPit.js')
    /* setTimeout(()=>{
       alert('Data saved to cloud')
     },1000)*/
     toggleBtnRef.current.click()
     return ()=>{
       console.log('Clean up for functional component')
     }
   },[])
   useEffect(()=>{
    console.log('CockPit.js')
   /* setTimeout(()=>{
      alert('Data saved to cloud')
    },1000)*/
    return ()=>{
      console.log('Clean up for functional component')
    }
  },[])
    if(props.showPerson)
    {
        btnClass.push(classes.Red);
    }
  

    let assignedclasses=[];
      if(props.personsLength<=2)
      {
        assignedclasses.push(classes.red);
      }
      if(props.personsLength<=1)
      {
        assignedclasses.push(classes.bold)
      }
  


    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
      
        <p className={assignedclasses.join(' ')}>This is really working</p>
        <button ref={toggleBtnRef} className={btnClass.join(' ')}onClick={props.toggle}>Toggle name</button>
       
        

        </div>
       
    )
}
export default React.memo(cockpit);