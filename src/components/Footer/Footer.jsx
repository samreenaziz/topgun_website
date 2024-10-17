import './Footer.scss'
import CompanyLogoMountainMobile from '../../assets/logos/company_logos/company-logo-mountain-deer_textBelow.png'


const Footer = () =>{
    return (
        <div className = "footer">
                <div className = "footer_block">
                    <div className = "footer-heading">
                        Address
                    </div>
                    <div className = "footer-subheading">
                        <ul>
                            <li>1139 Morningside Ave, #39</li>
                            <li>Scarborough, Ontario</li>
                            <li>M1B 0A7</li>
                        </ul>
                    </div>
                </div>
                <div className = "footer_block">
                    <div className = "footer-heading">
                        Contact
                    </div>
                    <div className = "footer-subheading">
                        <ul>
                            <li>safetycourse@hotmail.com</li>
                            <li>+1 (416) 704-3346</li>
                        </ul>
                    </div>
                </div>
                <img style={{height:"8rem", width:"auto"}} src={CompanyLogoMountainMobile}/>

            </div>
    )
}

export default Footer
