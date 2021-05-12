var categoryLabels = [
  ["On Click", "Basics", ""],
  ["Connect", "Database", "Connect"],
  ["Set Text", "Text", ""],
  ["Set CSS", "Animations", ""],
  ["Class Editor", "Animations", "", "#add #class #remove #toggle"]
];

$(document).on("keydown", function (e) {
  // $("#blockly-0").trigger("click");
  if (e.keyCode == 69 && (e.ctrlKey || e.metaKey)) {
    $(".search-wrap").show();
    $(".search-widget").val("");
    $(".search-widget").focus();
  }
  if (e.keyCode == 27) {
    $(".search-wrap").hide();
    $(".search-widget").val("");
    blocksSearch();
  }
});

function blocksSearch() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementsByClassName("search-widget")[0];
  filter = input.value.toUpperCase();
  ul = document.getElementsByClassName("search-wrapper")[0];
  li = ul.getElementsByClassName("search-box");

  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
    if (filter.length < 1) {
      li[i].style.display = "none";
    }
  }
}

$(document).ready(function () {
  $("body").append(
    "<div class='search-wrap'><div class='search-close'></div><div class='search-wrapper'></div></div>"
  );

  $(".search-wrapper").append(
    "<input class='search-widget' onkeyup='blocksSearch()' placeholder='Find Block...' />"
  );

  $(".search-wrap").hide();

  var categoryName;
  var subCategoryName;
  var categoryLabel;
  for (var category_index in categoryLabels) {
    categoryName = categoryLabels[category_index][1];
    subCategoryName = categoryLabels[category_index][2];
    categoryLabel = categoryLabels[category_index][0];

    tags = categoryLabels[category_index][3];
    if (tags == undefined) {
      tags = "";
    }
    $(".search-wrapper").append(
      "<div class='search-box' category='" +
        categoryName +
        "' subcategory='" +
        subCategoryName +
        "'>" +
        categoryLabel +
        "<span class='search_tags'>" +
        tags +
        "</span>" +
        "</div>"
    );
  }

  $(".search-close, .search-box").on("click", function () {
    $(".search-wrap").hide();
    $(".search-widget").val("");
    blocksSearch();
  });

  var selected;

  $(".search-box").on("click", function () {
    var open_attr = $(this).attr("category");
    var subcategory_attr = $(this).attr("subcategory");

    // $("body").trigger("click");
    var open_category = ".Category" + open_attr;

    selected = $(open_category).attr("aria-expanded");

    if (selected != "true") {
      $(open_category + " .blocklyTreeRow").trigger("click");
    }

    if (subcategory_attr != "") {
      var open_subcategory = ".Category" + subcategory_attr;
      selected = $(open_subcategory).attr("aria-selected");
      if (selected != "true") {
        $(open_subcategory + " .blocklyTreeRow").trigger("click");
      }
    }
  });
});
