import React, { useState } from "react";
import "./education.css";

const Education = () => {
    
    //1 is Education section wch show at starting and 2 for Experience section
    const [toggleState, setToggleState] = useState(1);

    //toogletab arrow function create for switch 1 and 2 index number k bich .
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        //qualification section where Qualification title, education or experience heading,education degree comes
        <section className = "qualification_section" id = "education" >
            <h2 className = "section_title" >Qualification</h2>
            <span className = "section_subtitle" >My Education journey</span>
            
  {/*Qualification degree Container where Education or Experience container both comes with its heading */}
            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={
                        useState===1 
                        ?
// if true then qualification_button and button-flex class in App.css loc74(heading comes in center property) is for Education and experience heading and qualification_active where all degree details show
                         "qualification_button qualification_active button-flex" 
                          : "qualification_button button-flex"  //if false then only Experience button show ho not content inside
                           }
                           onClick={() => toggleTab(1)}>   {/*onclick pe active education container*/ }
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>

                    <div className={useState===2 ? "qualification_button qualification_active button-flex" 
                    :  "qualification_button button-flex"
                    }
                    onClick={() => toggleTab(2)}>  {/*onclick pe experience section with content show */}
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Experience
                    </div>
                </div>
{/*qualification_active class is for both Education and Experience jisme heading k according content pada show hoga */}

   
    {/*Education degree content container wch take full width*/}
        <div className="qualification_sections">  
                    <div className={
                        toggleState=== 1 
                        ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
{/*loc48,49: if Education section true then qualification_content-active means show ho jo none hai and if false means we are in experience tab then content not show dts y qualification_content give where display none pass in css file me */}           
                
                            
</div>

                         
                      {/* for Graduation degree */}
                        <div className="qualification_data">
                        <div className="special"></div>
                        
                         <div>
                             <span className="qualification_rounder"></span>
                              <span className="qualification_line"></span>
                            </div>
                            
                         <div> 
                         <h3 className="qualification_title">B.Tech CSE</h3>
                          <span className="qualification_subtitle">Amity University Rajasthan</span>

                        <div className="qualification_calender">
                          <i class="uil uil-calendar-alt"></i>
                                2021-25
                             </div>
                            </div>
                        </div>

              
                {/* for Intermediate degree */}
                        <div className="qualification_data">
                       
                            <div>
                                <h3 className="qualification_title">Intermediate</h3>
                                <span className="qualification_subtitle">NIMS International School</span>

                                <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i>
                                    2017-18
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                   
             
                {/* for High School  Degree */}
                        <div className="qualification_data">
                        <div className="special"></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">High School</h3>
                                <span className="qualification_subtitle">NIMS International School</span>

                                <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i>
                                    2019-20
                                </div>
                            </div>
                        </div>
                    </div>
       
    {/*if Experience section is true then experience_content none ko active show if flase then display:none rhne de experience text ko dts y qualification_content class pass .check loc42,46 in css file*/}
                    <div className={ toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        
                 <div>

                            {/* for */}
                        
                    
                         <div> 
                         <h3 className="qualification_title">Linux World</h3>
                          <span className="qualification_subtitle">Front-end Developer</span>

                        <div className="qualification_calender">
                              June'24-Aug'24
                               
                                  
                             </div>
                            </div>
                        </div>
                    <br />
              
                {/* for */}
                        {/* <div className="qualification_data">
                       
                            <div>
                                <h3 className="qualification_title">Intermediate</h3>
                                <span className="qualification_subtitle">MPS International</span>

                                <div className="qualification_calender">
                               
                                    2021
                                    <br></br><br></br><br></br>
                                </div>
                            </div>

                           
                        </div> */}
                   
             
                {/* for */}
                      

                            
                            <div>
                                <h3 className="qualification_title">Learn & Build</h3>
                                <span className="qualification_subtitle">Full Stack Web Developer</span>

                                <div className="qualification_calender">
                                
                                    June'23 - Aug'23
                                </div>
                            </div>
                        </div>

                              </div>
                                
                            </div>

                  
              
            
        </section>
    )
}


export default Education 