//setting callback function for 'hidden.bs.modal' event
$('#modal').on('hidden.bs.modal', function(){
    //remove the backdrop
    $('.modal-backdrop').remove();
  })