/* global shoppingList, store */

$(document).ready(function() {
    bookmarklist.bindEventListeners();
    bookmarklist.render();

      api.getItems((items) => {
      items.forEach((item) => store.addItem(item));
      store.addExpandedKey();
      bookmarklist.render();
      console.log(store.items);
    });
  
    
  });