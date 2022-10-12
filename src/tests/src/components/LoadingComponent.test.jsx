const { render } = require("@testing-library/react");
const { LoadingComponent } = require("../../../components/LoadingComponent");

describe('Tests on <LoadingComponent />', () => {

    test( 'Component should match with the Snapshot', () => {
        const { container } = render( <LoadingComponent /> )

        expect( container ).toMatchSnapshot();
    });

});