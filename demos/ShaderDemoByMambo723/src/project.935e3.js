window.__require=function t(e,r,o){function i(c,s){if(!r[c]){if(!e[c]){var u=c.split("/");if(u=u[u.length-1],!e[u]){var a="function"==typeof __require&&__require;if(!s&&a)return a(u,!0);if(n)return n(u,!0);throw new Error("Cannot find module '"+c+"'")}}var p=r[c]={exports:{}};e[c][0].call(p.exports,function(t){return i(e[c][1][t]||t)},p,p.exports,t,e,r,o)}return r[c].exports}for(var n="function"==typeof __require&&__require,c=0;c<o.length;c++)i(o[c]);return i}({Demo:[function(t,e,r){"use strict";cc._RF.push(e,"879927DKaFBJY72azgoNc+a","Demo");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../resources/Shader/SpriteWater/SpriteWater"),c=t("../resources/Shader/SpriteDissolve/SpriteDissolve"),s=t("../resources/Shader/SpriteGaussBlurs/SpriteGaussBlurs"),u=t("../resources/Shader/SpriteFluxay/SpriteFluxay"),a=t("../resources/Shader/SpriteTransfer/SpriteTransfer"),p=t("../resources/Shader/SpriteSearchLight/SpriteSearchLight"),f=t("../resources/Shader/SpriteBlurs/SpriteBlurs"),l=t("../resources/Shader/SpriteBlursCircle/SpriteBlursCircle"),h=t("../resources/Shader/SpriteGaussBlursCircle/SpriteGaussBlursCircle"),d=cc._decorator,_=d.ccclass,y=d.property,S=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bg=null,e.camera=null,e.targetSpr=null,e}return o(e,t),e.prototype.onLoad=function(){var t=new cc.RenderTexture;t.initWithSize(cc.winSize.width,cc.winSize.height),this.targetSpr.spriteFrame.setTexture(t),this.camera.targetTexture=t},e.prototype.start=function(){var t=this.bg.getComponent(n.default);t&&(t.speed=.5,t.play=!0);var e=this.bg.getComponent(c.default);e&&(e.speed=.3,e.play=!0);var r=this.bg.getComponent(s.default);r&&(r.bluramount=.02,r.isBlurs=!0);var o=this.bg.getComponent(u.default);o&&(o.speed=.5,o.play=!0);var i=this.bg.getComponent(a.default);i&&(i.speed=.5,i.play=!0);var d=this.bg.getComponent(p.default);d&&(d.radius=300);var _=this.bg.getComponent(f.default);_&&(_.bluramount=.02,_.isBlurs=!0);var y=this.bg.getComponent(l.default);y&&(y.radius=300);var S=this.bg.getComponent(h.default);S&&(S.radius=400)},i([y(cc.Sprite)],e.prototype,"bg",void 0),i([y(cc.Camera)],e.prototype,"camera",void 0),i([y(cc.Sprite)],e.prototype,"targetSpr",void 0),e=i([_],e)}(cc.Component);r.default=S,cc._RF.pop()},{"../resources/Shader/SpriteBlurs/SpriteBlurs":"SpriteBlurs","../resources/Shader/SpriteBlursCircle/SpriteBlursCircle":"SpriteBlursCircle","../resources/Shader/SpriteDissolve/SpriteDissolve":"SpriteDissolve","../resources/Shader/SpriteFluxay/SpriteFluxay":"SpriteFluxay","../resources/Shader/SpriteGaussBlurs/SpriteGaussBlurs":"SpriteGaussBlurs","../resources/Shader/SpriteGaussBlursCircle/SpriteGaussBlursCircle":"SpriteGaussBlursCircle","../resources/Shader/SpriteSearchLight/SpriteSearchLight":"SpriteSearchLight","../resources/Shader/SpriteTransfer/SpriteTransfer":"SpriteTransfer","../resources/Shader/SpriteWater/SpriteWater":"SpriteWater"}],SpineHighLight:[function(t,e,r){"use strict";cc._RF.push(e,"eaf19s+b3JLNqlyJeytWz/k","SpineHighLight");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,s=n.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mat=null,e._addedColor=0,e}return o(e,t),Object.defineProperty(e.prototype,"Skeleton",{get:function(){return this.getComponent(sp.Skeleton)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Material",{get:function(){if(this.Skeleton)return this.Skeleton.getMaterial(0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isHighLight",{get:function(){return.2==this._addedColor},set:function(t){(this._addedColor=t?.2:0,this.Skeleton)&&this.Skeleton.getMaterial(0).effect.setProperty("addedColor",this._addedColor)},enumerable:!0,configurable:!0}),e.prototype.onLoad=function(){this.Skeleton&&(this.Skeleton.setMaterial(0,this.mat),this.isHighLight=!1)},i([s(cc.Material)],e.prototype,"mat",void 0),e=i([c],e)}(cc.Component);r.default=u,cc._RF.pop()},{}],SpriteBlursCircle:[function(t,e,r){"use strict";cc._RF.push(e,"1976aDZlJNP84bW4RmKGOdb","SpriteBlursCircle");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../SpriteShaderBase"),c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._mouse=cc.v2(0,0),e._radius=0,e}return o(e,t),Object.defineProperty(e.prototype,"mouse",{get:function(){return this._mouse},set:function(t){this._mouse=t,this.Material&&this.Material.effect.setProperty("mouse",this._mouse)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},set:function(t){this._radius=Math.min(Math.min(this.node.width,this.node.height),t),this.Material&&this.Material.effect.setProperty("radius",this._radius)},enumerable:!0,configurable:!0}),e.prototype.initUniformLocation=function(){var t=this;this.Material.effect.setProperty("resolution",cc.v2(this.node.width,this.node.height)),this.mouse=this._mouse,this.radius=this._radius,this.node.on(cc.Node.EventType.TOUCH_START,function(e){var r=t.node.convertToNodeSpaceAR(e.getLocation());t.mouse=r},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){var r=t.node.convertToNodeSpaceAR(e.getLocation());t.mouse=r},this)},e=i([s],e)}(n.default));r.default=u,cc._RF.pop()},{"../SpriteShaderBase":"SpriteShaderBase"}],SpriteBlurs:[function(t,e,r){"use strict";cc._RF.push(e,"a70efjzV4xEzocoGL2G61Aw","SpriteBlurs");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../SpriteShaderBase"),c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._bluramount=.1,e._isBlurs=!1,e}return o(e,t),Object.defineProperty(e.prototype,"bluramount",{get:function(){return this._bluramount},set:function(t){this._bluramount=t,this.Material&&this.Material.effect.setProperty("bluramount",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isBlurs",{get:function(){return this._isBlurs},set:function(t){this._isBlurs=t,this.Material&&this.Material.effect.setProperty("isblurs",t?1:0)},enumerable:!0,configurable:!0}),e.prototype.initUniformLocation=function(){this.bluramount=this._bluramount,this.isBlurs=this._isBlurs},e=i([s],e)}(n.default));r.default=u,cc._RF.pop()},{"../SpriteShaderBase":"SpriteShaderBase"}],SpriteDissolve:[function(t,e,r){"use strict";cc._RF.push(e,"0e972bAan5N9rQq2hiXY2ma","SpriteDissolve");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../SpriteShaderBase"),c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._time=0,e._speed=1,e.play=!1,e}return o(e,t),Object.defineProperty(e.prototype,"time",{get:function(){return this._time},set:function(t){this._time=t,this.Material&&this.Material.effect.setProperty("iTime",this._time)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=Math.min(Math.max(t,0),1)},enumerable:!0,configurable:!0}),e.prototype.update=function(t){this.play&&(this.time+=t*this._speed)},e.prototype.initUniformLocation=function(){this.time=this._time},e=i([s],e)}(n.default));r.default=u,cc._RF.pop()},{"../SpriteShaderBase":"SpriteShaderBase"}],SpriteFluxay:[function(t,e,r){"use strict";cc._RF.push(e,"79c82sHKhpCNLnbzRYILUbp","SpriteFluxay");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../SpriteShaderBase"),c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._time=0,e._speed=1,e.play=!1,e}return o(e,t),Object.defineProperty(e.prototype,"time",{get:function(){return this._time},set:function(t){this._time=t,this.Material&&this.Material.effect.setProperty("iTime",this._time)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=Math.min(Math.max(t,0),1)},enumerable:!0,configurable:!0}),e.prototype.update=function(t){this.play&&(this.time+=t*this._speed)},e.prototype.initUniformLocation=function(){this.time=this._time},e=i([s],e)}(n.default));r.default=u,cc._RF.pop()},{"../SpriteShaderBase":"SpriteShaderBase"}],SpriteGaussBlursCircle:[function(t,e,r){"use strict";cc._RF.push(e,"305652ohe5IaILVBaIu9v9W","SpriteGaussBlursCircle");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../SpriteShaderBase"),c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._mouse=cc.v2(0,0),e._radius=0,e}return o(e,t),Object.defineProperty(e.prototype,"mouse",{get:function(){return this._mouse},set:function(t){this._mouse=t,this.Material&&this.Material.effect.setProperty("mouse",this._mouse)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},set:function(t){this._radius=Math.min(Math.min(this.node.width,this.node.height),t),this.Material&&this.Material.effect.setProperty("radius",this._radius)},enumerable:!0,configurable:!0}),e.prototype.initUniformLocation=function(){var t=this;this.Material.effect.setProperty("resolution",cc.v2(this.node.width,this.node.height)),this.mouse=this._mouse,this.radius=this._radius,this.node.on(cc.Node.EventType.TOUCH_START,function(e){var r=t.node.convertToNodeSpaceAR(e.getLocation());t.mouse=r},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){var r=t.node.convertToNodeSpaceAR(e.getLocation());t.mouse=r},this)},e=i([s],e)}(n.default));r.default=u,cc._RF.pop()},{"../SpriteShaderBase":"SpriteShaderBase"}],SpriteGaussBlurs:[function(t,e,r){"use strict";cc._RF.push(e,"4ab43xsSoNOWrdG3MRY9LWe","SpriteGaussBlurs");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../SpriteShaderBase"),c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._bluramount=.05,e._isBlurs=!1,e}return o(e,t),Object.defineProperty(e.prototype,"bluramount",{get:function(){return this._bluramount},set:function(t){this._bluramount=t,this.Material&&this.Material.effect.setProperty("bluramount",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isBlurs",{get:function(){return this._isBlurs},set:function(t){this._isBlurs=t,this.Material&&this.Material.effect.setProperty("isblurs",t?1:0)},enumerable:!0,configurable:!0}),e.prototype.initUniformLocation=function(){this.bluramount=this._bluramount,this.isBlurs=this._isBlurs},e=i([s],e)}(n.default));r.default=u,cc._RF.pop()},{"../SpriteShaderBase":"SpriteShaderBase"}],SpriteSearchLight:[function(t,e,r){"use strict";cc._RF.push(e,"db5c1tOvEBJjJokfbFjJzmu","SpriteSearchLight");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../SpriteShaderBase"),c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._mouse=cc.v2(0,0),e._radius=0,e}return o(e,t),Object.defineProperty(e.prototype,"mouse",{get:function(){return this._mouse},set:function(t){this._mouse=t,this.Material&&this.Material.effect.setProperty("mouse",this._mouse)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},set:function(t){this._radius=Math.min(Math.min(this.node.width,this.node.height),t),this.Material&&this.Material.effect.setProperty("radius",this._radius)},enumerable:!0,configurable:!0}),e.prototype.initUniformLocation=function(){var t=this;this.Material.effect.setProperty("resolution",cc.v2(this.node.width,this.node.height)),this.mouse=this._mouse,this.radius=this._radius,this.node.on(cc.Node.EventType.TOUCH_START,function(e){var r=t.node.convertToNodeSpaceAR(e.getLocation());t.mouse=r},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){var r=t.node.convertToNodeSpaceAR(e.getLocation());t.mouse=r},this)},e=i([s],e)}(n.default));r.default=u,cc._RF.pop()},{"../SpriteShaderBase":"SpriteShaderBase"}],SpriteShaderBase:[function(t,e,r){"use strict";cc._RF.push(e,"77b6680v4dMT6rCGKLFm39Q","SpriteShaderBase");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,s=n.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mat=null,e}return o(e,t),Object.defineProperty(e.prototype,"Sprite",{get:function(){return this.getComponent(cc.Sprite)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Material",{get:function(){if(this.Sprite)return this.Sprite.getMaterial(0)},enumerable:!0,configurable:!0}),e.prototype.onLoad=function(){this.init()},e.prototype.init=function(){this.Sprite.setMaterial(0,this.mat),this.initUniformLocation()},e.prototype.initUniformLocation=function(){},i([s(cc.Material)],e.prototype,"mat",void 0),e=i([c],e)}(cc.Component);r.default=u,cc._RF.pop()},{}],SpriteTransfer:[function(t,e,r){"use strict";cc._RF.push(e,"0afa0q9GxBG74ZuaWc8Lh0r","SpriteTransfer");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../SpriteShaderBase"),c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._time=0,e._speed=1,e.play=!1,e}return o(e,t),Object.defineProperty(e.prototype,"time",{get:function(){return this._time},set:function(t){this._time=t,this.Material&&this.Material.effect.setProperty("iTime",this._time)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=Math.min(Math.max(t,0),1)},enumerable:!0,configurable:!0}),e.prototype.update=function(t){this.play&&(this.time+=t*this._speed)},e.prototype.initUniformLocation=function(){this.time=this._time},e=i([s],e)}(n.default));r.default=u,cc._RF.pop()},{"../SpriteShaderBase":"SpriteShaderBase"}],SpriteTurnPage:[function(t,e,r){"use strict";cc._RF.push(e,"17ff4JivnhALI/UmgOGcLUx","SpriteTurnPage");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../SpriteShaderBase"),c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._mouse=cc.v2(0,0),e}return o(e,t),Object.defineProperty(e.prototype,"mouse",{get:function(){return this._mouse},set:function(t){this._mouse=t,this.Material&&this.Material.effect.setProperty("mouse",this._mouse)},enumerable:!0,configurable:!0}),e.prototype.initUniformLocation=function(){var t=this;this.Material.effect.setProperty("resolution",cc.v2(this.node.width,this.node.height)),this.mouse=this._mouse,this.node.on(cc.Node.EventType.TOUCH_START,function(e){var r=t.node.convertToNodeSpaceAR(e.getLocation());t.mouse=r},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){var r=t.node.convertToNodeSpaceAR(e.getLocation());t.mouse=r},this)},e=i([s],e)}(n.default));r.default=u,cc._RF.pop()},{"../SpriteShaderBase":"SpriteShaderBase"}],SpriteWater:[function(t,e,r){"use strict";cc._RF.push(e,"fc5d5z4D0RP249h8IxvX5hR","SpriteWater");var o=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),i=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(n<3?i(c):n>3?i(e,r,c):i(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var n=t("../SpriteShaderBase"),c=cc._decorator,s=c.ccclass,u=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._time=0,e._speed=1,e.play=!1,e}return o(e,t),Object.defineProperty(e.prototype,"time",{get:function(){return this._time},set:function(t){this._time=t,this.Material&&this.Material.effect.setProperty("iTime",this._time)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this._speed},set:function(t){this._speed=Math.min(Math.max(t,0),1)},enumerable:!0,configurable:!0}),e.prototype.update=function(t){this.play&&(this.time+=t*this._speed)},e.prototype.initUniformLocation=function(){this.Material.effect.setProperty("iResolution",new cc.Vec3(this.node.width,this.node.height,3e3)),this.time=this._time},e=i([s],e)}(n.default));r.default=u,cc._RF.pop()},{"../SpriteShaderBase":"SpriteShaderBase"}]},{},["SpineHighLight","SpriteBlursCircle","SpriteBlurs","SpriteDissolve","SpriteFluxay","SpriteGaussBlursCircle","SpriteGaussBlurs","SpriteSearchLight","SpriteShaderBase","SpriteTransfer","SpriteTurnPage","SpriteWater","Demo"]);