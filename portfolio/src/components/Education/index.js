import './index.css'

const Education = () => {
    return (
        <div className='education-section' id='education'>
            <h2 className='heading'>Education</h2>
            <p className='description'>
            My education has been a journey of self-discovery and growth. My educational details are as follows.
            </p>
            <div className='education-list'>
                <div className='education-card'>
                    <div className='college-container'>
                        <img src='https://priw.ac.in/admin/collegegallery/0-min.JPG' alt='college' className='college-img' />
                        <div className='collegename-container'>
                            <h2 className='college-name'>
                            Priyadarshini Institute of Science and Technology for Women, Khammam
                            </h2>
                            <p className='education-heading'>Bachelor of Electrical & Electronics</p>
                            <p className='education-duration'>
                                2021 - 2024
                            </p>
                        </div>
                    </div>
                    <p className='gpa'>Grade: 8.01 CGPA</p>
                    <p className='college-description'>
                    I am recently graduated with a Bachelor's degree in Electrical & Electronics along with degree I am also eager to learn and work on exciting projects with a team of talented developers.
                    </p>
                </div>
                <div className='education-card'>
                    <div className='college-container'>
                        <img src='https://assets.collegedunia.com/public/college_data/images/appImage/159886653720170622.jpg' alt='college' className='college-img' />
                        <div className='collegename-container'>
                            <h2 className='college-name'>
                            Govt. Polytechnic College, Bellampally
                            </h2>
                            <p className='education-heading'>Diploma in Electrical & Electronics</p>
                            <p className='education-duration'>
                                2018 - 2021
                            </p>
                        </div>
                    </div>
                    <p className='gpa'>Grade: 9.13 CGPA</p>
                    <p className='college-description'>
                     I completed the diploma course in the stream of Electrical & Electronics Engineering, where I studied
                     the fundamental concepts of electrical engineering, electronics, and communication systems. I also gained hands-on experience.
                    </p>
                </div>
                <div className='education-card'>
                    <div className='college-container'>
                        <img src='https://content.jdmagicbox.com/comp/uravakonda/e3/9999p8552.8552.190302162602.u7e3/catalogue/zphs-school-chabala-uravakonda-schools-dq080uthyl.jpg' alt='college' className='college-img' />
                        <div className='collegename-container'>
                            <h2 className='college-name'>
                            ZPHS Donabanda, Mancherial
                            </h2>
                            <p className='education-heading'>State Board of Telangana</p>
                            <p className='education-duration'>
                                2017 - 2018
                            </p>
                        </div>
                    </div>
                    <p className='gpa'>Grade: 7.5 CGPA</p>
                    <p className='college-description'>
                        I completed my 10th standard at ZPHS school, where I studied Science, Maths and Social studies and also Computer Applications in depth.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education;