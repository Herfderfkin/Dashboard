import { Component,OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as Papa  from 'papaparse';
import * as $ from 'jquery';
import { elementProperty } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CPD Driver Performance Dashboard';
  LineChart: any =  [];

  ngOnInit()
  {
    var colors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)',
      white: 'rgb(255,255,255)',
    };

    function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
      if (typeof stroke == "undefined" ) {
        stroke = true;
      }
      if (typeof radius === "undefined") {
        radius = 5;
      }
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      if (stroke) {
        ctx.stroke();
      }
      if (fill) {
        ctx.fill();
      }        
    };

    Chart.plugins.register({
			afterDatasetsDraw: function(chart) {
				var ctx = chart.ctx;

				chart.data.datasets.forEach(function(dataset, i) {
					var meta = chart.getDatasetMeta(i);
					if (!meta.hidden) {
						meta.data.forEach(function(element, index) {
							// Draw the text in white, with the specified font
              ctx.fillStyle = 'rgb(255,255,255)';

							var fontSize = 12;
							var fontStyle = 'normal';
							var fontFamily = 'Segoe UI Semilight';
							ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

							// Just naively convert to string for now
							var dataString = dataset.data[index].toString();

							// Make sure alignment settings are correct
							ctx.textAlign = 'center';
							ctx.textBaseline = 'middle';

              var padding = 5;                       
              var positionx = element._model.x;
              var positiony = element._model.y;
              var posx = positionx - fontSize*1.2;
              var posy = positiony - fontSize*2.1;
              var rectx = fontSize*2.4;
              var recty = fontSize*1.2;
              ctx.fillStyle = 'rgba(0,0,0,0.7)';
              roundRect(ctx, posx, posy, rectx, recty, padding/2, true, true);
              //ctx.fillRect(posx, posy, rectx, recty);

              ctx.fillStyle = 'rgb(255,255,255)';
              ctx.fillText(dataString, positionx, positiony - fontSize - padding);

              ctx.fillStyle = 'rgba(0,0,0,0.8)';
              var tri1x = (positionx - padding);
              var tri1y = (positiony - padding*2.4);
              var tri2x = (positionx + padding);
              var tri2y = (positiony - padding*2.4);
              var tri3x = (positionx);
              var tri3y = (positiony - padding);
              ctx.beginPath();
              ctx.moveTo(tri1x,tri1y);
              ctx.lineTo(tri2x,tri2y);
              ctx.lineTo(tri3x,tri3y);
              ctx.fill();
              
						});
					}
				});
			}
		});

    var dataFirstSwitch = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],      
      datasets: [{
        label: 'Driver # 1',
				backgroundColor: colors.red,
				borderColor: colors.red,
				data: firstSwitch,
        fill: false,
        pointRadius: 6,
        pointHoverRadius: 12,
        pointHitRadius: 15,	
			}]
		}

    var firstSwitchChart = new Chart('firstSwitch', {
    type: 'line',
    data: dataFirstSwitch,
		options: {
      responsive: true,
			// title: {
			// 	display: true,
      //   text: '1st Switch Times',
      //   fontColor: 'white',
      //   fontSize: 12,
      // },       
      legend: {
        display: true,
        labels: {
          fontColor: 'white',
          fontSize: 12,
        }
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true,
			},
      scales: {
				xAxes: [{
          ticks: {
            fontColor: "white",
            fontSize: 12,
            autoSkip: false,
          },
          gridLines: {
            display: true,
            color: "white",
            lineWidth: .5,
          },
          display: true,
					scaleLabel: {
						display: true,
            labelString: 'Driver',
            fontColor: 'white',
            fontSize: 12,
					}
				}],
				yAxes: [{
          ticks: {
            fontColor: "white",
            fontSize: 12,
            beginAtZero: true,
          },
          gridLines: {
            display: true,
            color: "white",
            lineWidth: .5,
          },          
          display: true,
					scaleLabel: {
						display: true,
						labelString: 'Time (seconds)',
            fontColor: 'white',
            fontSize: 12,
          },
				}]
			}
    }    
  })

  var dataSustainedSwitch = {
    labels: drivers,      
    datasets: [{
      label: 'Driver # 1',
      backgroundColor: colors.red,
      borderColor: colors.red,
      data: sustainedSwitch,
      fill: false,
      pointRadius: 6,
      pointHoverRadius: 12,
      pointHitRadius: 15,    
    }]
  }

  var sustainedSwitchChart = new Chart('sustainedSwitch', {
  type: 'line',
  data: dataSustainedSwitch,
  options: {
    responsive: true,
    // title: {
    // 	display: true,
    //   text: '1st Switch Times',
    //   fontColor: 'white',
    //   fontSize: 12,
    // },
    legend: {
      display: true,
      labels: {
        fontColor: 'white',
        fontSize: 12,
      }
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 12,
          autoSkip: false,         
        },
        gridLines: {
          display: true,
          color: "white",
          lineWidth: .5,
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Driver',
          fontColor: 'white',
          fontSize: 12,
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 12,
          beginAtZero: true,
        },
        gridLines: {
          display: true,
          color: "white",
          lineWidth: .5,
        },          
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Time (seconds)',
          fontColor: 'white',
          fontSize: 12,
        },
      }]
    }
  }    
});

