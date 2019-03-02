import { install } from '@material-ui/styles'
import Layout from './Layout'

// attempts to load style engine before importing styled Material UI components
// reference: https://material-ui.com/css-in-js/basics/
install()

export default Layout
