// Initialize Cart Service

angular
  .module('app')
  .service('cartService', cartService);

  cartService.$inject = ['teaService'];

  function cartService(teaService) {
    var cart = {
        list: [],
        total: 0
    };
    return {
      getCart: function(){
        return cart
      },
      getTotal: function(){
        var total;
        cart.list.forEach(function(teaObject){
          total+=subtotal;
        })
        return total;
      },
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
          if(cart.list[i]._id===id){
            cart.list[i].quantity = cart.list[i].quantity + quantity;
            cart.list[i].subtotal =  cart.list[i].price * cart.list[i].quantity;
            return cart;
          }
        }
        var tea = teaService.getTea(id);
        tea.quantity = quantity;
        tea.subtotal =  tea.price * quantity;
        cart.list.push(tea);
        cart.total += tea.subtotal;
        return cart;
      },
      editTea: function(id, quantity){
        console.log("working");
        var index;
        for(var i = 0; i<cart.list.length; i++){
          if(cart.list[i]._id===id){
            index=i;
            break;
          }
        };
        cart.list[index].quantity = quantity;
        cart.list[index].subtotal = cart.list[index].price * quantity;
        cartService.getTotal()

      },
      deleteTea: function(id) {
        var index;
        for(var i = 0; i<cart.list.length; i++){
          if(cart.list[i]._id===id){
            index=i;
            break;
          }
        };
        cart.total -= cart.list[index].subtotal;
        cart.list.splice(index, 1);
        console.log(cart);
        return cart;
    }
  };
}