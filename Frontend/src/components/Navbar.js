import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Logo from '../image/logod.png'
import logodImage from '../image/logod.jpg';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;
// const navItems = ['Home', 'About us','Contact', 'Pricing'];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
     
          <ListItem  >
            <ListItemText primary='Home' onClick={()=>navigate('/')} />
          </ListItem>
          <ListItem  onClick={()=>navigate('/about-us')}>
            <ListItemText primary='About Us' />
          </ListItem>
          <ListItem >
            <ListItemText primary='Contact' onClick={()=>navigate('/contact')} />
          </ListItem>
          <ListItem >
            <ListItemText primary='Pricing' onClick={()=>navigate('/pricing')} />
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar  position="fixed" sx={{ backgroundColor: '#FFC000' ,maxWidth:'100%'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            // sx={{ marginRight: 1, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={logodImage} alt="Your Logo" width="100" height="80" />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          
              <Button color="inherit" onClick={()=>navigate('/')}>
                Home
              </Button>
              <Button color="inherit" onClick={()=>navigate('/about-us')}>
                 About Us
                </Button>
                <Button color="inherit" onClick={()=>navigate('/contact')}>
                Contact
                </Button>
                <Button color="inherit" onClick={()=>navigate('/pricing')}>
                Pricing
                </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
