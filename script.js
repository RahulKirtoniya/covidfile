// Fetch COVID-19 data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const dates = data.dates;
        const cases = data.cases;
        
        // Create a line chart using Chart.js
        const ctx = document.getElementById('chart-container').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'COVID-19 Cases',
                    data: cases,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day',
                        },
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Cases'
                        }
                    }
                }
            }
        });
    });
