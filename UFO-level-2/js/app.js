// from data.js
var tableData = data;

var table = d3.select("#ufo-table");

update();

function update() {
  table.selectAll("#new-row").remove();

  tableData.forEach(ufo => {
    var row = table.append("tr");
    row.attr("id", "new-row")

    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

var dateFilter = d3.select("#filter-btn");
var clearButton = d3.select("#clear-btn");

clearButton.on("click", function() {
  var dateEle = d3.select("#datetime");
  var cityEle = d3.select("#city");
  var stateEle = d3.select("#state");
  var countryEle = d3.select("#country");
  var shapeEle = d3.select("#shape");

  dateEle.property("value", "");
  cityEle.property("value", "");
  stateEle.property("value", "");
  countryEle.property("value", "");
  shapeEle.property("value", "");

  tableData = data;
  update();
});

dateFilter.on("click", function() {
  d3.event.preventDefault();

  var g = d3.selectAll(".form-control");
  // console.log(g['_groups'][0][0]['value']);
  g.each(function() {
    console.log(this.id);
    // if (this.value !== "") {
    //
    // }
  });

  var dateEle = d3.select("#datetime");
  var cityEle = d3.select("#city");
  var stateEle = d3.select("#state");
  var countryEle = d3.select("#country");
  var shapeEle = d3.select("#shape");

  var dateVal = dateEle.property("value");
  var cityVal = cityEle.property("value");
  var stateVal = stateEle.property("value");
  var countryVal = countryEle.property("value");
  var shapeVal = shapeEle.property("value");

  var newData = data;

  if(dateVal !== "") {
    newData = newData.filter(dateT);


    function dateT(d) {
      return d.datetime == dateVal;
    }
  }
  if(cityVal !== "") {
    newData = newData.filter(cityT);


    function cityT(d) {
      return d.city == cityVal;
    }
  }
  if(stateVal !== "") {
    newData = newData.filter(stateT);


    function stateT(d) {
      return d.state == stateVal;
    }
  }
  if(countryVal !== "") {
    newData = newData.filter(countryT);


    function countryT(d) {
      return d.country == countryVal;
    }
  }
  if(shapeVal !== "") {
    newData = newData.filter(shapeT);


    function shapeT(d) {
      return d.shape == shapeVal;
    }
  }
  tableData = newData;

  update();

});
