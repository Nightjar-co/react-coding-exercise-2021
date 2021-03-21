// Externals
import React from 'react'
import { createUseStyles } from 'react-jss'

// Styles
import theme from '../style/theme'

const Preload = () => {
  const classes = useStyles()
  return (
    <div className={classes.preload}>
      <p className={classes.p}>Loading...</p>
    </div>
  )
}

const useStyles = createUseStyles({
  preload: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '200px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    backgroundColor: theme.colors.preloadBackgroundColor
  },
  p: {
    textAlign: 'center',
    width: '100%'
  }
}, { name: 'Preload' })

export default Preload
