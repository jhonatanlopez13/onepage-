import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../../style/navbar.scss';
import '../../icons/icomoon/style.css';
import DrawerLeft from '../drawer/DrawerLeft'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
           <AppBar  position="static">
                <Toolbar className={"Toolbar"}>
                  <div id={"containerbutton"}>
                    <div className={"icon-menu-1"}></div>
                    <DrawerLeft className={"buttonleft"}/>
                  </div>
                </Toolbar>
           </AppBar>
        </div>
    )
}

export default Navbar