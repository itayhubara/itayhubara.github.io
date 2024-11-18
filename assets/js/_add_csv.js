async function loadCSV() {
    try {
        const response = await fetch('/assets/data.csv');
        if (!response.ok) throw new Error('Failed to fetch CSV');
        const csvText = await response.text();
        const rows = csvText.split('\n').map(row => row.split(','));

        const container = document.getElementById('csv-container');
        const table = document.createElement('table');
        table.border = "1";

        rows.forEach((row, index) => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const cellElement = document.createElement(index === 0 ? 'th' : 'td');
                cellElement.textContent = cell.trim();
                tr.appendChild(cellElement);
            });
            table.appendChild(tr);
        });

        container.appendChild(table);
    } catch (error) {
        console.error('Error loading CSV:', error);
        document.getElementById('csv-container').textContent = 'Error loading CSV file.';
    }
}

window.onload = loadCSV;
