const { render } = require("@testing-library/react");
const { SearcherBarComponent } = require("../../../components/SearcherBarComponent");


describe('Tests on <SearchComponent />', () => {

    test( 'Component should match with the Snapshot', () => {
        const { container } = render( <SearcherBarComponent loadResults={ () => {} } setUserIsLooking={ () => {} } /> )

        expect( container ).toMatchSnapshot();

    });

});