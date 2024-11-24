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
                            <li>1139 Morningside Ave, Unit #39</li>
                            <li>Scarborough, Ontario</li>
                            <li>M1B 0A7</li>
                        </ul>
                    </div>
                </div>
                <div className = "footer_block">
                    <div className = "footer-heading">
                        Contact
                    </div>
                    <div className="footer-subheading">
                    <ul>
                        <li style={{lineHeight: "1rem"}}>
                            <a style={{textDecoration: "none", color:"white", fontSize: "0.75rem"}} href="mailto:safetycourse@hotmail.com">safetycourse@hotmail.com</a>
                        </li>
                        <li style={{lineHeight: "1rem"}}>
                            <a style={{textDecoration: "none", color:"white", fontSize: "0.75rem"}} href="sms:+14167207858">+1 (416) 720-7858</a>
                        </li>
                    </ul>
                </div>
                </div>
                <img className = "footer_logo" style={{height:"8rem", width:"auto"}} src={CompanyLogoMountainMobile}/>

            </div>
    )
}

export default Footer
