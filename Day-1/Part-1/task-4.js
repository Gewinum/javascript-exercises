var a = 0;

// It is worth to mention that switch compares values and their types(in task there were '==' operators used
switch(a) {
    case 0:
        console.log( 0 );
        break;
    case 1:
        console.log( 1 );
        break;
    case 2:
    case 3:
        console.log( '2,3' )
        break;
}