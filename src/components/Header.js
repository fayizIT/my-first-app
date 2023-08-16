
// // /functional components
// function Header(props) {
//     return(
//         <h1 >Hello am {props.data}</h1>
//     )
// }

// export default Header

// // class components
import {Component} from 'react'
class Header extends Component {
   render(){
    return (
        <h1>"hello iam class components created by {this.props.data}"</h1>
    )

   } 
}

export default Header







