import React from "react"

import {
    Drawer as MUIDRAWER,
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
    makeStyles
} from "@material-ui/core"

// import { makeStyles } from "@mui/material"


const useStyles = makeStyles({
    drawer: {
        width: "160px"
    }
})


const Drawer = () => {
    const classes = useStyles
    return (
        <MUIDRAWER variant="permanent"   className={classes.drawer}>

        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              {/* <ListItemButton> */}
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              {/* </ListItemButton> */}
            </ListItem>
          ))}
        </List>
        </MUIDRAWER>
    )
}

export default Drawer
