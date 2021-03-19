// Externals
import React from 'react'
import { createUseStyles } from 'react-jss'

// Styles
import theme from '../style/theme'

const Error = () => {
  const classes = useStyles()
  return (
    <div className={classes.error}>
      <p className={classes.p}>No results found in music... check back soon</p>
    </div>
  )
}

const useStyles = createUseStyles({
  error: {
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
}, { name: 'Error' })

export default Error
