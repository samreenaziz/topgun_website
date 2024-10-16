import './Header.scss'
// import CompanyLogoPhoto from '../../assets/logos/company_logos/company_logo-image.png'
import CompanyLogoText from '../../assets/logos/company_logos/company-logo-text.png'
import CompanyLogoMountain from '../../assets/logos/company_logos/company-logo-mountain-deer-only.png'


const Header = () =>{
    return (
        <div className = "header">
            <div className = "header-logo">
                <img className = "header-logo-image" src={CompanyLogoMountain}/>
                <img className = "header-logo-text" src={CompanyLogoText}/>
            </div>
            <nav className="nav--td">
                <ul className="nav--td--item"><a  className="nav--td--item" href="#about-sec">ABOUT</a></ul>
                <ul className="nav--td--item">REGISTRATIONS</ul>
                <ul className="nav--td--item">CONTACT</ul>
            </nav>


        </div>
    )
}

export default Header
