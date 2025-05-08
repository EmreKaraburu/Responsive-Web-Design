$(document).ready(function() {

    console.log('Activity11.js yüklendi, jQuery versiyon:', $.fn.jquery);
  
    $('#nav_list a').on('click', function(e) {
      e.preventDefault();
  
      var title = $(this).attr('title');              
      console.log('Tıklandı, title →', title);
  
      var fileName = 'json_files/' + title + '.json';                 
      console.log('Yüklenecek dosya →', fileName);
  
      $.getJSON(fileName)
        .done(function(data) {
          var s = data.speakers[0];
          var $main = $('main').empty();
          $main.append( $('<h1>').text(s.title) );

          $main.append( $('<img>').attr('src', s.image) );

          $main.append( $('<h2>').html(s.month + '<br>' + s.speaker) );

          $main.append( $('<p>').html(s.text) );
  
          console.log('İçerik güncellendi:', s);
        })
        .fail(function(jqxhr, textStatus, error) {
          console.error('JSON yüklenemedi:', fileName, textStatus, error);
        });
    });
  });
  