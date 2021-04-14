import React, {Component} from 'react'
import NavbarItem from './NavbarItem'
class Navbar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            'sideActive':''
        }
    }
    render(){
        return(
            <nav>
                <ul>
                    <NavbarItem item="Home" tolink="/"></NavbarItem>
                    <NavbarItem item="About" tolink="/About"></NavbarItem>
                    <NavbarItem item="Education" tolink="/Education"></NavbarItem>
                    <NavbarItem item="Skills" tolink="/Skills"></NavbarItem>
                    <NavbarItem item="Contact" tolink="/Contact"></NavbarItem>
                </ul>
    
            </nav>
        )
    }
    
}

export default Navbar