var dataMaxSwitch = {
  labels: drivers,      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: colors.red,
    borderColor: colors.red,
    data: maxSwitch,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,
  }]
};

var maxSwitchChart = new Chart('maxSwitch', {
type: 'line',
data: dataMaxSwitch,
options: {
  responsive: true,
  // title: {
  // 	display: true,
  //   text: '1st Switch Times',
  //   fontColor: 'white',
  //   fontSize: 12,
  // },       
  legend: {
    display: true,
    labels: {
      fontColor: 'white',
      fontSize: 12,
    }
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    xAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        autoSkip: false,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Driver',
        fontColor: 'white',
        fontSize: 12,
      }
    }],
    yAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        beginAtZero: true,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },          
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Time (seconds)',
        fontColor: 'white',
        fontSize: 12,
      },
    }]
  }
}    
});

var dataFirstOpen = {
  labels: drivers,      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
    data: firstOpen,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,
  }]
};

var firstOpenChart = new Chart('firstOpen', {
type: 'line',
data: dataFirstOpen,
options: {
  responsive: true,
  // title: {
  // 	display: true,
  //   text: '1st Switch Times',
  //   fontColor: 'white',
  //   fontSize: 12,
  // },       
  legend: {
    display: true,
    labels: {
      fontColor: 'white',
      fontSize: 12,
    }
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    xAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        autoSkip: false,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Driver',
        fontColor: 'white',
        fontSize: 12,
      }
    }],
    yAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        beginAtZero: true,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },          
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Time (seconds)',
        fontColor: 'white',
        fontSize: 12,
      },
    }]
  }
}    
});

var dataSustainedOpen = {
  labels: drivers,      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
    data: sustainedOpen,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,
  }]
};

var sustainedOpenChart = new Chart('sustainedOpen', {
type: 'line',
data: dataSustainedOpen,
options: {
  responsive: true,
  // title: {
  // 	display: true,
  //   text: '1st Switch Times',
  //   fontColor: 'white',
  //   fontSize: 12,
  // },       
  legend: {
    display: true,
    labels: {
      fontColor: 'white',
      fontSize: 12,
    }
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    xAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        autoSkip: false,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Driver',
        fontColor: 'white',
        fontSize: 12,
      }
    }],
    yAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        beginAtZero: true,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },          
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Time (seconds)',
        fontColor: 'white',
        fontSize: 12,
      },
    }]
  }
}    
});

var dataMaxOpen = {
  labels: drivers,      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
    data: maxOpen,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,
  }]
};

