document.addEventListener("DOMContentLoaded", function(){
  $('p:empty').remove();
  Mojik.compose(".js-mojik-text p, .js-mojik-text h2 .js-mojik-text h3 .js-mojik-text h4 .js-mojik-text h5 .js-mojik-text li");
})
