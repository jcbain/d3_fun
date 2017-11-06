// asynchronous tasks
d3.queue()
  .defer(d3.json, "data/missouri.json")
  .await(ready);


// callback function
function ready(error, data){
  if(error) throw error;

  var usa = topojson.feature(data, {
    type: "GeometryCollection",
    geometries: data.objects.missouri.geometries
  });

  // projection
  var projection = d3.geoAlbersUsa()
    .fitExtent([ [20,20], [460,580] ], usa);


  // path
  var geoPath = d3.geoPath()
    .projection(projection);

  //
  d3.select("svg.usa").selectAll("path")
    .data(usa.features)
    .enter()
    .append("path")
    .attr("d", geoPath)
    .attr("fill", "green");

}
