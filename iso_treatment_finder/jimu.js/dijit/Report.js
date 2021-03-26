// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:jimu/dijit/templates/ReportTemplate.html":'\x3c!DOCTYPE HTML\x3e\r\n\x3chtml lang\x3d"en" dir\x3d"ltr"\x3e\r\n\r\n\x3chead id\x3d"reportHead"\x3e\r\n  \x3cmeta charset\x3d"utf-8"\x3e\r\n  \x3cmeta http-equiv\x3d"X-UA-Compatible" content\x3d"IE\x3dEdge,chrome\x3d1"\x3e\r\n  \x3ctitle\x3e\x3c/title\x3e\r\n  \x3cscript\x3e\r\n    // Show/hide text area controls based on the value\r\n    function onPrintButtonClicked() {\r\n      var notesContainer, i;\r\n      notesContainer \x3d document.getElementsByClassName("esriCTNotesContainer");\r\n      //process notes to show/hide based on contents\r\n      for (i \x3d 0; i \x3c notesContainer.length; i++) {\r\n        if (notesContainer[i]) {\r\n          //Hide the notes which are not having values\r\n          if (notesContainer[i].children[1].value.trim() \x3d\x3d\x3d "") {\r\n            notesContainer[i].className +\x3d " esriCTHideReportNotes";\r\n          }\r\n          else {\r\n            //Removes hidden class if available\r\n            notesContainer[i].className \x3d\r\n              notesContainer[i].className.replace("esriCTHideReportNotes", "");\r\n          }\r\n        }\r\n      }\r\n      //after processing notes, print the window\r\n      window.print();\r\n    }\r\n  \x3c/script\x3e\r\n  \x3c!-- Report prev page css --\x3e\r\n  \x3cstyle type\x3d"text/css"\x3e\r\n    .esriCTReportMapWait {\r\n      height: 5px;\r\n      width: 100%;\r\n      position: relative;\r\n      overflow: hidden;\r\n      background-color: #ddd;\r\n    }\r\n\r\n    .esriCTReportMapWait:before {\r\n      display: block;\r\n      position: absolute;\r\n      content: "";\r\n      left: -200px;\r\n      width: 200px;\r\n      height: 5px;\r\n      background-color: #2980b9;\r\n      animation: loading 2s linear infinite;\r\n    }\r\n\r\n    @keyframes loading {\r\n      from {\r\n        left: -200px;\r\n        width: 30%;\r\n      }\r\n      50% {\r\n        width: 30%;\r\n      }\r\n      70% {\r\n        width: 70%;\r\n      }\r\n      80% {\r\n        left: 50%;\r\n      }\r\n      95% {\r\n        left: 120%;\r\n      }\r\n      to {\r\n        left: 100%;\r\n      }\r\n    }\r\n\r\n    .esriCTHTMLData {\r\n      position: relative;\r\n      width: 100%;\r\n      height: auto;\r\n    }\r\n\r\n    .jimu-rtl .esriCTHTMLData {\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTTable {\r\n      margin-top: 10px;\r\n      padding: 0;\r\n      border-collapse: collapse;\r\n      border-spacing: 0;\r\n      width: 100%;\r\n      page-break-inside: avoid;\r\n      table-layout: fixed;\r\n    }\r\n\r\n    .jimu-rtl .esriCTTable {\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTTable th {\r\n      border: 1px solid gray;\r\n      background-color: #E4E4E4;\r\n      word-wrap: break-word;\r\n    }\r\n\r\n    .esriCTTable td {\r\n      border: 1px solid gray;\r\n      word-wrap: break-word;\r\n    }\r\n\r\n    .esriCTSectionTitle {\r\n      font-size: 18px;\r\n      color: #0f96cc;\r\n      font-weight: bold;\r\n      margin: 30px 0px;\r\n      width: calc(100% - 10px);\r\n      word-break: break-all;\r\n    }\r\n\r\n    .jimu-rtl .esriCTSectionTitle {\r\n      float: right;\r\n      direction: rtl;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportMap .esriCTSectionTitle {\r\n      float: none;\r\n    }\r\n\r\n    .esriCTReportLogo {\r\n      float: left;\r\n      max-width: calc(50% - 10px);\r\n      margin: auto 10px auto 0;\r\n      max-height: 90%;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportLogo {\r\n      float: right;\r\n      margin: auto 0 auto 10px;\r\n    }\r\n\r\n    .esriCTPrintTitleDiv {\r\n      height: 56px;\r\n      float: right;\r\n      min-width: 50%;\r\n    }\r\n\r\n    .jimu-rtl .esriCTPrintTitleDiv {\r\n      float: left;\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTInputTitle {\r\n      height: 55px;\r\n      line-height: 55px;\r\n      border: none;\r\n      font-size: 25px;\r\n      width: 100%;\r\n      padding: 0px;\r\n    }\r\n\r\n    .esriCTInputTitle::-ms-clear {\r\n      display: none;\r\n    }\r\n\r\n    .esriCTReportMain {\r\n      background: #FFF;\r\n      border: solid 1px #000;\r\n      margin: 0 auto;\r\n      padding: 20px;\r\n      width: 797px;\r\n    }\r\n\r\n    .esriCTReportMap {\r\n      text-align: center;\r\n    }\r\n\r\n    .esriCTReportMapImg {\r\n      max-width: 96%;\r\n      margin-top: 10px;\r\n    }\r\n\r\n    .esriCTReportLandscapeMapImg {\r\n      max-width: 80%;\r\n    }\r\n\r\n    .esriCTReportMapFail {\r\n      height: 50px;\r\n    }\r\n\r\n    .esriCTReportFooter {\r\n      text-align: center;\r\n      font-size: 80%;\r\n      padding: 10px 0;\r\n      white-space: pre-wrap;\r\n      word-wrap: break-word;\r\n    }\r\n\r\n    .esriCTPrintPage {\r\n      padding: 30px 0;\r\n      margin: 20px auto;\r\n      font-family: arial, sans-serif;\r\n      font-size: 13px;\r\n    }\r\n\r\n    .esriCTReportBar {\r\n      width: 100%;\r\n      position: fixed;\r\n      left: 0;\r\n      top: 0;\r\n      z-index: 6;\r\n      height: 50px;\r\n      background: #e2f1fc;\r\n      border-bottom: 1px solid #000;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportBar {\r\n      left: inherit;\r\n      right: 0;\r\n    }\r\n\r\n    .esriCTPrintButton,\r\n    .esriCTCloseButton {\r\n      color: #444;\r\n      font-family: Verdana, Helvetica, sans-serif;\r\n      font-size: 12px;\r\n      -moz-border-radius: 3px;\r\n      -webkit-border-radius: 3px;\r\n      border-radius: 3px;\r\n      border: 1px solid #8b8b8b;\r\n      box-shadow: none;\r\n      -webkit-box-shadow: none;\r\n      background: #F2F2F2;\r\n      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\r\n      background: -moz-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #F2F2F2), color-stop(100%, #D1D1D1));\r\n      background: -webkit-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: -o-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: -ms-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: linear-gradient(to bottom, #F2F2F2 0%, #D1D1D1 100%);\r\n      filter: progid: DXImageTransform.Microsoft.gradient(startColorstr\x3d\'#F2F2F2\', endColorstr\x3d\'#D1D1D1\', GradientType\x3d0);\r\n      margin: 10px 20px;\r\n      line-height: 16px;\r\n      display: block;\r\n      padding: 5px 10px;\r\n      outline: 0;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n      font-weight: 400;\r\n      white-space: nowrap;\r\n      float: right;\r\n    }\r\n\r\n    .jimu-rtl .esriCTPrintButton,\r\n    .jimu-rtl .esriCTCloseButton {\r\n      float: left;\r\n    }\r\n\r\n    .esriCTPrintButton:hover,\r\n    .esriCTPrintButton:focus,\r\n    .esriCTCloseButton:hover,\r\n    .esriCTCloseButton:focus {\r\n      background: #E5E6E6;\r\n      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\r\n      background: -moz-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #E5E6E6), color-stop(100%, #A0A1A1));\r\n      background: -webkit-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: -o-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: -ms-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: linear-gradient(to bottom, #E5E6E6 0%, #A0A1A1 100%);\r\n      filter: progid: DXImageTransform.Microsoft.gradient(startColorstr\x3d\'#E5E6E6\', endColorstr\x3d\'#A0A1A1\', GradientType\x3d0);\r\n    }\r\n\r\n    .esriCTReportHeader {\r\n      display: block;\r\n      width: 100%;\r\n      height: 60px;\r\n      border-bottom: 1px solid #000;\r\n      margin-bottom: 5px;\r\n      position: relative;\r\n    }\r\n\r\n    .esriCTReportBarMsg {\r\n      text-align: center;\r\n      margin-top: 16px;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportBarMsg {\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTNotesContainer {\r\n      width: 100%;\r\n      margin-top: 30px;\r\n    }\r\n\r\n    .esriCTReportNotes {\r\n      resize: none;\r\n      width: calc(100% - 5px);\r\n      max-width: calc(100% - 5px);\r\n      font-family: "Arial";\r\n      font-size: 13px;\r\n      border: 1px solid gray;\r\n      overflow-y: hidden;\r\n      /* prevents scroll bar flash */\r\n    }\r\n\r\n    .esriCTReportNotesParagraph {\r\n      display: none;\r\n      white-space: pre-wrap;\r\n      word-wrap: break-word;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportNotesParagraph {\r\n      float: right;\r\n      direction: rtl;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportNotes {\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTHidden {\r\n      display: none;\r\n    }\r\n  \x3c/style\x3e\r\n  \x3c!-- Media print css --\x3e\r\n  \x3cstyle type\x3d"text/css" media\x3d"print"\x3e\r\n    .esriCTPrintPage {\r\n      padding: 0;\r\n      color: #000;\r\n      margin: 0;\r\n      float: none;\r\n      background: #fff url(none);\r\n    }\r\n\r\n    .esriCTTable {\r\n      page-break-inside: avoid;\r\n      border-collapse: collapse;\r\n      border-spacing: 0;\r\n    }\r\n\r\n    .esriCTPageBreak {\r\n      page-break-after: always;\r\n    }\r\n\r\n    .esriCTReportFooter {\r\n      font-size: 75%;\r\n    }\r\n\r\n    .esriCTReportBar {\r\n      display: none;\r\n    }\r\n\r\n    .esriCTReportMain {\r\n      border: none;\r\n    }\r\n\r\n    .esriCTReportMapImg {\r\n      box-shadow: none;\r\n      border: none;\r\n    }\r\n\r\n    .esriCTReportNotes {\r\n      display: none;\r\n    }\r\n\r\n    .esriCTReportNotesParagraph {\r\n      display: block;\r\n    }\r\n\r\n    .esriCTHideReportNotes {\r\n      display: none;\r\n    }\r\n\r\n    .esriCTTable th {\r\n      border: 1px solid gray;\r\n    }\r\n\r\n    .esriCTTable td {\r\n      border: 1px solid gray;\r\n    }\r\n\r\n    .esriCTTable tr {\r\n      page-break-inside: avoid;\r\n      page-break-after: auto;\r\n    }\r\n\r\n  \x3c/style\x3e\r\n  \x3cscript\x3e\r\n    function showError(evt) {\r\n      alert(document.getElementById(\'showErrorButton\').innerHTML);\r\n    }\r\n  \x3c/script\x3e\r\n\x3c/head\x3e\r\n\r\n\x3cbody id\x3d"reportBody" class\x3d"esriCTPrintPage"\x3e\r\n  \x3cbutton id\x3d"showErrorButton" style\x3d"display: none" onclick\x3d"showError()"\x3e\x3c/button\x3e\r\n  \x3cdiv class\x3d"esriCTReportBar"\x3e\r\n    \x3cdiv id\x3d"closeButton" class\x3d"esriCTCloseButton" title\x3d"Close" onclick\x3d"window.close();"\x3eClose\x3c/div\x3e\r\n    \x3cdiv id\x3d"printButton" class\x3d"esriCTPrintButton" title\x3d"Print" onclick\x3d"onPrintButtonClicked();"\x3ePrint\x3c/div\x3e\r\n    \x3cdiv id\x3d"reportBarMsg" class\x3d"esriCTReportBarMsg"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv id\x3d"reportMain" class\x3d"esriCTReportMain"\x3e\r\n    \x3cdiv id\x3d"reportHeader" class\x3d"esriCTReportHeader"\x3e\r\n      \x3cimg id\x3d"reportLogo" class\x3d"esriCTReportLogo esriCTHidden" src\x3d""\x3e\r\n      \x3cdiv id\x3d"printTitleDiv" class\x3d"esriCTPrintTitleDiv"\x3e\r\n        \x3cinput id\x3d"reportTitle" type\x3d"text" class\x3d"esriCTInputTitle" tabindex\x3d"0" role\x3d"textbox"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv id\x3d"reportData"\x3e\x3c/div\x3e\r\n    \x3cdiv id\x3d"footNotes" class\x3d"esriCTReportFooter"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/body\x3e\r\n\r\n\x3c/html\x3e'}});
define("dojo/_base/declare jimu/BaseWidget jimu/utils dojo/Evented ./PageUtils dojo/text!./templates/ReportTemplate.html dojo/_base/lang dojo/_base/array dojo/_base/window dojo/dom-construct dojo/dom-class dojo/dom-style dojo/dom dojo/string dojo/on esri/tasks/PrintParameters esri/tasks/PrintTemplate esri/tasks/PrintTask dijit/focus dojo/query dojo/dom-attr".split(" "),function(C,D,l,E,g,F,k,t,G,e,n,v,h,H,z,I,J,K,w,x,A){return C([D,E],{baseClass:"jimu-report",_printService:null,_printWindow:null,
_sizeInPixels:{},_windowOpenedTimer:null,_shownUnableToPrintMapMsg:!1,printTaskUrl:null,reportLogo:"",reportLayout:{},maxNoOfCols:3,styleSheets:[],styleText:"",constructor:function(){this.inherited(arguments);this._sizeInPixels={};this.printTaskUrl=null;this.reportLayout={};this.styleSheets=[]},postMixInProperties:function(){this.nls=k.mixin(window.jimuNls.common,window.jimuNls.report)},postCreate:function(){var a={pageSize:g.PageSizes.A4,orientation:g.Orientation.Portrait};this.inherited(arguments);
this.setReportLayout(this.reportLayout,a);this.reportLayout.dpi=96;this.printTaskUrl&&this._createPrintTask()},setReportLayout:function(a,b){b||(b=this.reportLayout);this._validateParameters(a)?this.reportLayout=k.mixin(b,a):this.reportLayout=b},setMapLayout:function(a){var b=this.reportLayout.pageSize.MapLayout?this.reportLayout.pageSize.MapLayout:"MAP_ONLY";if("MAP_ONLY"===b)a.exportOptions={dpi:this.reportLayout.dpi},this.reportLayout.orientation.Type===g.Orientation.Landscape.Type&&this.reportLayout.pageSize!==
g.PageSizes.Custom?(a.exportOptions.width=this._sizeInPixels.Height,a.exportOptions.height=this._sizeInPixels.Width):(a.exportOptions.width=this._sizeInPixels.Width,a.exportOptions.height=this._sizeInPixels.Height);else if(b&&g.PageSizes[b])b+=" "+this.reportLayout.orientation.Type;else{var d=[];Object.keys(g.PageSizes).forEach(function(c){d.push(g.PageSizes[c].MapLayout)});-1<d.indexOf(b)&&(b+=" "+this.reportLayout.orientation.Type)}a.layout=b;return a},_validateParameters:function(){return this.reportLayout.pageSize!==
g.PageSizes.Custom||this.reportLayout.size?!0:!1},_createPrintTask:function(){this._printService=new K(this.printTaskUrl,{async:!1})},_createPrintMapParameters:function(a){var b=new J;if(a.printTemplate)if(b=a.printTemplate,b.format){var d=b.format.toLowerCase();"png32"!==d&&"png8"!==d&&"jpg"!==d&&"gif"!==d&&(b.format="jpg")}else b.format="jpg";else b=this.setMapLayout(b),b.layoutOptions={customTextElements:[{Date:""}]},b.preserveScale=!0,b.showAttribution=!0,b.format="jpg";d=new I;d.map=a.map;d.template=
b;return d},print:function(a,b){if(this._printService){this._shownUnableToPrintMapMsg=!1;var d=screen.width/2;var c=screen.height/1.5;d=11===l.has("ie")?"toolbar\x3dno, location\x3dno, directories\x3dno, status\x3dyes, menubar\x3dno,scrollbars\x3dyes, resizable\x3dyes, width\x3d"+d+", height\x3d"+c+", top\x3d"+(screen.height/2-c/2)+", left\x3d"+(screen.width/2-d/2):null;c=l.detectUserAgent();(c.browser.hasOwnProperty("firefox")&&c.browser.firefox||c.os.hasOwnProperty("ipad")&&c.os.ipad||c.os.hasOwnProperty("iphone")&&
c.os.iphone)&&this._printWindow&&this._printWindow.close();this._printWindow=window.open("","_blank",d,!1);this._windowOpenedTimer&&clearInterval(this._windowOpenedTimer);this._windowOpenedTimer=setInterval(k.hitch(this,function(){this._printWindow.closed&&(clearInterval(this._windowOpenedTimer),this.emit("report-window-closed"))}),500);this._printWindow.focus();setTimeout(k.hitch(this,function(){G.withDoc(this._printWindow.document,k.hitch(this,function(){this._printWindow.document.open("text/html",
"replace");this._printWindow.document.write(F);window.isRTL&&n.add(h.byId("reportBody"),"jimu-rtl");(this.styleSheets&&0<this.styleSheets.length||this.styleText&&""!==this.styleText)&&this._addExternalStyleSheets();this._setPageSize();this._setButtonLabels();this._setReportSizeMessage();this._setReportLogo();this._setReportTitle(a);this._setReportData(b);this._setFootNotes();this._setAccessibility();this._printWindow.document.close()}))}),500)}else this.emit("reportError")},_addExternalStyleSheets:function(){var a=
h.byId("reportHead");a&&(t.forEach(this.styleSheets,k.hitch(this,function(b){e.create("link",{rel:"stylesheet",type:"text/css",href:b},a)})),this.styleText&&e.create("style",{type:"text/css",innerHTML:this.styleText},a))},_setPageSize:function(){var a=h.byId("reportMain");if(this.reportLayout){var b=this.reportLayout.pageSize;this.reportLayout.pageSize===g.PageSizes.Custom&&this.reportLayout.size&&(b=this.reportLayout.size);b=g.getPageSizeInPixels(b,this.reportLayout.dpi)}var d=this.reportLayout.orientation.Type===
g.Orientation.Landscape.Type&&this.reportLayout.pageSize!==g.PageSizes.Custom?b.Height:b.Width;this._sizeInPixels=b;v.set(a,{width:d+"px"})},_setReportData:function(a){var b=h.byId("reportData"),d=h.byId("showErrorButton");d.innerHTML=this.nls.unableToPrintMapMsg;b&&t.forEach(a,k.hitch(this,function(c){var f=e.create("div",{},b);c.addPageBreak&&n.add(f,"esriCTPageBreak");"table"===c.type?this._formatAndRenderTables(f,c):"html"===c.type?this._renderHTMLData(f,c):"map"===c.type?(c.title&&this._addSectionTitle(c.title,
f),n.add(f,"esriCTReportMap esriCTReportMapWait"),c.extent&&c.data.map.setExtent(c.extent),this._executePrintTask(c,f,d)):"note"===c.type&&this._createReportNote(f,c)}))},_setFootNotes:function(){var a;if((a=h.byId("footNotes"))&&this.footNotes){var b=l.sanitizeHTML(this.footNotes?this.footNotes:"");a.innerHTML=l.fieldFormatter.getFormattedUrl(b)}},_setReportLogo:function(){var a;if((a=h.byId("reportLogo"))&&this.reportLogo){n.remove(a,"esriCTHidden");a.src=this.reportLogo;A.set(a,"alt",this.nls.image);
var b=h.byId("reportHeader");var d=h.byId("reportMain");var c=h.byId("printTitleDiv");window.isRTL&&e.place(c,b,"first");d&&c&&(a.complete&&v.set(c,{width:d.clientWidth-a.clientWidth-51+"px"}),this.own(z(a,"load",k.hitch(this,function(){setTimeout(k.hitch(this,function(){v.set(c,{width:d.clientWidth-a.clientWidth-51+"px"})}),300)}))))}},_setReportTitle:function(a){var b=h.byId("reportTitle");b&&a&&(b.value=a);A.set(b,"aria-label",this.nls.title)},_createReportNote:function(a,b){var d="";b.title&&
(d=b.title);d=this._addSectionTitle(d,a);n.add(d,"esriCTNotesTitle");var c=e.create("textarea",{"class":"esriCTReportNotes",placeholder:this.nls.notesHint,rows:5,tabindex:"0",role:"textbox","aria-label":this.nls.notesHint},a);var f=e.create("p",{"class":"esriCTReportNotesParagraph"},a);n.add(a,"esriCTNotesContainer");b.defaultText&&(c.value=b.defaultText);this.own(z(c,"keydown, change",function(){c.style.height="auto";f.innerHTML=l.sanitizeHTML(c.value?c.value:"");c.style.height=c.scrollHeight+"px"}))},
_setReportSizeMessage:function(){if(this.reportLayout.pageSize===g.PageSizes.Custom&&this.reportLayout.size){var a=this.reportLayout.size;var b=this.reportLayout.pageSize}else a=this.reportLayout.pageSize,b=this.reportLayout.pageSize.SizeName?this.reportLayout.pageSize.SizeName:this.reportLayout.SizeName;a=this.reportLayout.orientation.Type===g.Orientation.Landscape.Type&&this.reportLayout.pageSize!==g.PageSizes.Custom?" ("+a.Height+"'' X "+a.Width+"'') ":" ("+a.Width+"'' X "+a.Height+"'') ";h.byId("reportBarMsg").innerHTML=
H.substitute(this.nls.reportDimensionsMsg,{paperSize:b+a+this.reportLayout.orientation.Text})},_setButtonLabels:function(){var a=h.byId("printButton");a.innerHTML=this.nls.printButtonLabel;a.title=this.nls.printButtonLabel;a=h.byId("closeButton");a.innerHTML=this.nls.close;a.title=this.nls.close},_executePrintTask:function(a,b,d){a=this._createPrintMapParameters(a);this._printService.execute(a,k.hitch(this,function(c){b&&(n.remove(b,"esriCTReportMapWait"),c=e.create("img",{src:c.url,"class":"esriCTReportMapImg",
"aria-label":this.nls.mapArea},b),this.reportLayout.orientation.Type===g.Orientation.Landscape.Type&&n.add(c,"esriCTReportLandscapeMapImg"));this.emit("report-export-task-completed")}),k.hitch(this,function(){n.replace(b,"esriCTReportMapFail","esriCTPageBreak esriCTReportMapWait");this._shownUnableToPrintMapMsg||(this._shownUnableToPrintMapMsg=!0,d.click());this.emit("report-export-task-failed")}))},_renderHTMLData:function(a,b){a=e.create("div",{"class":"esriCTHTMLData"},a);b.title&&this._addSectionTitle(b.title,
a);e.create("div",{innerHTML:b.data},a)},_addSectionTitle:function(a,b){a=l.sanitizeHTML(a?a:"");return e.create("div",{innerHTML:a,"class":a?"esriCTSectionTitle":""},b)},_formatAndRenderTables:function(a,b){var d=b.data,c,f=this.maxNoOfCols;d.maxNoOfCols&&(f=d.maxNoOfCols);d.cols.length>f&&2>=d.cols.length-f&&(f=d.cols.length);var m=0;for(c=d.cols.length;m<c;m+=f){var q={cols:[],rows:[]},p=m+f,r=!1;q.title=0===m?b.title:"";var u=d.cols.length-p;2>=u&&0<u&&(p+=u,r=!0);u=d.cols.slice(m,p);var B=[];
for(var y=0;y<d.rows.length;y++)B.push(d.rows[y].slice(m,p));q.cols=u;q.rows=B;this._renderTable(e.create("div",{},a),q,b.data.showRowIndex);if(r)break}},_renderTable:function(a,b,d){this._addSectionTitle(b.title,a);a=e.create("table",{cellpadding:5,style:{width:"100%"},"class":"esriCTTable"},a);var c=e.create("tbody",{},a);var f=e.create("tr",{},c);d&&e.create("th",{innerHTML:"#",style:{width:"20px"}},f);t.forEach(b.cols,k.hitch(this,function(m){e.create("th",{innerHTML:m},f)}));t.forEach(b.rows,
k.hitch(this,function(m,q){var p=e.create("tr",{},c);d&&e.create("td",{innerHTML:q+1,style:{"word-wrap":"normal"}},p);t.forEach(m,k.hitch(this,function(r){r=l.fieldFormatter.getFormattedUrl(r);e.create("td",{innerHTML:r},p)}))}))},_setAccessibility:function(){this._setFirstFocusNode();this._setLastFocusNode();this._focusFirstNodeOfReport()},_setFirstFocusNode:function(){var a=h.byId("reportTitle");""!==a&&null!==a&&void 0!==a&&l.initFirstFocusNode(this._printWindow.document,a)},_setLastFocusNode:function(){var a=
x(".esriCTReportNotes",this._printWindow.document);""!==a&&null!==a&&void 0!==a&&0<a.length?l.initLastFocusNode(this._printWindow.document,a[0]):(a=x(".esriCTLocaleDateInputTitle",this._printWindow.document),""!==a&&null!==a&&void 0!==a&&0<a.length?l.initLastFocusNode(this._printWindow.document,a[0]):(a=x(".esriCTAOIInputArea",this._printWindow.document),""!==a&&null!==a&&void 0!==a&&0<a.length&&l.initLastFocusNode(this._printWindow.document,a[0])))},_focusFirstNodeOfReport:function(){var a=h.byId("reportTitle");
""!==a&&null!==a&&void 0!==a&&(w.curNode&&w.curNode.blur(),w.focus(a))}})});