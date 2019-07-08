import { grocery, kitchenTools, carTools } from '../../../mock_api/articles'

export default function handle(req, res) {
  res.json({ grocery, kitchenTools, carTools })
}
