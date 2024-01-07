document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#expense-name').value.trim();
  const needed_funding = document
    .querySelector('#amount')
    .value.trim();
  const description = document.querySelector('#description').value.trim();

  if (expense_name && category && amount && date) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ expense_name, category, amount, date }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create report');
    }
  }
};
