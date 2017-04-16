//Supremebot April 10, 2017 Init
//Anton Klingspor aklingspor.com

chrome.storage.sync.get('name', function(data) {
    document.getElementById('order_billing_name').value = data.name;
});

chrome.storage.sync.get('email', function(data) {
    document.getElementById('order_email').value = data.email;
});

chrome.storage.sync.get('tel', function(data) {
    document.getElementById('order_tel').value = data.tel;
});

chrome.storage.sync.get('tel', function(data) {
    document.getElementById('order_tel').value = data.tel;
});
chrome.storage.sync.get('tel', function(data) {
    document.getElementById('order_tel').value = data.tel;
});

// PLEASE DO NOT EDIT ANYTHING BELOW THIS
// PLEASE DO NOT EDIT ANYTHING BELOW THIS
// PLEASE DO NOT EDIT ANYTHING BELOW THIS
// PLEASE DO NOT EDIT ANYTHING BELOW THIS
// PLEASE DO NOT EDIT ANYTHING BELOW THIS

// If page description exists select size, click add to art and go to checkout page.
if ( $( "#details > p.description" ).length ) {
    console.log("Checking for description.");
    $('size').trigger('click');
    console.log("Clicked on Size to fill.");
    $("select#size option").filter(function() {
        return this.text == size;
    }).attr('selected', true);
    console.log("Set size correctly.");
    console.log("Adding item to cart.");
    $('#add-remove-buttons > input').trigger('click');
      window.location.replace("https://supremenewyork.com/checkout");
      console.log("Going to checkout page.");
}

// If right column of checkout page is present, execute checkout function.
if ( $( "#cart-cc" ).length ) {
  checkout()
console.log("Right column is present, executing function.");
}

// Filling in values for each box in the checkout page.
function checkout(){
  $( "#header > hgroup > time" ).remove();
  $( "#nav" ).remove();
  $( "body > div.rc-anchor.rc-anchor-invisible.rc-anchor-invisible-hover > div.rc-anchor-normal-footer" ).remove();
  $( "#pay > a" ).remove();
  $("#tabs > div.tab.tab-payment.selected > b").fadeIn(400).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400);
  $("#wrap").fadeIn(800);
  $("#tabs > div.tab.tab-payment.selected > b").css('background-color', 'blue');
  $("#pay > input").css('background-color', 'blue');
  $("#pay > input").css('border-color', 'blue');
  $("#pay > input").attr('value', 'manual checkout');
  $( "#tabs > div.tab.tab-payment.selected > b" ).text( "SUPREMEBOT" );

    console.log("XXXXXXX~~~~ STARTING CHECKOUT ~~~~XXXXXXX");
    //document.getElementById('order_billing_name').value = name;
      //console.log("Name filled.  Input: " + name);
    document.getElementById('order_email').value = email;
      console.log("Email filled.   Input: " + email);
    document.getElementById('order_tel').value = tel;
      console.log("Tel # filled.   Input: " + tel);
    document.getElementById('bo').value = street_address_1;
      console.log("Address line 1 filled.   Input: " + street_address_1);
    document.getElementById('oba3').value = street_address_2;
      console.log("Address line 2 filled.   Input: " + street_address_2);
    document.getElementById('order_billing_zip').value = zipcode;
      console.log("ZIP filled.   Input: " + zipcode);
    document.getElementById('order_billing_city').value = city;
        console.log("City filled.   Input: " + city);
    document.getElementById('order_tel').value = tel;
      console.log("Tel # filled.   Input: " + tel);
    document.getElementById('bo').value = street_address_1;
      console.log("Address line 1 filled.   Input: " + street_address_1);
    document.getElementById('oba3').value = street_address_2;
      console.log("Address line 2 filled.   Input: " + street_address_2);
    document.getElementById('order_billing_zip').value = zipcode;
      console.log("ZIP filled.   Input: " + zipcode);
    document.getElementById('order_billing_city').value = city;
        console.log("City filled.   Input: " + city);
        console.log("Clicking on State to fill.");
    $('#order_billing_state').trigger('click');
        console.log("Clicked on State to fill.");
    document.getElementById('order_billing_state').value = state;
        console.log("State filled  Input: "+ state);
        console.log("Clicking on Country to fill.");
    $('#order_billing_country').trigger('click');
      console.log("Clicked on Country to fill.");
    document.getElementById('order_billing_country').value = country;
      console.log("Country filled.");
      console.log("Clicking on Store Address checkbox.");
    $('#cart-address > fieldset > div.input.string.optional.store-address-checkbox > div > ins').trigger('click');
      console.log("Clicked on Store Address checkbox.");
      console.log("Clicking to select CC type.");
    $('#credit_card_type').trigger('click');
      console.log("Clicked on CC type selector.");
    document.getElementById('credit_card_type').value = card_type;
      console.log("CC type selected.   Input: " + card_type);
    document.getElementById('cnb').value = card_number;
      console.log("CC # filled. " + "... card # hidden.");
      console.log("Clicking to select CC # field to parse.");
    $('#card_details > div.input.string.required.credit_card_number').trigger('click');
      console.log("Clicking to select CC expiry month.");
    $('#credit_card_month').trigger('click');
      console.log("Clicked on CC expiry month field.");
    document.getElementById('credit_card_month').value = expires_month;
      console.log("CC expiry month filled.");
      console.log("Clicking to select CC expiry year.");
    $('#credit_card_year').trigger('click');
      console.log("Clicked on CC expiry year field. ");
    document.getElementById('credit_card_year').value = expires_year;
      console.log("CC expiry year filled.");
    document.getElementById('vval').value = security_code;
      console.log("CC security code filled.");
      console.log("Clicking on terms&conditions.");
    $('#cart-cc > fieldset > p:nth-child(6) > label > div > ins').trigger('click');
      console.log("Clicked on terms&conditions.");
    console.log("Ready to Checkout. All values full.");
    console.log("XXXXXXX~~~~ CHECKING OUT ~~~~XXXXXXX");
    $('#pay > input').trigger('click');
    console.log("XXXXXXX~~~~ CHECKING OUT COMPLETED ~~~~XXXXXXX");

}
