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

dateFilter.on("click", function() {
  d3.event.preventDefault();

  var dateEle = d3.select("#datetime");

  var dateVal = dateEle.property("value");
  console.log(dateVal);

  if(dateVal !== "") {
    tableData = data.filter(dateT);

    update();

    function dateT(d) {
      return d.datetime == dateVal;
    }
  } else {
    tableData = data;

    update();
  }


});
