import NetStat from '../../organisms/network_status'
import useText from '../../_contexts/text_provider'
import useStore from '../../_contexts/state_provider'

const NetworkStatus = () => {
  const texts = useText()
  const [{ network }] = useStore()
  const items = Object.values(network).map(({ message, ...item }) => ({
    ...item,
    message: texts[message] || message
  }))

  return <NetStat items={items} />
}

export default NetworkStatus
