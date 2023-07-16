import  "./navbar.scss"
import Search from "../assets/images/search.svg"
import Note from "../assets/images/new.svg"
import NavbarLogo from "../assets/images/photo.svg"


const Navbar = () => {
    return (
    <div className="navbar">
       
        <h2 className="navbar_title">Tickets</h2>
        
        <div className="navbar_right">
            <img className="search" src={Search} alt="Search" />
            <img className="note" src={Note} alt="Note" />
            <p className="jones">Jones Ferdinand</p>
            <img src={NavbarLogo} alt="Navbar logo" />
             
        </div>
    </div>
   

    )
}

export default Navbar;