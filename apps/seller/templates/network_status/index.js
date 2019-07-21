import NetStat from '@company/components/organisms/network_status'
import useStore from '@company/components/_contexts/state_provider'

const NetworkStatus = () => {
  const [{ network }] = useStore()
  const items = Object.values(network)

  return <NetStat items={items} />
}

export default NetworkStatus
