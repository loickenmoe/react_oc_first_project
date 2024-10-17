import { Component } from "react";

export default class MyComponent extends Component {

    componentDidMount() {
        console.log('==== componentDidMount ====');
        this.setState({test: ''})
        
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('=== componentDidUpdate ===');

        
    }
    componentWillUnmount(){
        console.log('==== componentWillUnmount ====');
        
    }
    render() {
        console.log('====Render====')

      return (
        <div style={{
            backgroundColor:'red',
            marginBottom:20,
            textAlign: 'center',
            padding: '3px 0'
        }}>
            Mon composant
        </div>
      )
    }
    }
