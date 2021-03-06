jQuery(document).ready(function($){
  var mediaUploader;
  $('body').on('click' , 'button#video_message', function(e) {
    e.preventDefault();
      if (mediaUploader) {
      mediaUploader.open();
      return;
    }
    mediaUploader = wp.media.frames.file_frame = wp.media({
      title: 'Choose Image',
      button: {
      text: 'Choose Image'
    }, multiple: false });
    mediaUploader.on('select', function() {
      var attachment = mediaUploader.state().get('selection').first().toJSON();
	  console.log(attachment);
      $('input[name="attachfile"]').val(attachment.id);
    });
    mediaUploader.open();
  });
});