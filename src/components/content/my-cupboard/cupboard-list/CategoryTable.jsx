import Table from 'react-bootstrap/Table';

import { titleCase } from 'title-case';

import ItemRow from './ItemRow';

const CategoryTable = ({ category, items }) => {

    const itemRows = items.map(item => <ItemRow key={item.name} item={item} />);

    return (
        <>
            <h5>{category ? titleCase(category) : `All Items`}</h5>
            <Table striped size="sm" responsive="sm">
                <thead>
                    <tr className="d-flex">
                        <th className="col-6">Name</th>
                        <th className="col-1"></th>
                        <th className="col-1">Qty</th>
                        <th className="col-1"></th>
                        <th className="col-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {itemRows}
                </tbody>
            </Table>
        </>
    );
};

export default CategoryTable;
