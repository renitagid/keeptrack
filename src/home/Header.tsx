import { AppBar, Button, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import ForestIcon from "@mui/icons-material/Forest";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface Props {
  handleDarkMode: () => void;
  darkMode: boolean;
}

const Header = ({ handleDarkMode, darkMode }: Props) => {
  return (
    <AppBar
      component="nav"
      position="relative"
      sx={{ backgroundColor: "#203966", height: "7vh", position: "sticky" }}
    >
      <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
        <div style={{display:"flex", alignItems:"center"}}>
        <ForestIcon sx={{ color: "white", fontSize: 40, marginLeft: 1 }} />
        <NavLink
          to="/"
          style={{ color: "white", textDecoration: "none", marginLeft: 15 }}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects/"
          style={{ color: "white", textDecoration: "none", marginLeft: 15 }}
        >
          Projects
        </NavLink>
        <NavLink
          to="/locations/"
          style={{ color: "white", textDecoration: "none", marginLeft: 15 }}
        >
          Locations
        </NavLink>
        </div>
        <Button style={{color:"white"}}onClick={handleDarkMode}>{darkMode?<LightModeIcon/>:<DarkModeIcon/>}</Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
