import react,{Component} from 'react'
import {Link} from 'react-router-dom'

 
class NavbarItem extends Component{
    render(){
        return(
            <li id={this.props.item}>
                <Link to={this.props.tolink}>{this.props.item}</Link>
            </li>
        )
    }
}

export default NavbarItem;