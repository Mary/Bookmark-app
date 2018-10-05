/* global store, api, $ */

// eslint-disable-next-line no-unused-vars
const bookmarklist = (function(){

  function generateError(err) {
    let message = '';
    if (err.responseJSON && err.responseJSON.message) {
      message = err.responseJSON.message;
    } else {
      message = `${err.code} Server Error`;
    }

    return `
      <section class="error-content">
        <button id="cancel-error">X</button>
        <p>${message}</p>
      </section>
    `;
  }


  function generateItemElement(item) {
    if (!item.expanded) {
    return `
    <li class="bookmark-id" data-item-id="${item.id}">
    <p>${item.title}</p>
    <p>Rating: ${item.rating}</p>
    </li>`
    }
    else{
   `<li class="bookmark-id" data-item-id="${item.id}">
    <p>${item.title}</p>
    <p>Rating: ${item.rating}</p>
    <p>Link to Site: <a href="${item.url}>${item.url}</a></p>
    <p>Long Description: <br>
    ${item.desc}</p>
    <button class="delete-bookmark-button"><span class="button-label">
    DELETE</span></button>
    </li>`;
  }};


  function generateBookmarkItemsString(bookmarklist) {
    const items = bookmarklist.map((item) => generateItemElement(item));
    return items.join('');
  }








    function render() {

      if (store.error) {
        const el = generateError(store.error);
        $('.error-container').html(el);
      } else {
        $('.error-container').empty();
      }

      let items = store.items;

      $('.bookmark-form').hide();
      const btn = document.getElementById('showhide');
      btn.innerText = 'ADD ITEM';

      const bookmarklistItemsString = generateBookmarkItemsString(items);
      $('.bookmark-list').html(bookmarklistItemsString);
    }
    
    function getItemIdFromElement(item) {
      return $(item).closest('bookmark-id').data('item-id');
    }


  function handleDeleteItemClicked() {
    $('.bookmark-list').on('click', '.delete-bookmark-button', event => {
      const id = getItemIdFromElement(event.currentTarget);

      api.deleteItem(id, () => {
        store.findAndDelete(id);
        render();
      });
    });
  }
  function handleCloseError() {
    $('.error-container').on('click', '#cancel-error', () => {
      store.setError(null);
      render();
    });
  }



  function bindEventListeners() {
    generateBookmarkItemsString();
    handleDeleteItemClicked();
    handleCloseError();
  }


/////////////////////add function that changes item.expanded when li is clicked
    return {
      render: render,
     bindEventListeners: bindEventListeners,
    };
  }());
  