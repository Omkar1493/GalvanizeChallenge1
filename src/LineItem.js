
const item = require('../src/Item');

class LineItem {
    constructor(item,qty) {
        this.item = item;
        this.qty = qty;
    }

    get getQty() {
        return this.qty;
    }

}
  module.exports = LineItem;
