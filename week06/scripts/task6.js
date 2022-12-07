const startDecode = function () {
  var vin = document.querySelector("#vinInput").value

  if (vin.length == 17) {
    CheckVin(vin)
  }
}
document.querySelector("#decode").addEventListener("click", startDecode);

// function getNHTSADataByVIN (param_vin) {
//   $.ajax({
//     url: "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValuesBatch/",
//     type: "POST",
//     data: { format: "json", data: param_vin },
//     dataType: "json",
//     success: function(result)
//     {
//       console.log(result);
//       displayNHTSAResults(result);
//     },
//     error: function(xhr, ajaxOptions, thrownError)
//     {
//         console.log(xhr.status)
//         console.log(thrownError)
//     }
//   })
// }

function displayNHTSAResults (param_data) {
  var output_text = ""

  for (var i = 0; i < param_data.Results.length; i++) {
    var result = param_data.Results[i]

    for (var prop in result) {
      if (result.hasOwnProperty(prop) && result[prop] !== null) {
        output_text += prop + ": " + result[prop] + "\n"
      }
    }
  }

  document.getElementById("#txt_results").value = output_text
}

async function CheckVin(vin) {
  var response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`);
  let result = await response.json();
  console.log(result);
  displayNHTSAResults(result);
}