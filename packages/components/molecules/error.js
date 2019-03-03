import H1 from '../atoms/h1'
import Text from '../atoms/text'

const ErrorComponent = ({ statusCode, message }) => (
  <>
    <H1>{statusCode}</H1>
    <Text>{message}</Text>
  </>
)

export default ErrorComponent