var maxOpenChart = new Chart('maxOpen', {
type: 'line',
data: dataMaxOpen,
options: {
  responsive: true,
  // title: {
  // 	display: true,
  //   text: '1st Switch Times',
  //   fontColor: 'white',
  //   fontSize: 12,
  // },       
  legend: {
    display: true,
    labels: {
      fontColor: 'white',
      fontSize: 12,
    }
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    xAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        autoSkip: false,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Driver',
        fontColor: 'white',
        fontSize: 12,
      }
    }],
    yAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        beginAtZero: true,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },          
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Time (seconds)',
        fontColor: 'white',
        fontSize: 12,
      },
    }]
  }
}    
});

var dataFirstPrint = {
  labels: drivers,      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: colors.green,
    borderColor: colors.green,
    data: firstPrint,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,
  }]
};

var firstPrintChart = new Chart('firstPrint', {
type: 'line',
data: dataFirstPrint,
options: {
  responsive: true,
  // title: {
  // 	display: true,
  //   text: '1st Switch Times',
  //   fontColor: 'white',
  //   fontSize: 12,
  // },       
  legend: {
    display: true,
    labels: {
      fontColor: 'white',
      fontSize: 12,
    }
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    xAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        autoSkip: false,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Driver',
        fontColor: 'white',
        fontSize: 12,
      }
    }],
    yAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        beginAtZero: true,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },          
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Time (seconds)',
        fontColor: 'white',
        fontSize: 12,
      },
    }]
  }}});


var dataSustainedPrint = {
  labels: drivers,      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: colors.green,
    borderColor: colors.green,
    data: sustainedPrint,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,
  }]
};

var sustainedPrintChart = new Chart('sustainedPrint', {
type: 'line',
data: dataSustainedPrint,
options: {
  responsive: true,
  // title: {
  // 	display: true,
  //   text: '1st Switch Times',
  //   fontColor: 'white',
  //   fontSize: 12,
  // },       
  legend: {
    display: true,
    labels: {
      fontColor: 'white',
      fontSize: 12,
    }},
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    xAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        autoSkip: false,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Driver',
        fontColor: 'white',
        fontSize: 12,
      }}],
    yAxes: [{
      ticks: {
        fontColor: "white",
        fontSize: 12,
        beginAtZero: true,
      },
      gridLines: {
        display: true,
        color: "white",
        lineWidth: .5,
      },          
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Time (seconds)',
        fontColor: 'white',
        fontSize: 12,
      },
    }]
  }}});

  var dataMaxPrint = {
    labels: drivers,
    //'maxOpen','firstOpen','sustainedOpen','maxPrint','firstPrint','sustainedPrint'],
    datasets: [{
      label: 'Driver # 1',
      backgroundColor: colors.green,
      borderColor: colors.green,
      data: maxPrint,
        // maxOpen,firstOpen,sustainedOpen,maxPrint,firstPrint,sustainedPrint],
      fill: false,
      pointRadius: 6,
      pointHoverRadius: 12,
      pointHitRadius: 15,
    }]
  };

  var maxPrintChart = new Chart('maxPrint', {
  type: 'line',
  data: dataMaxPrint,
  options: {
    responsive: true,
    // title: {
    // 	display: true,
    //   text: '1st Switch Times',
    //   fontColor: 'white',
    //   fontSize: 12,
    // },       
    legend: {
      display: true,
      labels: {
        fontColor: 'white',
        fontSize: 12,
      }},
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 12,
          autoSkip: false,
        },
        gridLines: {
          display: true,
          color: "white",
          lineWidth: .5,
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Driver',
          fontColor: 'white',
          fontSize: 12,
        }}],
      yAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 12,
          beginAtZero: true,
        },
        gridLines: {
          display: true,
          color: "white",
          lineWidth: .5,
        },          
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Time (seconds)',
          fontColor: 'white',
          fontSize: 12,
        },
      }]
    }}    
  })


//Card resizing
$(".enlarge").click(function(event){
  var card = $( event.target ).closest( "#chartCard" );
  card.toggleClass( "col-lg-4" );
  card.toggleClass( "col-lg-10" );
  card.toggleClass( "enlarged" );
  var wait = setInterval(function() {
    if( !$(event.target).is(":animated") ) {
      clearInterval(wait);
      var new_position = $(card).offset();
      $('html, body').stop().animate({ scrollTop: new_position.top }, 100);
    }
  }, 150);
});

