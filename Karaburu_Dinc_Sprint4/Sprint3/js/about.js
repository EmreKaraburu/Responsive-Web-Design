$(document).ready(function() {
  // We added Fancybox for the image gallery
  $('[data-fancybox="gallery"]').fancybox({
  });

  // We added jQuery UI Accordion for the FAQ section
  $("#faq-accordion > div").accordion({
      collapsible: true,
      heightStyle: "content"
  });

  // We added jQuery UI Tabs for the information section
  $("#info-tabs").tabs();
});