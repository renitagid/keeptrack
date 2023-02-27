import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import ForestIcon from '@mui/icons-material/Forest';

const Header = () => {
  return (
    <AppBar component="nav" position="relative" sx={{backgroundColor:"#203966"}}>
      <Toolbar disableGutters >
        <ForestIcon sx={{color:"white", fontSize: 40,  marginLeft:1}}/>
        <NavLink to="/" style={{color:"white", textDecoration:"none", marginLeft:15}}>
          Home
        </NavLink>
        <NavLink to="/projects/" style={{color:"white", textDecoration:"none", marginLeft:15}}>
          Projects
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
