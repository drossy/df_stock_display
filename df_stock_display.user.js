// ==UserScript==
// @name      Dwarven Forge Stock Display
// @version   1
// @match     https://shop.dwarvenforge.com/*
// @updateURL https://github.com/drossy/df_stock_display/raw/main/df_stock_display.user.js
// ==/UserScript==

// Get the product title
var prodtitle = document.querySelector('.product-single__title');

// If there isnt a product title dont do anything else
if (prodtitle != null) {

  // Extract the JSON product string and remove leading and trailing white space
  var jsonstr = document.querySelector('[aria-label="Product JSON"]').innerText.trim();

  // The JSON product string is JSON wrapped in square brackets so extract a substring that is
  // all but the first and last characters of that string and parse the JSON
  var json = JSON.parse(jsonstr.substring(1, jsonstr.length - 1));

  // Update the product title with the inventory quantity
  prodtitle.innerHTML += "(" + json.inventory_quantity + " in stock)";
  
}