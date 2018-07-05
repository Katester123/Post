function enlarge(pic) {
  pic.style.height = "400px";
  pic.style.width = "400px";
}

function smaller(pic) {
  pic.style.height = "300px";
  pic.style.width = "300px";
}

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
