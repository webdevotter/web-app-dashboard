let trafficChart = document.getElementById('traffic-chart').getContext('2d');
let dailyChart = document.getElementById('daily-chart').getContext('2d');
let mobileChart = document.getElementById('mobile-chart').getContext('2d');

let lineGraph = new Chart(trafficChart, {
  type: 'line',
  data: {
    labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
    datasets: [{
      data: [
        750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500
      ],
      backgroundColor: 'rgba(213, 214, 236, .3)',
      borderWidth: 1,
    }]
  },
  options: {
    backgroundColor: 'rgba(35, 30, 30, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});
let barChart = new Chart(dailyChart, {
  type: 'bar',
  data: {
    labels: ['S','M','T','W','T','F','S'],
    datasets: [{
      data: [
        75, 120, 175, 125, 225, 200, 100
      ],
      backgroundColor: 'rgba(116, 119, 191, 1)',
      borderWidth: 1,
    }]
  },
  options: {
    backgroundColor: 'rgba(35, 30, 30, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});


let doughnutChart = new Chart(mobileChart, {
  type: 'doughnut',
  data: {
    labels: ['Desktop','Tablet','Phones'],
    datasets: [{
      data: [
        60, 20, 20
      ],
      backgroundColor: [ 
      'rgba(116, 119, 191, 1)',
      'rgba(129, 201, 143, 1)',
      'rgba(81, 182, 200, 1)'],
      borderWidth: 0,
    }]
  },
  options: {
    backgroundColor: 'rgba(35, 30, 30, .5)',
    fill: false,
    aspectRatio: 2.5,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        position: 'right',
        display: true
      }
    }
  }
});


