import { debugOuterContainer as enhance } from '../src/enhancers'

const DebugOuterContainer = ({ children, ...props }) => children(props)

const EnhancedDebugOuterContainer = enhance(DebugOuterContainer)

export default EnhancedDebugOuterContainer
