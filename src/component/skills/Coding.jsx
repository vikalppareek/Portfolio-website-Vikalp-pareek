import React from "react";

const Coding = () => {
    return(
        <div className="skills_content">
        <h3 className="skills_title">Coding Skills</h3>

        <div className="skills_box">
            <div className="skills_group">
                
             {/*div container for first skill line */}
                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>  {/*circle tick check icon */}

                    <div>
                        <h3 className="skills_name">C</h3>
                        <span className="skills_level">Advance</span>
                    </div>
                </div>

              
                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">C++</h3>
                        <span className="skills_level">Advance</span>
                    </div>
                </div>

                
                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">Data Structure</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
            </div>
        
         {/*div for SEcond vertical line skill */}
            <div className="skills_group">
            <div className="skills_data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">Algorithm</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">Compitative Coder</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">Problem Solver</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
               </div>

            
        </div>
    </div>
    )
}

export default Coding;