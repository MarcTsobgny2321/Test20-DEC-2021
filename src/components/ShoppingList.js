import { plantList } from '../datas/plantList';

// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]
function ShoppingList() {
	return (
		<ul>
		{plantList.map((plant) => (
    <li key={ plant.id }>
       {plant.name} {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
    </li>
))}
	</ul>
	)
}

export default ShoppingList