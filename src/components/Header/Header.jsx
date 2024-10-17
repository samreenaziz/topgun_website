import './Header.scss'
// import CompanyLogoPhoto from '../../assets/logos/company_logos/company_logo-image.png'
import CompanyLogoText from '../../assets/logos/company_logos/company-logo-text.png'
import CompanyLogoMountain from '../../assets/logos/company_logos/company-logo-mountain-deer-only.png'
import CompanyLogoMountainMobile from '../../assets/logos/company_logos/company-logo-mountain-deer_textBelow.png'


const Header = () =>{
    return (
        <div className = "header">
            <div className = "header-logo-desk">
                <img className = "header-logo-image" src={CompanyLogoMountain}/>
                <img className = "header-logo-text" src={CompanyLogoText}/>
            </div>
            <div className = "header-logo-mob-tablet">
                <img className = "header-logo-image" src={CompanyLogoMountainMobile}/>
            </div>
            <nav className="nav--desktop">
                <ul className="nav--td--item"><a  className="nav--td--item" href="#about-sec">ABOUT</a></ul>
                <ul className="nav--td--item">REGISTRATIONS</ul>
                <ul className="nav--td--item">CONTACT</ul>
            </nav>
            <nav className="nav--mob-tablet">
                <ul className="nav--menu">
                    <li className="nav--mt--item dropdown">
                        <a className="nav--mt--link" href="#">MENU</a>
                        <ul className="dropdown-content">
                            <li><a href="#about-sec">About</a></li>
                            <li><a href="#registrations">Registration</a></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default Header
