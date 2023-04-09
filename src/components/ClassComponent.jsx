import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            contador: 0
        }
    }
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <p>
                    <button onClick={ () => this.setState(prevState => ({contador: prevState.contador - 1}))}>-</button>
                    {this.state.contador}
                    <button onClick={ () => this.setState(prevState => ({contador: prevState.contador + 1}))}>+</button>
                </p>
            </div>
        )
    }
}

export default ClassComponent