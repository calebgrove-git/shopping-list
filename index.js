$('ul').on('click', 'button.shopping-item-toggle', function (e) {
  $(this)
    .closest('li')
    .find('.shopping-item')
    .toggleClass('shopping-item__checked');
});

$('ul').on('click', 'button.shopping-item-delete', function (e) {
  $(this).closest('li').remove();
});

$('#js-shopping-list-form').submit('li', function (e) {
  var newItem =
    `<li><span class='shopping-item'>` +
    $('#shopping-list-entry').val() +
    `</span>
        <div class='shopping-item-controls'>
          <button class='shopping-item-toggle'>
            <span class='button-label'>check</span>
          </button>
          <button class='shopping-item-delete'>
            <span class='button-label'>delete</span>
          </button>
        </div>
      </li>`;
  $('.shopping-list').prepend(newItem);
  e.preventDefault();
  $('form').trigger('reset');
});
