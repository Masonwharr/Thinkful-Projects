$(document).ready(function(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
      var inputfield = $('#entry').val();
      console.log(inputfield);
      $('.shopping-list').append('<li>  <span class="shopping-item">'+ inputfield + '</span>'
     + '<div class="shopping-item-controls">'
    + '<button class="shopping-item-toggle"><span class="button-label">check</span></button>'
     + '<button class="shopping-item-delete"><span class="button-label">delete</span></button>'
     + '</div></li>');
      // This is incorrect, and adds an outside empty box. $('.shopping-list').append('<div class="shopping-item-controls"> <button class="shopping-item-toggle">' + '</button> </div>');
    //$('inputfield').appendTo('body').addClass('.shopping-item'); 
  });  


  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
//$(this).closest('span','.shopping-item').toggleClass('shopping-item__checked'); - Does not work entirely.
$(this).closest('li').children().first().toggleClass('shopping-item__checked');
  });

 //$('.shopping-item-delete').mousedown(function(event) { - Does not delete newly appended items.
$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
      var inputfield = $('#entry').val();
      event.preventDefault();
$(this).parent('div').parent('li').remove();
});
 });