import React from 'react'
import Radium from 'radium'
import { Component } from 'react'
import classes from './Person.css'
import Auxillary from '../../../hoc/Auxillary'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'

class  Person extends Component{
    constructor()
    {
super()
        this.inputElementRef=React.createRef();
    }
     componentDidMount()
     {
     this.inputElementRef.current.focus()
     }
render()
{
return (
    <Auxillary>
<p onClick={this.props.click}>Hi,I am {this.props.name} , i am {this.props.age} years old</p>
<input type="text" 
ref={this.inputElementRef}
onChange={this.props.changed} 
value={this.props.name}/>
<p>{this.props.children}</p>
</Auxillary>
)
}
};

Person.propTypes={
    click:PropTypes.func,
    age:PropTypes.number,
    name:PropTypes.string,
    changed:PropTypes.func

}
export default withClass(Person,classes.person)