import React from 'react';
import clsx from 'clsx';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import ArchiveRoundedIcon from '@material-ui/icons/ArchiveRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import AddAlertRoundedIcon from '@material-ui/icons/AddAlertRounded';
import './Header.scss'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    color: 'black',
    marginRight: 13,
  },
 
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    color: 'black',
    backgroundColor: '#F1F3F4',
    borderRadius: '8px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '52%',
      marginLeft: '91px',
      height: '46px',
    },
  },
  searchIcon: {
    padding: theme.spacing(2, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className="tool">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <img className="imgKeep"  src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" ></img>
          <Typography className="text" variant="h6" noWrap>
            Fundoo Notes
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Avatar className="profilepic" alt="Ashwini" src="/static/images/avatar/3.jpg" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
          <ListItem button key={'Notes'}  className={classes.sideIcon}>
            <ListItemIcon><EmojiObjectsRoundedIcon /></ListItemIcon>
            <ListItemText primary={'Notes'}/>
          </ListItem>
          <ListItem button key={'Remainders'} className={classes.sideIcon}>
            <ListItemIcon><NotificationsNoneIcon/></ListItemIcon>
            <ListItemText primary={'Remainders'}/>
          </ListItem>
          <ListItem button key={'Editlabels'}  className={classes.sideIcon}>
            <ListItemIcon><EditRoundedIcon/></ListItemIcon>
            <ListItemText primary={'Edit labels'}/>
          </ListItem>
          <ListItem button key={'Archive'}  className={classes.sideIcon}>
            <ListItemIcon>
            <ArchiveRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary={'Archive'}/>
          </ListItem>
          <ListItem button key={'Trash'} className={classes.sideIcon}>
            <ListItemIcon><DeleteForeverRoundedIcon/></ListItemIcon>
            <ListItemText primary={'Trash'}/>
          </ListItem>
        {/* <List>
          {['Notes', 'Reminders', 'Edit Labels', 'Archive','Trash'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 5 === 0 ? <EmojiObjectsRoundedIcon /> : <AddAlertRoundedIcon /> : <EditRoundedIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

      </main>
    </div>
  );
}
