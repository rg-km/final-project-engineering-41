// Import Logo & Icon 
import Logo from './../assets/Logo.png'
import Search from './../assets/Search.png'
import Profile from './../assets/Profile.png'
import '../styles/nav-foot.css'

function Nav() {

    return (
        <div className='nav-bar px-3'>
            <img className='logo' src={Logo} alt="" />
            <ul className='text-light d-flex'>
                <li>Home</li>
                <li className='red text-danger'>Course</li>
                <li>About Us</li>
            </ul>
            <div className="responsive-search" href="#link">
                <div className="align-items-center d-flex">
                    <div className='profile px-2 d-flex align-items-center'>
                        <div>
                            Via Listi A
                        </div>
                        <img className="icon" src={Profile} alt="" />
                    </div>
                    <img className="search ms-5" src={Search} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Nav;