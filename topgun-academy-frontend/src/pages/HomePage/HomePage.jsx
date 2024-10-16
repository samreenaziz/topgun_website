import './HomePage.scss'

const HomePage = () =>{
    return (
        <main>
            <h1 className="home_title">
                At Top Gun Firearms Academy, Safety Always Comes First.
            </h1>
            <h2 className = "home_intro">
                <p className = "home_intro-para">
                We are an official provider designated by the Chief Firearms Office (CFO)
                to teach and examine the <b className = "home_intro--para">Canadian Firearm Safety Course (CFSC)</b>
                for <u>Non-Restricted Firearms</u> and the <b>Canadian Restricted Firearms Safety Course (CRFSC) </b>for <u>Restricted Firearms</u>.
                </p>

                <p className = "home_intro-para">
                    As a proud member of the <b>Firearm Safety Education Service of Ontario (FSESO)</b>,
                    we are committed to promoting public safety and maintaining public confidence.
                    Our mission is to ensure the professional, effective, and standardized delivery
                    of firearms safety training and testing in Ontario, upholding the highest standards
                    set by FSESO.
                </p>

                <p className = "home_intro-para">
                    In addition, we are authorized by the Ministry of Natural Resources and Forestry,
                    in partnership with the Ontario Federation of Anglers and Hunters (OFAH),
                    to provide Ontario’s Hunter Education Program across the province.
                    This program is designed to help you develop an understanding of the natural
                    world and become a knowledgeable and responsible hunter.
                </p>

                <p className = "home_intro-para">
                    Our academy provides comprehensive education on the safe and responsible use
                    and handling of both Non-Restricted and Restricted firearms, ensuring that
                    all new applicants meet the mandatory requirements by successfully completing the
                    CFSC or CRFSC.
                </p>

                <p className = "home_intro-para--side-note">
                <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Note: </span>The information on this website is intended to provide general
                    guidance only. For legal references, please consult the Firearms Act
                    and its regulations, as well as any applicable provincial, territorial,
                    and municipal laws, regulations, and policies.
                </p>

            </h2>

        </main>

    )
}

export default HomePage;

