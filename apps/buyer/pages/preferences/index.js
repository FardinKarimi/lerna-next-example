import NotImplemented from '@company/components/molecules/not_implemented'
import ComponentWithMenu from '@company/components/organisms/component_with_menu'

import BuyerMenu from '../../templates/buyer_menu'

const PreferencesPage = () => (
  <ComponentWithMenu renderMenu={BuyerMenu} renderContent={NotImplemented} />
)

export default PreferencesPage
