
  function changeScript(){
    sessionStorage.locValue='FAQKanton';
    sessionStorage.chatBtn='https://demo.spitch.chat/button.php?location=FAQKanton'
    sessionStorage.mainpage2='mainpage2.html'
    sessionStorage.login2='login2.html'
    sessionStorage.hypothek2='hypothek2.html'
    document.querySelector('.imageChat').src=sessionStorage.chatBtn;
    chatLocationData.location=sessionStorage.locValue;
    document.getElementById('button1').href=sessionStorage.login2;
    document.getElementById('button3').href=sessionStorage.mainpage2;
    document.getElementById('button2').href=sessionStorage.hypothek2;
  };
  function videoValidator(){
    if(sessionStorage.locValue){
        chatLocationData.location=sessionStorage.locValue;
        document.querySelector('.imageChat').src=sessionStorage.chatBtn;
        document.getElementById('button1').href=sessionStorage.login2;
        document.getElementById('button3').href=sessionStorage.mainpage2;
        document.getElementById('button2').href=sessionStorage.hypothek2;
    }
    else{
        chatLocationData.location="Raiffeisen";
        document.querySelector('.imageChat').src='https://demo.spitch.chat/button.php?location=Raiffeisen';
        document.getElementById('button1').href='login.html';
        document.getElementById('button3').href='mainpage.html';
        document.getElementById('button2').href='hypothek.html';
    }
  }
  (function chatBot() {
      var d = document.createElement("script");
      d.type = "text/javascript";
      d.src = "https://demo.spitch.chat/js/button.js";
      document.getElementsByTagName("head")[0].appendChild(d);
  })();
  function onYouTubeIframeAPIReady() {
      player = new YT.Player('videoContainer', {
          height: '400',
          width: '600',
          videoId: 'rcZhHgG6Krg',
          events: {
              'onStateChange': changeScript
          }
      });
  }

  function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.PLAYING) {
       alert('video started');
       playing = true;
      }

    else if(event.data == YT.PlayerState.PAUSED){
          alert('video paused');
          playing = false;
     }
}