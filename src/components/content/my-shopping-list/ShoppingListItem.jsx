import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { titleCase } from 'title-case';

const catOptions = [
    `herb`,
    `seasoning`,
    `spice`,
    `sauce`
];

const ShoppingListItem = ({ item }) => {

    const [itemBought, setItemBought] = useState(false);
    const [userInputName, setUserInputName] = useState(``);
    const [userSelectedType, setUserSelectedType] = useState(``);
    const [userInputQty, setUserInputQty] = useState(0)

    const name = item ? item.name : ``;
    const type = item ? item.type : ``;
    const qty = item ? item.qty : 0;

    const handleItemBought = checkedVal => {
        if (userInputQty === 0) {
            setUserInputQty(1);
        }
        setItemBought(checkedVal);
    }

    const btnType = {
        variant: item ? `outline-danger` : `outline-success`,
        text: item ? `Remove` : `Add to list`
    };

    const catOptionsList = catOptions.map(cat => <option key={cat} value={cat} disabled={cat !== type}>{titleCase(cat)}</option>);

    return (
        <Form className={`mb-1 p-2 border ${item ? `border-secondary` : `border-success`}`}>
            <Form.Row className={`align-items-center ${itemBought ? `strikethrough` : ``}`}>
                {item && (
                    <Col xs="auto">
                        <Form.Check
                            name="itemBought"
                            checked={itemBought}
                            onChange={e => handleItemBought(e.target.checked)}
                            type="checkbox"
                            id="autoSizingCheck"
                            className="mb-2"
                        />
                    </Col>
                )}
                <Col xs="auto">
                    <Form.Label htmlFor="inlineName" srOnly>Name</Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineNameInput"
                        placeholder="Item name"
                        readOnly={item}
                        value={name ? titleCase(name) : userInputName}
                        onChange={e => setUserInputName(e.target.value)}
                        name="inlineName"
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineCategory" srOnly>Category</Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineCatSelect"
                        as="select"
                        defaultValue={item ? type : userSelectedType}
                        onChange={e => setUserSelectedType(e.target.value)}
                        readOnly={item}
                        name="inlineCategory"
                    >
                        <option disabled value="">Please choose</option>
                        {catOptionsList}
                    </Form.Control>
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineQty" srOnly>Quantity</Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineQtyInput"
                        placeholder="Enter quantity"
                        value={qty ? qty : userInputQty}
                        onChange={e => setUserInputQty(e.target.value)}
                        name="inlineQty"
                    />
                </Col>
                <Col xs="auto">
                    <Button variant={btnType.variant} size="sm">{btnType.text}</Button>
                </Col>
            </Form.Row>
        </Form>

    );
};

export default ShoppingListItem;
