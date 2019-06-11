import useInitialProps from './useInitialProps'

const document = Component => {
  const EnhancedComponent = Component
  EnhancedComponent.getInitialProps = useInitialProps
  return EnhancedComponent
}

export default document
