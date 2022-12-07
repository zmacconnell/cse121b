const startDecode = function () {
  var vin = document.querySelector("#vinInput").value

  if (vin.length == 17) {
    getNHTSADataByVIN(vin)
  }
}
document.querySelector("#decode").addEventListener("click", startDecode);

var empty = null

function getNHTSADataByVIN (param_vin) {
  $.ajax({
    url: "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValuesBatch/",
    type: "POST",
    data: { format: "json", data: param_vin },
    dataType: "json",
    success: function(result)
    {
      console.log(result);
      DisplayResults(result);
    },
    error: function(xhr, ajaxOptions, thrownError)
    {
        console.log(xhr.status)
        console.log(thrownError)
    }
  })
}

function DisplayResults(param_data) {
  var output_text = ""
  for (var i = 0; i < param_data.Results.length; i++) {
    var result = param_data.Results[i]

    for (var prop in result) {
      if (result.hasOwnProperty(prop) && result[prop] !== "") {
        output_text += prop + ": " + result[prop] + "\n"
      }
    }
  }
  document.getElementById("txt_results").value = output_text
}
