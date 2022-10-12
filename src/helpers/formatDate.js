
const MONTHS = [ 'January, February, March, April, May, June, July', 'August', 'September', 'October', 'November', 'December'];
// const DAYS = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

// This function is just to formate a string in a wished format date

export const formatDate = ( date = '' ) => {
    const splitDate = date.split('-');
    // console.log( splitDate );
    const month = splitDate[ 1 ];
    const splitTime = splitDate[ 2 ].split('T');
    const day = splitTime[ 0 ];
    // console.log( splitTime );
    const splitHours = splitTime[ 1 ].split( ':' );
    // console.log( splitHours ) 


    return `${ MONTHS[ parseInt( month ) ] } ${ day }, ${ splitHours[0] + ':' + splitHours[ 1 ]}`;
}
