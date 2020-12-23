import Button from 'react-bootstrap/Button';
import { titleCase } from 'title-case';

const ItemRow = ({ item }) => {

    const { name, qty } = item;

    const properItemName = titleCase(name);

    return (
        <tr className="d-flex">
            <td className="col-6">{properItemName}</td>
            <td className="col-1"><Button variant="outline-success" size="sm">+</Button></td>
            <td className="col-1">{qty}</td>
            <td className="col-1"><Button variant="outline-danger" size="sm">-</Button></td>
            <td className="col-3"><Button variant="success" size="sm">Shop</Button></td>
        </tr>
    );
};

export default ItemRow;
