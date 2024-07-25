let labels = [];
let data = [];

const ctx = document.getElementById('sensorPeso').getContext('2d');
const sensorPeso = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Peso (kg)',
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Tiempo'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Peso (kg)'
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});

async function getSensorData() {
    try {
        const response = await fetch('/sensor_data');
        const data = await response.json();
        return data.weight;
    } catch (error) {
        console.error('Error al obtener datos del sensor:', error);
        return null;
    }
}

function calculateFunction(data) {
    const sum = data.reduce((acc, value) => acc + value, 0);
    const average = sum / data.length;
    console.log('Promedio del peso:', average);
    return average;
}

setInterval(async () => {
    const currentTime = new Date().toLocaleTimeString();
    const newWeight = await getSensorData();

    if (newWeight !== null) {
        labels.push(currentTime);
        data.push(newWeight);

        if (labels.length > 20) {
            labels.shift();
            data.shift();
        }

        sensorPeso.update();

        calculateFunction(data);
    }
}, 1000);