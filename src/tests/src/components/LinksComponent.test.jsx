const { render } = require("@testing-library/react");
const { LinksComponent } = require("../../../components/LinksComponent");


describe('Tests on <LinksComponent />', () => {

    test( 'Component should match with the Snapshot', () => {
        const links = [
            { name: 'users', path: '/users', animation: 'animate__backInLeft' },
            { name: 'repos', path: '/repos', animation: 'animate__backInRight' }
        ];
        
        const { container } = render( <LinksComponent links={ links } /> )

        expect( container ).toMatchSnapshot();
    });

});