import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { titleCase } from 'title-case';


const catOptions = [
    `herbs`,
    `seasonings`,
    `spices`,
    `sauces`
];

const AddToCupboard = () => {

    const [itemName, setItemName] = useState(``);
    const [itemType, setItemType] = useState(``);
    const [itemQty, setItemQty] = useState(1);

    const catOptionsList = catOptions.map(cat => <option key={cat} value={cat}>{titleCase(cat)}</option>);

    return (
        <Form>
            <Form.Group controlId="formBasicItemName">
                <Form.Label>Item name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter item name"
                    value={itemName}
                    onChange={e => setItemName(e.target.value)}
                />
                <Form.Text className="text-muted">
                    If we find an item with this name, we'll increase the quantity
                    </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicItemCategory">
                <Form.Label>Item Category</Form.Label>
                <Form.Control
                    as="select"
                    value={itemType}
                    onChange={e => setItemType(e.target.value)}
                >
                    <option disabled value="">Please choose from the list</option>
                    {catOptionsList}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicItemQty">
                <Form.Label>Item quantity</Form.Label>
                <Form.Control
                    type="number"
                    pattern="[0-9]{2}"
                    value={itemQty}
                    onChange={e => setItemQty(e.target.value)}
                    placeholder="Enter number"
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default AddToCupboard;
