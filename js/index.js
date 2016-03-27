$( document ).ready(function() {
  var skills = [
   {
     name: 'JavaScript',
     img: 'http://www.qubepix.com/images/technologies/set2/2.png',
     level: 100 
   },
   {
     name: 'CSS',
     img: 'http://www.citgroup.in/images/icon/css3_01.png',
     level: 80 
   },
   {
     name: 'HTML',
     img: 'https://mdn.mozillademos.org/files/3563/HTML5_Logo_128.png',
     level: 100 
   },
   {
     name: 'Bootstrap',
     img: 'http://www.w3schools.com/bootstrap/bs.png',
     level: 90 
   },
   {
     name: 'Angular',
     img: 'https://uvbrain.gallery.vsassets.io/_apis/public/gallery/publisher/UVBrain/extension/Angular2/0.2.8/assetbyname/Microsoft.VisualStudio.Services.Icons.Default',
     level: 90 
   },
  {
     name: 'JQuery',
     img: 'https://www.video2brain.com/en/images_dynam/product_class_external_product/jquery.png',
     level: 70 
   },
   {
     name: 'Node',
     img: 'http://javascript-html5-tutorial.com/wp-content/uploads/2015/02/nodejs-logo.png',
     level: 60 
   },
   {
     name: 'Express',
     img: 'http://nashvillesoftwareschool.com/images/technologies/express.png',
     level: 80 
   },
   {
     name: 'Grunt',
     img: 'https://hsto.org/getpro/toster/f7805253/cfe9/4677/f7805253-cfe9-4677-96e7-f44de29c405d/grunt.png',
     level: 50 
   },
   {
     name: 'Less',
     img: 'http://www.file-extensions.org/imgs/app-icon/128/8757/less.png',
     level: 70 
   },
   {
     name: 'Sass',
     img: 'https://dynamicimagesde-v2b.netdna-ssl.com/product_class_external_product/sass.png',
     level: 70 
   },
   {
     name: 'Kibana',
     img: 'http://www.alasta.com/images/logos/kibana.png',
     level: 70 
   }];
  
  skills.forEach(function (skill) {
    $img = $('<img />', {
      'src': skill.img
    });
        
    $newa = $('<a />', {
      "class": "thumbnail",
      "href": ''
    }).append($img);
    
    $newskill = $('<div />', {
        "class": 'bigger col-xs-3 col-md-3' + skill.name
    }).append($newa);
    $newskill.appendTo('#skill');
  })
});