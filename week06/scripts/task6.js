
// const api_url = "https://vpic.nhtsa.dot.gov/api/Home";
// async function getUser() {

//   // Making an API call (request)
//   // and getting the response back
//   const response = await fetch(api_url) 

//   // Parsing it to JSON format
//   const data = await response.json();
//   console.log(data.results);

//   // Retrieving data from JSON
//   const user = data.results[0];
//   let { title, first, last } = user.name;
//   let { gender, email, phone } = user;
//   let image = user.picture.large;
//   let image_icon = user.picture.thumbnail;
//   let age = user.dob.age;
//   let { city, state, country } = user.location;

//   let fullName = title + ". " + first + " " + last;
//   document.title = fullName;

//   // Accessing the div container and modify/add
//   // elements to the containers
//   document.getElementById("head").innerHTML = fullName;
//   document.getElementById("email").href = "mailto:" + email;
//   document.getElementById("email").innerHTML = email;
//   document.getElementById("phone").href = "tel:" + phone;
//   document.getElementById("phone").innerHTML = phone;
//   // accessing the span container
//   document.querySelector("#age").textContent = age;
//   document.querySelector("#gender").textContent = gender;

//   document.querySelector("#location").textContent
//           = city + ", " + state;
 
//   document.querySelector("#country").textContent = country;
 
//   // Creating a new element and appending it
//   // to previously created containers
//   let img = document.createElement("img");
//   let img_div = document.getElementById("user-img");
//   img.src = image;
//   img_div.append(img);

//   const favicon = document.getElementById("favicon");
//   favicon.setAttribute("href", image_icon);
// }
 
//   // Calling the function
//   getUser();
// </script>


document.getElementById("decode").onclick = function () {
  var vin = document.querySelector("#b12").value

  if (vin.length == 17) {
    getNHTSADataByVIN(vin)
  }
}

function getNHTSADataByVIN (param_vin) {
  $.ajax({
    url: "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValuesBatch/",
    type: "POST",
    data: { format: "json", data: param_vin },
    dataType: "json",
    success: function(result)
    {
      console.log(result);
      displayNHTSAResults(result);
    },
    error: function(xhr, ajaxOptions, thrownError)
    {
        console.log(xhr.status)
        console.log(thrownError)
    }
  })
}

function displayNHTSAResults (param_data) {
  var output_text = ""

  for (var i = 0; i < param_data.Results.length; i++) {
    var result = param_data.Results[i]

    for (var prop in result) {
      if (result.hasOwnProperty(prop) && result[prop] !== "") {
        output_text += prop + ": " + result[prop] + "\n"
      }
    }
  }

  document.getElementById("#txt_results").value = output_text
}