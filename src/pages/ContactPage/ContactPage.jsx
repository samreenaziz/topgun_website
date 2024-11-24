import EmailIcon from '../../assets/icons/email.png'
import AddressIcon from '../../assets/icons/address.png'
import PhoneIcon from '../../assets/icons/phone.png'
import './ContactPage.scss'


const ContactPage = () =>{
    return (
        <div className = "contact">
                <h1 className = "contact_header">
                    Contact Us

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.6485342792344!2d-79.20328261095344!3d43.80090556834778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a855f331bb%3A0x7c0b7e22a61976a7!2sTop%20Gun%20Firearms%20Academy!5e0!3m2!1sen!2sca!4v1729134464756!5m2!1sen!2sca"
                        className = "contact_map-td"
                        allowFullScreen
                        loading="lazy"
                        aria-label="Google Map of Top Gun Firearms Academy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </h1>
                <div className = "contact_content">
                    <div className = "contact_block">
                        <img className = "contact_icon" src={EmailIcon}/>
                        <div>
                            <a href="mailto:safetycourse@hotmail.com" aria-label="Send an email to safetycourse@hotmail.com">safetycourse@hotmail.com</a>
                        </div>
                    </div>
                    <div className = "contact_block" style={{paddingBottom: "0rem"}} >
                        <img className = "contact_icon"  src={PhoneIcon}/>
                        <div>
                            <a href="sms:+14167207858?body=Hi%20there,%20I%20have%20a%20question%20about%20Top%20Gun%20Firearm%20Academy%27s%20courses" aria-label="Send a text message to +1 (416) 704-3346">+1 (416) 704-3346 (Text Only)</a>
                        </div>
                    </div>
                    <div className = "contact_block">
                        <img className = "contact_icon"  src={AddressIcon}/>
                        <div>
                            <ul>
                                <li>1139 Morningside Ave, Unit #39</li>
                                <li>Scarborough, Ontario</li>
                                <li>M1B 0A7</li>
                                <li>Major Intersection: Highway 401 & Morningside Ave.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.6485342792344!2d-79.20328261095344!3d43.80090556834778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a855f331bb%3A0x7c0b7e22a61976a7!2sTop%20Gun%20Firearms%20Academy!5e0!3m2!1sen!2sca!4v1729134464756!5m2!1sen!2sca"
                        className = "contact_map-mobile"
                        allowFullScreen
                        loading="lazy"
                        aria-label="Google Map of Top Gun Firearms Academy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

            </div>
    )
}

export default ContactPage
