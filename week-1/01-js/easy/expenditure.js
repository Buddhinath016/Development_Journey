/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let newTransactions = [];
  newTransactions.push({category : transactions[0].category, price : transactions[0].price});
  transactions.shift();
  let size = transactions.length;
  let count = 0;

  for(let i=0;i<size;i++){
    for(let j=0;j<newTransactions.length;j++){
      if(transactions[0].category == newTransactions[j].category){
        newTransactions[j].price += transactions[0].price;
        transactions.shift();
        count = 1;
      }
    }
    if(count == 0){
      newTransactions.push({category : transactions[0].category, price : transactions[0].price});
      transactions.shift();
    }
    else{
      count = 0;
    }
  }

  return newTransactions;
}
  
const transactions = [
  { itemName: 'Laptop', category: 'Electronics', price: 1200, timestamp: '2023-07-18T10:30:00Z' },
  { itemName: 'Headphones', category: 'Electronics', price: 200, timestamp: '2023-07-19T12:45:00Z' },
  { itemName: 'Coffee', category: 'Food', price: 5, timestamp: '2023-07-20T08:00:00Z' },
  { itemName: 'Book', category: 'Books', price: 15, timestamp: '2023-07-21T14:00:00Z' },
  { itemName: 'Sandwich', category: 'Food', price: 7, timestamp: '2023-07-21T13:30:00Z' },
  { itemName: 'Monitor', category: 'Electronics', price: 300, timestamp: '2023-07-22T16:00:00Z' },
  { itemName: 'Pen', category: 'Stationery', price: 2, timestamp: '2023-07-23T09:00:00Z' },
  { itemName: 'Notebook', category: 'Stationery', price: 5, timestamp: '2023-07-23T09:10:00Z' },
  { itemName: 'Pizza', category: 'Food', price: 12, timestamp: '2023-07-24T19:00:00Z' },
  { itemName: 'Movie Ticket', category: 'Entertainment', price: 10, timestamp: '2023-07-24T21:00:00Z' },
];

let result = calculateTotalSpentByCategory(transactions);
console.log(result);
  
  // module.exports = calculateTotalSpentByCategory;