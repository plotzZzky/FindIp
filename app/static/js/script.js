function fly(lat, lon) {
  map.flyTo([lat , lon], 8);
}


function getTable(ip) {
    $.get("http://127.0.0.1:5000/ip/table=" + ip, function(data) {
    $("#ipTable").html(data)
    })
}


function infoByIp() {
  let input = $("#findIp").val()
  $.get("http://127.0.0.1:5000/ip/get=" + input , function(data) {
    fly(data[0], data[1])
    getTable(input)
  })
}


function infoByName() {
  let input = $("#findName").val()
  $.get("http://127.0.0.1:5000/ip/name=" + input , function(data) {
    fly(data[0], data[1])
    getTable(data[2])
  })
}

function showAbout() {
    $('#about').toggle()
}