<<<<<<< Updated upstream
!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(1),o=function(){function t(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(e){i(this,t),this.params=e,this.nCols=e.nCols,this.nRows=e.nRows,this.xllCorner=e.xllCorner,this.yllCorner=e.yllCorner,this.xurCorner=e.xllCorner+e.nCols*e.cellSize,this.yurCorner=e.yllCorner+e.nRows*e.cellSize,this.cellSize=e.cellSize,this.grid=null,this._inFilter=null}return a(t,[{key:"_buildGrid",value:function(){throw new TypeError("Must be overriden")}},{key:"_updateRange",value:function(){this.range=this._calculateRange()}},{key:"numCells",value:function(){return this.nRows*this.nCols}},{key:"getCells",value:function(){for(var t=[],e=0;e<this.nRows;e++)for(var n=0;n<this.nCols;n++){var i=this._lonLatAtIndexes(n,e),a=o(i,2),s=a[0],l=a[1],u=L.latLng(l,s),c=this._valueAtIndexes(n,e),h=new r.a(u,c,this.cellSize);t.push(h)}return t}},{key:"setFilter",value:function(t){this._inFilter=t,this._updateRange()}},{key:"extent",value:function(){return[this.xllCorner,this.yllCorner,this.xurCorner,this.yurCorner]}},{key:"contains",value:function(t,e){return t>=this.xllCorner&&t<=this.xurCorner&&e>=this.yllCorner&&e<=this.yurCorner}},{key:"notContains",value:function(t,e){return!this.contains(t,e)}},{key:"interpolatedValueAt",value:function(t,e){if(this.notContains(t,e))return null;var n=this._getDecimalIndexes(t,e),i=o(n,2),r=i[0],a=i[1];return this.interpolatedValueAtIndexes(r,a)}},{key:"interpolatedValueAtIndexes",value:function(t,e){var n=this._getFourSurroundingIndexes(t,e),i=o(n,4),r=i[0],a=i[1],s=i[2],l=i[3],u=this._getFourSurroundingValues(r,a,s,l);if(u){var c=o(u,4),h=c[0],f=c[1],v=c[2],d=c[3];return this._doInterpolation(t-r,e-s,h,f,v,d)}return null}},{key:"_getDecimalIndexes",value:function(t,e){var n=(t-this.xllCorner)/this.cellSize,i=this._clampColumnIndex(n),r=(this.yurCorner-e)/this.cellSize;return[i,this._clampRowIndex(r)]}},{key:"_getFourSurroundingIndexes",value:function(t,e){var n=this._clampColumnIndex(Math.floor(t)),i=this._clampRowIndex(n+1),r=this._clampColumnIndex(Math.floor(e));return[n,i,r,this._clampRowIndex(r+1)]}},{key:"_getFourSurroundingValues",value:function(t,e,n,i){var r;if(r=this.grid[n]){var o=r[t],a=r[e];if(this._isValid(o)&&this._isValid(a)&&(r=this.grid[i])){var s=r[t],l=r[e];if(this._isValid(s)&&this._isValid(l))return[o,a,s,l]}}return null}},{key:"valueAt",value:function(t,e){if(this.notContains(t,e))return null;var n=this._getDecimalIndexes(t,e),i=o(n,2),r=i[0],a=i[1],s=Math.floor(r),l=Math.floor(a),u=this._valueAtIndexes(s,l);return this._inFilter&&!this._inFilter(u)?null:u}},{key:"hasValueAt",value:function(t,e){var n=this.valueAt(t,e),i=null!==n,r=!0;return this._inFilter&&(r=this._inFilter(n)),i&&r}},{key:"notHasValueAt",value:function(t,e){return!this.hasValueAt(t,e)}},{key:"randomPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Math.random()*this.nCols|0,n=Math.random()*this.nRows|0;return t.x=this._longitudeAtX(e),t.y=this._latitudeAtY(n),t}},{key:"_valueAtIndexes",value:function(t,e){return this.grid[e][t]}},{key:"_lonLatAtIndexes",value:function(t,e){return[this._longitudeAtX(t),this._latitudeAtY(e)]}},{key:"_longitudeAtX",value:function(t){var e=this.cellSize/2;return this.xllCorner+e+t*this.cellSize}},{key:"_latitudeAtY",value:function(t){var e=this.cellSize/2;return this.yurCorner-e-t*this.cellSize}},{key:"_doInterpolation",value:function(t,e,n,i,r,o){throw new TypeError("Must be overriden")}},{key:"_clampColumnIndex",value:function(t){var e=t;t<0&&(e=0);var n=this.nCols-1;return t>n&&(e=n),e}},{key:"_clampRowIndex",value:function(t){var e=t;t<0&&(e=0);var n=this.nRows-1;return t>n&&(e=n),e}},{key:"_isValid",value:function(t){return null!==t&&void 0!==t}}]),t}();e.a=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e,n,r){i(this,t),this.center=e,this.value=n,this.size=r}return r(t,[{key:"equals",value:function(t){return this.center.equals(t.center)&&this._equalValues(this.value,t.value)&&this.size===t.size}},{key:"_equalValues",value:function(t,e){var n=t.constructor.name;return{Number:t===e,Vector:t.u===e.u&&t.v===e.v}[n]}},{key:"getBounds",value:function(){var t=this.size/2,e=this.center.lat,n=this.center.lng,i=L.latLng([e+t,n-t]),r=L.latLng([e-t,n+t]);return L.latLngBounds(L.latLng(r.lat,i.lng),L.latLng(i.lat,r.lng))}}]),t}();e.a=o},function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(0),l=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.zs=t.zs,n.grid=n._buildGrid(),n._updateRange(),n}return a(e,t),l(e,null,[{key:"fromASCIIGrid",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=t.split("\n"),o=/-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/,a={nCols:parseInt(r[0].match(o)),nRows:parseInt(r[1].match(o)),xllCorner:parseFloat(r[2].match(o)),yllCorner:parseFloat(r[3].match(o)),cellSize:parseFloat(r[4].match(o))},s=r[5].replace("NODATA_value","").trim(),l=[],u=6;u<r.length;u++){var c=r[u].trim();if(""===c)break;var h=c.split(" "),f=h.map(function(t){return t!==s?parseFloat(t*n):null});l.push.apply(l,i(f))}return a.zs=l,new e(a)}},{key:"fromGeoTIFF",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=GeoTIFF.parse(t),r=i.getImage(),o=r.readRasters(),a=r.getTiePoints()[0],s=r.getFileDirectory(),l=s.ModelPixelScale,u=o[n];if(s.GDAL_NODATA){var c=parseFloat(s.GDAL_NODATA);u=Array.from(u).map(function(t){return t===c?null:t})}return new e({nCols:r.getWidth(),nRows:r.getHeight(),xllCorner:a.x,yllCorner:a.y-r.getHeight()*l[0],cellSize:l[0],zs:u})}}]),l(e,[{key:"_buildGrid",value:function(){return this._arrayTo2d(this.zs,this.nRows,this.nCols)}},{key:"_arrayTo2d",value:function(t,e,n){for(var i=[],r=0,o=0;o<e;o++){for(var a=[],s=0;s<n;s++,r++){var l=t[r];a[s]=this._isValid(l)?l:null}i[o]=a}return i}},{key:"_newDataArrays",value:function(t){t.zs=[]}},{key:"_pushValueToArrays",value:function(t,e){t.zs.push(e)}},{key:"_makeNewFrom",value:function(t){return new e(t)}},{key:"_calculateRange",value:function(){var t=this.zs;return this._inFilter&&(t=t.filter(this._inFilter)),[d3.min(t),d3.max(t)]}},{key:"_doInterpolation",value:function(t,e,n,i,r,o){var a=1-t,s=1-e;return n*a*s+i*t*s+r*a*e+o*t*e}}]),e}(s.a);e.a=u},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e,n){i(this,t),this.u=e,this.v=n}return r(t,[{key:"magnitude",value:function(){return Math.sqrt(this.u*this.u+this.v*this.v)}},{key:"directionTo",value:function(){var t=Math.atan2(this.u,this.v),e=t*(180/Math.PI);return e<0&&(e+=360),e}},{key:"directionFrom",value:function(){return(this.directionTo()+180)%360}}]),t}();e.a=o},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(3),s=n(0),l=n(2),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.us=t.us,n.vs=t.vs,n.grid=n._buildGrid(),n.range=n._calculateRange(),n}return o(e,t),u(e,null,[{key:"fromASCIIGrids",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=l.a.fromASCIIGrid(t,i),o=l.a.fromASCIIGrid(n,i);return new e(e._paramsFromScalarFields(r,o))}},{key:"fromGeoTIFFs",value:function(t,n){var i=l.a.fromGeoTIFF(t),r=l.a.fromGeoTIFF(n);return new e(e._paramsFromScalarFields(i,r))}},{key:"fromMultibandGeoTIFF",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,1],i=l.a.fromGeoTIFF(t,n[0]),r=l.a.fromGeoTIFF(t,n[1]);return new e(e._paramsFromScalarFields(i,r))}},{key:"_paramsFromScalarFields",value:function(t,e){return{nCols:t.nCols,nRows:t.nRows,xllCorner:t.xllCorner,yllCorner:t.yllCorner,cellSize:t.cellSize,us:t.zs,vs:e.zs}}}]),u(e,[{key:"getScalarField",value:function(t){var e=this._getFunctionFor(t),n={nCols:this.params.nCols,nRows:this.params.nRows,xllCorner:this.params.xllCorner,yllCorner:this.params.yllCorner,cellSize:this.params.cellSize,zs:this._applyOnField(e)};return new l.a(n)}},{key:"_getFunctionFor",value:function(t){return function(e,n){return new a.a(e,n)[t]()}}},{key:"_applyOnField",value:function(t){for(var e=[],n=this.numCells(),i=0;i<n;i++){var r=this.us[i],o=this.vs[i];e.push(t(r,o))}return e}},{key:"_buildGrid",value:function(){return this._arraysTo2d(this.us,this.vs,this.nRows,this.nCols)}},{key:"_arraysTo2d",value:function(t,e,n,i){for(var r=[],o=0,s=0;s<n;s++){for(var l=[],u=0;u<i;u++,o++){var c=t[o],h=e[o],f=this._isValid(c)&&this._isValid(h);l[u]=f?new a.a(c,h):null}r[s]=l}return r}},{key:"_newDataArrays",value:function(t){t.us=[],t.vs=[]}},{key:"_pushValueToArrays",value:function(t,e){t.us.push(e.u),t.vs.push(e.v)}},{key:"_makeNewFrom",value:function(t){return new e(t)}},{key:"_calculateRange",value:function(){var t=this.getCells().map(function(t){return t.value}).filter(function(t){return null!==t});this._inFilter&&(t=t.filter(this._inFilter));var e=t.map(function(t){return t.magnitude()});return[d3.min(e),d3.max(e)]}},{key:"_doInterpolation",value:function(t,e,n,i,r,o){var s=1-t,l=1-e,u=s*l,c=t*l,h=s*e,f=t*e,v=n.u*u+i.u*c+r.u*h+o.u*f,d=n.v*u+i.v*c+r.v*h+o.v*f;return new a.a(v,d)}}]),e}(s.a);e.a=c},function(t,e){L.Control.ColorBar=L.Control.extend({options:{position:"bottomleft",width:300,height:15,background:"transparent",steps:100,decimals:2,units:"uds",title:"Legend"},initialize:function(t,e,n){this.color=t,this.range=e,L.Util.setOptions(this,n)},onAdd:function(t){this._map=t;var e=L.DomUtil.create("div","leaflet-control-colorBar leaflet-bar leaflet-control");return L.DomEvent.addListener(e,"click",L.DomEvent.stopPropagation).addListener(e,"click",L.DomEvent.preventDefault),e.style.backgroundColor=this.options.background,e.style.cursor="text",e.innerHTML=this.title()+this.palette(),e},title:function(){var t=document.createElement("div");return d3.select(t).append("div").append("span").attr("class","leaflet-control-colorBar-title").text(this.options.title),t.innerHTML},palette:function(){var t=this,e=this.range[0],n=this.range[1],i=(n-e)/this.options.steps,r=d3.range(e,n+i,i),o=r.map(function(e){return{value:e,color:t.color(e)}}),a=this.options.width/o.length,s=document.createElement("div"),l=d3.select(s).append("svg").attr("width",this.options.width).attr("height",this.options.height).style("padding","10px"),u=l.selectAll("rect").data(o).enter().append("rect");return u.attr("x",function(t,e){return e*a}).attr("y",function(){return 0}).attr("height",function(){return t.options.height}).attr("width",function(){return a}).attr("fill",function(t){return t.color}),u.append("title").text(function(e){return e.value.toFixed(t.options.decimals)+" "+t.options.units}),s.innerHTML}}),L.control.colorBar=function(t,e,n){return new L.Control.ColorBar(t,e,n)}},function(t,e){L.CanvasLayer.Field=L.CanvasLayer.extend({options:{mouseMoveCursor:{value:"pointer",noValue:"default"},opacity:1,onClick:null,onMouseMove:null,inFilter:null},initialize:function(t,e){L.Util.setOptions(this,e),this._visible=!0,t&&this.setData(t)},getEvents:function(){var t=L.CanvasLayer.prototype.getEvents.call(this);return t.zoomstart=this._hideCanvas.bind(this),t.zoomend=this._showCanvas.bind(this),t},onLayerDidMount:function(){this._enableIdentify(),this._ensureCanvasAlignment()},show:function(){this._visible=!0,this._showCanvas(),this._enableIdentify()},hide:function(){this._visible=!1,this._hideCanvas(),this._disableIdentify()},isVisible:function(){return this._visible},_showCanvas:function(){this._canvas&&this._visible&&(this._canvas.style.visibility="visible")},_hideCanvas:function(){this._canvas&&(this._canvas.style.visibility="hidden")},_enableIdentify:function(){this._map.on("click",this._onClick,this),this._map.on("mousemove",this._onMouseMove,this),this.options.onClick&&this.on("click",this.options.onClick,this),this.options.onMouseMove&&this.on("mousemove",this.options.onMouseMove,this)},_disableIdentify:function(){this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this),this.options.onClick&&this.off("click",this.options.onClick,this),this.options.onMouseMove&&this.off("mousemove",this.options.onMouseMove,this)},_ensureCanvasAlignment:function(){var t=this._map.containerPointToLayerPoint([0,0]);L.DomUtil.setPosition(this._canvas,t)},onLayerWillUnmount:function(){this._disableIdentify()},needRedraw:function(){this._map&&this._field&&L.CanvasLayer.prototype.needRedraw.call(this)},onDrawLayer:function(t){throw new TypeError("Must be overriden")},setData:function(t){this.options.inFilter&&t.setFilter(this.options.inFilter),this._field=t,this.needRedraw(),this.fire("load")},setFilter:function(t){this.options.inFilter=t,this._field&&this._field.setFilter(t),this.needRedraw()},setOpacity:function(t){return this.options.opacity=t,this._canvas&&this._updateOpacity(),this},getBounds:function(){var t=this._field.extent(),e=L.latLng(t[1],t[0]),n=L.latLng(t[3],t[2]);return L.latLngBounds(e,n)},_onClick:function(t){var e=this._queryValue(t);this.fire("click",e)},_onMouseMove:function(t){var e=this._queryValue(t);this._changeCursorOn(e),this.fire("mousemove",e)},_changeCursorOn:function(t){if(this.options.mouseMoveCursor){var e=this.options.mouseMoveCursor,n=e.value,i=e.noValue;this._map.getContainer().style.cursor=null!==t.value?n:i}},_updateOpacity:function(){L.DomUtil.setOpacity(this._canvas,this.options.opacity)},_queryValue:function(t){var e=this._field?this._field.valueAt(t.latlng.lng,t.latlng.lat):null;return{latlng:t.latlng,value:e}},_getDrawingContext:function(){var t=this._canvas.getContext("2d");return t.clearRect(0,0,this._canvas.width,this._canvas.height),t}})},function(t,e){var n=function(){function t(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();L.CanvasLayer.ScalarField=L.CanvasLayer.Field.extend({options:{color:null,interpolate:!1},initialize:function(t,e){L.CanvasLayer.Field.prototype.initialize.call(this,t,e),L.Util.setOptions(this,e)},_defaultColorScale:function(){return chroma.scale(["white","black"]).domain(this._field.range)},setColor:function(t){this.options.color=t,this.needRedraw()},onDrawLayer:function(t){this.isVisible()&&(this._ensureColor(),this._updateOpacity(),this._drawImage())},_ensureColor:function(){null===this.options.color&&this.setColor(this._defaultColorScale())},_showCanvas:function(){L.CanvasLayer.Field.prototype._showCanvas.call(this),this.needRedraw()},_drawImage:function(){var t=this._getDrawingContext(),e=this._canvas.width,n=this._canvas.height,i=t.createImageData(e,n),r=i.data;this._prepareImageIn(r,e,n),t.putImageData(i,0,0)},_prepareImageIn:function(t,e,i){for(var r=this.options.interpolate?"interpolatedValueAt":"valueAt",o=0,a=0;a<i;a++)for(var s=0;s<e;s++){var l=this._map.containerPointToLatLng([s,a]),u=l.lng,c=l.lat,h=this._field[r](u,c);if(null!==h){var f=this._getColorFor(h),v=f.rgba(),d=n(v,4),p=d[0],y=d[1],_=d[2],m=d[3];t[o]=p,t[o+1]=y,t[o+2]=_,t[o+3]=parseInt(255*m)}o+=4}},_getColorFor:function(t){var e=this.options.color;return"function"==typeof e&&(e=this.options.color(t)),chroma(e)}}),L.canvasLayer.scalarField=function(t,e){return new L.CanvasLayer.ScalarField(t,e)}},function(t,e){function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}L.CanvasLayer.SimpleLonLat=L.CanvasLayer.extend({options:{color:"gray"},initialize:function(t,e){this.points=t,L.Util.setOptions(this,e)},onLayerDidMount:function(){},onLayerWillUnmount:function(){},setData:function(t){this.needRedraw()},onDrawLayer:function(t){var e=t.canvas.getContext("2d");e.clearRect(0,0,t.canvas.width,t.canvas.height),e.fillStyle=this.options.color;var n=!0,i=!1,r=void 0;try{for(var o,a=this.points[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value,l=t.layer._map.latLngToContainerPoint(s);e.beginPath(),e.fillRect(l.x,l.y,2,2),e.fill(),e.closePath(),e.stroke()}}catch(t){i=!0,r=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw r}}},getBounds:function(){var t=this.points.map(function(t){return t.lng}),e=this.points.map(function(t){return t.lat}),i=Math.min.apply(Math,n(t)),r=Math.min.apply(Math,n(e)),o=Math.max.apply(Math,n(t)),a=Math.max.apply(Math,n(e)),s=L.latLng(r,i),l=L.latLng(a,o);return L.latLngBounds(s,l)}}),L.canvasLayer.simpleLonLat=function(t,e){return new L.CanvasLayer.SimpleLonLat(t,e)}},function(t,e){L.CanvasLayer.VectorFieldAnim=L.CanvasLayer.Field.extend({options:{paths:800,color:"white",width:1,fade:.96,duration:20,maxAge:200,velocityScale:2e-4},initialize:function(t,e){L.CanvasLayer.Field.prototype.initialize.call(this,t,e),L.Util.setOptions(this,e),this.timer=null},onLayerDidMount:function(){L.CanvasLayer.Field.prototype.onLayerDidMount.call(this),this._map.on("move resize",this._stopAnimation,this)},onLayerWillUnmount:function(){L.CanvasLayer.Field.prototype.onLayerWillUnmount.call(this),this._map.off("move resize",this._stopAnimation,this),this._stopAnimation()},_hideCanvas:function(){L.CanvasLayer.Field.prototype._hideCanvas.call(this),this._stopAnimation()},onDrawLayer:function(t){function e(){r.forEach(function(t){t.age>o.options.maxAge&&(t.age=0,o._field.randomPosition(t));var e=o._field.valueAt(t.x,t.y);if(null===e)t.age=o.options.maxAge;else{var n=t.x+e.u*o.options.velocityScale,i=t.y+e.v*o.options.velocityScale;o._field.hasValueAt(n,i)?(t.xt=n,t.yt=i,t.m=e.magnitude()):t.age=o.options.maxAge}t.age+=1})}function n(){var e=i.globalCompositeOperation;i.globalCompositeOperation="destination-in",i.fillRect(0,0,i.canvas.width,i.canvas.height),i.globalCompositeOperation=e,i.fillStyle="rgba(0, 0, 0, "+o.options.fade+")",i.lineWidth=o.options.width,i.strokeStyle=o.options.color,r.forEach(function(e){o._drawParticle(t,i,e)})}if(this._field&&this.isVisible()){this._updateOpacity();var i=this._getDrawingContext(),r=this._prepareParticlePaths();this.timer=d3.timer(function(){e(),n()},this.options.duration);var o=this}},_drawParticle:function(t,e,n){var i=new L.latLng(n.y,n.x),r=new L.latLng(n.yt,n.xt);if(t.bounds.contains(i)&&n.age<=this.options.maxAge){var o=t.layer._map.latLngToContainerPoint(i),a=t.layer._map.latLngToContainerPoint(r);e.beginPath(),e.moveTo(o.x,o.y),e.lineTo(a.x,a.y),n.x=n.xt,n.y=n.yt;var s=this.options.color;"function"==typeof s&&(e.strokeStyle=s(n.m));var l=this.options.width;"function"==typeof l&&(e.lineWidth=l(n.m)),e.stroke()}},_prepareParticlePaths:function(){for(var t=[],e=0;e<this.options.paths;e++){var n=this._field.randomPosition();n.age=this._randomAge(),t.push(n)}return t},_randomAge:function(){return Math.floor(Math.random()*this.options.maxAge)},_stopAnimation:function(){this.timer&&this.timer.stop()}}),L.canvasLayer.vectorFieldAnim=function(t,e){return new L.CanvasLayer.VectorFieldAnim(t,e)}},function(t,e){L.CanvasLayer=L.Layer.extend({initialize:function(t){this._map=null,this._canvas=null,this._frame=null,this._delegate=null,L.setOptions(this,t)},delegate:function(t){return this._delegate=t,this},needRedraw:function(){return this._frame||(this._frame=L.Util.requestAnimFrame(this.drawLayer,this)),this},_onLayerDidResize:function(t){this._canvas.width=t.newSize.x,this._canvas.height=t.newSize.y},_onLayerDidMove:function(){var t=this._map.containerPointToLayerPoint([0,0]);L.DomUtil.setPosition(this._canvas,t),this.drawLayer()},getEvents:function(){var t={resize:this._onLayerDidResize,moveend:this._onLayerDidMove};return this._map.options.zoomAnimation&&L.Browser.any3d&&(t.zoomanim=this._animateZoom),t},onAdd:function(t){this._map=t,this._canvas=L.DomUtil.create("canvas","leaflet-layer"),this.tiles={};var e=this._map.getSize();this._canvas.width=e.x,this._canvas.height=e.y;var n=this._map.options.zoomAnimation&&L.Browser.any3d;L.DomUtil.addClass(this._canvas,"leaflet-zoom-"+(n?"animated":"hide")),t._panes.overlayPane.appendChild(this._canvas),t.on(this.getEvents(),this);var i=this._delegate||this;i.onLayerDidMount&&i.onLayerDidMount(),this.needRedraw()},onRemove:function(t){var e=this._delegate||this;e.onLayerWillUnmount&&e.onLayerWillUnmount(),t.getPanes().overlayPane.removeChild(this._canvas),t.off(this.getEvents(),this),this._canvas=null},addTo:function(t){return t.addLayer(this),this},LatLonToMercator:function(t){return{x:6378137*t.lng*Math.PI/180,y:6378137*Math.log(Math.tan((90+t.lat)*Math.PI/360))}},drawLayer:function(){var t=this._map.getSize(),e=this._map.getBounds(),n=this._map.getZoom(),i=this.LatLonToMercator(this._map.getCenter()),r=this.LatLonToMercator(this._map.containerPointToLatLng(this._map.getSize())),o=this._delegate||this;o.onDrawLayer&&o.onDrawLayer({layer:this,canvas:this._canvas,bounds:e,size:t,zoom:n,center:i,corner:r}),this._frame=null},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),n=this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(),t.zoom,t.center);L.DomUtil.setTransform(this._canvas,n,e)}}),L.canvasLayer=function(){return new L.CanvasLayer}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=n(1),o=n(0),a=n(2),s=n(4);window.L.Vector=i.a,window.L.Cell=r.a,window.L.Field=o.a,window.L.ScalarField=a.a,window.L.VectorField=s.a,n(10),n(8),n(6),n(7),n(9),n(5),console.log("leaflet.canvaslayer.field vx.x.x in progress...")}]);
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cell__ = __webpack_require__(1);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 *  Abstract class for a set of values (Vector | Scalar)
 *  assigned to a regular 2D-grid (lon-lat), aka 'a Raster source'
 */

var Field = function () {
    function Field(params) {
        _classCallCheck(this, Field);

        this.params = params;

        this.nCols = params['nCols'];
        this.nRows = params['nRows'];

        // ll = lower-left
        this.xllCorner = params['xllCorner'];
        this.yllCorner = params['yllCorner'];

        // ur = upper-right
        this.xurCorner = params['xllCorner'] + params['nCols'] * params['cellSize'];
        this.yurCorner = params['yllCorner'] + params['nRows'] * params['cellSize'];

        this.cellSize = params['cellSize'];

        this.grid = null; // to be defined by subclasses

        this._inFilter = null;
    }

    /**
     * Builds a grid with a value at each point (either Vector or Number)
     * Original params must include the required input values, following
     * x-ascending & y-descending order (same as in ASCIIGrid)
     * @abstract
     * @private
     * @returns {Array.<Array.<Vector|Number>>} - grid[row][column]--> Vector|Number
     */


    _createClass(Field, [{
        key: '_buildGrid',
        value: function _buildGrid() {
            throw new TypeError('Must be overriden');
        }
    }, {
        key: '_updateRange',
        value: function _updateRange() {
            this.range = this._calculateRange();
        }

        /**
         * Number of cells in the grid (rows * cols)
         * @returns {Number}
         */

    }, {
        key: 'numCells',
        value: function numCells() {
            return this.nRows * this.nCols;
        }

        /**
         * A list with every cell
         * @returns {Array<Cell>} - cells (x-ascending & y-descending order)
         */

    }, {
        key: 'getCells',
        value: function getCells() {
            var cells = [];
            for (var j = 0; j < this.nRows; j++) {
                for (var i = 0; i < this.nCols; i++) {
                    var _lonLatAtIndexes2 = this._lonLatAtIndexes(i, j),
                        _lonLatAtIndexes3 = _slicedToArray(_lonLatAtIndexes2, 2),
                        lon = _lonLatAtIndexes3[0],
                        lat = _lonLatAtIndexes3[1];

                    var center = L.latLng(lat, lon);
                    var value = this._valueAtIndexes(i, j);
                    var c = new __WEBPACK_IMPORTED_MODULE_0__Cell__["a" /* default */](center, value, this.cellSize);
                    cells.push(c); // <<
                }
            }
            return cells;
        }

        /**
         * Apply a filter function to field values
         * @param   {Function} f - boolean function
         */

    }, {
        key: 'setFilter',
        value: function setFilter(f) {
            this._inFilter = f;
            this._updateRange();
        }

        /**
         * Grid extent
         * @returns {Number[]} [xmin, ymin, xmax, ymax]
         */

    }, {
        key: 'extent',
        value: function extent() {
            return [this.xllCorner, this.yllCorner, this.xurCorner, this.yurCorner];
        }

        /**
         * Returns whether or not the grid contains the point
         * @param   {Number} lon - longitude
         * @param   {Number} lat - latitude
         * @returns {Boolean}
         */

    }, {
        key: 'contains',
        value: function contains(lon, lat) {
            return lon >= this.xllCorner && lon <= this.xurCorner && lat >= this.yllCorner && lat <= this.yurCorner;
        }

        /**
         * Returns if the grid doesn't contain the point
         * @param   {Number} lon - longitude
         * @param   {Number} lat - latitude
         * @returns {Boolean}
         */

    }, {
        key: 'notContains',
        value: function notContains(lon, lat) {
            return !this.contains(lon, lat);
        }

        //    /**
        //     * Modify the current Field applying an interpolation
        //     */
        //    interpolate() {
        //        var newField = this._cloneGrid(this.grid);
        //        for (let j = 0; j < this.nRows; j++) {
        //            for (let i = 0; i < this.nCols; i++) {
        //                let interpolated = this.interpolatedValueAtIndexes(i, j);
        //                newField[j, i] = interpolated;
        //            }
        //        }
        //        this.grid = newField;
        //    }
        //
        //    _cloneGrid(grid) {
        //        var newArray = [];
        //        for (var i = 0; i < grid.length; i++) {
        //            newArray[i] = grid[i].slice();
        //        }
        //        return newArray;
        //    }

        /**
         * Interpolated value at lon-lat coordinates (bilinear method)
         * @param   {Number} longitude
         * @param   {Number} latitude
         * @returns {Vector|Number} [u, v, magnitude]
         *                          
         * Source: https://github.com/cambecc/earth > product.js
         */

    }, {
        key: 'interpolatedValueAt',
        value: function interpolatedValueAt(lon, lat) {
            if (this.notContains(lon, lat)) return null;

            var _getDecimalIndexes2 = this._getDecimalIndexes(lon, lat),
                _getDecimalIndexes3 = _slicedToArray(_getDecimalIndexes2, 2),
                i = _getDecimalIndexes3[0],
                j = _getDecimalIndexes3[1];

            return this.interpolatedValueAtIndexes(i, j);
        }

        /**
         * Interpolated value at i-j indexes (bilinear method)
         * @param   {Number} i
         * @param   {Number} j
         * @returns {Vector|Number} [u, v, magnitude]
         *
         * Source: https://github.com/cambecc/earth > product.js
         */

    }, {
        key: 'interpolatedValueAtIndexes',
        value: function interpolatedValueAtIndexes(i, j) {
            //         1      2           After converting λ and φ to fractional grid indexes i and j, we find the
            //        fi  i   ci          four points 'G' that enclose point (i, j). These points are at the four
            //         | =1.4 |           corners specified by the floor and ceiling of i and j. For example, given
            //      ---G--|---G--- fj 8   i = 1.4 and j = 8.3, the four surrounding grid points are (1, 8), (2, 8),
            //    j ___|_ .   |           (1, 9) and (2, 9).
            //  =8.3   |      |
            //      ---G------G--- cj 9   Note that for wrapped grids, the first column is duplicated as the last
            //         |      |           column, so the index ci can be used without taking a modulo.

            var indexes = this._getFourSurroundingIndexes(i, j);

            var _indexes = _slicedToArray(indexes, 4),
                fi = _indexes[0],
                ci = _indexes[1],
                fj = _indexes[2],
                cj = _indexes[3];

            var values = this._getFourSurroundingValues(fi, ci, fj, cj);
            if (values) {
                var _values = _slicedToArray(values, 4),
                    g00 = _values[0],
                    g10 = _values[1],
                    g01 = _values[2],
                    g11 = _values[3];

                return this._doInterpolation(i - fi, j - fj, g00, g10, g01, g11);
            }
            return null;
        }

        /**
         * Get decimal indexes, clampling on borders 
         * @private
         * @param {Number} lon
         * @param {Number} lat
         * @returns {Array}    [[Description]]
         */

    }, {
        key: '_getDecimalIndexes',
        value: function _getDecimalIndexes(lon, lat) {
            var ii = (lon - this.xllCorner) / this.cellSize;
            var i = this._clampColumnIndex(ii);

            var jj = (this.yurCorner - lat) / this.cellSize;
            var j = this._clampRowIndex(jj);

            return [i, j];
        }

        /**
         * Get surrounding indexes (integer), clampling on borders
         * @private
         * @param   {Number} i - decimal index
         * @param   {Number} j - decimal index
         * @returns {Array} [fi, ci, fj, cj]
         */

    }, {
        key: '_getFourSurroundingIndexes',
        value: function _getFourSurroundingIndexes(i, j) {
            var fi = this._clampColumnIndex(Math.floor(i));
            var ci = this._clampColumnIndex(fi + 1);
            var fj = this._clampRowIndex(Math.floor(j));
            var cj = this._clampRowIndex(fj + 1);
            //console.log(fi, ci, fj, cj);
            return [fi, ci, fj, cj];
        }

        /**
         * Get four surrounding values or null if not available,
         * from 4 integer indexes
         * @private
         * @param   {Number} fi
         * @param   {Number} ci
         * @param   {Number} fj
         * @param   {Number} cj
         * @returns {Array} 
         */

    }, {
        key: '_getFourSurroundingValues',
        value: function _getFourSurroundingValues(fi, ci, fj, cj) {
            var row;
            if (row = this.grid[fj]) {
                // upper row ^^
                var g00 = row[fi]; // << left
                var g10 = row[ci]; // right >>
                if (this._isValid(g00) && this._isValid(g10) && (row = this.grid[cj])) {
                    // lower row vv
                    var g01 = row[fi]; // << left
                    var g11 = row[ci]; // right >>
                    if (this._isValid(g01) && this._isValid(g11)) {
                        return [g00, g10, g01, g11]; // 4 values found!
                    }
                }
            }
            return null;
        }

        /**
         * Nearest value at lon-lat coordinates
         * @param   {Number} longitude
         * @param   {Number} latitude
         * @returns {Vector|Number}
         */

    }, {
        key: 'valueAt',
        value: function valueAt(lon, lat) {
            if (this.notContains(lon, lat)) return null;

            var _getDecimalIndexes4 = this._getDecimalIndexes(lon, lat),
                _getDecimalIndexes5 = _slicedToArray(_getDecimalIndexes4, 2),
                i = _getDecimalIndexes5[0],
                j = _getDecimalIndexes5[1];

            var ii = Math.floor(i);
            var jj = Math.floor(j);

            var value = this._valueAtIndexes(ii, jj);
            if (this._inFilter) {
                if (!this._inFilter(value)) return null;
            }

            return value;
        }

        /**
         * Returns whether or not the field has a value at the point
         * @param   {Number} lon - longitude
         * @param   {Number} lat - latitude
         * @returns {Boolean}
         */

    }, {
        key: 'hasValueAt',
        value: function hasValueAt(lon, lat) {
            var value = this.valueAt(lon, lat);
            var hasValue = value !== null;

            var included = true;
            if (this._inFilter) {
                included = this._inFilter(value);
            }
            return hasValue && included;
        }

        /**
         * Returns if the grid has no value at the point
         * @param   {Number} lon - longitude
         * @param   {Number} lat - latitude
         * @returns {Boolean}
         */

    }, {
        key: 'notHasValueAt',
        value: function notHasValueAt(lon, lat) {
            return !this.hasValueAt(lon, lat);
        }

        /**
         * Gives a random position to 'o' inside the grid
         * @param {Object} [o] - an object (eg. a particle)
         * @returns {{x: Number, y: Number}} - object with x, y (lon, lat)
         */

    }, {
        key: 'randomPosition',
        value: function randomPosition() {
            var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var i = Math.random() * this.nCols | 0;
            var j = Math.random() * this.nRows | 0;

            o.x = this._longitudeAtX(i);
            o.y = this._latitudeAtY(j);

            return o;
        }

        /**
         * Value for grid indexes
         * @param   {Number} i - column index (integer)
         * @param   {Number} j - row index (integer)
         * @returns {Vector|Number}
         */

    }, {
        key: '_valueAtIndexes',
        value: function _valueAtIndexes(i, j) {
            return this.grid[j][i]; // <-- j,i !!
        }

        /**
         * Lon-Lat for grid indexes
         * @param   {Number} i - column index (integer)
         * @param   {Number} j - row index (integer)
         * @returns {Number[]} [lon, lat]
         */

    }, {
        key: '_lonLatAtIndexes',
        value: function _lonLatAtIndexes(i, j) {
            var lon = this._longitudeAtX(i);
            var lat = this._latitudeAtY(j);

            return [lon, lat];
        }

        /**
         * Longitude for grid-index
         * @param   {Number} i - column index (integer)
         * @returns {Number} longitude at the center of the cell
         */

    }, {
        key: '_longitudeAtX',
        value: function _longitudeAtX(i) {
            var halfPixel = this.cellSize / 2.0;
            return this.xllCorner + halfPixel + i * this.cellSize;
        }

        /**
         * Latitude for grid-index
         * @param   {Number} j - row index (integer)
         * @returns {Number} latitude at the center of the cell
         */

    }, {
        key: '_latitudeAtY',
        value: function _latitudeAtY(j) {
            var halfPixel = this.cellSize / 2.0;
            return this.yurCorner - halfPixel - j * this.cellSize;
        }

        /**
         * Apply the interpolation
         * @abstract
         * @private
         */

    }, {
        key: '_doInterpolation',
        value: function _doInterpolation(x, y, g00, g10, g01, g11) {
            throw new TypeError('Must be overriden');
        }

        /**
         * Check the column index is inside the field,
         * adjusting to min or max when needed
         * @private
         * @param   {Number} ii - decimal index
         * @returns {Number} i - inside the allowed indexes
         */

    }, {
        key: '_clampColumnIndex',
        value: function _clampColumnIndex(ii) {
            var i = ii;
            if (ii < 0) {
                i = 0;
            }
            var maxCol = this.nCols - 1;
            if (ii > maxCol) {
                i = maxCol;
            }

            return i;
        }

        /**
         * Check the row index is inside the field,
         * adjusting to min or max when needed
         * @private
         * @param   {Number} jj decimal index
         * @returns {Number} j - inside the allowed indexes
         */

    }, {
        key: '_clampRowIndex',
        value: function _clampRowIndex(jj) {
            var j = jj;
            if (jj < 0) {
                j = 0;
            }
            var maxRow = this.nRows - 1;
            if (jj > maxRow) {
                j = maxRow;
            }

            return j;
        }

        /**
         * Is valid (not 'null' nor 'undefined')
         * @private
         * @param   {Object} x object
         * @returns {Boolean}
         */

    }, {
        key: '_isValid',
        value: function _isValid(x) {
            return x !== null && x !== undefined;
        }
    }]);

    return Field;
}();

/* harmony default export */ __webpack_exports__["a"] = (Field);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  Simple regular cell in a raster
 */
var Cell = function () {

    /**
     * A simple cell with value and size
     * @param {L.LatLng} center
     * @param {Number} value
     * @param {Number} size
     */
    function Cell(center, value, size) {
        _classCallCheck(this, Cell);

        this.center = center;
        this.value = value;
        this.size = size;
    }

    _createClass(Cell, [{
        key: 'equals',
        value: function equals(anotherCell) {
            return this.center.equals(anotherCell.center) && this._equalValues(this.value, anotherCell.value) && this.size === anotherCell.size;
        }
    }, {
        key: '_equalValues',
        value: function _equalValues(value, anotherValue) {
            var type = value.constructor.name;
            var answerFor = {
                'Number': value === anotherValue,
                'Vector': value.u === anotherValue.u && value.v === anotherValue.v
            };
            return answerFor[type];
        }

        /**
         * Bounds for the cell
         * @returns {LatLngBounds}
         */

    }, {
        key: 'getBounds',
        value: function getBounds() {
            var half = this.size / 2.0;
            var cLat = this.center.lat;
            var cLng = this.center.lng;
            var ul = L.latLng([cLat + half, cLng - half]);
            var lr = L.latLng([cLat - half, cLng + half]);

            return L.latLngBounds(L.latLng(lr.lat, ul.lng), L.latLng(ul.lat, lr.lng));
        }
    }]);

    return Cell;
}();

/* harmony default export */ __webpack_exports__["a"] = (Cell);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
 * Scalar Field
 */

var ScalarField = function (_Field) {
    _inherits(ScalarField, _Field);

    _createClass(ScalarField, null, [{
        key: 'fromASCIIGrid',


        /**
         * Creates a ScalarField from the content of an ASCIIGrid file
         * @param   {String}   asc
         * @returns {ScalarField}
         */
        value: function fromASCIIGrid(asc) {
            var scaleFactor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            //console.time('ScalarField from ASC');

            var lines = asc.split('\n');

            // Header
            var n = /-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/; // any number
            var p = {
                nCols: parseInt(lines[0].match(n)),
                nRows: parseInt(lines[1].match(n)),
                xllCorner: parseFloat(lines[2].match(n)),
                yllCorner: parseFloat(lines[3].match(n)),
                cellSize: parseFloat(lines[4].match(n))
            };
            var noDataValue = lines[5].replace('NODATA_value', '').trim();

            // Data (left-right and top-down)
            var zs = []; // TODO Consider using TypedArray (& manage NO_DATA)
            for (var i = 6; i < lines.length; i++) {
                var line = lines[i].trim();
                if (line === '') break;

                var items = line.split(' ');
                var values = items.map(function (it) {
                    return it !== noDataValue ? parseFloat(it * scaleFactor) : null;
                });
                zs.push.apply(zs, _toConsumableArray(values));
            }
            p.zs = zs;

            //console.timeEnd('ScalarField from ASC');
            return new ScalarField(p);
        }

        /**
         * Creates a ScalarField from the content of a GeoTIFF file, as read by geotiff.js
         * @param   {ArrayBuffer}   data
         * @param   {Number}   bandIndex
         * @returns {ScalarField}
         */

    }, {
        key: 'fromGeoTIFF',
        value: function fromGeoTIFF(data) {
            var bandIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            //console.time('ScalarField from GeoTIFF');

            var tiff = GeoTIFF.parse(data); // geotiff.js
            var image = tiff.getImage();
            var rasters = image.readRasters();
            var tiepoint = image.getTiePoints()[0];
            var fileDirectory = image.getFileDirectory();
            var pixelScale = fileDirectory.ModelPixelScale;

            // TODO check conditions for "Not supported raster"
            var zs = rasters[bandIndex]; // left-right and top-down order

            if (fileDirectory.GDAL_NODATA) {
                var noData = parseFloat(fileDirectory.GDAL_NODATA); // TODO int values?
                // console.log(noData);
                var simpleZS = Array.from(zs); // to simple array, so null is allowed | TODO efficiency??
                zs = simpleZS.map(function (z) {
                    return z === noData ? null : z;
                });
            }

            var p = {
                nCols: image.getWidth(),
                nRows: image.getHeight(),
                xllCorner: tiepoint.x,
                yllCorner: tiepoint.y - image.getHeight() * pixelScale[0],
                cellSize: pixelScale[0],
                zs: zs
            };

            //console.timeEnd('ScalarField from GeoTIFF');
            return new ScalarField(p);
        }
    }]);

    function ScalarField(params) {
        _classCallCheck(this, ScalarField);

        var _this = _possibleConstructorReturn(this, (ScalarField.__proto__ || Object.getPrototypeOf(ScalarField)).call(this, params));

        _this.zs = params['zs'];

        _this.grid = _this._buildGrid();
        _this._updateRange();
        //console.log(`ScalarField created (${this.nCols} x ${this.nRows})`);
        return _this;
    }

    /**
     * Builds a grid with a Number at each point, from an array
     * 'zs' following x-ascending & y-descending order
     * (same as in ASCIIGrid)
     * @private
     * @returns {Array.<Array.<Number>>} - grid[row][column]--> Number
     */


    _createClass(ScalarField, [{
        key: '_buildGrid',
        value: function _buildGrid() {
            var grid = this._arrayTo2d(this.zs, this.nRows, this.nCols);
            return grid;
        }
    }, {
        key: '_arrayTo2d',
        value: function _arrayTo2d(array, nRows, nCols) {
            var grid = [];
            var p = 0;
            for (var j = 0; j < nRows; j++) {
                var row = [];
                for (var i = 0; i < nCols; i++, p++) {
                    var z = array[p];
                    row[i] = this._isValid(z) ? z : null; // <<<
                }
                grid[j] = row;
            }
            return grid;
        }
    }, {
        key: '_newDataArrays',
        value: function _newDataArrays(params) {
            params['zs'] = [];
        }
    }, {
        key: '_pushValueToArrays',
        value: function _pushValueToArrays(params, value) {
            params['zs'].push(value);
        }
    }, {
        key: '_makeNewFrom',
        value: function _makeNewFrom(params) {
            return new ScalarField(params);
        }

        /**
         * Calculate min & max values
         * @private
         * @returns {Array} - [min, max]
         */

    }, {
        key: '_calculateRange',
        value: function _calculateRange() {
            var data = this.zs;
            if (this._inFilter) {
                data = data.filter(this._inFilter);
            }
            return [d3.min(data), d3.max(data)];
        }

        /**
         * Bilinear interpolation for Number
         * https://en.wikipedia.org/wiki/Bilinear_interpolation
         * @param   {Number} x
         * @param   {Number} y
         * @param   {Number} g00
         * @param   {Number} g10
         * @param   {Number} g01
         * @param   {Number} g11
         * @returns {Number}
         */

    }, {
        key: '_doInterpolation',
        value: function _doInterpolation(x, y, g00, g10, g01, g11) {
            var rx = 1 - x;
            var ry = 1 - y;
            return g00 * rx * ry + g10 * x * ry + g01 * rx * y + g11 * x * y;
        }
    }]);

    return ScalarField;
}(__WEBPACK_IMPORTED_MODULE_0__Field__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ScalarField);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  2D Vector
 */
var Vector = function () {
    function Vector(u, v) {
        _classCallCheck(this, Vector);

        this.u = u;
        this.v = v;
    }

    /**
     * Magnitude
     * @returns {Number}
     */


    _createClass(Vector, [{
        key: "magnitude",
        value: function magnitude() {
            return Math.sqrt(this.u * this.u + this.v * this.v);
        }

        /**
         * Angle in degrees (0 to 360º) --> Towards
         * N is 0º and E is 90º
         * @returns {Number}
         */

    }, {
        key: "directionTo",
        value: function directionTo() {
            var verticalAngle = Math.atan2(this.u, this.v);
            var inDegrees = verticalAngle * (180.0 / Math.PI);
            if (inDegrees < 0) {
                inDegrees = inDegrees + 360.0;
            }
            return inDegrees;
        }

        /**
         * Angle in degrees (0 to 360º) From x-->
         * N is 0º and E is 90º
         * @returns {Number}
         */

    }, {
        key: "directionFrom",
        value: function directionFrom() {
            var a = this.directionTo();
            var opposite = (a + 180.0) % 360.0;
            return opposite;
        }

        /*
            Degrees --> text
            new Dictionary<int, string>
            {
                //{0, 23, 45, 68, 90, 113, 135, 158, 180, 203, 225, 248, 270, 293, 315, 338, 360};
                {0, 'N'},
                {23, 'NNE'},
                {45, 'NE'},
                {68, 'ENE'},
                {90, 'E'},
                {113, 'ESE'},
                {135, 'SE'},
                {158, 'SSE'},
                {180, 'S'},
                {203, 'SSW'},
                {225, 'SW'},
                {248, 'WSW'},
                {270, 'W'},
                {293, 'WNW'},
                {315, 'NW'},
                {338, 'NNW'},
                {360, 'N'}
            };
        */

    }]);

    return Vector;
}();

/* harmony default export */ __webpack_exports__["a"] = (Vector);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Field__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ScalarField__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 *  A set of vectors assigned to a regular 2D-grid (lon-lat)
 *  (e.g. a raster representing winds for a region)
 */

var VectorField = function (_Field) {
    _inherits(VectorField, _Field);

    _createClass(VectorField, null, [{
        key: 'fromASCIIGrids',


        /**
         * Creates a VectorField from the content of two ASCIIGrid files
         * @param   {String} ascU - with u-component
         * @param   {String} ascV - with v-component
         * @returns {VectorField}
         */
        value: function fromASCIIGrids(ascU, ascV) {
            var scaleFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            var u = __WEBPACK_IMPORTED_MODULE_2__ScalarField__["a" /* default */].fromASCIIGrid(ascU, scaleFactor);
            var v = __WEBPACK_IMPORTED_MODULE_2__ScalarField__["a" /* default */].fromASCIIGrid(ascV, scaleFactor);
            var p = VectorField._paramsFromScalarFields(u, v);

            return new VectorField(p);
        }

        /**
         * Creates a VectorField from the content of two different Geotiff files
         * @param   {ArrayBuffer} gtU - geotiff data with u-component (band 0)
         * @param   {ArrayBuffer} gtV - geotiff data with v-component (band 0)
         * @returns {VectorField}
         */

    }, {
        key: 'fromGeoTIFFs',
        value: function fromGeoTIFFs(gtU, gtV) {
            var u = __WEBPACK_IMPORTED_MODULE_2__ScalarField__["a" /* default */].fromGeoTIFF(gtU);
            var v = __WEBPACK_IMPORTED_MODULE_2__ScalarField__["a" /* default */].fromGeoTIFF(gtV);
            var p = VectorField._paramsFromScalarFields(u, v);

            return new VectorField(p);
        }

        /**
         * Creates a VectorField from the content of Multiband Geotiff
         * @param   {ArrayBuffer} geotiffData - multiband
         * @param   {Array} bandIndexesForUV
         * @returns {VectorField}
         */

    }, {
        key: 'fromMultibandGeoTIFF',
        value: function fromMultibandGeoTIFF(geotiffData) {
            var bandIndexesForUV = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 1];

            var u = __WEBPACK_IMPORTED_MODULE_2__ScalarField__["a" /* default */].fromGeoTIFF(geotiffData, bandIndexesForUV[0]);
            var v = __WEBPACK_IMPORTED_MODULE_2__ScalarField__["a" /* default */].fromGeoTIFF(geotiffData, bandIndexesForUV[1]);
            var p = VectorField._paramsFromScalarFields(u, v);

            return new VectorField(p);
        }

        /**
         * Build parameters for VectorField, from 2 ScalarFields.
         * No validation at all (nor interpolation) is applied, so u and v
         * must be 'compatible' from the source
         * @param   {ScalarField} u
         * @param   {ScalarField} v
         * @returns {Object} - parameters to build VectorField
         */

    }, {
        key: '_paramsFromScalarFields',
        value: function _paramsFromScalarFields(u, v) {
            var p = {
                nCols: u.nCols,
                nRows: u.nRows,
                xllCorner: u.xllCorner,
                yllCorner: u.yllCorner,
                cellSize: u.cellSize,
                us: u.zs,
                vs: v.zs
            };
            return p;
        }
    }]);

    function VectorField(params) {
        _classCallCheck(this, VectorField);

        var _this = _possibleConstructorReturn(this, (VectorField.__proto__ || Object.getPrototypeOf(VectorField)).call(this, params));

        _this.us = params['us'];
        _this.vs = params['vs'];
        _this.grid = _this._buildGrid();
        _this.range = _this._calculateRange();
        return _this;
    }

    /**
     * Get a derived field, from a computation on 
     * the VectorField
     * @param   {String} type ['magnitude' | 'directionTo' | 'directionFrom']
     * @returns {ScalarField}
     */


    _createClass(VectorField, [{
        key: 'getScalarField',
        value: function getScalarField(type) {
            var f = this._getFunctionFor(type);
            var p = {
                nCols: this.params.nCols,
                nRows: this.params.nRows,
                xllCorner: this.params.xllCorner,
                yllCorner: this.params.yllCorner,
                cellSize: this.params.cellSize,
                zs: this._applyOnField(f)
            };
            return new __WEBPACK_IMPORTED_MODULE_2__ScalarField__["a" /* default */](p);
        }
    }, {
        key: '_getFunctionFor',
        value: function _getFunctionFor(type) {
            return function (u, v) {
                var uv = new __WEBPACK_IMPORTED_MODULE_0__Vector__["a" /* default */](u, v);
                return uv[type](); // magnitude, directionTo, directionFrom
            };
        }
    }, {
        key: '_applyOnField',
        value: function _applyOnField(func) {
            var zs = [];
            var n = this.numCells();
            for (var i = 0; i < n; i++) {
                var u = this.us[i];
                var v = this.vs[i];
                zs.push(func(u, v));
            }
            return zs;
        }

        /**
         * Builds a grid with a Vector at each point, from two arrays
         * 'us' and 'vs' following x-ascending & y-descending order
         * (same as in ASCIIGrid)
         * @returns {Array.<Array.<Vector>>} - grid[row][column]--> Vector
         */

    }, {
        key: '_buildGrid',
        value: function _buildGrid() {
            var grid = this._arraysTo2d(this.us, this.vs, this.nRows, this.nCols);
            return grid;
        }
    }, {
        key: '_arraysTo2d',
        value: function _arraysTo2d(us, vs, nRows, nCols) {
            var grid = [];
            var p = 0;

            for (var j = 0; j < nRows; j++) {
                var row = [];
                for (var i = 0; i < nCols; i++, p++) {
                    var u = us[p],
                        v = vs[p];
                    var valid = this._isValid(u) && this._isValid(v);
                    row[i] = valid ? new __WEBPACK_IMPORTED_MODULE_0__Vector__["a" /* default */](u, v) : null; // <<<
                }
                grid[j] = row;
            }
            return grid;
        }
    }, {
        key: '_newDataArrays',
        value: function _newDataArrays(params) {
            params['us'] = [];
            params['vs'] = [];
        }
    }, {
        key: '_pushValueToArrays',
        value: function _pushValueToArrays(params, value) {
            //console.log(value);
            params['us'].push(value.u);
            params['vs'].push(value.v);
        }
    }, {
        key: '_makeNewFrom',
        value: function _makeNewFrom(params) {
            return new VectorField(params);
        }

        /**
         * Calculate min & max values (magnitude)
         * @private
         * @returns {Array}
         */

    }, {
        key: '_calculateRange',
        value: function _calculateRange() {
            // TODO make a clearer method for getting these vectors...
            var vectors = this.getCells().map(function (pt) {
                return pt.value;
            }).filter(function (v) {
                return v !== null;
            });

            if (this._inFilter) {
                vectors = vectors.filter(this._inFilter);
            }

            // TODO check memory crash with high num of vectors!
            var magnitudes = vectors.map(function (v) {
                return v.magnitude();
            });
            var min = d3.min(magnitudes);
            var max = d3.max(magnitudes);

            return [min, max];
        }

        /**
         * Bilinear interpolation for Vector
         * https://en.wikipedia.org/wiki/Bilinear_interpolation
         * @param   {Number} x
         * @param   {Number} y
         * @param   {Number[]} g00
         * @param   {Number[]} g10
         * @param   {Number[]} g01
         * @param   {Number[]} g11
         * @returns {Vector}
         */

    }, {
        key: '_doInterpolation',
        value: function _doInterpolation(x, y, g00, g10, g01, g11) {
            var rx = 1 - x;
            var ry = 1 - y;
            var a = rx * ry,
                b = x * ry,
                c = rx * y,
                d = x * y;
            var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
            var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
            return new __WEBPACK_IMPORTED_MODULE_0__Vector__["a" /* default */](u, v);
        }
    }]);

    return VectorField;
}(__WEBPACK_IMPORTED_MODULE_1__Field__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (VectorField);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 *   Control for a simple legend with a colorbar
 *   References:
 *      - http://jsfiddle.net/ramnathv/g8stqcf6/
 *      - http://jsfiddle.net/vis4/cYLZH/
 */
L.Control.ColorBar = L.Control.extend({
    options: {
        position: 'bottomleft',
        width: 300,
        height: 15,
        background: 'transparent',
        steps: 100,
        decimals: 2,
        units: 'uds', // ej: m/s
        title: 'Legend' // ej: Ocean Currents
    },

    initialize: function initialize(color, range, options) {
        this.color = color; // 'chromajs' scale function
        this.range = range; // [min, max]
        L.Util.setOptions(this, options);
    },

    onAdd: function onAdd(map) {
        this._map = map;
        var div = L.DomUtil.create('div', 'leaflet-control-colorBar leaflet-bar leaflet-control');
        L.DomEvent.addListener(div, 'click', L.DomEvent.stopPropagation).addListener(div, 'click', L.DomEvent.preventDefault);
        div.style.backgroundColor = this.options.background;
        div.style.cursor = 'text';
        div.innerHTML = this.title() + this.palette();
        return div;
    },

    title: function title() {
        var d = document.createElement('div');
        d3.select(d).append('div').append('span').attr('class', 'leaflet-control-colorBar-title').text(this.options.title);
        return d.innerHTML;
    },

    palette: function palette() {
        var _this = this;

        // data preparation
        var min = this.range[0];
        var max = this.range[1];
        var delta = (max - min) / this.options.steps;
        var data = d3.range(min, max + delta, delta);
        var colorPerValue = data.map(function (d) {
            return {
                'value': d,
                'color': _this.color(d)
            };
        });

        // div.contenedor > svg
        var w = this.options.width / colorPerValue.length;
        var d = document.createElement('div');
        var svg = d3.select(d).append('svg').attr('width', this.options.width).attr('height', this.options.height).style('padding', '10px'); //

        // n color-bars
        var buckets = svg.selectAll('rect').data(colorPerValue).enter().append('rect');
        buckets.attr('x', function (d, i) {
            return i * w;
        }).attr('y', function () {
            return 0;
        }).attr('height', function () {
            return _this.options.height;
        } /*w * 4*/).attr('width', function () {
            return w;
        }).attr('fill', function (d) {
            return d.color;
        });

        buckets.append('title').text(function (d) {
            return d.value.toFixed(_this.options.decimals) + ' ' + _this.options.units;
        });
        return d.innerHTML;
    }
});

L.control.colorBar = function (color, range, options) {
    return new L.Control.ColorBar(color, range, options);
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Abstract class for a Field layer on canvas, aka 'a Raster layer'
 * (ScalarField or a VectorField)
 */
L.CanvasLayer.Field = L.CanvasLayer.extend({

    options: {
        mouseMoveCursor: {
            value: 'pointer',
            noValue: 'default'
        },
        opacity: 1,
        onClick: null,
        onMouseMove: null,
        inFilter: null
    },

    initialize: function initialize(field, options) {
        L.Util.setOptions(this, options);
        this._visible = true;
        if (field) {
            this.setData(field);
        }
    },

    getEvents: function getEvents() {
        var events = L.CanvasLayer.prototype.getEvents.call(this);
        events.zoomstart = this._hideCanvas.bind(this);
        events.zoomend = this._showCanvas.bind(this);
        return events;
    },

    onLayerDidMount: function onLayerDidMount() {
        this._enableIdentify();
        this._ensureCanvasAlignment();
    },

    show: function show() {
        this._visible = true;
        this._showCanvas();
        this._enableIdentify();
    },
    hide: function hide() {
        this._visible = false;
        this._hideCanvas();
        this._disableIdentify();
    },
    isVisible: function isVisible() {
        return this._visible;
    },
    _showCanvas: function _showCanvas() {
        if (this._canvas && this._visible) {
            this._canvas.style.visibility = 'visible';
        }
    },
    _hideCanvas: function _hideCanvas() {
        if (this._canvas) {
            this._canvas.style.visibility = 'hidden';
        }
    },
    _enableIdentify: function _enableIdentify() {
        this._map.on('click', this._onClick, this);
        this._map.on('mousemove', this._onMouseMove, this);

        this.options.onClick && this.on('click', this.options.onClick, this);
        this.options.onMouseMove && this.on('mousemove', this.options.onMouseMove, this);
    },
    _disableIdentify: function _disableIdentify() {
        this._map.off('click', this._onClick, this);
        this._map.off('mousemove', this._onMouseMove, this);

        this.options.onClick && this.off('click', this.options.onClick, this);
        this.options.onMouseMove && this.off('mousemove', this.options.onMouseMove, this);
    },
    _ensureCanvasAlignment: function _ensureCanvasAlignment() {
        var topLeft = this._map.containerPointToLayerPoint([0, 0]);
        L.DomUtil.setPosition(this._canvas, topLeft);
    },


    onLayerWillUnmount: function onLayerWillUnmount() {
        this._disableIdentify();
    },

    needRedraw: function needRedraw() {
        if (this._map && this._field) {
            L.CanvasLayer.prototype.needRedraw.call(this);
        }
    },


    onDrawLayer: function onDrawLayer(viewInfo) {
        throw new TypeError('Must be overriden');
    },

    setData: function setData(field) {
        this.options.inFilter && field.setFilter(this.options.inFilter);
        this._field = field;
        this.needRedraw();
        this.fire('load');
    },

    setFilter: function setFilter(f) {
        this.options.inFilter = f;
        this._field && this._field.setFilter(f);
        this.needRedraw();
    },

    setOpacity: function setOpacity(opacity) {
        this.options.opacity = opacity;

        if (this._canvas) {
            this._updateOpacity();
        }
        return this;
    },

    getBounds: function getBounds() {
        var bb = this._field.extent();
        var southWest = L.latLng(bb[1], bb[0]),
            northEast = L.latLng(bb[3], bb[2]);
        var bounds = L.latLngBounds(southWest, northEast);
        return bounds;
    },

    _onClick: function _onClick(e) {
        var v = this._queryValue(e);
        this.fire('click', v);
    },

    _onMouseMove: function _onMouseMove(e) {
        var v = this._queryValue(e);
        this._changeCursorOn(v);
        this.fire('mousemove', v);
    },

    _changeCursorOn: function _changeCursorOn(v) {
        if (!this.options.mouseMoveCursor) return;

        var _options$mouseMoveCur = this.options.mouseMoveCursor,
            value = _options$mouseMoveCur.value,
            noValue = _options$mouseMoveCur.noValue;

        var style = this._map.getContainer().style;
        style.cursor = v.value !== null ? value : noValue;
    },

    _updateOpacity: function _updateOpacity() {
        L.DomUtil.setOpacity(this._canvas, this.options.opacity);
    },

    _queryValue: function _queryValue(e) {
        var v = this._field ? this._field.valueAt(e.latlng.lng, e.latlng.lat) : null;
        var result = {
            latlng: e.latlng,
            value: v
        };
        return result;
    },

    _getDrawingContext: function _getDrawingContext() {
        var g = this._canvas.getContext('2d');
        g.clearRect(0, 0, this._canvas.width, this._canvas.height);
        return g;
    }

});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * ScalarField on canvas (a 'Raster')
 */
L.CanvasLayer.ScalarField = L.CanvasLayer.Field.extend({

    options: {
        color: null, // function colorFor(value) [e.g. chromajs.scale],
        interpolate: false // Change to use interpolation
    },

    initialize: function initialize(scalarField, options) {
        L.CanvasLayer.Field.prototype.initialize.call(this, scalarField, options);
        L.Util.setOptions(this, options);
    },

    _defaultColorScale: function _defaultColorScale() {
        return chroma.scale(['white', 'black']).domain(this._field.range);
    },

    setColor: function setColor(f) {
        this.options.color = f;
        this.needRedraw();
    },


    onDrawLayer: function onDrawLayer(viewInfo) {
        if (!this.isVisible()) return;
        //console.time('onDrawLayer');
        this._ensureColor();
        this._updateOpacity();
        this._drawImage();
        //console.timeEnd('onDrawLayer');
    },

    _ensureColor: function _ensureColor() {
        if (this.options.color === null) {
            this.setColor(this._defaultColorScale());
        }
    },

    _showCanvas: function _showCanvas() {
        L.CanvasLayer.Field.prototype._showCanvas.call(this);
        this.needRedraw(); // TODO check spurious redraw (e.g. hide/show without moving map)
    },


    /**
     * Draws the field in an ImageData and applying it with putImageData.
     * Used as a reference: http://geoexamples.com/d3-raster-tools-docs/code_samples/raster-pixels-page.html
     */
    _drawImage: function _drawImage() {
        var ctx = this._getDrawingContext();
        var width = this._field.nCols;
        var height = this._canvas.nRows;

        var img = ctx.createImageData(width, height);
        var data = img.data;

        this._prepareImageIn(data, width, height);
        ctx.putImageData(img, 0, 0);
    },

    /**
     * Prepares the image in data, as array with RGBAs
     * [R1, G1, B1, A1, R2, G2, B2, A2...]
     * @private
     * @param {[[Type]]} data   [[Description]]
     * @param {Numver} width
     * @param {Number} height
     */
    _prepareImageIn: function _prepareImageIn(data, width, height) {
        var f = this.options.interpolate ? 'interpolatedValueAt' : 'valueAt';

        var pos = 0;
        for (var j = 0; j < height; j++) {
            for (var i = 0; i < width; i++) {
                /*
                let pointCoords = this._map.containerPointToLatLng([i, j]);
                let lon = pointCoords.lng;
                let lat = pointCoords.lat;
                  let v = this._field[f](lon, lat); // 'valueAt' | 'interpolatedValueAt' || TODO check some 'artifacts'
                */
                var v = this._field._valueAtIndexes(i, j);
                if (v !== null) {
                    var color = this._getColorFor(v);

                    var _color$rgba = color.rgba(),
                        _color$rgba2 = _slicedToArray(_color$rgba, 4),
                        R = _color$rgba2[0],
                        G = _color$rgba2[1],
                        B = _color$rgba2[2],
                        A = _color$rgba2[3];

                    data[pos] = R;
                    data[pos + 1] = G;
                    data[pos + 2] = B;
                    data[pos + 3] = parseInt(A * 255); // not percent in alpha but hex 0-255
                }
                pos = pos + 4;
            }
        }
    },


    /**
     * Gets a chroma color for a pixel value, according to 'options.color'
     */
    _getColorFor: function _getColorFor(v) {
        var c = this.options.color; // e.g. for a constant 'red'
        if (typeof c === 'function') {
            c = this.options.color(v);
        }
        var color = chroma(c); // to be more flexible, a chroma color object is always created || TODO improve efficiency
        return color;
    }
});

L.canvasLayer.scalarField = function (scalarField, options) {
    return new L.CanvasLayer.ScalarField(scalarField, options);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 *  Simple layer with lon-lat points
 *
 *  TODO rename to SimplePoint?
 */
L.CanvasLayer.SimpleLonLat = L.CanvasLayer.extend({

    options: {
        color: 'gray'
    },

    initialize: function initialize(points, options) {
        this.points = points;
        L.Util.setOptions(this, options);
    },

    onLayerDidMount: function onLayerDidMount() {
        // -- prepare custom drawing
    },

    onLayerWillUnmount: function onLayerWillUnmount() {
        // -- custom cleanup
    },

    setData: function setData(data) {
        // -- custom data set
        this.needRedraw(); // -- call to drawLayer
    },

    onDrawLayer: function onDrawLayer(viewInfo) {
        // canvas preparation
        var g = viewInfo.canvas.getContext('2d');
        g.clearRect(0, 0, viewInfo.canvas.width, viewInfo.canvas.height);
        g.fillStyle = this.options.color;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = this.points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var point = _step.value;

                var p = viewInfo.layer._map.latLngToContainerPoint(point);
                g.beginPath();
                //g.arc(p.x, p.y, 1, 0, Math.PI * 2); // circle | TODO style 'function' as parameter?
                g.fillRect(p.x, p.y, 2, 2); //simple point
                g.fill();
                g.closePath();
                g.stroke();
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    getBounds: function getBounds() {
        // TODO: bounding with points...
        var xs = this.points.map(function (pt) {
            return pt.lng;
        });
        var ys = this.points.map(function (pt) {
            return pt.lat;
        });

        var xmin = Math.min.apply(Math, _toConsumableArray(xs));
        var ymin = Math.min.apply(Math, _toConsumableArray(ys));
        var xmax = Math.max.apply(Math, _toConsumableArray(xs));
        var ymax = Math.max.apply(Math, _toConsumableArray(ys));

        var southWest = L.latLng(ymin, xmin),
            northEast = L.latLng(ymax, xmax);
        var bounds = L.latLngBounds(southWest, northEast); // TODO FIX ERROR ? half-pixel?
        return bounds;
    }

});

L.canvasLayer.simpleLonLat = function (lonslats, options) {
    return new L.CanvasLayer.SimpleLonLat(lonslats, options);
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Animated VectorField on canvas
 */
L.CanvasLayer.VectorFieldAnim = L.CanvasLayer.Field.extend({

    options: {
        paths: 800,
        color: 'white', // html-color | function colorFor(value) [e.g. chromajs.scale]
        width: 1.0, // number | function widthFor(value)
        fade: 0.96, // 0 to 1
        duration: 20, // milliseconds per 'frame'
        maxAge: 200, // number of maximum frames per path
        velocityScale: 1 / 5000
    },

    initialize: function initialize(vectorField, options) {
        L.CanvasLayer.Field.prototype.initialize.call(this, vectorField, options);
        L.Util.setOptions(this, options);

        this.timer = null;
    },

    onLayerDidMount: function onLayerDidMount() {
        L.CanvasLayer.Field.prototype.onLayerDidMount.call(this);
        this._map.on('move resize', this._stopAnimation, this);
    },

    onLayerWillUnmount: function onLayerWillUnmount() {
        L.CanvasLayer.Field.prototype.onLayerWillUnmount.call(this);
        this._map.off('move resize', this._stopAnimation, this);
        this._stopAnimation();
    },

    _hideCanvas: function _showCanvas() {
        L.CanvasLayer.Field.prototype._hideCanvas.call(this);
        this._stopAnimation();
    },

    onDrawLayer: function onDrawLayer(viewInfo) {
        if (!this._field || !this.isVisible()) return;

        this._updateOpacity();

        var ctx = this._getDrawingContext();
        var paths = this._prepareParticlePaths();

        this.timer = d3.timer(function () {
            _moveParticles();
            _drawParticles();
        }, this.options.duration);

        var self = this;

        /**
         * Builds the paths, adding 'particles' on each animation step, considering
         * their properties (age / position source > target)
         */
        function _moveParticles() {
            // let screenFactor = 1 / self._map.getZoom(); // consider using a 'screenFactor' to ponderate velocityScale
            paths.forEach(function (par) {
                if (par.age > self.options.maxAge) {
                    // restart, on a random x,y
                    par.age = 0;
                    self._field.randomPosition(par);
                }

                var vector = self._field.valueAt(par.x, par.y);
                if (vector === null) {
                    par.age = self.options.maxAge;
                } else {
                    // the next point will be...
                    var xt = par.x + vector.u * self.options.velocityScale; //* screenFactor;
                    var yt = par.y + vector.v * self.options.velocityScale; //* screenFactor;

                    if (self._field.hasValueAt(xt, yt)) {
                        par.xt = xt;
                        par.yt = yt;
                        par.m = vector.magnitude();
                    } else {
                        // not visible anymore...
                        par.age = self.options.maxAge;
                    }
                }
                par.age += 1;
            });
        }

        /**
         * Draws the paths on each step
         */
        function _drawParticles() {
            // Previous paths...
            var prev = ctx.globalCompositeOperation;
            ctx.globalCompositeOperation = 'destination-in';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            //ctx.globalCompositeOperation = 'source-over';
            ctx.globalCompositeOperation = prev;

            // fading paths...
            ctx.fillStyle = 'rgba(0, 0, 0, ' + self.options.fade + ')';
            ctx.lineWidth = self.options.width;
            ctx.strokeStyle = self.options.color;

            // New paths
            paths.forEach(function (par) {
                self._drawParticle(viewInfo, ctx, par);
            });
        }
    },

    _drawParticle: function _drawParticle(viewInfo, ctx, par) {
        var source = new L.latLng(par.y, par.x);
        var target = new L.latLng(par.yt, par.xt);

        if (viewInfo.bounds.contains(source) && par.age <= this.options.maxAge) {
            var pA = viewInfo.layer._map.latLngToContainerPoint(source);
            var pB = viewInfo.layer._map.latLngToContainerPoint(target);

            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);

            // next-step movement
            par.x = par.xt;
            par.y = par.yt;

            // colormap vs. simple color
            var color = this.options.color;
            if (typeof color == 'function') {
                ctx.strokeStyle = color(par.m);
            }

            var width = this.options.width;
            if (typeof width == 'function') {
                ctx.lineWidth = width(par.m);
            }

            ctx.stroke();
        }
    },


    _prepareParticlePaths: function _prepareParticlePaths() {
        var paths = [];

        for (var i = 0; i < this.options.paths; i++) {
            var p = this._field.randomPosition();
            p.age = this._randomAge();
            paths.push(p);
        }
        return paths;
    },

    _randomAge: function _randomAge() {
        return Math.floor(Math.random() * this.options.maxAge);
    },

    _stopAnimation: function _stopAnimation() {
        if (this.timer) {
            this.timer.stop();
        }
    }

});

L.canvasLayer.vectorFieldAnim = function (vectorField, options) {
    return new L.CanvasLayer.VectorFieldAnim(vectorField, options);
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
  1.0.1 (downloaded from https://github.com/Sumbera/gLayers.Leaflet/releases/tag/v1.0.1)

  Generic  Canvas Layer for leaflet 0.7 and 1.0-rc,
  copyright Stanislav Sumbera,  2016 , sumbera.com , license MIT
  originally created and motivated by L.CanvasOverlay  available here: https://gist.github.com/Sumbera/11114288
*/

L.CanvasLayer = L.Layer.extend({
    // -- initialized is called on prototype
    initialize: function initialize(options) {
        this._map = null;
        this._canvas = null;
        this._frame = null;
        this._delegate = null;
        L.setOptions(this, options);
    },

    delegate: function delegate(del) {
        this._delegate = del;
        return this;
    },

    needRedraw: function needRedraw() {
        if (!this._frame) {
            this._frame = L.Util.requestAnimFrame(this.drawLayer, this);
        }
        return this;
    },

    //-------------------------------------------------------------
    _onLayerDidResize: function _onLayerDidResize(resizeEvent) {
        this._canvas.width = resizeEvent.newSize.x;
        this._canvas.height = resizeEvent.newSize.y;
    },
    //-------------------------------------------------------------
    _onLayerDidMove: function _onLayerDidMove() {
        var topLeft = this._map.containerPointToLayerPoint([0, 0]);
        L.DomUtil.setPosition(this._canvas, topLeft);
        this.drawLayer();
    },
    //-------------------------------------------------------------
    getEvents: function getEvents() {
        var events = {
            resize: this._onLayerDidResize,
            moveend: this._onLayerDidMove
        };
        if (this._map.options.zoomAnimation && L.Browser.any3d) {
            events.zoomanim = this._animateZoom;
        }

        return events;
    },
    //-------------------------------------------------------------
    onAdd: function onAdd(map) {
        this._map = map;
        this._canvas = L.DomUtil.create('canvas', 'leaflet-layer');
        this.tiles = {};

        var size = this._map.getSize();
        this._canvas.width = size.x;
        this._canvas.height = size.y;

        var animated = this._map.options.zoomAnimation && L.Browser.any3d;
        L.DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));

        map._panes.overlayPane.appendChild(this._canvas);

        map.on(this.getEvents(), this);

        var del = this._delegate || this;
        del.onLayerDidMount && del.onLayerDidMount(); // -- callback

        this.needRedraw();
    },

    //-------------------------------------------------------------
    onRemove: function onRemove(map) {
        var del = this._delegate || this;
        del.onLayerWillUnmount && del.onLayerWillUnmount(); // -- callback


        map.getPanes().overlayPane.removeChild(this._canvas);

        map.off(this.getEvents(), this);

        this._canvas = null;
    },

    //------------------------------------------------------------
    addTo: function addTo(map) {
        map.addLayer(this);
        return this;
    },
    // --------------------------------------------------------------------------------
    LatLonToMercator: function LatLonToMercator(latlon) {
        return {
            x: latlon.lng * 6378137 * Math.PI / 180,
            y: Math.log(Math.tan((90 + latlon.lat) * Math.PI / 360)) * 6378137
        };
    },

    //------------------------------------------------------------------------------
    drawLayer: function drawLayer() {
        // -- todo make the viewInfo properties  flat objects.
        var size = this._map.getSize();
        var bounds = this._map.getBounds();
        var zoom = this._map.getZoom();

        var center = this.LatLonToMercator(this._map.getCenter());
        var corner = this.LatLonToMercator(this._map.containerPointToLatLng(this._map.getSize()));

        var del = this._delegate || this;
        del.onDrawLayer && del.onDrawLayer({
            layer: this,
            canvas: this._canvas,
            bounds: bounds,
            size: size,
            zoom: zoom,
            center: center,
            corner: corner
        });
        this._frame = null;
    },

    //------------------------------------------------------------------------------
    _animateZoom: function _animateZoom(e) {
        var scale = this._map.getZoomScale(e.zoom);
        var offset = this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center);

        L.DomUtil.setTransform(this._canvas, offset, scale);
    }
});

L.canvasLayer = function () {
    return new L.CanvasLayer();
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cell_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Field_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ScalarField_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VectorField_js__ = __webpack_require__(4);
// base

window.L.Vector = __WEBPACK_IMPORTED_MODULE_0__Vector_js__["a" /* default */];


window.L.Cell = __WEBPACK_IMPORTED_MODULE_1__Cell_js__["a" /* default */];


window.L.Field = __WEBPACK_IMPORTED_MODULE_2__Field_js__["a" /* default */];


window.L.ScalarField = __WEBPACK_IMPORTED_MODULE_3__ScalarField_js__["a" /* default */];


window.L.VectorField = __WEBPACK_IMPORTED_MODULE_4__VectorField_js__["a" /* default */];

// layer
__webpack_require__(10);
__webpack_require__(8);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(9);

// control
__webpack_require__(5);

console.log('leaflet.canvaslayer.field vx.x.x in progress...');

/***/ })
/******/ ]);
>>>>>>> Stashed changes
