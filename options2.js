// Saves options to chrome.storage.sync.
function save_options() {
  var sizeselect = document.getElementById('sizeselect').value;
  var quantity = document.getElementById('quantity').value;
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var street_address_1 = document.getElementById('street_address_1').value;
  var street_address_2 = document.getElementById('street_address_2').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zipcode = document.getElementById('zipcode').value;
  var tel = document.getElementById('tel').value;
  var card_name = document.getElementById('card_name').value;
  var card_number = document.getElementById('card_number').value;
  var expires_month = document.getElementById('expires_month').value;
  var expires_year = document.getElementById('expires_year').value;
  var security_code = document.getElementById('security_code').value;
  var card_pin = document.getElementById('card_pin').value;
  chrome.storage.sync.set({
    sizeselect: sizeselect,
    quantity: quantity,
    first_name: first_name,
    last_name: last_name,
    email: email,
    street_address_1: street_address_1,
    street_address_2: street_address_2,
    city: city,
    state: state,
    zipcode: zipcode,
    tel: tel,
    card_name: card_name,
    card_number: card_number,
    expires_month: expires_month,
    expires_year: expires_year,
    security_code: security_code,
    card_pin: card_pin,
  }, function() {
    // Update status to let user know options were saved.

    var status = document.getElementById('status');
    status.textContent = 'saved';
    setTimeout(function() {
      status.textContent = '';
    }, 500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
  sizeselect: '',
  quantity: '',
  first_name: '',
  last_name: '',
  email: '',
  street_address_1: '',
  street_address_2: '',
  city: '',
  state: '',
  zipcode: '',
  tel: '',
  card_name: '',
  card_number: '',
  expires_month: '',
  expires_year: '',
  security_code: '',
  card_pin: '',
  }, function(items) {
    document.getElementById('sizeselect').value = items.sizeselect;
    document.getElementById('quantity').value = items.number;
    document.getElementById('first_name').value = items.first_name;
    document.getElementById('last_name').value = items.last_name;
    document.getElementById('email').value = items.email;
    document.getElementById('street_address_1').value = items.street_address_1;
    document.getElementById('street_address_2').value = items.street_address_2;
    document.getElementById('city').value = items.city;
    document.getElementById('state').value = items.state;
    document.getElementById('zipcode').value = items.zipcode;
    document.getElementById('tel').value = items.tel;
    document.getElementById('card_name').value = items.card_name;
    document.getElementById('card_number').value = items.card_number;
    document.getElementById('expires_month').value = items.expires_month;
    document.getElementById('expires_year').value = items.expires_year;
    document.getElementById('security_code').value = items.security_code;
    document.getElementById('card_pin').value = items.card_pin;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
