document.body.onload = function () {
  document.getElementById("calcintro").style.marginTop = document.getElementById("bodyheader").offsetHeight + 25 + 'px';
};  
var ctx = document.getElementById("myChart");
var chartObj = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
      datasets: [
        {
          data: [1.6, 4.0, 11.3, 19.9, 26.4, 30.3, 30.8, 29.5, 25.8, 19.0, 10.1, 3.3],
		  borderColor: ["rgba(255, 0, 0)"],
		  backgroundColor: "rgba(255, 0, 0, 0.5)",
		  pointRadius: 3,
          fill: false,
          label: "Avg High Celsius"
        },
        {
          data: [-9.4, -6.9, -0.6, 7.2, 13.2, 18.2, 21.6, 20.4, 14.2, 7.3, -0.4, -6.9],
		  borderColor: ["rgba(0, 0, 255)"],
		  backgroundColor: "rgba(0, 0, 255, 0.5)",
		  pointRadius: 3,
          fill: false,
          label: "Avg Low Celsius"
        },
        {
          data: [3, 5, 12, 21, 32, 32, 33, 32, 30, 21, 14, 4],
		  borderColor: ["rgba(139, 0, 0)"],
		  backgroundColor: "rgba(139, 0, 0, 0.5)",
		  pointRadius: 3,
          fill: false,
          label: "Record High Celsius"
        },
        {
          data: [-11, -7, -3, 3, 12, 16, 20, 18, 13, 6, -1, -8],
		  borderColor: ["rgba(0, 0, 139)"],
		  backgroundColor: "rgba(0, 0, 139, 0.5)",
		  pointRadius: 3,
          fill: false,
          label: "Record low Celsius"
        },
        {
          data: [4.8, 2.2, 4.2, 2.64, 2.87, 7.07, 17.56, 18.22, 4.87, 1.88, 0.60, 0.23],
		  borderColor: ["rgba(0, 255, 0)"],
		  backgroundColor: "rgba(0, 255, 0, 0.5)",
          pointStyle: 'triangle',
          pointRadius: 5,
          label: "Avg Precip cm"
        },
        {
          data: [4.8, 2.2, 4.2, 0, 0, 0, 0,0, 0, 0, 0, 1.7],
		  borderColor: ["rgba(128, 128, 128)"],
		  backgroundColor: "rgba(128, 128, 128, 0.5)",
		  pointStyle: 'triangle',
		  pointRadius: 5,
          label: "Avg Snowfall cm"
        }
      ],
    },
  	options: {
    	title: {
			display: true,
			text: "Annual Weather Conditions for Beijing, China",
			fontSize: 24
		},
		legend: {
			display: true,
			position: 'right',
            labels: {
				fontFamily: 'Helvetica',
				fontSize: 12
            }
		},
		tooltips: {
			intersect: false,
			mode: 'index'
		},
    	cales: {
        	yAxes: [{
        		ticks: {
            		beginAtZero:true
        		}
    		}]
    	},
    maintainAspectRatio: false,
    responsive: true,
      }
  });