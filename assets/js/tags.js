function showTag(enclosingClass, attrname, queryKey, proposition, queryMap) {
   if (undefined === queryMap)
      queryMap = parseQuery(window.location.search);
   if (!queryMap)
      return "";

   if (Array.isArray(queryKey)) {
      var result = "";
      for (var i=0; i<queryKey.length; i++)
         result += showTag(enclosingClass[i], attrname[i], queryKey[i], proposition[i], queryMap);

      return result;
   }

   var elements = document.getElementsByClassName(enclosingClass);
   var queryValue = queryMap[queryKey] || "";
   if (queryValue) {
      withCommas = ',' + queryValue + ',';

      for (var i=0; i<elements.length; i++) {
         var attrValue = "," + (elements[i].getAttribute(attrname) || "") + ",";
         var failed = attrValue.indexOf(withCommas) < 0;
         if (failed)
            elements[i].style.display = 'none';
      }

      return " " + proposition + " " + queryValue;
   }

   return "";
}


function parseQuery(inQuery) {
   var parsed = {};
   if (inQuery.length > 1) {
      var pairs = inQuery.substring(1).split("&");
      for (var i=0;i<pairs.length;i++) {
         var split = pairs[i].split("=");
         var value = (split.length > 1) ? decodeURI(split[1]) : "";
         parsed[split[0]] = value;
      }
   }

   return parsed;
}


function moveMe(enclosingClass, attrname, queryKey, proposition, updateElementID, headerPosition) {
   var addedText = showTag(enclosingClass, attrname, queryKey, proposition);
   if (addedText && updateElementID) {
      el = document.getElementById(updateElementID);
      if (el)
         el.insertAdjacentHTML(headerPosition || 'beforeEnd', addedText);
   }

}