//Button click
$(document).ready(function(){
  $('html').delegate('button.UIDbutton','click', function() { 
      var id = this.id;
      $(this).siblings().removeClass("btn-primary")
      $(this).siblings().removeClass("btn-outline")
      $(this).siblings().addClass("btn-outline")
      $(this).removeClass("btn-outline")
      $(this).addClass("btn-primary")
      graphIt(database,id);
  });
});


//CSV Files processing


function handleFileSelect(evt) {
  var file = evt.target.files[0];
  parseData(file, callBack)
}

function parseData(file, callBack) {
Papa.parse(file, {
    download: false,
    dynamicTyping: true,      
    delimiter: "",	// auto-detect
    newline: "",	// auto-detect
    quoteChar: '"',
    header: true,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    skipEmptyLines: false,      
    complete: function(results) {
        callBack(results.data);
    }});
}


$(document).ready(function(){
$(".csv-file").change(handleFileSelect);
});

var firstSwitch = [];
var sustainedSwitch = [];
var maxSwitch = [];

var firstOpen = [];
var sustainedOpen = [];
var maxOpen = [];

var firstPrint = [];
var sustainedPrint =[];
var maxPrint = [];

var drivers = [];
var JenkinsBuild = [];

var UID = [];
var j = 0;
var database = [];
var UIDx;

function GetSortOrder(prop) {  
  return function(a, b) {  
      if (a[prop] > b[prop]) {  
          return 1;  
      } else if (a[prop] < b[prop]) {  
          return -1;  
      }  
      return 0;  
  }  
}

function callBack(data){
database = data;
console.log(data);
database.sort(GetSortOrder("DriverVer"));
for (j=0; j < data.length-1; j++) {
  var tag = data[j].Test_UID
  if (!UID.includes(tag)){
    UID.push(tag);
    UIDx = data[j].DriverType + ", " + data[j].PDL + ", " + data[j].OS + ", " + data[j].App + ", " + data[j].Complexity + ", " + data[j].RestartBwCycles + " Reboots, " + data[j].Config
    $("#combos").append("<button class=\"UIDbutton btn btn-outline\" id = \"" + tag + "\">" + UIDx + "</button>");
  }
}
for (j=0; j < data.length-1; j++) {
  if (data[j].Test_UID == UID[0]) {  
    //Event Filter
    if (data[j].Event == 'Switch') {
      maxSwitch.push(data[j].High);
      firstSwitch.push(data[j].First);
      sustainedSwitch.push(data[j].Sustained);
      JenkinsBuild.push(data[j].BuildTag);
      drivers.push([data[j].DriverVer, data[j].TestTime.split(" ")[0]]);
    }
    if (data[j].Event == 'Open') {
      maxOpen.push(data[j].High);
      firstOpen.push(data[j].First);
      sustainedOpen.push(data[j].Sustained);
    }
    if (data[j].Event == 'Print') {
      maxPrint.push(data[j].High);
      firstPrint.push(data[j].First);
      sustainedPrint.push(data[j].Sustained);
    }
    var charted = data[j].DriverType + ", " + data[j].PDL + ", " + data[j].OS + ", " + data[j].App + ", " + data[j].Complexity + ", " + data[j].RestartBwCycles + " Reboots, " + data[j].Config
  }
}

$("#charted").html(charted);

firstSwitchChart.data.datasets[0].data = firstSwitch;
firstSwitchChart.data.labels = drivers;
firstSwitchChart.update();

sustainedSwitchChart.data.datasets[0].data = sustainedSwitch;
sustainedSwitchChart.data.labels = drivers;
sustainedSwitchChart.update();

maxSwitchChart.data.datasets[0].data = maxSwitch;
maxSwitchChart.data.labels = drivers;
maxSwitchChart.update();

firstOpenChart.data.datasets[0].data = firstOpen;
firstOpenChart.data.labels = drivers;
firstOpenChart.update();

sustainedOpenChart.data.datasets[0].data = sustainedOpen;
sustainedOpenChart.data.labels = drivers;
sustainedOpenChart.update();

maxOpenChart.data.datasets[0].data = maxOpen;
maxOpenChart.data.labels = drivers;
maxOpenChart.update();

firstPrintChart.data.datasets[0].data = firstPrint;
firstPrintChart.data.labels = drivers;
firstPrintChart.update();

sustainedPrintChart.data.datasets[0].data = sustainedPrint;
sustainedPrintChart.data.labels = drivers;
sustainedPrintChart.update();

maxPrintChart.data.datasets[0].data = maxPrint;
maxPrintChart.data.labels = drivers;
maxPrintChart.update();
}

