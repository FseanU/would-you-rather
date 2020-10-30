import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Drawer (props) {
  const [display, setDisplay] = React.useState(false);

  const { history } = props
  const menuList = [
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
    <div class="drawer-container">
      <button onClick={toggleDrawer}>
        <MenuRoundedIcon />
      </button>
      <MUIDrawer 
        open={display} 
        onClose={toggleDrawer}
      >
        <div onClick={toggleDrawer}>
          <List>
            {menuList.map((item, index) => {
              const { text, onClick } = item
              return (
                <ListItem button key={text} onClick={onClick}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            })}
          </List>
        </div>
      </MUIDrawer>
    </div>
  )
}

export default withRouter(Drawer) 