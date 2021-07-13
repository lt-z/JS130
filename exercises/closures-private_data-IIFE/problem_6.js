"use strict";

let ItemCreator = (function() {
  function createSKU(name, category) {
    return name.replace(/\s/g, '').slice(0, 3).toUpperCase()
    .concat(category.slice(0, 2).toUpperCase());
  }

  function validName(name) {
    return name.replace(/s/g, '').length >= 5;
  }

  function validCategory(category) {
    return !category.match(/\s/g) && category.length >= 5;
  }

  function validQuantity(quantity) {
    return quantity !== undefined;
  }

  return function(name, category, quantity) {
    if (validName(name) && validCategory(category) && validQuantity(quantity)) {
      this.sku = createSKU(name, category);
      this.name = name;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  }
})();

let ItemManager = {
  items: [],

  getCurrentItem(sku) {
    return this.items.filter(item => item.sku === sku)[0];
  },

  update(sku, object) {
    let currentItem = this.getCurrentItem(sku);
    for (let prop in object) {
      currentItem[prop] = object[prop];
    }
  },

  delete(sku) {
    let currentItem = this.getCurrentItem(sku);
    this.items.splice(this.items.indexOf(currentItem), 1);
  },

  create(name, category, quantity) {
    let item = new ItemCreator(name, category, quantity);
    if (!item.hasOwnProperty('notValid')) {
      this.items.push(item);
    } else {
      return false;
    }
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(sku) {
    return (() => {
      let currentItem = this.items.getCurrentItem(sku);

      return {
        itemInfo() {
        for (let prop in currentItem) {
          console.log(`${prop}: ${currentItem[prop]}`);
        }
      }
    }
    })();
  },

  reportInStock() {
    let inStock = this.items.inStock();
    return inStock.map(item => item.name).join(', ');
  }
}
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);


ReportManager.init(ItemManager);
// console.log(ReportManager);
// logs soccer ball,football,kitchen pot
console.log(ReportManager.reportInStock());

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10