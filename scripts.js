document.getElementById('crime-report-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const crimeType = document.getElementById('crime-type').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const isAnonymous = document.getElementById('anonymous').checked;

    // Create a new report object
    const report = {
        crimeType,
        location,
        description,
        isAnonymous,
        dateReported: new Date().toLocaleString()
    };

    // Store report in local storage (for simplicity, in a real app, this would be sent to a server)
    let reports = JSON.parse(localStorage.getItem('crimeReports')) || [];
    reports.push(report);
    localStorage.setItem('crimeReports', JSON.stringify(reports));

    // Redirect to reports page
    window.location.href = 'reports.html';
});

// Display reported crimes
window.addEventListener('DOMContentLoaded', () => {
    const reportsList = document.getElementById('crime-reports');
    const reports = JSON.parse(localStorage.getItem('crimeReports')) || [];

    reports.forEach(report => {
        const reportItem = document.createElement('li');
        reportItem.innerHTML = `
            <strong>${report.crimeType}</strong> at ${report.location} - ${report.dateReported}<br>
            <em>${report.description}</em>
        `;
        reportsList.appendChild(reportItem);
    });
});
