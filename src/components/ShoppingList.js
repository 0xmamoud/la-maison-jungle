import { plantList } from '../datas/plantList'

function ShoppingList() {


    const cat = [];
    plantList.forEach((element) =>{
        if(!cat.includes(element.category)) {
            cat.push(element.category)
        }
    })

    const category = [];
    cat.forEach((element, index)=>{
        return category.push(<li key={`${element}-${index}`}>{element}</li>)
    })
	return( <div>
                <ul>{category}</ul>
                <ul>{plantList.map((element) =>{
                 return <li key={`${element.id}`}>{element.name}</li>})
                 }</ul>
            </div>)
}

export default ShoppingList;