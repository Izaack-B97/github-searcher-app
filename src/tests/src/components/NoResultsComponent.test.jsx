const { render } = require("@testing-library/react");
const { NoResultsComponent } = require("../../../components/NoResultsComponent");

describe('Tests on <NoResultsComponent />', () => {

    test( 'Component should match with the Snapshot', () => {
        const { container } = render( <NoResultsComponent /> )

        expect( container ).toMatchSnapshot();
    });

});