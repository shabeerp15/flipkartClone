import React, { useContext, useState } from 'react'
import { Box, Button, makeStyles, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'

// component
import LoginDialog from '../login/Login'
import  {LoginContext } from '../../context/ContextProvider'
import Profile from './Profile'

const useStyle = makeStyles({
  login: {
    background: '#ffffff',
    color: '#2874f0',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    boxShadow: 'none',
  },
  wrapper: {
    margin: '0 7% 0 auto',
    display: 'flex',
    '& > *': {
      marginRight: 50,
      alignItems: 'center',
      textDecoration: 'none',
      color: '#fff',
    },
  },

  container: {
    display: 'flex',
  },
})

const HeaderButtons = () => {
  const classes = useStyle()
  const [open, setOpen] = useState(false)
  const {account, setAccount} = useContext(LoginContext)

  const openLoginDialog = () => {
    setOpen(true)
  }

  return (
    <Box className={classes.wrapper}>
      {
        account ?  <Profile account={account} setAccount={setAccount} /> :
        <Link to="#">
        <Button
          type="button"
          variant="contained"
          onClick={() => openLoginDialog()}
          className={classes.login}
        >
          Login
        </Button>
      </Link>
      }
      <Link>
        <Typography style={{ marginTop: 5 }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={2} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  )
}

export default HeaderButtons
