function allowDrop( ev ) {
    ev.preventDefault();
    //ev.dataTransfer.dropEffect = "move";
}

function drag( ev ) {
    ev.dataTransfer.setData( "text", ev.target.id );
    //ev.dataTransfer.effectAllowed = "move";
    
}

/*function drop( ev ) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData( "text" );
    ev.target.appendChild(document.getElementById( data ));
}*/

function drop( ev ) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData( "text" );
    var imgtocopy = document.getElementById( data );
    var imgclone;
    /* Trying to get the code to clone from the original image, but move the image if
    dragged from one of the clones. Later I intend to add counters to the original
    image and a seond image. Prevent copy if the counters run out. */
    if ( imgtocopy.id= "drag1" ) {
        if ( imgtocopy.hasAttribute( "data-drag-fixed" ) ){
            imgclone = imgtocopy.cloneNode( true );
            imgclone.removeAttribute( "data-drag-fixed" );
        }
        imgtocopy.id= "drag2";
        ev.target.appendChild( imgclone );
    }
    else {
        ev.target.appendChild( document.getElementById( data ) );
    }
    /*clone is working, but the function to move the clones is not. 
    Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    at drop (drag-drop.js:30)
    at HTMLImageElement.ondrop (drag-drop.html:22)*/
}