// Initiate the modal
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

// Initiate the option dropdown
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var options = {};
  var instances = M.FormSelect.init(elems, options);
});

// Auto-resize the textarea
document.getElementById('textarea1').style.height = 'auto';
document.getElementById('textarea1').style.height =
  document.getElementById('textarea1').scrollHeight + 'px';

const newFormHandler = async (event) => {
  event.preventDefault();

  const expense_name = document.querySelector('#icon_prefix').value.trim();
  const amount = document.querySelector('#amount').value.trim();
  const category = document.querySelector('select').value.trim();
  const description = document.querySelector('#textarea1').value.trim();

  if (expense_name && category && amount && description) {
    const response = await fetch(`/api/expenses`, {
      method: 'POST',
      body: JSON.stringify({ expense_name, category, amount, description }),
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/expenses/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('#createExpense')
  .addEventListener('click', newFormHandler);

document
  .querySelector('.report-list')
  .addEventListener('click', delButtonHandler);
