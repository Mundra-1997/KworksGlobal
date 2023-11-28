import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import { makeStyles } from "@material-ui/core/styles";


// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//     [theme.breakpoints.down("sm")]: {
//       minWidth: 32,
//       paddingLeft: 8,
//       paddingRight: 8,
//       "& .MuiButton-startIcon": {
//         margin: 0
//       }
//     }
//   },
//   buttonText: {
//     [theme.breakpoints.down("sm")]: {
//       display: "none"
//     }
//   }
// }));

const ContactUs = () => {
  // const classes = useStyles();

  return (
    <div className='contact'>
      <main>
          <h1>Contact Us</h1>
          <form >
              <div className='inputField'>
                  <label>Name</label>
                  <input type="text" required placeholder='Enter Your Name'/>
              </div>
              <div className='inputField'>
                  <label>Email</label>
                  <input type="email" required placeholder='abc@xyz.com'/>
              </div>
              <div className='inputField'>
                  <label>Phone Number</label>
                  <input type='number' required placeholder='98XXXXX394'/>
              </div>
              <div className='inputField'>
                  <label>Message</label>
                  <input type="text" required placeholder='Tell us about your query...'/>
              </div>
              {/* <button type="submit">Submit</button> */}
              {/* <Button variant="outlined">Primary</Button> */}
              < Button variant="contained"
        color="secondary"
        
        startIcon={<SendIcon />}
      >
        <span >Delete</span>
      </Button>
              

          </form>
      </main>
    </div>
  )
}

export default ContactUs;