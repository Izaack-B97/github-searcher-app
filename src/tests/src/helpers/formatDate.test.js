import { formatDate } from "../../../helpers/formatDate";

describe('Tests on formatDate function', () => {

    test( 'Function should return the correct format', () => {
        const date = '2022-12-25T04:45:46Z'
        expect( formatDate( date ) ).toBe( 'Created at December 25, 4:45' );
    });

});