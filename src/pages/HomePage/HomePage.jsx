import './HomePage.scss'
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { motion, useScroll, useAnimate } from "framer-motion"
import OHEPLogo from '../../assets/logos/OHEP.png'
import CardFlip from "../../components/CardFlip/CardFlip"
import BookeoWidget from "../../components/BookeoWidget/BookeoWidget"
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react'


const HomePage = () =>{
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about') {
          const element = document.getElementById('about-sec');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }

        if (location.pathname === '/register') {
          const element = document.getElementById('registration');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);

    return (
        <main>
            <div className="landing">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.75 }} viewport={{ once: false }}>
                    <h2 className="landing_title">
                        At Top Gun Firearms Academy, <span style={{color:"#ffbd59"}}>We Put Safety First</span>
                    </h2>
                </motion.div>
                <div className = "landing_register-button-desktop">
                    <a href="#register" style={{ fontWeight: 'bold', textDecoration: 'none' }}><Button className = "action-button" sx={{backgroundColor: 'rgb(73 54 47)', fontSize:"1.5rem", borderRadius: "0.25rem", height:"5rem", width: "25rem",  '&:hover': {backgroundColor: '#ffbd59', color: 'rgb(73 54 47)'}}} variant="contained" type="submit">register</Button></a>
                </div>
                <div className = "landing_register-button-desktop">
                    <a href="#about-sec" style={{ fontWeight: 'bold', textDecoration: 'none' }}><Button className = "action-button" sx={{backgroundColor: 'rgb(73 54 47)', fontSize:"1rem", borderRadius: "0.25rem", width:"25rem", height: "3rem", marginTop: "1rem", '&:hover': {backgroundColor: '#2f4f4f', color: '#fff'}}} variant="contained"  type="submit">Learn More</Button></a>
                </div>
                <div className = "landing_register-button-mob-tab">
                    <a href="#register" style={{ fontWeight: 'bold', textDecoration: 'none' }}><Button className = "action-button" sx={{backgroundColor: 'rgb(73 54 47)', fontSize:"1rem", borderRadius: "0.25rem", height:"3rem", width: "10rem",  '&:hover': {backgroundColor: '#ffbd59', color: 'rgb(73 54 47)'}}} variant="contained" type="submit">register</Button></a>
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
                        We are an official provider designated by the Chief Firearms Office (CFO)
                        to teach and examine the <b className = "landing_intro--para">Canadian Firearm Safety Course (CFSC) </b>
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
                            to provide <a href="#about-ohep" style={{ fontWeight: 'bold', fontStyle:"italic", fontSize:"20px", textDecoration: 'none' }}>Ontario’s Hunter Education Program (OHEP)</a> across the province.
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
                    More than <span style={{ fontWeight: 'bold', fontSize: "4rem", color:"#ffbd59" }}>2.5 million Canadians </span> have completed OHEP courses, and you can too!
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
                            backContent={<p>Over two million individuals have successfully completed the Ontario Hunter Education Program, demonstrating its effectiveness and reach.</p>}
                        />

                    </div>
                </div>
            </motion.div>

            <ul className ="terms-conditions">
                <div id="registration" className = "terms-conditions--title">
                    Registration
                </div>
                <li><strong style={{fontFamily:"roboto-slab", color: "#2f4f4f"}}>Course guaranteed even with just 1 participant</strong> – No cancellations, we’re here for you!</li>
                <li><strong style={{fontFamily:"roboto-slab", color: "#2f4f4f"}}>Government ID required (Driver's License, Passport, etc.)</strong> – Bring your valid ID for smooth entry.</li>
                <li><strong style={{fontFamily:"roboto-slab", color: "#2f4f4f"}}>Text to confirm availability</strong> – Quick and easy, all pre-class communication happens via text! <strong>(416) 720-7858 (Text Only)</strong></li>
                <li><strong style={{fontFamily:"roboto-slab", color: "#2f4f4f"}}>Non-refundable payments</strong> – Once you're in, you’re committed! Fees are non-refundable for cancellations, missed dates, or late arrivals.</li>
                <li><strong style={{fontFamily:"roboto-slab", color: "#2f4f4f"}}>Rescheduled, not refunded, if government cancels</strong> – We’ll work with you to find a new date if any government regulations affect the course.</li>
                <li><strong style={{fontFamily:"roboto-slab", color: "#2f4f4f"}}>Easy sign-up</strong> – Check upcoming dates and book courses directly online, or email/text for assistance!</li>
                <li><strong style={{fontFamily:"roboto-slab", color: "#2f4f4f"}}>Continually adding new courses</strong> – If the current dates don’t work, reach out to find a time that fits your schedule.</li>
            </ul>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ scale: 0.60, opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false }} layout>
                <div className="fact-single">
                    Ready? Please check out our dates, and <span style={{ fontWeight: 'bold', color: '#e6aa4e' }}>book your spot now!: </span>
                </div>
                <div className = "landing_register-button-mob-tab" style={{display: "flex", justifyContent: "center", width:"100%"}}>
                    <a href="https://www-150q.bookeo.com/bookeo/startroute_315079MCLT182C22AFE81?ralias=true&axiomframed=false&inwidget=false&a=315079MCLT182C22AFE81&nowidget=true&s=-443182781&c=03n&t=sOf8Nh7sDk%2B79elxYWUp3qTESs4VXbo80CEQs75wGYE%3D" style={{ fontWeight: 'bold', textDecoration: 'none' }}><Button className = "action-button" sx={{backgroundColor: 'rgb(73 54 47)', fontSize:"1.5rem", borderRadius: "0.50rem", height:"5rem", width: "25rem",  '&:hover': {backgroundColor: '#ffbd59', color: 'rgb(73 54 47)'}}} variant="contained" type="submit">See Schedule & Book</Button></a>
                </div>
            </motion.div>
            <BookeoWidget />
        </main>
    )
}

export default HomePage;
