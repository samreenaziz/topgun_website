import './HomePage.scss'
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { motion, useScroll } from "framer-motion"
import OHEPLogo from '../../assets/logos/OHEP.png'


const HomePage = () =>{
    const { scrollYProgress } = useScroll();

    return (
        <main>
            <div className="landing">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} viewport={{ once: true }}>
                    <h2 className="landing_title">
                        At Top Gun Firearms Academy, <span style={{color:"#ffbd59"}}>We Put Safety First</span>
                    </h2>
                </motion.div>
                <div className = "landing_register-button">
                        <Button className = "action-button" sx={{backgroundColor: 'rgb(73 54 47)', fontSize:"1.5rem", borderRadius: "0.25rem", height:"5rem", width: "25rem",  '&:hover': {backgroundColor: '#ffbd59', color: 'rgb(73 54 47)'}}} variant="contained" textTransform= 'none' type="submit">register</Button>
                </div>
                <div className = "landing_about-button">
                <a href="#about-sec" style={{ fontWeight: 'bold', textDecoration: 'none' }}><Button className = "action-button" sx={{backgroundColor: 'rgb(73 54 47)', fontSize:"1rem", borderRadius: "0.25rem", width:"25rem", height: "3rem", marginTop: "1rem", '&:hover': {backgroundColor: '#2f4f4f', color: '#fff'}}} variant="contained" textTransform= 'none' type="submit">Learn More</Button></a>
                </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} viewport={{ once: true }}>
                <div id="about-sec" className = "landing_information--section">

                <h2 className = "landing_information--section-title">
                        About Us
                    </h2>

                    <div className = "landing_information--section-content">
                        <p className = "landing_intro-para">
                        Located in Scarborough, Ontario at Morningside & Sheppard, we are an official provider designated by the Chief Firearms Office (CFO)
                        to teach and examine the <b className = "landing_intro--para">Canadian Firearm Safety Course (CFSC)</b>
                        for <u>Non-Restricted Firearms</u> and the <b>Canadian Restricted Firearms Safety Course (CRFSC) </b> for <u>Restricted Firearms</u>.
                        </p>

                        <p className = "landing_intro-para">
                            As a proud member of the <b>Firearm Safety Education Service of Ontario (FSESO)</b>,
                            we are committed to promoting public safety and maintaining public confidence.
                            Our mission is to ensure the professional, effective, and standardized delivery
                            of firearms safety training and testing in Ontario, upholding the highest standards
                            set by FSESO.
                        </p>

                        <p className = "landing_intro-para">
                            In addition, we are authorized by the Ministry of Natural Resources and Forestry,
                            in partnership with the Ontario Federation of Anglers and Hunters (OFAH),
                            to provide <a href="#about-ohep" style={{ fontWeight: 'bold', textDecoration: 'none' }}>Ontario’s Hunter Education Program (OHEP)</a> across the province.
                            This program is designed to help you develop an understanding of the natural
                            world and become a knowledgeable and responsible hunter.
                        </p>

                        <p className = "landing_intro-para">
                            Our academy provides comprehensive education on the safe and responsible use
                            and handling of both Non-Restricted and Restricted firearms, ensuring that
                            all new applicants meet the mandatory requirements by successfully completing the
                            CFSC or CRFSC.
                        </p>

                        <p className = "landing_intro-para--side-note">
                        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Note: </span>The information on this website is intended to provide general
                            guidance only. For legal references, please consult the Firearms Act
                            and its regulations, as well as any applicable provincial, territorial,
                            and municipal laws, regulations, and policies.
                        </p>

                    </div>
                </div>
            </motion.div>

            <div id="about-ohep" className = "landing_information--section-title-logo" >
                <img className = "landing_ohep-logo" src={OHEPLogo}/>
                <h2 className = "landing_information--section-title" >
                    About OHEP
                </h2>
            </div>

        </main>

    )
}

export default HomePage;



{/* <div className = "landing_information--section" style={{ backgroundColor:"white" }}>

<div className = "landing_information--section-content" style={{ paddingLeft: '9rem' }}>
    <p className = "landing_intro-para">
        Designated by the Ministry of Natural Resources and Forestry,
        in collaboration with the Ontario Federation of Anglers and Hunters,
        we proudly deliver Ontario’s Hunter Education Program across the province.
    </p>

    <p className = "landing_intro-para">
        As a proud member of the <b>Firearm Safety Education Service of Ontario (FSESO)</b>,
        we are committed to promoting public safety and maintaining public confidence.
        Our mission is to ensure the professional, effective, and standardized delivery
        of firearms safety training and testing in Ontario, upholding the highest standards
        set by FSESO.
    </p>

    <p className = "landing_intro-para">
        In addition, we are authorized by the Ministry of Natural Resources and Forestry,
        in partnership with the Ontario Federation of Anglers and Hunters (OFAH),
        to provide Ontario’s Hunter Education Program across the province.
        This program is designed to help you develop an understanding of the natural
        world and become a knowledgeable and responsible hunter.
    </p>

    <p className = "landing_intro-para">
        Our academy provides comprehensive education on the safe and responsible use
        and handling of both Non-Restricted and Restricted firearms, ensuring that
        all new applicants meet the mandatory requirements by successfully completing the
        CFSC or CRFSC.
    </p>

    <p className = "landing_intro-para--side-note">
    <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Note: </span>The information on this website is intended to provide general
        guidance only. For legal references, please consult the Firearms Act
        and its regulations, as well as any applicable provincial, territorial,
        and municipal laws, regulations, and policies.
    </p>

</div>
<div id="about-ohep" className = "landing_information--section-title-logo" >
    <img className = "landing_ohep-logo" src={OHEPLogo}/>
    <h2 className = "landing_information--section-title" >
        About OHEP
    </h2>
</div>
</div> */}
