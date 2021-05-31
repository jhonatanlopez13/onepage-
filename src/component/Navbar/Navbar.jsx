import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '../Drawer/Drawer';
import '../../style/Navbar.scss';
import '../../icons/icomoon/style.css'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
}));


const Navbar = () => {
    const classes = useStyles();

  return (
    <div className={"containergeneral"}>
      <AppBar position="static">
        <Toolbar className={"containernabar"}>
          <Drawer/>
          <i id={"logoempresa"} className={"icon-logoempresa"}></i>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar
