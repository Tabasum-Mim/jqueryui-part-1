$(document).ready(function(){
  //jqui draggable function
  $( "#draggable" ).draggable();
  //droppable
  $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

  //resizable
  $( "#resizable" ).resizable();

  //selectable
  $( "#selectable" ).selectable();

  //sortable
  $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});