!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=40)}([function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.globalResources=t.res=void 0;var o=e(13),i=r(o),u=t.res={mm_front_btn_floor_locked_png:"res/MainMenu/front_btn_floor_locked.png",mm_front_btn_help_normal_png:"res/MainMenu/front_btn_help_normal.png",mm_front_btn_help_pressed_png:"res/MainMenu/front_btn_help_pressed.png",mm_front_btn_setting_normal_png:"res/MainMenu/front_btn_setting_normal.png",mm_front_btn_setting_pressed_png:"res/MainMenu/front_btn_setting_pressed.png",mm_front_carrot_png:"res/MainMenu/front_carrot.png",mm_front_front_png:"res/MainMenu/front_front.png",mm_front_monster_1_png:"res/MainMenu/front_monster_1.png",mm_front_monster_2_png:"res/MainMenu/front_monster_2.png",mm_front_monster_3_png:"res/MainMenu/front_monster_3.png",mm_front_monster_4_png:"res/MainMenu/front_monster_4.png",mm_front_monster_5_png:"res/MainMenu/front_monster_5.png",mm_front_monster_6_hand_png:"res/MainMenu/front_monster_6_hand.png",mm_front_monster_6_png:"res/MainMenu/front_monster_6.png",mm_front_smoke_1_png:"res/MainMenu/front_smoke_1.png",mm_front_smoke_2_png:"res/MainMenu/front_smoke_2.png",mm_front_smoke_3_png:"res/MainMenu/front_smoke_3.png",mm_front_bg_png:"res/MainMenu/zh/front_bg.png",mm_front_btn_floor_normal_png:"res/MainMenu/zh/front_btn_floor_normal.png",mm_front_btn_floor_pressed_png:"res/MainMenu/zh/front_btn_floor_pressed.png",mm_front_btn_start_normal_png:"res/MainMenu/zh/front_btn_start_normal.png",mm_front_btn_start_pressed_png:"res/MainMenu/zh/front_btn_start_pressed.png",sd_mm_BGMusic_mp3:"res/Sound/MainMenu/BGMusic.mp3",sd_mm_Select_mp3:"res/Sound/MainMenu/Select.mp3",sd_mm_Unlock_mp3:"res/Sound/MainMenu/Unlock.mp3",sd_BGMusic01_mp3:"res/Sound/GamePlay/BGMusic01.mp3"},c=t.globalResources=[];(0,i.default)(u).map(function(n){return c.push(u[n])})},function(n,t){var e=n.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(n,t,e){n.exports=!e(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t){n.exports=function(n){if(void 0==n)throw TypeError("Can't call method on  "+n);return n}},function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},function(n,t,e){var r=e(26),o=e(6);n.exports=function(n){return r(o(n))}},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),i=e(11),u=r(i),c=e(12),s=r(c),_=cc,f=_.Scene;t.default=f.extend({ctor:function(){this._super(),cc.audioEngine.playMusic(o.res.sd_mm_BGMusic_mp3)},onEnter:function(){this._super(),this.loadBackgroundLayer(),this.loadMainLayer()},loadBackgroundLayer:function(){this.backgroundLayer=new u.default,this.addChild(this.backgroundLayer)},loadMainLayer:function(){this.mainLayer=new s.default,this.addChild(this.mainLayer)}})},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.IS_UP_UNLOCK_KEY="is_up_unlock_key",t.OPEN_UNLOCK_UP_LAYER="open_unlock_up_layer"},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(0),o=cc,i=o.Layer,u=o.Sprite,c=i.extend({ctor:function(){return this._super(),this.loadBackground(),!0},loadBackground:function(){var n=new u(r.res.mm_front_bg_png),t=cc.winSize,e=t.width,o=t.height;this.addChild(n),n.setPosition(e/2,o/2),console.log(n)}});t.default=c},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(0),o=e(10),i=cc,u=i.Layer,c=i.Sprite,s=i.Menu,_=i.MenuItemSprite;t.default=u.extend({actionDuration:1,ctor:function(){this._super(),this.loadConfig(),this.loadMenu(),this.loadSetting()},loadConfig:function(){var n=cc.sys.localStorage.getItem(o.IS_UP_UNLOCK_KEY);this.isUpUnlock=!!n&&JSON.parse(n)},loadMenu:function(){var n=cc.winSize,t=n.width,e=n.height,o=new c(r.res.mm_front_btn_start_normal_png),i=new c(r.res.mm_front_btn_start_pressed_png),u=new c(r.res.mm_front_btn_start_normal_png),f=new _(o,i,u,function(){cc.log("点击开始冒险按钮")});f.setPosition(t/2-8,e/2+75);var a=new c(r.res.mm_front_btn_floor_normal_png),p=new c(r.res.mm_front_btn_floor_pressed_png),l=new c(r.res.mm_front_btn_floor_normal_png),m=new _(a,p,l,function(){cc.log("点击天天向上按钮")});if(m.setPosition(t/2-8,e/2-45),this.isUpUnlock===!1){var d=new c(r.res.mm_front_btn_floor_locked_png);m.addChild(d),this.upLock=d,d.setPosition(m.width+5,m.height/2+25)}var g=new s(f,m);this.addChild(g),g.setPosition(0,0)},loadSetting:function(){var n=cc.winSize.width,t=new c(r.res.mm_front_monster_4_png);this.addChild(t),t.setPosition(n/2-350,490);var e=cc.moveBy(this.actionDuration,cc.p(0,-10)),o=cc.moveBy(this.actionDuration,cc.p(0,10)),i=cc.sequence(e,o).repeatForever();t.runAction(i);var u=new c(r.res.mm_front_btn_setting_normal_png);t.addChild(u),u.setPosition(157,80)}})},function(n,t,e){n.exports={default:e(14),__esModule:!0}},function(n,t,e){e(39),n.exports=e(1).Object.keys},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,t,e){var r=e(5);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},function(n,t,e){var r=e(8),o=e(35),i=e(34);n.exports=function(n){return function(t,e,u){var c,s=r(t),_=o(s.length),f=i(u,_);if(n&&e!=e){for(;_>f;)if((c=s[f++])!=c)return!0}else for(;_>f;f++)if((n||f in s)&&s[f]===e)return n||f||0;return!n&&-1}}},function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},function(n,t,e){var r=e(15);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},function(n,t,e){var r=e(5),o=e(4).document,i=r(o)&&r(o.createElement);n.exports=function(n){return i?o.createElement(n):{}}},function(n,t){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(n,t,e){var r=e(4),o=e(1),i=e(19),u=e(24),c="prototype",s=function(n,t,e){var _,f,a,p=n&s.F,l=n&s.G,m=n&s.S,d=n&s.P,g=n&s.B,h=n&s.W,v=l?o:o[t]||(o[t]={}),M=v[c],b=l?r:m?r[t]:(r[t]||{})[c];l&&(e=t);for(_ in e)(f=!p&&b&&void 0!==b[_])&&_ in v||(a=f?b[_]:e[_],v[_]=l&&"function"!=typeof b[_]?e[_]:g&&f?i(a,r):h&&b[_]==a?function(n){var t=function(t,e,r){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(t);case 2:return new n(t,e)}return new n(t,e,r)}return n.apply(this,arguments)};return t[c]=n[c],t}(a):d&&"function"==typeof a?i(Function.call,a):a,d&&((v.virtual||(v.virtual={}))[_]=a,n&s.R&&M&&!M[_]&&u(M,_,a)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,n.exports=s},function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t,e){var r=e(27),o=e(31);n.exports=e(2)?function(n,t,e){return r.f(n,t,o(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){n.exports=!e(2)&&!e(3)(function(){return 7!=Object.defineProperty(e(20)("div"),"a",{get:function(){return 7}}).a})},function(n,t,e){var r=e(18);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==r(n)?n.split(""):Object(n)}},function(n,t,e){var r=e(16),o=e(25),i=e(37),u=Object.defineProperty;t.f=e(2)?Object.defineProperty:function(n,t,e){if(r(n),t=i(t,!0),r(e),o)try{return u(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},function(n,t,e){var r=e(23),o=e(8),i=e(17)(!1),u=e(32)("IE_PROTO");n.exports=function(n,t){var e,c=o(n),s=0,_=[];for(e in c)e!=u&&r(c,e)&&_.push(e);for(;t.length>s;)r(c,e=t[s++])&&(~i(_,e)||_.push(e));return _}},function(n,t,e){var r=e(28),o=e(21);n.exports=Object.keys||function(n){return r(n,o)}},function(n,t,e){var r=e(22),o=e(1),i=e(3);n.exports=function(n,t){var e=(o.Object||{})[n]||Object[n],u={};u[n]=t(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t,e){var r=e(33)("keys"),o=e(38);n.exports=function(n){return r[n]||(r[n]=o(n))}},function(n,t,e){var r=e(4),o="__core-js_shared__",i=r[o]||(r[o]={});n.exports=function(n){return i[n]||(i[n]={})}},function(n,t,e){var r=e(7),o=Math.max,i=Math.min;n.exports=function(n,t){return n=r(n),n<0?o(n+t,0):i(n,t)}},function(n,t,e){var r=e(7),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},function(n,t,e){var r=e(6);n.exports=function(n){return Object(r(n))}},function(n,t,e){var r=e(5);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++e+r).toString(36))}},function(n,t,e){var r=e(36),o=e(29);e(30)("keys",function(){return function(n){return o(r(n))}})},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}var o=e(9),i=r(o),u=e(0);cc.game.gameStart=function(){if(!cc.sys.isNative){var n=document.getElementById("cocosLoading");n&&document.body.removeChild(n)}cc.view.enableAutoFullScreen(!1),cc.view.enableRetina(cc.sys.os===cc.sys.OS_IOS),cc.view.adjustViewPort(!0),cc.view.setDesignResolutionSize(1136,640,cc.ResolutionPolicy.FIXED_HEIGHT),cc.view.resizeWithBrowserSize(!0),cc.LoaderScene.preload(u.globalResources,function(){return cc.director.runScene(new i.default)},void 0)}}]);
//# sourceMappingURL=app.js.map