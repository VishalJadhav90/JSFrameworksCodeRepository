import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    static getDerivedStateFromProps(props, state) {
        console.log("[Persons.js] getDerivedStateFromProps");
        return state;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[Persons.js] shouldComponentUpdate");
    //     if (this.props.persons !== nextProps.persons) {
    //         console.log("[Persons.js] shouldComponentUpdate yes");
    //         return true;
    //     } else {
    //         console.log("[Persons.js] shouldComponentUpdate no");
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return {message: 'hello there'}
    }

    render() {
        console.log("[Persons.js] rendering");
        return this.props.persons.map((person, index) => {
            return <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age}
                    click={()=>this.props.clicked(index)}
                    changed={(event)=>{this.props.changed(event, person.id)}}
                    />
        });
    }

    componentDidUpdate(prevPros, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate", snapshot);
    }

    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount");
    }

}

export default Persons;
