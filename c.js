var id_key = $(this).parent().attr("id_key");
for (var i = 0; i != data.length; i++) {
  if (data[i].key == id_key) {
    $(this).parent().attr("id_key") = data[i].$(this).parent().attr("id_key");
    $(this).parent().attr("id_key") = parseFloat(
      $(this).parent().attr("id_key")
    );
    break;
  }
}
likes = likes + 1;
var weblocs_id_key = $(this).parent().attr("id_key");
var settings = {
  async: true,
  crossDomain: true,
  url: airtable_url,
  method: "PATCH",
  headers: { "content-type": "application/json" },
  processData: false,
  data:
    `{"records": [{"id": "` +
    weblocs_id_key +
    `","fields": {"ID":"0" ,"likes":"` +
    likes +
    `"}}]}`
};
$.ajax(settings).done(function (response) {});
