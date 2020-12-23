import { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';

import AddToCupboard from './add-to-cupboard/AddToCupboard';
import CupboardList from "./cupboard-list/CupboardList";
import SearchBar from "./search-bar/SearchBar"

const MyCupboard = () => {

    const [key, setKey] = useState(`in-my-cupboard`);
    const [searchText, setSearchText] = useState(``);
    const [searchFilter, setSearchFilter] = useState(``);

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            transition={false}
        >
            <Tab eventKey="in-my-cupboard" title="In My Cupboard">
                <Jumbotron className="tab-header mt-1 mb-0">
                    <h4>My Cupboard Items</h4>
                </Jumbotron>
                <SearchBar searchBundle={{ searchText, setSearchText, searchFilter, setSearchFilter }} />
                <CupboardList searchBundle={{ searchText, searchFilter }} />

            </Tab>
            <Tab eventKey="add-to-my-cupboard" title="Add to My Cupboard">
                <Jumbotron className="tab-header mt-1 mb-1">
                    <h4>New Cupboard Items</h4>
                </Jumbotron>
                <AddToCupboard />
            </Tab>
        </Tabs>
    );
};

export default MyCupboard;
