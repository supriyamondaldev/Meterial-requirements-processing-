// Getting the form and table elements
const materialForm = document.getElementById('materialForm');
const materialTable = document.querySelector('#materialTable tbody');

// Event listener for form submission
materialForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const materialName = document.getElementById('materialName').value;
    const materialQuantity = document.getElementById('materialQuantity').value;
    const materialUnit = document.getElementById('materialUnit').value;

    // Add material to the table
    addMaterialToTable(materialName, materialQuantity, materialUnit);

    // Reset form
    materialForm.reset();
});

// Function to add material to the table
function addMaterialToTable(name, quantity, unit) {
    // Create a new row
    const row = document.createElement('tr');

    // Create table cells
    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const quantityCell = document.createElement('td');
    quantityCell.textContent = quantity;

    const unitCell = document.createElement('td');
    unitCell.textContent = unit;

    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.classList.add('action-btn');
    deleteBtn.addEventListener('click', function () {
        row.remove();
    });

    actionCell.appendChild(deleteBtn);

    // Append cells to the row
    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    row.appendChild(unitCell);
    row.appendChild(actionCell);

    // Append row to the table body
    materialTable.appendChild(row);
}
