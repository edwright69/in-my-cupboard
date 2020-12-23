import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import ShoppingListItem from './ShoppingListItem';

import myCupboardData from '../../../data/dummyData.json';

const MyShoppingList = () => {

    const { shoppingListItems } = myCupboardData;

    const shoppingList = shoppingListItems && shoppingListItems.map ?
        shoppingListItems?.map(item => {
            return <ShoppingListItem key={`${item.name}${item.id}`
            } item={item} />
        }
        )
        : null;


    return (
        <>
            <Jumbotron className="tab-header mt-1 mb-1">
                <h4>My Shopping list</h4>
            </Jumbotron>
            {!shoppingList?.length && <p>There are no items on the list.</p>}
            {shoppingList}
            <Button variant="success" className="mb-1">Add checked items to cupboard (removes from shopping list)</Button>
            <ShoppingListItem item={null} />

        </>
    );
};

export default MyShoppingList;
