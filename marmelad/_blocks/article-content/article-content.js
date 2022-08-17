$(".article-content__video").click(function () {
  let $this = $(this);
  let videoSrc = $this.data('video');

  $this.find('iframe').attr('src', videoSrc);
  $this.find('img').fadeOut();
});