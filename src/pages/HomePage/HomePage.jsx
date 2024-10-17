import './HomePage.scss'
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { motion, useScroll, useAnimate } from "framer-motion"
import OHEPLogo from '../../assets/logos/OHEP.png'
import CardFlip from "../../components/CardFlip/CardFlip"
import BookeoWidget from "../../components/BookeoWidget/BookeoWidget"


const HomePage = () =>{
    const { scrollYProgress } = useScroll();

    return (
        <main>
            <div className="landing">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.75 }} viewport={{ once: false }}>
                    <h2 className="landing_title">
                        At Top Gun Firearms Academy, <span style={{color:"#ffbd59"}}>We Put Safety First</span>
                    </h2>
                </motion.div>
                <div className = "landing_register-button-desktop">
                        <Button className = "action-button" sx={{backgroundColor: 'rgb(73 54 47)', fontSize:"1.5rem", borderRadius: "0.25rem", height:"5rem", width: "25rem",  '&:hover': {backgroundColor: '#ffbd59', color: 'rgb(73 54 47)'}}} variant="contained" type="submit">register</Button>
                </div>
                <div className = "landing_register-button-desktop">
                    <a href="#about-sec" style={{ fontWeight: 'bold', textDecoration: 'none' }}><Button className = "action-button" sx={{backgroundColor: 'rgb(73 54 47)', fontSize:"1rem", borderRadius: "0.25rem", width:"25rem", height: "3rem", marginTop: "1rem", '&:hover': {backgroundColor: '#2f4f4f', color: '#fff'}}} variant="contained"  type="submit">Learn More</Button></a>
                </div>
                <div className = "landing_register-button-mob-tab">
                        <Button className = "action-button" sx={{backgroundColor: 'rgb(73 54 47)', fontSize:"1rem", borderRadius: "0.25rem", height:"3rem", width: "10rem",  '&:hover': {backgroundColor: '#ffbd59', color: 'rgb(73 54 47)'}}} variant="contained" type="submit">register</Button>
                </div>
                <div className = "landing_register-button-mob-tab">
                    <a href="#about-sec" style={{ fontWeight: 'bold', textDecoration: 'none' }}><Button className = "action-button" sx={{backgroundColor: 'rgb(73 54 47)', fontSize:"0.75rem", borderRadius: "0.25rem", width:"8rem", height: "2rem", marginTop: "1rem", '&:hover': {backgroundColor: '#2f4f4f', color: '#fff'}}} variant="contained" type="submit">Learn More</Button></a>
                </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} viewport={{ once: false }} >
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
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ scale: 0.8, opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: false }} layout whileHover={{ scale: 0.95, opacity: 1 }}>
                <div className = "fact-single-td">
                    More than <span style={{ fontWeight: 'bold', fontSize: "4.50rem", color:"#ffbd59" }}>2.5 million Canadians </span> have completed OHEP courses, and you can too!
                </div>
                <div className = "fact-single-mobile">
                    More than <span style={{ fontWeight: 'bold', fontSize: "2.5rem", color:"#ffbd59" }}>2.5 million Canadians </span> have completed OHEP courses, and you can too!
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} viewport={{ once: false }} >
                <div id="about-ohep" className = "landing_information--section">

                    <div className = "landing_information--section-title-logo" >
                        <img className = "landing_ohep-logo" src={OHEPLogo}/>
                        <h2 className = "landing_information--section-title" >
                            About OHEP
                        </h2>
                    </div>

                    <div className = "ohep--card-container">
                        <CardFlip
                            frontContent={<p>Official Designation</p>}
                            backContent={<p>Delivered across Ontario by the Ministry of Natural Resources and Forestry, in partnership with the Ontario Federation of Anglers and Hunters.</p>}
                        />

                        <CardFlip
                            frontContent={<p>Pioneering Tradition</p>}
                            backContent={<p>Ontario was the first Canadian province to introduce a hunter safety training course in 1957, evolving into today’s comprehensive Hunter Education Program.</p>}
                        />

                        <CardFlip
                            frontContent={<p>Comprehensive Training</p>}
                            backContent={<p>The program equips participants with essential knowledge of the natural world, fostering responsible and informed hunting practices.</p>}
                        />

                        <CardFlip
                            frontContent={<p>Firearms Safety Integration</p>}
                            backContent={<p>The program equips participants with essential knowledge of the natural world, fostering responsible and informed hunting practices.</p>}
                        />

                        <CardFlip
                            frontContent={<p>Mandatory for All New Hunters</p>}
                            backContent={<p>Individuals of all ages must complete the training and pass an exam before purchasing their first hunting license in Ontario.</p>}
                        />

                        <CardFlip
                            frontContent={<p>Proven Track Record</p>}
                            backContent={<p>Over one million individuals have successfully completed the Ontario Hunter Education Program, demonstrating its effectiveness and reach.</p>}
                        />

                    </div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ scale: 0.60, opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false }} layout>
                <div className = "fact-single-td">
                    Ready to register? Check out our dates and book your spot now:
                </div>
            </motion.div>
            <div>
                <BookeoWidget />
            </div>

        </main>

    )
}

export default HomePage;


<iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.6485342792344!2d-79.20328261095344!3d43.80090556834778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a855f331bb%3A0x7c0b7e22a61976a7!2sTop%20Gun%20Firearms%20Academy!5e0!3m2!1sen!2sca!4v1729134464756!5m2!1sen!2sca"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            aria-label="Google Map of Top Gun Firearms Academy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />


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
