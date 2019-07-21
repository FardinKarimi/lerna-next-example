import { grocery, kitchenTools, carTools } from '../../../mock_api/articles'

export default (req, res) => res.json({ grocery, kitchenTools, carTools })
