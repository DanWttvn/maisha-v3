import { TextField } from '@mui/material';
import { withStyles } from '@material-ui/core'
import theme from 'styles/themes/light'

export default withStyles({
  root: {
    fontFamily: theme.fonts.main,
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    lineHeight: 1.15,
    color: theme.colors.darkestRed,
    '& label.Mui-focused': {
      color: theme.colors.darkestRed,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.colors.darkestRed,
    },
    '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none'
    }
  }
})(TextField)
