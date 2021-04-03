var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return typeof sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

// $.getJSON(
//   "https://api.airtable.com/v0/app73lFU2xt9dJMTR/Calculator/rec8wgdbcl3kpTjYn?api_key=key1rK5Ixke8MZJ3Q",
//   function (data_el) {
//     $("h2").text(data_el.fields.value2);
//   }
// );
