parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AXOC":[function(require,module,exports) {
const e=500,a=$("#carousel"),t=$("[data-reviews]"),s=$("[data-slider-range]");function i(e,a){s.text(`${a.currentSlide+1}/${a.slideCount}`)}a.on("init",i),a.slick({centerMode:!0,arrows:!0,centerPadding:"0px",slidesToShow:3,focusOnSelect:!0,draggable:!1,autoplay:!0,autoplaySpeed:2e3,pauseOnFocus:!0,speed:500,responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]}),a.on("afterChange",i),a.on("beforeChange",(e,a,s,i)=>{s!==i&&(t.addClass("reviews--animation"),$("[data-slide]").each((e,a)=>{const s=$(a),n=s.attr("data-slide");s.toggleClass("article-contant__text--active",+n===i),setTimeout(()=>{t.removeClass("reviews--animation")},500)}))});
},{}]},{},["AXOC"], null)
//# sourceMappingURL=/parcel-project-template/review-slider.eda49ac9.js.map