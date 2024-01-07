document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});
const newFormHandler = async (event) => {
  event.preventDefault();

  const expense_name = document.querySelector('#expense-name').value.trim();
  const amount = document
    .querySelector('#amount')
    .value.trim();
  const category = document.querySelector('#category').value.trim();

  if (expense_name && category && amount) {
    const response = await fetch(`/api/expenses`, {
      method: 'POST',
      body: JSON.stringify({ expense_name, category, amount }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create the report!');
    }
  }
};
