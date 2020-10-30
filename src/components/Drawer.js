import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const useStyles = makeStyles({
  drawerContainer: {
    '& button': {
      color: '#9e9e9e',
      backgroundColor: 'transparent',
    }
  },
  list: {
    height: '100vh'
  },
  test: {
    backgroundColor: 'rgba(255, 114, 87, 0.8)'
  },
})

function Drawer (props) {
  const [display, setDisplay] = React.useState(false);
  const classes = useStyles();
  const { history } = props
  const menuList = [
    {
      text: '',
      icon: <CloseRoundedIcon style={{ color: '#9e9e9e' }} />,
    },
    {
      text: "Dashboard",
      onClick: () => history.push('/'),
    }, 
    {
      text: "New Question",
      onClick: () => history.push('/new'),
    },
    {
      text: "Leader Board",
      onClick: () => history.push('/leaderboard'),
    }
  ]

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDisplay(!display);
  };

  return (
    <div className={classes.drawerContainer}>
      <button onClick={toggleDrawer}>
        <MenuRoundedIcon />
      </button>
      <MUIDrawer 
        open={display} 
        onClose={toggleDrawer}
        anchor= 'top'
      >
        <div onClick={toggleDrawer}>
          <List className={classes.list}>
            {menuList.map((item, index) => {
              const { text, onClick, icon } = item
              return (
                <>
                  <ListItem 
                    button key={text} 
                    onClick={onClick ? onClick : null}
                  >
                    {icon && icon}
                    <ListItemText primary={text} />
                  </ListItem>
                  <Divider />
                </>
              )
            })}
          </List>
        </div>
      </MUIDrawer>
    </div>
  )
}

export default withRouter(Drawer) 