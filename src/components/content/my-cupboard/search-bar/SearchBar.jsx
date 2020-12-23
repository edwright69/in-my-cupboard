import Form from "react-bootstrap/Form";

const SearchBar = ({ searchBundle }) => {

    const { searchText, setSearchText, searchFilter, setSearchFilter, typeFilter, setTypeFilter } = searchBundle;

    return (
        <Form>
            <Form.Group controlId="SearchForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Starting typing to filter..."
                    name="searchText" value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="SearchForm.ControlSelect1">
                <Form.Label>And/or sort or filter by:</Form.Label>
                <Form.Control
                    as="select"
                    value={searchFilter}
                    onChange={e => setSearchFilter(e.target.value === `clear` ? "" : e.target.value)}
                >
                    <option value="" disabled>Please choose...</option>
                    <option value="type">Filter By Type</option>
                    <option value="allaz">Sort All A-Z</option>
                    <option value="allza">Sort All Z-A</option>
                    <option value="clear">Clear Filter and Sorts</option>
                </Form.Control>
            </Form.Group>
            {typeFilter && (
                <Form.Group controlId="SearchForm.ControlSelect2">
                    <Form.Control
                        as="select"
                        value={typeFilter}
                        onChange={e => setTypeFilter(e.target.value)}
                    >
                        <option value="" disabled>Please choose...</option>

                    </Form.Control>
                </Form.Group>
            )}
        </Form >
    );
};

export default SearchBar;
