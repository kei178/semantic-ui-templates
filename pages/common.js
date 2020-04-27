$(document).ready(function(){
  appendCopyrightYear()
  sendGoogleAnalytics()
})

function appendCopyrightYear(){
  const date = new Date()
  $('#copy-right-year').text(date.getFullYear())
}

function sendGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'UA-YOUR-ID');
}