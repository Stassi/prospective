import { debugOuterContainer as enhance } from '../src/enhancers'

// TODO: Rename
const DebugOuterContainer = ({ children, ...props }) => children(props)

const EnhancedDebugOuterContainer = enhance(DebugOuterContainer)

export default EnhancedDebugOuterContainer
