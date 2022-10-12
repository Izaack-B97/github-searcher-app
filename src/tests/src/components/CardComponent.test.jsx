const { render } = require("@testing-library/react");
const { CardComponent } = require("../../../components/CardComponent");


describe('Tests on <CardComponent />', () => {

    test( 'Component should match with the Snapshot using user', () => {
        const user = {
            login: 'exmaple name',
            avatar_url: '../../../assets/images/user-image.png',
            type: 'user',
            html_url: 'www.github.com',
        }

        const { container } = render( <CardComponent user={ user } /> )

        expect( container ).toMatchSnapshot();
    });

    test( 'Component should match with the Snapshot using repo', () => {
        const repo = {
            full_name: 'exmaple name',
            clone_url: 'www.google.com',
            html_url: 'www.github.com',
            created_at: 'Tue Oct 11 2022 18:21:55 GMT-0700 (hora estándar del Pacífico de México)',
            forks: 4,
            default_branch: 'master',
            visibility: 'Public',
            description: 'This is an description of exampple'
        }
        
        const { container } = render( <CardComponent repo={ repo } /> )

        expect( container ).toMatchSnapshot();
    });

});