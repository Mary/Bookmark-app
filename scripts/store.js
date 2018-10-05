// eslint-disable-next-line no-unused-vars
const store = (function(){

    const addItem = function(item) {
      this.items.push(item);
    };
  
    const findById = function(id) {
      return this.items.find(item => item.id === id);
    };
  
    const findAndDelete = function(id) {
      this.items = this.items.filter(item => item.id !== id);
    };

    const toggleExpandedKey = function(id) {
      const obj = this.items.find(item => item.id === id);
      obj.expanded = !obj.expanded;
    };

    const addExpandedKey = function() {
      this.items.map(item => item.expanded = false);
    };
  
    
    const toggleAddingItem = function(){
        this.addingItem = !this.addingItem
    };


      const setError = function(error) {
        this.error = error;
      };
    


      return{
          items: [],
          addingItem: false, //add button will flip this and call the render //render if addingItem= true <html><form adding>
          currentRatingSelection: null, //consider during render if not null filter with only given bookmarks if currentRatingSelection 
        //hideMinRatings:
          toggleExpandedKey,
          addExpandedKey,
          addItem,
          setError,
          findById,
          findAndDelete,
          toggleAddingItem,
      }


    //   const store= {
    //     Bookmarks: [ {id: id, title: "School Schedule", url: "school.com" , desc: "Helpful", rate: 4, expanded: false},
    //              {id: id, title: "News Article", url: "theonion.com" desc: "Funny", rate: 5, expanded: true} ]
    
    // addingItem: boolean 
    
    // currentRatingSelected: 1-5
    // errMessageTitle: 'You must include a Title for your Bookmark'
    // errMessageDesc: 'You must include a Description of your Bookmark'
    // errMessageURL: 'You must include a URL for your Bookmark'
    // ]