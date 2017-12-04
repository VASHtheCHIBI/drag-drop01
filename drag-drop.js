var DnD = (function() {
	var PublicAPI = {
		allowDrop:allowDrop,
		drag:drag,
		drop:drop
	};
	var IDcounter = 1;

	function allowDrop( ev ) {
		ev.preventDefault();
	}

	function drag( ev ) {
		// dataTransfer.setData is taking strin text, so passing only the HTML element ID.
		ev.dataTransfer.setData( "text", ev.target.id );
	}

	function drop( ev ) {
		ev.preventDefault();
		var	data = ev.dataTransfer.getData( "text" );
		var node = document.getElementById( data );
		var nodeClone;
		if  ( node.hasAttribute( "data-drag-fixed" ) ) {
			nodeClone = node.cloneNode( true );
			nodeClone.removeAttribute( "data-drag-fixed" );
			nodeClone.id = node.id + "-" + IDcounter;
			IDcounter++;
			node = nodeClone;
		}
		ev.target.appendChild( node );
	}

	return PublicAPI;
})();