import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
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
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveRounded';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteForeverRounded';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EditOutlinedIcon from '@material-ui/icons/EditRounded';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjectsRounded';
import AddAlertRoundedIcon from '@material-ui/icons/AddAlertRounded';
import './Header.scss'
import Createnotes from '../createNotes/Createnotes';
//import Displaynotes from '../displayNotes/Displaynotes';
import NoteMaker from '../noteMaker/NoteMaker';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    borderBottom: '1px solid #BDBDBD',
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: '0px 0px 0px 0px !important',
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
    border: '0px !important',
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
      width: '67%',
      height: '55px',
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
    padding: theme.spacing(2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '74ch',
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

  function changeContent(e, text) {
    e.stopPropagation();
    switch (text) {
      case 'Trash':
        break;
      case 'Notes':

        break;
      case 'Archive':
        break;
      default:
        break;
    }

  }
  function icon(index) {
    switch (index) {
    case 0:
    return (<ListItemIcon > <EmojiObjectsIcon /> </ListItemIcon>)
    case 1:
    return <ListItemIcon > <NotificationsNoneIcon /> </ListItemIcon>
    case 2:
    return <ListItemIcon > <EditOutlinedIcon /> </ListItemIcon>
    case 3:
    return <ListItemIcon > <ArchiveOutlinedIcon /> </ListItemIcon>
    case 4:
    return <ListItemIcon > <DeleteOutlinedIcon /> </ListItemIcon>
    
    default:
    return <ListItemIcon > <MailIcon /> </ListItemIcon>
    }
    }


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
          <img className="imgKeep" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" ></img>
          <Typography className="text" variant="h6" noWrap>
            Fundoo
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
        <List onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose} >
          {['Notes', 'Reminder', 'Edit labels', 'Archive', 'Trash'].map((text, index) => (
            <ListItem button key={text} onClick={e => changeContent(e, text)}>
              {icon(index)}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className="create">
        <Createnotes/>
        
          <NoteMaker/>
        
      </div>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>

        </div>

      </main>
    </div>
  );
}
