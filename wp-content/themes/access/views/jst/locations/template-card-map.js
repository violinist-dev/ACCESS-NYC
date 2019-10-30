// Compiled template. Do not edit.
window.JST = window.JST || {};
window.JST["locations/template-card-map"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='';
 locations.forEach(function(location) { 
__p+='\n<li class="js-map-location c-card px-2 py-3 border-b border-color-grey-light" data-marker="'+
((__t=( location.id ))==null?'':__t)+
'" tabindex="0" itemscope itemtype="https://schema.org/';
 if (location.isGovtOffice) { 
__p+='GovernmentOffice';
 } else { 
__p+='Organization';
 } 
__p+='">\n  <div class="c-card__icon m-0">\n    ';
 if (location.isGovtOffice) { 
__p+='\n    <img src="/wp-content/themes/access/assets/img/map-pin-blue.png" width="33" height="40" alt="Government office map marker">\n    ';
 } else { 
__p+='\n    <img src="/wp-content/themes/access/assets/img/map-pin-green.png" width="33" height="40" alt="Non-government office map marker">\n    ';
 } 
__p+='\n  </div>\n  <div class="c-card__body">\n    <h3 class="type-h4 serif m-0">'+
((__t=( location.name ))==null?'':__t)+
'</h3>\n    <p class="text-font-size-small text-color-grey-mid m-0">\n      ';
 print(location.type) 
__p+=' |\n      <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">\n        <span itemprop="streetAddress">';
 print(location.address.street) 
__p+='</span>\n      </span>\n    </p>\n    <p class="text-font-size-small text-color-grey-mid m-0" itemprop="description">\n      ';
 print(location.programs.map(function(program) { return localize(program) }).join(", ")) 
__p+='\n    </p>\n    <a href="'+
((__t=( location.link ))==null?'':__t)+
'" class="link-more text-font-size-small font-bold" itemprop="url" target="_blank">{{ __("more about this location", "accessnyc-locations") }}</a>\n  </div>\n</li>\n';
 }); 
__p+='';
}
return __p;
}