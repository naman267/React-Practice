import React,{Component} from 'react';
import Person from './Person/Person'
class Persons extends Component{
  static getDerivedStateFromProps(props,state)
  {console.log("Persons get Derived state")
    return state
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log("Component Update")
    if(nextProps.persons!==this.props.persons)
    {return true;}
    else{
      return false;
    }
  }
  getSnapshotBeforeUpdate(prevProps,prevState)
  {
    console.log("Get snapshot Before Update")
    return {messgae:"Scroll Position"}
  }
  componentDidUpdate(prevProps,prevState,snapshot)
  {
    console.log('persons.js Component Did Update')

  }
componentWillUnmount()
{
  console.log('Component Will Unmount')
}

  render()
  { console.log("Render Persons")
  return ( this.props.persons.map((person,index)=>{
        return <Person changed={(event)=>this.props.changed(event,person.id)} key={person.id} click={()=>this.props.clicked(index)}name={person.name} age={person.age}></Person>
      }))
};
};
export default Persons