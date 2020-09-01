let ctx = document.getElementById('mainChart').getContext('2d');

var chartColors = {
    red: 'rgb(255, 99, 132)',
    blue: 'rgb(54, 162, 235)'
  };

let data = [];
let labels = [];
let backgroundColor = []

let numbers = 100;

for(let i = 0; i < numbers; i++){ 
    data.push(Math.floor(Math.random()*Math.floor(100)))
    labels.push('')
    backgroundColor.push(chartColors.blue)
}

let mainChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            label: 'Random Numbers',
            backgroundColor,
            data,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

let reset = () => {
    data = []
    labels = []
    for(let i = 0; i < numbers; i++){
        data.push(Math.floor(Math.random()*Math.floor(500)))
        labels.push('')
    }
    mainChart.data.datasets[0].data = data
    mainChart.update()
}

let bubble = () => {
    let data = mainChart.data.datasets[0].data;
    bubble_sort(data)
}

let bubble_sort = (a, cb) => {
    let swapp = true;
    let n = a.length + 1
    let x = a;
    console.log('Sorting')
    setInterval(() => {
        if(!swapp) return
        swapp = false;
        for(let i = 0; i < n; i++) {
            if(x[i] < x[i - 1]){
                let temp = x[i]
                x[i] = x[i - 1]
                x[i - 1] = temp
                swapp = true
            }
        }
        mainChart.data.datasets[0].data = x
        mainChart.update(0)
        n--;
    }, 100)
}