// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NetworkTrace/setting/summarySetting.html":'\x3cdiv class\x3d"ParameterDiv"\x3e\r\n    \x3cdiv class\x3d"esriCTSummaryParentDiv"\x3e\r\n        \x3c!-- Table --\x3e\r\n        \x3cdiv class\x3d"esriCTOutPutSettingsParent esriCTClearBoth"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"outputTableNode"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Summary text --\x3e\r\n        \x3cdiv class\x3d"esriCTClearBoth esriCTSummaryTextParentContainer"\x3e\r\n            ${nls.summaryTab.summaryTextTitle}\r\n        \x3c/div\x3e\r\n        \x3c!-- Summary hint --\x3e\r\n        \x3cdiv class\x3d"esriCTSummaryHintField"\x3e\r\n            ${nls.hintText.inputTextHint}\r\n        \x3c/div\x3e\r\n        \x3c!-- Summary editor --\x3e\r\n        \x3cdiv class\x3d"esriCTSummaryEditor esriCTClearBoth"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"editorContainer"\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTButtonContainer"\x3e\r\n                \x3cdiv style\x3d"float: left;margin-top: 5px;" title\x3d"${nls.summaryTab.expressionVerifyButtonText}"\r\n                    data-dojo-attach-event\x3d"onclick:_onClickVerifyExpressionBtn"\r\n                    data-dojo-attach-point\x3d"verifySummaryExpression"\r\n                    class\x3d"jimu-state-disabled jimu-btn jimu-float-trailing esriSetButton jimu-leading-margin1"\x3e\r\n                    ${nls.summaryTab.expressionVerifyButtonText}\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Auto zoom checkbox --\x3e\r\n        \x3cdiv class\x3d"esriCTSummaryAutoZoom esriCTClearBoth"\x3e\r\n            \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"autoZoomAfterTrace" class\x3d"jimu-checkbox"\r\n                title\x3d"${nls.summaryTab.zoomText}" label\x3d"${nls.summaryTab.zoomText}"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./summarySetting.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/dom-class dojo/dom-construct dojo/_base/lang dojo/on dojo/dom-attr dijit/Editor dojo/_base/html jimu/dijit/Message ./summarySettingSelector dojo/_base/array jimu/dijit/SimpleTable dojo/query dijit/registry dijit/form/Select esri/symbols/jsonUtils jimu/symbolUtils dojo/dom-style dijit/form/ValidationTextBox ./FieldSelector esri/dijit/VisibleScaleRangeSlider jimu/dijit/Popup ./SymbolChooserPopup jimu/utils dojo/sniff dijit/_editor/plugins/TextColor".split(" "),
function(C,D,E,F,G,g,f,h,n,k,w,x,y,H,r,I,q,z,J,v,K,t,A,L,B,M,N,u,O){return C([E,F,G],{templateString:D,baseClass:"jimu-widget-NetworkTrace-setting",_selectedOutputParameter:null,_inputOutputSelect:null,_operatorSelect:null,_fieldSelect:null,_inputOutputParamArray:[],_selectedInput:null,_selectedOutput:null,_selectedField:null,_selectedOperator:null,_summaryExpressionEditor:null,_editorObj:null,_editorObjSymbolSelector:null,_outputLayerSettingsArr:[],_selectedOutputGeometryType:null,postCreate:function(){this.inherited(arguments);
this._fieldSelect=this._operatorSelect=this._inputOutputSelect=this._selectedOutputParameter=null;this._inputOutputParamArray=[];this._editorObjSymbolSelector=this._editorObj=this._summaryExpressionEditor=this._selectedOperator=this._selectedField=this._selectedOutput=this._selectedInput=null;this._outputLayerSettingsArr=[];this._selectedOutputGeometryType=null},startup:function(){this.inherited(arguments);this._initInputOutPutParamArray();this._createOutputTable();this._initEditor()},_initInputOutPutParamArray:function(){var a;
this._inputOutputParamArray=[];for(a=0;a<this.inputParametersArray.length;a++)this._inputOutputParamArray.push(this.inputParametersArray[a]);for(a=0;a<this.outputParametersArray.length;a++)this._inputOutputParamArray.push(this.outputParametersArray[a])},_initEditor:function(){this._editorObj||(this._editorObj=new w({plugins:["bold","italic","underline","|","foreColor"]},this.editorContainer),x.setStyle(this._editorObj.domNode,{width:"100%",height:"100%"}),this.own(n(this._editorObj,"focus",h.hitch(this,
function(){g.remove(this.verifySummaryExpression,"jimu-state-disabled")}))),this.own(n(this._editorObj,"blur",h.hitch(this,function(){var a=this._editorObj.focusNode.innerHTML;a=a.replace(/&nbsp;/g,"");var b=/<div><br><\/div>/g;a=a.replace(b,"");b=/<p><br><\/p>/g;a=a.replace(b,"");b=/<p><\/p>/g;a=a.replace(b,"");a=a.replace(/<br>/g,"");a=h.trim(a);null===a||""===a?(this._editorObj.set("value",""),g.add(this.verifySummaryExpression,"jimu-state-disabled")):g.remove(this.verifySummaryExpression,"jimu-state-disabled")}))),
this._editorObj.onLoadDeferred.then(h.hitch(this,function(){this._editorObj&&this._editorObj.hasOwnProperty("editNode")&&"title"in this._editorObj.editNode&&(null===this._editorObj.editNode.title||""===this._editorObj.editNode.title)&&(this._editorObj.editNode.title=this.nls.summaryTab.summaryEditorText);this._editorObj&&this._editorObj.hasOwnProperty("toolbar")&&this._editorObj.toolbar.hasOwnProperty("containerNode")&&new H({_editorObj:this._editorObj,inputOutputParamArray:this._inputOutputParamArray,
nls:this.nls},f.create("div",{"class":"summarySelectorDiv"},this._editorObj.toolbar.containerNode))})),this._editorObj.startup());this.autoZoomAfterTraceCheckedState?this.autoZoomAfterTrace.setValue(!0):this.autoZoomAfterTrace.setValue(!1)},displayInputOutputParameters:function(){this._displayInputOutputPanelParameters();this._regainExistingConfigurationData()},_regainExistingConfigurationData:function(){this.config.summaryExpression&&(""!==this._editorObj&&null!==this._editorObj&&void 0!==this._editorObj&&
(this._editorObj.focus(),this._editorObj.set("value",this.config.summaryExpression.summaryExpressionValue)),null===this.config.summaryExpression.summaryExpressionValue||""===this.config.summaryExpression.summaryExpressionValue?g.add(this.verifySummaryExpression,"jimu-state-disabled"):g.remove(this.verifySummaryExpression,"jimu-state-disabled"))},_displayInputOutputPanelParameters:function(){var a;this._inputOutputParamArray=[];this._inputOutputSelect=f.create("select",{"class":"esriCTPanelSelect",
size:2},this.inputOutputParameterPanel);for(a=0;a<this.inputParametersArray.length;a++){var b=f.create("option",{});b.innerHTML=this.inputParametersArray[a].name;b.value=this.inputParametersArray[a].name;b.title=this.inputParametersArray[a].name;k.set(b,"Type","Input");this._inputOutputSelect.appendChild(b);g.add(b,"esriCTInputOutputOptions");this._inputOutputParamArray.push(this.inputParametersArray[a])}for(a=0;a<this.outputParametersArray.length;a++)b=f.create("option",{}),b.innerHTML=this.outputParametersArray[a].name,
b.value=this.outputParametersArray[a].name,b.title=this.outputParametersArray[a].name,k.set(b,"Type","Output"),this.outputParametersArray[a]&&this.outputParametersArray[a].defaultValue&&this.outputParametersArray[a].defaultValue.geometryType?k.set(b,"GeometryType",this.outputParametersArray[a].defaultValue.geometryType):k.set(b,"GeometryType",null),this._inputOutputSelect.appendChild(b),g.add(b,"esriCTInputOutputOptions"),this._inputOutputParamArray.push(this.outputParametersArray[a]);k.set(this._inputOutputSelect,
"size",this._inputOutputParamArray.length);this._onInputOutputClick();this._insertBlankSelectInFieldPanel();this._insertBlankSelectInOperatorPanel();this._allocateEqualSizeToPanels()},_insertBlankSelectInFieldPanel:function(){this._fieldSelect=f.create("select",{"class":"esriCTFieldPanelSelect",size:2},this.fieldPanel);var a=f.create("option",{});a.innerHTML="";k.set(a,"disabled",!0);this._fieldSelect.appendChild(a);g.add(a,"esriCTBlankOptions")},_insertBlankSelectInOperatorPanel:function(){this._operatorSelect=
f.create("select",{"class":"esriCTOperatorPanelSelect",size:2},this.operatorPanel);var a=f.create("option",{});a.innerHTML="";k.set(a,"disabled",!0);this._operatorSelect.appendChild(a);g.add(a,"esriCTBlankOptions")},_emptyFieldPanel:function(){f.empty(this.fieldPanel);this._fieldSelect=null},_emptyOperatorPanel:function(){f.empty(this.operatorPanel);this._operatorSelect=null},_onInputOutputClick:function(){var a;this.own(n(this._inputOutputSelect,"click",h.hitch(this,function(b){a=k.get(b.currentTarget[b.currentTarget.selectedIndex],
"Type");"Input"===a?(g.add(this.addSummaryExpression,"jimu-state-disabled"),this._selectedInput=this._selectedOutput=this._selectedField=this._selectedOperator=null,this._selectedInput=b.currentTarget[b.currentTarget.selectedIndex],this._emptyFieldPanel(),this._emptyOperatorPanel(),this._insertBlankSelectInFieldPanel(),this._displayOperators(!0,!1,!1,!1),g.remove(this.operatorPanel,"esriCTHidden")):"Output"===a&&(this._selectedOutputGeometryType=k.get(b.currentTarget[b.currentTarget.selectedIndex],
"GeometryType"),this._selectedInput=this._selectedOutput=this._selectedField=this._selectedOperator=null,this._selectedOutput=b.currentTarget[b.currentTarget.selectedIndex],this._selectedOutputParameter=b,this._emptyFieldPanel(),this._emptyOperatorPanel(),this._displayOutputFields(),this._fetchAndDisplayOutputOperators())})))},_fetchAndDisplayOutputOperators:function(){g.add(this.addSummaryExpression,"jimu-state-disabled");this._displayOperators(!1,!0,!1,!1);this._fieldSelect.selectedIndex="-1"},
_displayOutputFields:function(){var a,b=[];f.empty(this.fieldPanel);b=this._inputOutputParamArray[this._selectedOutputParameter.currentTarget.selectedIndex].defaultValue.fields;this._fieldSelect=f.create("select",{"class":"esriCTFieldPanelSelect"},this.fieldPanel);for(a=0;a<b.length;a++)if("esriFieldTypeDouble"===b[a].type||"esriFieldTypeSmallInteger"===b[a].type||"esriFieldTypeInteger"===b[a].type){var c=f.create("option",{});c.innerHTML=b[a].name;c.value=b[a].name;c.title=b[a].name;this._fieldSelect.appendChild(c);
g.add(c,"esriCTInputOutputOptions")}this._onFieldClick();this._allocateEqualSizeToPanels()},_onFieldClick:function(){this.own(n(this._fieldSelect,"click",h.hitch(this,function(a){g.add(this.addSummaryExpression,"jimu-state-disabled");this._selectedField=null;this._selectedField=a.currentTarget[a.currentTarget.selectedIndex];this._displayOperators(!1,!1,!0,!1);this._allocateEqualSizeToPanels()})))},_displayOperators:function(a,b,c,d){var e=[];f.empty(this.operatorPanel);a?e.push(this.nls.summaryTab.inputOperatorCountOption):
b?(e.push(this.nls.summaryTab.outputOperatorCountOption),d&&e.push(this.nls.summaryTab.outputOperatorSkipCountOption)):c&&(e.push(this.nls.summaryTab.fieldOperatorSumOption),e.push(this.nls.summaryTab.fieldOperatorMinOption),e.push(this.nls.summaryTab.fieldOperatorMaxOption),e.push(this.nls.summaryTab.fieldOperatorMeanOption));this._operatorSelect=f.create("select",{"class":"esriCTPanelSelect",size:2},this.operatorPanel);for(b=0;b<e.length;b++)a=f.create("option",{}),a.innerHTML=e[b],a.value=e[b],
a.title=e[b],this._operatorSelect.appendChild(a),g.add(a,"esriCTInputOutputOptions");this._selectOperator();this._allocateEqualSizeToPanels()},refreshOperator:function(){!this._selectedField&&this._selectedOutput&&(this._fetchAndDisplayOutputOperators(),this._selectedOperator&&this._selectedOperator.value===this.nls.summaryTab.outputOperatorCountOption&&this._operatorSelect&&(this._operatorSelect.selectedIndex=0,g.remove(this.addSummaryExpression,"jimu-state-disabled")))},_selectOperator:function(){this.own(n(this._operatorSelect,
"click",h.hitch(this,function(a){this._selectedOperator=null;this._selectedOperator=a.currentTarget[a.currentTarget.selectedIndex];null===this._selectedInput&&null===this._selectedOutput||null===this._selectedOperator||g.remove(this.addSummaryExpression,"jimu-state-disabled")})))},_allocateEqualSizeToPanels:function(){var a,b;var c=b=a=0;this._inputOutputSelect&&0<this._inputOutputSelect.length&&(a=this._inputOutputSelect.length);this._fieldSelect&&0<this._fieldSelect.length&&(b=this._fieldSelect.length);
this._operatorSelect&&0<this._operatorSelect.length&&(c=this._operatorSelect.length);a=Math.max(a,b,c);this._inputOutputSelect&&k.set(this._inputOutputSelect,"size",a);this._fieldSelect&&k.set(this._fieldSelect,"size",a);this._operatorSelect&&k.set(this._operatorSelect,"size",a);this._removeClassFromChildNodes();this._inputOutputSelect&&this._inputOutputSelect.length===a&&g.add(this._inputOutputSelect.childNodes[a-1],"esriCTInputOutputOptionsBorderNone");this._fieldSelect&&this._fieldSelect.length===
a&&g.add(this._fieldSelect.childNodes[a-1],"esriCTInputOutputOptionsBorderNone");this._operatorSelect&&this._operatorSelect.length===a&&g.add(this._operatorSelect.childNodes[a-1],"esriCTInputOutputOptionsBorderNone")},_removeClassFromChildNodes:function(){var a;if(this._inputOutputSelect)for(a=0;a<this._inputOutputSelect.childNodes.length;a++)g.remove(this._inputOutputSelect.childNodes[a],"esriCTInputOutputOptionsBorderNone");if(this._fieldSelect)for(a=0;a<this._fieldSelect.childNodes.length;a++)g.remove(this._fieldSelect.childNodes[a],
"esriCTInputOutputOptionsBorderNone");if(this._operatorSelect)for(a=0;a<this._operatorSelect.childNodes.length;a++)g.remove(this._operatorSelect.childNodes[a],"esriCTInputOutputOptionsBorderNone")},_onClickAddExpressionBtn:function(){if(!g.contains(this.addSummaryExpression,"jimu-state-disabled")){var a=!1;null!==this._selectedInput&&null!==this._selectedOperator?(this._editorObj.focus(),this._editorObj.execCommand("inserthtml","{"+this._selectedInput.value+":"+this._selectedOperator.value+"}"),a=
!0):null!==this._selectedOutput&&null===this._selectedField&&null!==this._selectedOperator?(this._editorObj.focus(),this._editorObj.execCommand("inserthtml","{"+this._selectedOutput.value+":"+this._selectedOperator.value+"}"),a=!0):null!==this._selectedOutput&&null!==this._selectedField&&null!==this._selectedOperator&&(this._editorObj.focus(),this._editorObj.execCommand("inserthtml","{"+this._selectedOutput.value+":"+this._selectedField.value+":"+this._selectedOperator.value+"}"),a=!0);!0===a&&g.contains(this.verifySummaryExpression,
"jimu-state-disabled")&&g.remove(this.verifySummaryExpression,"jimu-state-disabled")}},_onClickVerifyExpressionBtn:function(){g.contains(this.verifySummaryExpression,"jimu-state-disabled")||this.validateExpression(!0)},_errorMessage:function(a){(new y({message:a})).message=a},getSummaryExpressionConfigData:function(){var a={summaryExpressionValueArr:[]};a.summaryExpressionValue=this._editorObj.value;a.summaryExpressionValue.replace(/\{(.+?)\}/g,function(b,c){b={};b.value=c;b.trimmedValue=c.replace(/\s/g,
"");a.summaryExpressionValueArr.push(b)});a.summaryExpressionTrimmedValue=this._getSummaryExpressionFilteredValue(a.summaryExpressionValueArr);a.summaryExpressionNLS=this.nls.summaryTab;a.autoZoomAfterTrace=this.getAutoZoomAfterTraceConfigData();return a},getAutoZoomAfterTraceConfigData:function(){return this.autoZoomAfterTrace.getValue()},_getSummaryExpressionFilteredValue:function(a){var b;var c=this._editorObj.value;for(b=0;b<a.length;b++){var d=new RegExp(a[b].value,"g");c=c.replace(d,a[b].trimmedValue)}return c},
validateExpressionOnOkClick:function(){return this.validateExpression(!1)},_validateExpressionEntry:function(a){var b,c;for(b=0;b<a.length;b++){var d=a[b].split(":");for(c=0;c<d.length;c++)if(0===c){var e=this._validateInputOutputEntry(d[0]);if(!e)return!1}else if(1===c&&2===d.length){if(e=this._validateInputOutputOperatorEntry(d[0],d[1]),!e)return!1}else if(1===c&&3===d.length){if(e=this._validateFieldEntry(d[0],d[1]),!e)return!1}else if(2===c&&3===d.length&&(e=this._validateFieldOperatorEntry(d[2]),
!e))return!1}return!0},_validateInputOutputEntry:function(a){var b;var c=!1;for(b=0;b<this.inputParametersArray.length;b++)a===this.inputParametersArray[b].name&&(c=!0);for(b=0;b<this.outputParametersArray.length;b++)a===this.outputParametersArray[b].name&&(c=!0);return c},_validateInputOutputOperatorEntry:function(a,b){var c;var d=!1;this._outputLayerSettingsArr=[];this._outputLayerSettingsArr=this.getOutputSettings();for(c=0;c<this._outputLayerSettingsArr.length;c++)if(this._outputLayerSettingsArr[c].paramName===
a){b===this.nls.summaryTab.outputOperatorCountOption&&(d=!0);break}if(!d)for(c=0;c<this.inputParametersArray.length;c++)if(this.inputParametersArray[c].name===a){b===this.nls.summaryTab.inputOperatorCountOption&&(d=!0);break}return d},_validateFieldEntry:function(a,b){for(var c=!1,d=0;d<this._inputOutputParamArray.length;d++)if(a===this._inputOutputParamArray[d].name)for(var e=0;e<this._inputOutputParamArray[d].defaultValue.fields.length;e++)b===this._inputOutputParamArray[d].defaultValue.fields[e].name&&
(c=!0);return c},_validateFieldOperatorEntry:function(a){var b=!1;if(a===this.nls.summaryTab.fieldOperatorSumOption||a===this.nls.summaryTab.fieldOperatorMinOption||a===this.nls.summaryTab.fieldOperatorMaxOption||a===this.nls.summaryTab.fieldOperatorMeanOption)b=!0;return b},validateExpression:function(a){var b;var c=[];var d=this._editorObj.value;""!==d&&null!==d&&0===c.length&&d.replace(/\{(.+?)\}/g,function(m,p){b=p.replace(/\s/g,"");c.push(b)});var e=!0;0<c.length&&(e=this._validateExpressionEntry(c));
-1!==d.indexOf("{}")&&(e=!1);if(!0===e)if(a)this._errorMessage(this.nls.validationErrorMessage.validSummaryExpression);else return{returnErr:"",returnFlag:!1};else if(a)this._errorMessage(this.nls.validationErrorMessage.invalidSummaryExpression);else return{returnErr:this.nls.validationErrorMessage.invalidSummaryExpression,returnFlag:!0}},onProjectSettingsChanged:function(a){""!==this._outputTable&&null!==this._outputTable&&void 0!==this._outputTable&&r.forEach(this._outputTable.getRows(),h.hitch(this,
function(b){var c=!0;a&&a.polygonLayerId&&a.pointLayerId&&a.outputParamName&&(c=!1,b.config.paramName===a.outputParamName&&(c=!0));b&&b.layerSelector.set("disabled",c)}))},_createOutputTable:function(){this._outputTable=new I({fields:[{name:"visibility",title:this.nls.summaryTab.visibilityText,type:"checkbox",width:"10%"},{name:"displayName",title:this.nls.summaryTab.outputParametersText,type:"text",width:"20%"},{name:"saveToLayer",title:"",type:"empty",width:"26%"},{name:"skipable",title:this.nls.summaryTab.skipText,
type:"checkbox",width:"12%"},{name:"exportToCSV",title:this.nls.summaryTab.exportToCsvText,type:"checkbox",width:"12%"},{name:"symbol",title:this.nls.summaryTab.symbol,type:"empty",width:"10%"},{name:"settings",title:this.nls.summaryTab.settitngstext,type:"empty",width:"10%"}],selectable:!1});this._outputTable.placeAt(this.outputTableNode);this._outputTable.startup();this._addSaveToLayerMainDiv();this._addHelpIconToHeader();this.setOutputSettings();this.onProjectSettingsChanged(this.projectSettings)},
_addSaveToLayerMainDiv:function(){var a=q(".simple-table-thead tr",this.domNode);""!==a&&null!==a&&void 0!==a&&0<a.length&&(a=a[0]);a&&(a=a.children[2])&&(a=f.create("div",{"class":"esriCTSaveToLayerMainDiv"},a),f.create("div",{"class":"esriCTSaveToLayerLabelDiv",innerHTML:this.nls.summaryTab.saveToLayerText,title:this.nls.summaryTab.saveToLayerText},a))},_addHelpIconToHeader:function(){var a;var b=q(".simple-table-thead tr",this.domNode);""!==b&&null!==b&&void 0!==b&&0<b.length&&(b=b[0]);if(b){var c=
b.children[2];c=c.childNodes[0];b.children[4]&&(a=b.children[4])}a&&a.childNodes&&a.childNodes[0]&&a.childNodes[0].hasAttribute("id")&&(b=z.byId(a.childNodes[0].id))&&(b.setLabel(this.nls.summaryTab.exportToCsvDisplayText),b.domNode&&b.domNode.children&&b.domNode.children[1]&&k.set(b.domNode.children[1],"title",this.nls.summaryTab.exportToCsvText));c=f.create("div",{"class":"esriCTSaveTolayerHelpIcon"},c);n(c,"click",h.hitch(this,function(){new y({message:this.nls.summaryTab.saveToLayerHelp})}))},
setOutputSettings:function(){this.outputConfig&&0<this.outputConfig.length&&r.forEach(this.outputConfig,h.hitch(this,function(a){var b=this._outputTable.addRow(a);var c=q(".simple-table-cell",b.tr);b.tr.config=a;if("esriGeometryPoint"!==a.data.defaultValue.geometryType||!this.hasSkipLocationsInput){var d=q(".skipable",b.tr);r.forEach(d,function(e){e=z.getEnclosingWidget(e.childNodes[0]);e.setValue(!1);e.setStatus(!1)})}c&&(this._addSaveToLayerDropDown(c[2],b.tr),this._addSymbolPicker(c[5],b.tr,a),
this._addSettingsIcon(c[6],b.tr))}))},_addSaveToLayerDropDown:function(a,b){a=f.create("div",{"class":"esriCTDropDownContainer"},a);var c=this._createSaveToLayerOptions(b.config.data.defaultValue.geometryType);c=new J({options:c,"class":"esriCTLayerFieldSelector"});c.placeAt(a);c.startup();b.layerSelector=c;b.config&&b.config.saveToLayer&&c.set("value",b.config.saveToLayer)},_addSettingsIcon:function(a,b){a=f.create("div",{},a);a=f.create("div",{"class":"esriCTToleranceSettingsIcon",title:this.nls.summaryTab.settitngstext},
f.create("div",{},a));this.own(n(a,"click",h.hitch(this,function(){this._createOutputPanel(b)})))},_createSaveToLayerOptions:function(a){var b,c=[];c.push({value:"",label:this.nls.projectSetting.selectLabel});if(this.map&&this.map.itemInfo&&this.map.itemInfo.itemData&&this.map.itemInfo.itemData.operationalLayers){var d=this.map.itemInfo.itemData.operationalLayers;for(b=0;b<d.length;b++){var e;d[b]&&d[b].layerObject&&d[b].layerType&&"ArcGISFeatureLayer"===d[b].layerType&&d[b].layerObject.fields&&a===
d[b].layerObject.geometryType&&this._validateLayerCapabilities(d[b].layerObject)&&(e=this._validateLayerFields(d[b].layerObject.fields))&&(e={value:d[b].id,layerId:d[b].id,guidField:e.projectidField,parameterNameField:e.parameterNameField,label:d[b].title},c.push(e))}}return c},_addSymbolPicker:function(a,b,c){var d={},e="";var m=c&&c.data&&c.data.defaultValue&&c.data.defaultValue.geometryType?c.data.defaultValue.geometryType:"esriGeometryPoint";c.displayName&&(e=c.displayName);d.symbol=b.symbol?
v.fromJson(b.symbol):c&&c.symbol?v.fromJson(c.symbol):v.fromJson(this._getFallbackSymbol(m));var p={symbolChooserTitle:e,symbolParams:d,nls:this.nls,symbolType:"graphicLocationSymbol"},l=f.create("div",{style:"height: 27px; overflow: hidden;"},a);this._showSelectedSymbol(l,d.symbol,b,m);this.own(n(l,"click",h.hitch(this,function(){p.symbolParams.symbol=v.fromJson(b.symbol);this._initSymbolChooserPopup(p,l,b,m)})))},_showSelectedSymbol:function(a,b,c,d){f.empty(a);if(b){if(26<b.height){var e=h.clone(b.height);
b.height=26}if(26<b.width){var m=h.clone(b.width);b.width=26}if(20<b.size){var p=h.clone(b.size);b.size=20}var l=K.createSymbolNode(b);l||(l=f.create("div"));f.place(l,a);e&&(b.height=e);m&&(b.width=m);p&&(b.size=p);switch(d){case "esriGeometryPoint":t.set(a,"margin","0 24px");break;case "esriGeometryPolyline":t.set(l,"width","27px"),t.set(l,"overflow","hidden"),t.set(l,"margin","0 24px")}c.symbol=b.toJson()}},_createOutputPanel:function(a){var b="";b=a.config.displayName;var c=f.create("div");var d=
f.create("div",{"class":"ParameterDiv esriCTtaskDataContainer",style:{"max-height":"395px"}},c);d=f.create("div",{"class":"section common-property"},d);var e=f.create("div",{"class":"field esriCTOutputOutageField",title:this.nls.summaryTab.inputLabel},d);f.create("label",{innerHTML:this.nls.summaryTab.inputLabel,title:this.nls.summaryTab.inputLabel},e);this.labelTextbox=new A({required:!0,"class":"common-input esriCTLabelClass"},f.create("div",{},e));this.labelTextbox.set("value",a.config.panelText);
f.create("div",{"class":"esriCTHintField",innerHTML:this.nls.hintText.labelTextHint},e);e=f.create("div",{"class":"field esriCTOutputOutageField",title:this.nls.summaryTab.inputTooltip},d);f.create("label",{innerHTML:this.nls.summaryTab.inputTooltip,title:this.nls.summaryTab.inputTooltip},e);this.tooltipTextbox=new A({"class":"common-input esriCTTooltipDataClass"},f.create("div",{},e));this.tooltipTextbox.set("value",a.config.toolTip);e=f.create("div",{"class":"field esriCTOutputOutageField",title:this.nls.summaryTab.outputDisplay},
d);f.create("label",{innerHTML:this.nls.summaryTab.outputDisplay,title:this.nls.summaryTab.outputDisplay},e);var m=f.create("div",{"class":"edit-description-box"},e),p=f.create("div",{"class":"esriCTAddFieldContainer",title:this.nls.summaryTab.addFieldTitle},m);this.editorDescription=f.create("div",{},m);f.create("div",{"class":"esriCTHintField",innerHTML:this.nls.hintText.displayTextHint},e);this._initSymbolSelectionEditor();this._createFieldSelector(p,this._editorObjSymbolSelector,a.config.data.defaultValue.fields);
this._editorObjSymbolSelector.set("value",a.config.displayText);e=f.create("div",{"class":"field esriCTOutputOutageField",title:this.nls.summaryTab.setScale},d);f.create("label",{innerHTML:this.nls.summaryTab.setScale,title:this.nls.summaryTab.setScale},e);d=this._getSaveToLayerInfo(a.layerSelector);e=new f.create("div",{"class":"esriCTSliderContainer"},e);this._createSlider(e,a.config,d);var l=new M({titleLabel:b,width:875,maxHeight:800,autoHeight:!0,content:c,"class":this.baseClass,buttons:[{label:this.nls.common.ok,
onClick:h.hitch(this,function(){this.labelTextbox.isValid()?(a.config.panelText=this.labelTextbox.get("value"),a.config.toolTip=this.tooltipTextbox.get("value"),a.config.displayText=this._editorObjSymbolSelector.get("value"),a.config.MinScale=this._visibleScaleRangeSlider.minScale,a.config.MaxScale=this._visibleScaleRangeSlider.maxScale,this._destroyEditorWidget(),l.close()):this.labelTextbox.focus()})},{label:this.nls.common.cancel,classNames:["jimu-btn-vacation"],onClick:h.hitch(this,function(){this._destroyEditorWidget();
l.close()})}],onClose:h.hitch(this,function(){this._destroyEditorWidget()})})},_initSymbolSelectionEditor:function(){this._loadedPluginCSS||(this._loadedPluginCSS=!0,this._initEditorPluginsCSS());this._editorObjSymbolSelector=new w({plugins:["bold","italic","underline",u.getEditorTextColor("networkTrace"),u.getEditorBackgroundColor("networkTrace"),"|","justifyLeft","justifyCenter","justifyRight","justifyFull","|","insertOrderedList","insertUnorderedList","indent","outdent"],extraPlugins:["|","createLink",
"unlink","pastefromword","|","undo","redo","|","toolbarlinebreak",{name:"dijit._editor.plugins.FontChoice",command:"fontName",custom:"Arial;Comic Sans MS;Courier New;Garamond;Tahoma;Times New Roman;Verdana".split(";")},"fontSize","formatBlock"],style:"font-family:Verdana;"},this.editorDescription);t.set(this._editorObjSymbolSelector.domNode,{width:"100%",height:"100%"});this._editorObjSymbolSelector.startup();if(8!==O("ie"))this._editorObjSymbolSelector.resize({w:"100%",h:"100%"});else{var a=x.getMarginBox(this.editorDescription);
this._editorObjSymbolSelector.resize({w:a.w,h:a.h})}this.own(n(this._editorObjSymbolSelector,"focus",h.hitch(this,function(){this._editorObjSymbolSelector.get("value")===this.nls.summaryTab.enterDisplayText&&this._editorObjSymbolSelector.set("value","")})))},_createFieldSelector:function(a,b,c){(new L({fields:c,showOnlyNumericFields:!1,skipObjectIdField:!0,hideOnSelect:!0},f.create("div",{},a))).onSelect=h.hitch(this,function(d){b.get("value")===this.nls.summaryTab.enterDisplayText&&b.set("value",
"");d=b.get("value")+"{"+d.name+"}";b.set&&b.set("value",d)})},_getSaveToLayerInfo:function(a){var b={saveToLayerId:"",guidField:"",parameterNameField:""};a&&a.get("value")&&(a=a._getSelectedOptionsAttr(),b.saveToLayerId=a.layerId,b.guidField=a.guidField,b.parameterNameField=a.parameterNameField);return b},_createSlider:function(a,b,c){c&&c.saveToLayerId&&0===b.MinScale&&0===b.MaxScale?(b=this.map.getLayer(c.saveToLayerId),this._visibleScaleRangeSlider=new B({map:this.map,layer:b},f.create("div",
{},a))):(this._visibleScaleRangeSlider=new B({map:this.map},f.create("div",{},a)),this._visibleScaleRangeSlider.set("minScale",b.MinScale),this._visibleScaleRangeSlider.set("maxScale",b.MaxScale));this._visibleScaleRangeSlider.startup()},_destroyEditorWidget:function(){this._editorObjSymbolSelector&&(this._editorObjSymbolSelector.destroy(),this._editorObjSymbolSelector=null)},_validateLayerCapabilities:function(a){return a&&a.getEditCapabilities&&(a=a.getEditCapabilities(),a.canCreate&&a.canUpdate&&
a.canDelete)?!0:!1},_validateLayerFields:function(a){var b;var c={projectidField:null,parameterNameField:null};var d=b=!1;r.some(a,function(e){"esriFieldTypeGUID"===e.type&&e.editable&&"projectid"===e.name.toLowerCase()&&(c.projectidField=e.name,d=!0);"esriFieldTypeString"===e.type&&e.editable&&"parametername"===e.name.toLowerCase()&&(c.parameterNameField=e.name,b=!0);if(b&&d)return!0});b&&d||(c=null);return c},_initSymbolChooserPopup:function(a,b,c,d){var e=new N(a);e.onOkClick=h.hitch(this,function(){var m=
e.symbolChooser.getSymbol();this._showSelectedSymbol(b,m,c,d);e.popup.close()})},getOutputSettings:function(){var a=[];r.forEach(this._outputTable.getRows(),h.hitch(this,function(b){var c={};if(b){var d=this._outputTable.getRowData(b);c=this._getSaveToLayerInfo(b.layerSelector);c={visibility:d.visibility,paramName:b.config.paramName,type:"Result",panelText:b.config.panelText,toolTip:b.config.toolTip,displayName:d.displayName,displayText:b.config.displayText,MinScale:b.config.MinScale,MaxScale:b.config.MaxScale,
exportToCSV:d.exportToCSV,saveToLayer:c.saveToLayerId,guidField:c.guidField,parameternameField:c.parameterNameField,symbol:b.symbol};c.bypassDetails={skipable:d.skipable};a.push(c)}}));return a},_initEditorPluginsCSS:function(){var a=document.getElementsByTagName("head")[0];var b=window.apiUrl+"dojox/editor/plugins/resources/css/TextColor.css";q('link[href\x3d"'+b+'"]',a)[0]||u.loadStyleLink("editor_plugins_resources_TextColor",b);b=window.apiUrl+"dojox/editor/plugins/resources/editorPlugins.css";
q('link[href\x3d"'+b+'"]',a)[0]||u.loadStyleLink("editor_plugins_resources_editorPlugins",b);b=window.apiUrl+"dojox/editor/plugins/resources/css/PasteFromWord.css";q('link[href\x3d"'+b+'"]',a)[0]||u.loadStyleLink("editor_plugins_resources_PasteFromWord",b)},_getFallbackSymbol:function(a){a||(a="esriGeometryPoint");switch(a){case "esriGeometryPoint":var b={color:[0,0,128,128],outline:{color:[0,0,128,255],width:.75,type:"esriSLS",style:"esriSLSSolid"},size:18,type:"esriSMS",style:"esriSMSCircle"};break;
case "esriGeometryPolygon":b={color:[155,187,89,129],outline:{color:[115,140,61,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"};break;case "esriGeometryPolyline":b={color:[155,187,89,255],type:"esriSLS",style:"esriSLSSolid",width:2.25}}return b}})});