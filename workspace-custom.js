$(document).ready(function () {
  $(".blocklyToolboxCategory").each(function (index) {
    var category_name = $(".blocklyTreeLabel", this).eq(0).text();
    var category_class = "Category" + category_name;
    $(this).addClass(category_class);
  });
});
