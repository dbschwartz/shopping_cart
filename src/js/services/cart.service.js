// Initialize Cart Service

angular
  .module('app')
  .service('cartService', cartService);

  cartService.$inject = ['teaService'];

  function cartService(teaService) {
    var cart = [];
    return {
      addTea: function(id, quantity) {
        // var selectedItem = ( some for loop / filter that finds the item )
        
        // if ( selectedItem ) {
        // then add to quantity
        // else add new item with quantity
        
        if(quantity===undefined){
          quantity=1;
        }else{
          quantity = parseInt(quantity);  
        }
    
        for(var i = 0; i<cart.length; i++){
          if(cart[i]._id===id){
            cart[i].quantity = cart[i].quantity + quantity;
            cart[i].subtotal =  cart[i].price * cart[i].quantity;
            return cart;
          }
        }
        var tea = teaService.getTea(id);
        tea.quantity = quantity;
        tea.subtotal =  tea.price * quantity;
        cart.push(tea);
        return cart;
      },
      getCart: function(){
        return cart
      }
    };
  }