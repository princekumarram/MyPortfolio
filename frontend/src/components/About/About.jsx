
import { Typography } from '@mui/material'
import React from 'react'
import "./About.css";
const About = ({ about }) => {
  return (
    <div className='about'>
        <div className="aboutContainer"> 
            <Typography>As a passionate learner, I stays updated with the latest trends</Typography>
        </div>
        <div className="aboutContainer2">
            <div>
                <img
                 src={"https://media.licdn.com/dms/image/v2/D5635AQFo-aqAcZHG_A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1715439881569?e=1726981200&v=beta&t=qm5YIbVGdiPzliAYtDNua-bxsoLJhNHXDmWJWqO206Q"} 
                 alt="PKR"
                className='aboutAvatar'
                />



                
                <Typography
                 variant="h4" 
                 style={{ margin: "1vmax 0", color: "black" }}
                
                >Prince Kumar </Typography>
                <Typography > <b>Full Stack Developer 
                </b></Typography>
      
            </div>

            <div>
              <Typography
              style={{
                wordSpacing:"5px",
                lineHeight:"50px",
                letterSpacing:"5px",
                textAlign:"right"
              }}
              
              >

I have skilled in both frontend and backend development, with expertise in system design and data structures & algorithms (DSA).
              </Typography>
            </div>

    
            

         </div>
         

        
    
    
    </div>



  )
}

export default About
