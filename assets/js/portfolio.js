
function portfolioShow(wrapperid, tag, show) {
   var wrapper = document.getElementById(wrapperid);
   var elements = wrapper.getElementsByTagName(tag);
   var showAll = !show || (show == 'all');

   for (var i=0; i<elements.length; i++) {
      var el = elements[i];
      var classes = el.className.split(' ');
      var display = showAll || classes.indexOf(show) >= 0;
      elements[i].style.display = display ? 'inherit' : 'none';
   }

}
