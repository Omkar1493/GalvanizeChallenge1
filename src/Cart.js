const Item = require('./Item');
const LineItem = require('./LineItem');

class Cart {
    constructor() {
        this.shoppingCart = [];
        
    }
    addItem(lineItem){
        console.log(lineItem)
        this.shoppingCart.push(lineItem);
     }

    getTotalItems(){
           return this.shoppingCart;
       }

    increaseQuantity(lineItem){
        lineItem.qty+=1
    }
    decreaseQuantity(lineItem){
        lineItem.qty-=1
        if(lineItem.qty==0){
            delete this.shoppingCart[lineItem]
        }
    }
    calculateItemPrice(lineItem){
        return lineItem.item.price*lineItem.qty;
    }

    calculateDiscountedItemPrice(lineItem){
        return (lineItem.item.price-lineItem.item.discountprice)*lineItem.qty
    }

    totalPrice(){
        let array = [];
        this.shoppingCart.map((singleitem) => {
           array.push(singleitem.item.price*singleitem.qty)
       })
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return array.reduce(reducer)
        }
    
    totalDiscountedPrice(){
        let array = [];
        this.shoppingCart.map((singleitem) => {
           array.push((singleitem.item.price*-singleitem.item.discountprice)*singleitem.qty)
       })
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return array.reduce(reducer);
        }
}
   module.exports = Cart;