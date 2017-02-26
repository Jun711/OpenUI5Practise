sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.wt.Component", {
      metadata : {
            manifest: "json"
      },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);
         //  It is done automatically by SAPUI5 with the help of the configuration entries in the descriptor. 
         // set i18n model
         // var i18nModel = new ResourceModel({
         //    bundleName : "sap.ui.demo.wt.i18n.i18n"
         // });
         // this.setModel(i18nModel, "i18n");
      }
   });
});