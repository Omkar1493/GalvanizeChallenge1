const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');
const expect = require('chai').expect;
const LineItem = require('../src/LineItem');

describe('Cart', () => {

    it('should initialize empty cart', () => {
        const cart = new Cart()
        console.log("our cart", cart)
        expect(cart.getTotalItems().length).to.deep.equal(0)
    })

   it('count total items in the cart', () => {
       const cart = new Cart();
       const watch = new Item('Titan', 500.00);
       const lineItem = new LineItem(watch,1);
       cart.addItem(lineItem)
       console.log(cart);
       expect(cart.getTotalItems().length).to.deep.equal(1)
    })

   it('increase the quantity of a line item by 1.', () => {
      const cart = new Cart();
      const watch = new Item('Rolex', 1000.00);
      const lineItem = new LineItem(watch,1);
      cart.addItem(lineItem)

      cart.increaseQuantity(lineItem);
      console.log(cart)
      expect(lineItem.getQty).to.deep.equal(2)
  })

     it('decrease the quantity of a line item by 1.', () => {
      const cart = new Cart();
      const watch = new Item('Rolex', 1000.00);
      const lineItem = new LineItem(watch,3);
      console.log(lineItem)
      cart.decreaseQuantity(lineItem);
      expect(lineItem.getQty).to.deep.equal(2)
  })


  
     it('check for empty cart after qty is zero', () => {
      const cart = new Cart();
      const watch = new Item('Rolex', 1000.00);
      const lineItem = new LineItem(watch,1);
      cart.decreaseQuantity(lineItem);
      expect(cart.getTotalItems.length).to.deep.equal(0)
  })

   
     it('Calculate single item price', () => {
      const cart = new Cart();
      const watch = new Item('Rolex', 1000.00);
      const lineItem = new LineItem(watch,7);
      
      expect(cart.calculateItemPrice(lineItem)).to.deep.equal(7000)
  })

  
     it('Calculate discounted single item price', () => {
      const cart = new Cart();
      const watch = new Item('Rolex', 1000.00,200);
      const lineItem = new LineItem(watch,7);
      
      expect(cart.calculateDiscountedItemPrice(lineItem)).to.deep.equal(5600)
  })


     it('Calculate total price', () => {
      const cart = new Cart();
      const watch = new Item('Rolex', 1000.00,50);
      const watch1 = new Item('Tissot', 600.00,100);

      const lineItem = new LineItem(watch,7);
      const lineItem1 = new LineItem(watch1,4);

      cart.addItem(lineItem)
      cart.addItem(lineItem1)
      
      expect(cart.totalPrice()).to.deep.equal(9400)
  })



   it('Calculate total price', () => {
      const cart = new Cart();
      const watch = new Item('Hublo', 2000.00,200);
      const watch1 = new Item('Tag Huer', 500.00,100);

      const lineItem = new LineItem(watch,5);
      const lineItem1 = new LineItem(watch1,5);

      cart.addItem(lineItem)
      cart.addItem(lineItem1)
      
      expect(cart.totalPrice()).to.deep.equal(12500)
  })


})






