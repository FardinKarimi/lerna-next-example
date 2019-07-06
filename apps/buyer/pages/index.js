import withSideMenu from '@company/components/_hocs/with_side_menu'

import Shop from '../templates/shop'
import BuyerMenu from '../templates/buyer_menu'

export default withSideMenu(BuyerMenu)(Shop)
