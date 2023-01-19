$(document).ready(function(){
    $('#show').click(function() { //натисканням на елемент 
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
    
    /* Почати процес завантаження. */
    downloadButton.classList.add('loading');
    
    /* Задати затримку перед переходом від завантаження до успішного завершення. */
    window.setTimeout(function() {
      downloadButton.classList.remove('loading');
      downloadButton.classList.add('success');
    }, 1000);
    
    /* Перезавантажити анімацію. */
    window.setTimeout(function() {
      downloadButton.classList.remove('success');
    }, 8000);
  });
};