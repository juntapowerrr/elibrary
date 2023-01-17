$(document).ready(function(){
    $('#show').click(function() {
        $('.pdf-viewer').fadeToggle("fast");
    });
    $('.btn-close').click(function() {
        $('.pdf-viewer').fadeToggle("fast");
      });
});

let downloadButton = document.querySelector('.download-btn');
if(downloadButton) {    
  downloadButton.addEventListener('click', function(event) {
    //event.preventDefault();
    
    /* Start loading process. */
    downloadButton.classList.add('loading');
    
    /* Set delay before switching from loading to success. */
    window.setTimeout(function() {
      downloadButton.classList.remove('loading');
      downloadButton.classList.add('success');
    }, 1000);
    
    /* Reset animation. */
    window.setTimeout(function() {
      downloadButton.classList.remove('success');
    }, 8000);
  });
};