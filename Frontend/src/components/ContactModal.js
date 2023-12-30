import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ContactModal = ({ isOpen, closeModal }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1000', // Ensure it's above other elements
    },
    content: {
      position: 'static',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      margin: '0',
      border: 'none',
      padding: '20px', // Adjust padding as needed
      maxWidth: '80%', // Adjust width as needed
      maxHeight: '80%', // Adjust height as needed
      overflow: 'auto',
      backgroundColor: '#fff', // Background color of the modal
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Add a shadow for depth
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Contact Modal'
      className='custom-modal-class' // Add your custom modal class here
      style={customStyles} // Apply custom styles to the modal
    >
     <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'100%'}}><h2>Contact Us</h2><button style={{margin:'0rem',width:'3rem'}} onClick={closeModal}>close</button></div>
      <div>
      <form style={{margin:0}}>
            <div className='inputField'>
              <label>Name</label>
              <input
                type="text"
                name="name"
               
                required
                placeholder='Enter Your Name'
              />
            </div>
            <div className='inputField'>
              <label>Email</label>
              <input
                type="email"
                name="email"
                
                required
                placeholder='abc@xyz.com'
              />
            </div>
            <div className='inputField'>
              <label>Phone Number</label>
              <input
                type="tel"
                name="number"
              
                required placeholder='98XXXXX394' />
            </div>
            <div className='textArea'>
              <label>Message</label>
              <textarea
                name="message"
               
                required placeholder='Tell us about your query...' />
            </div>
            < button
              className='contactBtn'
              type='submit'
              variant="contained"
              sx={{ marginLeft: '17%',marginTop:'20px', backgroundColor: '#1eade4',
              '@media (max-width: 600px)': {
              marginLeft: '0%',}
              }}
            >
              <span >Send</span>
            </button>
          </form>
      </div>
     </div>
    </Modal>
  );
};

export default ContactModal;
