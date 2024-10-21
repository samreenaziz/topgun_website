import './Header.scss';
// import CompanyLogoPhoto from '../../assets/logos/company_logos/company_logo-image.png';
import CompanyLogoText from '../../assets/logos/company_logos/company-logo-text.png';
import CompanyLogoMountain from '../../assets/logos/company_logos/company-logo-mountain-deer-only.png';
import CompanyLogoMountainMobile from '../../assets/logos/company_logos/company-logo-mountain-deer_textBelow.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            {/* Desktop Logo */}
            <div className="header-logo-desk">
                <img className="header-logo-image" src={CompanyLogoMountain} alt="Company Logo" />
                <img className="header-logo-text" src={CompanyLogoText} alt="Company Text Logo" />
            </div>

            {/* Mobile/Tablet Logo */}
            <div className="header-logo-mob-tablet">
                <img className="header-logo-image" src={CompanyLogoMountainMobile} alt="Company Mobile Logo" />
            </div>

            {/* Desktop Navigation */}
            <nav className="nav--desktop">
                <ul className="nav--td--item">
                    <NavLink className="nav--td--item" to="/about">ABOUT</NavLink>
                </ul>

                <ul className="nav--td--item">
                    <NavLink className="nav--td--item" to="/register">REGISTER</NavLink>
                </ul>

                <ul className="nav--td--item">
                    <NavLink className="nav--td--item" to="/contact">CONTACT</NavLink>
                </ul>
            </nav>

            {/* Mobile/Tablet Navigation */}
            <nav className="nav--mob-tablet">
                <ul className="nav--menu">
                    <li className="nav--mt--item dropdown">
                        <a className="nav--mt--link" href="#">MENU</a>
                        <ul className="dropdown-content">
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register">Registration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
