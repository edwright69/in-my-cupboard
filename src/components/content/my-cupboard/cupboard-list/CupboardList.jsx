import myCupboardData from '../../../../data/dummyData.json';

import { sortItems, filterItems } from '../../../../utils/filterAndSort';

import CategoryTable from './CategoryTable';

const CupboardList = ({ searchBundle }) => {

    const { searchText, searchFilter } = searchBundle;

    const { cupboardData } = myCupboardData

    const makeCupboardList = () => {

        const cupboardList = [];

        const filteredItemList = searchText ? filterItems(searchText, cupboardData) : cupboardData;

        if (searchFilter?.includes(`all`)) {

            const joinedCategories = Object.values(filteredItemList);
            const flattenedCategories = joinedCategories.flat();

            const sortedItems = sortItems(searchFilter, flattenedCategories);

            console.log(sortedItems);

            return <CategoryTable items={sortedItems} searchBundle={searchBundle} />
        }

        if (searchFilter?.includes(`type`)) { }

        for (const [key, value] of Object.entries(cupboardData)) {
            cupboardList.push(<CategoryTable key={key} category={key} items={value} searchBundle={searchBundle} />);
        }

        return cupboardList;
    };

    return (
        <>
            {makeCupboardList()}
        </>
    );
};

export default CupboardList;
