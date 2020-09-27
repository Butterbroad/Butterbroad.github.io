
function msieversion() {

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
  {
    alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    alert('ie');
  } else {
    alert('ne ie');
  }
  return false;
}
msieversion();