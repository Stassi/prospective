import React from 'react'
import theme from './theme'
import wrapDisplayName from '../../wrapDisplayName'

const enhance = Component => ({ darkThemeEnabled, ...props }) => (
  <Component
    {...props}
    theme={theme(darkThemeEnabled)}
  />
)

const useDisplayName = wrapDisplayName('UsingMuiTheme')

const useMuiTheme = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = useDisplayName(Component)
  return EnhancedComponent
}

export default useMuiTheme
