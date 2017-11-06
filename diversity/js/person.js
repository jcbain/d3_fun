var container = d3.select("container");

show_image("images/person.png");
function show_image(source) {
  var img = container.append("img").attr("src", source).style("opacity", 0)
  img.transition().duration(5000).ease(d3.easeLinear).style("opacity", 1)
}
