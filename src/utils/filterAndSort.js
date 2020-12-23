export const filterItems = (searchText, items) => {

    return items.filter(item => {
        const itemNameLowerCase = item.name?.toLowerCase();
        const searchTextMatch = searchText ? itemNameLowerCase?.includes(searchText) : -1;

        if (searchTextMatch !== -1) return item;

        return null;
    });
};

export const sortItems = (searchFilter, items) => {

    let sortedItems = items;

    if (searchFilter?.includes(`az`)) {
        sortedItems = items.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }

    if (searchFilter?.includes(`za`)) {
        sortedItems = items.sort((a, b) => (a.name > b.name) ? -1 : 1);
    }

    return sortedItems;

};
