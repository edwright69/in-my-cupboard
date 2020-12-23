import { useState } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import MyCupboard from './my-cupboard/MyCupboard';
import MyShoppingList from './my-shopping-list/MyShoppingList';

const NavTabs = () => {

    const [key, setKey] = useState(`in-my-cupboard`);

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            transition={false}
        >
            <Tab eventKey="in-my-cupboard" title="Cupboard">
                <MyCupboard />
            </Tab>
            <Tab eventKey="on-my-shopping-list" title="Shopping List">
                <MyShoppingList />
            </Tab>
        </Tabs>
    )
}

export default NavTabs;
