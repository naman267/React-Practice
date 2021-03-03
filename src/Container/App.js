import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import Person from '../Components/Persons/Person/Person'
import '../Components/Persons/Person/Person.css'
import Cockpit from '../Components/Persons/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Auxillary from '../hoc/Auxillary'
class App extends Component {

   constructor(props)
   {
     super(props)
     console.log('APP.JS CONSTRUCTOR')
   }   
  state={
    persons:[{id:'1',name:'max',age:28},{id:'2',name:'manu',age:19},{id:'3',name:'naman',age:18}],
    showPersons:false,
    showCockpit:true,
    changeCounter:0
  }

  static getDerivedStateFromProps(props,state)
  {
    console.log('APP.JS GET DERIVEDFROM PROPS',props)
    return state
  }
  componentDidMount()
  {
    console.log('cOMPONENT did mount')
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log("[APP.JS] should Component Update")
    return true
  }
  componentDidUpdate()
  {
    console.log("Component Did Update")
  }
  nameChangedHandler=(event)=>{
    
    this.setState({
      persons:[
      {name:'maxillium',age:29},
      {name:event.target.value,age:1}

    ],
    showPersons:!this.state.showPersons
    })


  };
  toggleNameHandler=()=>{
    this.setState({
      showPersons:!this.state.showPersons
    })

  }
  changeNameHandler=(e,id)=>{
    
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id
    })
    const person={...this.state.persons[personIndex]}
    person.name=e.target.value
    const persons=[...this.state.persons]
    persons[personIndex]=person

    
    

    this.setState((prevState,props)=>{
     return  {
      persons,
      changeCounter:prevState.changeCounter+1
     }  
    });
  }
  deletePersonHandler=(personIndex)=>{
    const persons=this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons})

  }
   render() {
      console.log('render')  
    let persons=null;
   
  
    if(this.state.showPersons)
    {
      persons=(
        <div>
         <Persons changed={this.changeNameHandler} clicked={this.deletePersonHandler} persons={this.state.persons}/>
        </div>

      );
     
     
    }
    let cockPit=null
    if(this.state.showCockpit)
    {
      cockPit=(
        <div>
        <Cockpit title={this.props.appTitle}
        personsLength={this.state.personsLength}
        toggle={this.toggleNameHandler} 
        showPerson={this.state.showPersons} />        
        </div>
      )
    }
      
   return (

      <Auxillary>
        <button onClick={()=>{
          this.setState({
            showCockpit:false
          })
        }}>Remove Cockpit</button>
      {cockPit} 
       
         
         {persons}
        
       
      </Auxillary>
      
    );
   // return React.createElement('div',null, React.createElement('h1', null,'Hi I\'m React app'));
  }
}

export default withClass(App,classes.App);

