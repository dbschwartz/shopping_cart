// Initialize Cart Service

angular
  .module('app')
  .service('cartService', cartService);

  cartService.$inject = ['teaService'];

  function cartService(teaService) {
    var cart = [];
    return {
      addTea: function(id, quantity) {
        var tea = teaService.getTea(id);
        tea.quantity = quantity;
        tea.subtotal =  tea.price/100 * quantity;
        cart.push(tea);
        return cart;
      }
    };
  }