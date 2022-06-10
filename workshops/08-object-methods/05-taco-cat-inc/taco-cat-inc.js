let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  currentInventory: function () {
    let total = 0;
    for (let keys in this) {
      for (let key in this[keys]) {
        total += this[keys][key].cost * this[keys][key].quantity;
      }
    }
    return total;
  },

  sale: function (odrs) {
    if (Object.keys(odrs).length === 0) return 0;
    let totalSale = 0;
    for (let keys in odrs) {
      let item = odrs[keys];
      let costOfItem = this[keys][item].cost;
      this[keys][item].quantity -= 1;

      totalSale += costOfItem;
    }
    this.cash += totalSale;

    return totalSale;
  },

  cash: 0,
};

// YOUR CODE BELOW
// let order = {
//   gourmetShell: "hard treat shell",
//   gourmetFishFilling: "salmon",
// };
// tacoCatInc.sale(order);
// console.log(tacoCatInc.cash);
