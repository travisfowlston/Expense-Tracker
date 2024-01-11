const helpers = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  sumByCategory: (category, expenses) => {
    let sum = 0;
    if (!expenses) {
      return sum;
    }
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].category === category) {
        sum += expenses[i].amount;
      }
    }
    return sum;
  },
};

// Calculate the sum of expenses by category

module.exports = helpers;
