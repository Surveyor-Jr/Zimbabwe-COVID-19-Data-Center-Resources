// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("require dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/_base/kernel dojo/has dijit/_Widget jimu/dijit/Popup esri/kernel esri/lang esri/request".split(" "),function(k,l,g,h,f,p,q,r,t,m,u){g=g([q],{basePath:k.toUrl("esri/dijit/analysis"),onlineHelpMap:null,showLearnMore:!1,"class":"esriAnalyisHelpWindow",postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments);var a=["ar","he"],c;this.onlineHelpMap={};for(c=0;c<a.length;c+=1){var b=
a[c];f.locale&&-1!==f.locale.indexOf(b)&&(-1!==f.locale.indexOf("-")?-1!==f.locale.indexOf(b+"-")&&(this._isRightToLeft=!0):this._isRightToLeft=!0)}a=this._getAbsoluteUrl(this.basePath)+"/help/helpmap.json";u({url:a}).then(h.hitch(this,function(d){this.onlineHelpMap=d.map}))},_getAbsoluteUrl:function(a){if(/^https?:/i.test(a))return a;if(/^\/\//i.test(a))return window.location.protocol+a;if(/^\//i.test(a))return window.location.protocol+"//"+window.location.host+a},_computeSize:function(a){var c=
{w:400,h:200};-1!==a.indexOf("Category")?(c.w=400,c.h=320):-1!==a.indexOf("Tool")?(c.w=400,c.h=320):-1!==a.indexOf("toolDescription")&&(c.w=400,c.h=520);return c},generateHelpUrl:function(a,c){this._analysisGpServer&&-1!==this._analysisGpServer.indexOf("dev")||this._analysisGpServer&&this._analysisGpServer.indexOf("qa");var b=h.clone(f.locale);"nb"===b&&(b="no");var d=k.toUrl("esri/dijit/analysis/help/");var e=d+a+".html";-1!==l.indexOf("ar cs da de es et fi fr it ja ko lt lv ru nl no pl pt-br pt-pt ro sv th tr vi zh-cn".split(" "),
b)&&(-1!==b.indexOf("-")&&(b=b.split("-"),b=b[0]+"-"+b[1].toUpperCase()),e=d+b+"/"+a+".html");return e+"#"+c},_setHelpTopic:function(a){this.tooltipHelpDlg&&(this.tooltipHelpDlg.destroy(),this.tooltipHelpDlg=null);this.showLearnMore=!1;var c=this._analysisGpServer&&-1!==this._analysisGpServer.indexOf("dev")?"dev":this._analysisGpServer&&-1!==this._analysisGpServer.indexOf("qa")?"uat":"";var b=h.clone(f.locale);"nb"===b&&(b="no");var d=k.toUrl("esri/dijit/analysis/help/");var e=d+this.helpFileName+
".html";if(m.isDefined(this.onlineHelpMap[this.helpFileName])&&m.isDefined(this.onlineHelpMap[this.helpFileName][a])){this.showLearnMore=!0;var n="http://doc"+c+".arcgis.com/en/arcgis-online/use-maps/"+this.onlineHelpMap[this.helpFileName][a]}-1!==l.indexOf("ar bs ca cs da de es el et fi fr he hr hu id it ja ko lt lv ru nl no pl pt-br pt-pt ro sl sk sv sr th tr uk vi zh-cn zh-hk zh-tw".split(" "),b)&&(-1!==b.indexOf("-")&&(e=b.split("-"),b=e[0]+"-"+e[1].toUpperCase()),e=d+b+"/"+this.helpFileName+
".html");-1!==l.indexOf("ar de es fr it ja ko ru pl pt-br zh-cn".split(" "),b)&&this.showLearnMore&&(n="http://doc"+c+".arcgis.com/"+b+"/arcgis-online/use-maps/"+this.onlineHelpMap[this.helpFileName][a]);d=this._computeSize(a);this.structure="\x3cdiv class\x3d'' style\x3d'position:relative'\x3e\x3cdiv class\x3d'sizer content'\x3e\x3cdiv class\x3d'contentPane'\x3e\x3ciframe frameborder\x3d'0'  id\x3d'"+a+"' src\x3d'"+e+"#"+a+"' width\x3d'"+d.w+"' height\x3d'"+d.h+"' marginheight\x3d'0' marginwidth\x3d'0'\x3e\x3c/iframe\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'sizer'\x3e\x3cdiv class\x3d'actionsPane'\x3e\x3cdiv class\x3d'actionList"+
(this.showLearnMore?"'\x3e":" hidden'\x3e")+"\x3ca class\x3d'action zoomTo' href\x3d'"+(this.showLearnMore?n:"#")+"' target\x3d'_help'\x3e"+this.nls.learnMore+"\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"},show:function(a,c){console.log(a);this.helpFileName=c.helpFileName;this._analysisGpServer=c.analysisGpServer;this._setHelpTopic(c.helpId);new r({titleLabel:this.helpFileName,content:this.structure,width:480,maxHeight:300})}});p("extend-esri")&&h.setObject("dijit.analysis.HelpWindow",
g,t);return g});