function graphIt(data,id){
  var firstSwitch = [];
  var sustainedSwitch = [];
  var maxSwitch = [];

  var firstOpen = [];
  var sustainedOpen = [];
  var maxOpen = [];

  var firstPrint = [];
  var sustainedPrint =[];
  var maxPrint = [];


  var drivers = [];
  var JenkinsBuild = [];

  for (j=0; j < data.length-1; j++) {
    if (data[j].Test_UID == id) {      
      //Event Filter
      if (data[j].Event == 'Switch') {
        maxSwitch.push(data[j].High);
        firstSwitch.push(data[j].First);
        sustainedSwitch.push(data[j].Sustained);
        JenkinsBuild.push(data[j].BuildTag);
        drivers.push([data[j].DriverVer, data[j].TestTime.split(" ")[0]]);
      }
      if (data[j].Event == 'Open') {
        maxOpen.push(data[j].High);
        firstOpen.push(data[j].First);
        sustainedOpen.push(data[j].Sustained);
      }
      if (data[j].Event == 'Print') {
        maxPrint.push(data[j].High);
        firstPrint.push(data[j].First);
        sustainedPrint.push(data[j].Sustained);
      }
      var charted = data[j].DriverType + ", " + data[j].PDL + ", " + data[j].OS + ", " + data[j].App + ", " + data[j].Complexity + ", " + data[j].RestartBwCycles + " Reboots, " + data[j].Config
    }
  }
  
  $("#charted").html(charted);
  
  firstSwitchChart.data.datasets[0].data = firstSwitch;
  firstSwitchChart.data.datasets[0].label = charted;
  firstSwitchChart.data.labels = drivers;
  firstSwitchChart.update();
  
  sustainedSwitchChart.data.datasets[0].data = sustainedSwitch;
  sustainedSwitchChart.data.datasets[0].label = charted;
  sustainedSwitchChart.data.labels = drivers;
  sustainedSwitchChart.update();
  
  maxSwitchChart.data.datasets[0].data = maxSwitch;
  maxSwitchChart.data.datasets[0].label = charted;
  maxSwitchChart.data.labels = drivers;
  maxSwitchChart.update();
  
  firstOpenChart.data.datasets[0].data = firstOpen;
  firstOpenChart.data.datasets[0].label = charted;
  firstOpenChart.data.labels = drivers;
  firstOpenChart.update();
  
  sustainedOpenChart.data.datasets[0].data = sustainedOpen;
  sustainedOpenChart.data.datasets[0].label = charted;
  sustainedOpenChart.data.labels = drivers;
  sustainedOpenChart.update();
  
  maxOpenChart.data.datasets[0].data = maxOpen;
  maxOpenChart.data.datasets[0].label = charted;
  maxOpenChart.data.labels = drivers;
  maxOpenChart.update();
  
  firstPrintChart.data.datasets[0].data = firstPrint;
  firstPrintChart.data.datasets[0].label = charted;
  firstPrintChart.data.labels = drivers;
  firstPrintChart.update();
  
  sustainedPrintChart.data.datasets[0].data = sustainedPrint;
  sustainedPrintChart.data.datasets[0].label = charted;
  sustainedPrintChart.data.labels = drivers;
  sustainedPrintChart.update();
  
  maxPrintChart.data.datasets[0].data = maxPrint;
  maxPrintChart.data.datasets[0].label = charted;
  maxPrintChart.data.labels = drivers;
  maxPrintChart.update();
  }



//END
}}
