import { Component,OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as Papa  from 'papaparse';
import * as $ from 'jquery';

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
      white: 'rgb(255,255,255)'
    };

    var dataFirstSwitch = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],      
      datasets: [{
        label: 'Driver # 1',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
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
    labels: ['January', 'February', 'March'],      
    datasets: [{
      label: 'Driver # 1',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: sustainedSwitch,
      fill: false,
      pointRadius: 6,
      pointHoverRadius: 12,
      pointHitRadius: 15,	
    }, {
      label: 'Driver # 2',
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      data: [5.4,1.2,13.7],
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
  labels: ['January', 'February', 'March'],      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: maxSwitch,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,	
  }, {
    label: 'Driver # 2',
    fill: false,
    backgroundColor: 'rgb(54, 162, 235)',
    borderColor: 'rgb(54, 162, 235)',
    data: [5.4,1.2,13.7],
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
  labels: ['January', 'February', 'March'],      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: firstOpen,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,	
  }, {
    label: 'Driver # 2',
    fill: false,
    backgroundColor: 'rgb(54, 162, 235)',
    borderColor: 'rgb(54, 162, 235)',
    data: [5.4,1.2,13.7],
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
  labels: ['January', 'February', 'March'],      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: sustainedOpen,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,	
  }, {
    label: 'Driver # 2',
    fill: false,
    backgroundColor: 'rgb(54, 162, 235)',
    borderColor: 'rgb(54, 162, 235)',
    data: [5.4,1.2,13.7],
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
  labels: ['January', 'February', 'March'],      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: maxOpen,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,	
  }, {
    label: 'Driver # 2',
    fill: false,
    backgroundColor: 'rgb(54, 162, 235)',
    borderColor: 'rgb(54, 162, 235)',
    data: [5.4,1.2,13.7],
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
  labels: ['January', 'February', 'March'],      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: firstPrint,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,	
  }, {
    label: 'Driver # 2',
    fill: false,
    backgroundColor: 'rgb(54, 162, 235)',
    borderColor: 'rgb(54, 162, 235)',
    data: [5.4,1.2,13.7],
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
  labels: ['January', 'February', 'March'],      
  datasets: [{
    label: 'Driver # 1',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: sustainedPrint,
    fill: false,
    pointRadius: 6,
    pointHoverRadius: 12,
    pointHitRadius: 15,	
  }, {
    label: 'Driver # 2',
    fill: false,
    backgroundColor: 'rgb(54, 162, 235)',
    borderColor: 'rgb(54, 162, 235)',
    data: [5.4,1.2,13.7],
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
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: maxPrint,
        // maxOpen,firstOpen,sustainedOpen,maxPrint,firstPrint,sustainedPrint],
      fill: false,
      pointRadius: 6,
      pointHoverRadius: 12,
      pointHitRadius: 15,	
    }, {
      label: 'Driver # 2',
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      data: [5.4,1.2,13.7],
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


//CSV Files processing


function handleFileSelect(evt) {
  var file = evt.target.files[0];
  parseData(file, callBack)
}

function parseData(file, callBack) {
  console.log(file.name);
Papa.parse(file, {
    download: false,
    dynamicTyping: true,      
    delimiter: "",	// auto-detect
    newline: "",	// auto-detect
    quoteChar: '"',
    header: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    skipEmptyLines: false,      
    complete: function(results) {
        callBack(results.data,file.name);
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
var fileString = [];
var drivers = [];
var JenkinsBuild = [];
var i = 0;

function callBack(data,name){
i = i+1;
console.log(data);
fileString = name.split("_");
JenkinsBuild.push(fileString[0]);
maxSwitch.push(data[0][1]);
drivers.push("Driver " + i);
firstSwitch.push(data[1][1]);
sustainedSwitch.push(data[2][1]);
maxOpen .push(data[3][1]);
firstOpen.push(data[4][1]);
sustainedOpen.push(data[5][1]);
maxPrint.push(data[6][1]);
firstPrint.push(data[7][1]);
sustainedPrint.push(data[8][1]);

console.log("First Switch: " + firstSwitch);
console.log("Sustained Switcht: " + sustainedSwitch);
console.log("Max Switch: " + maxSwitch);

console.log("Max Print: " + maxPrint);

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



//END
}}
