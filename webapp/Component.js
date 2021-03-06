sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/demo/wt/controller/HelloDialog",
   "sap/ui/Device"
], function (UIComponent, JSONModel, HelloDialog, Device) {
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
         // disable batch grouping for v2 API of the northwind service
         this.getModel("invoice").setUseBatch(false);

         // set device model
         var oDeviceModel = new JSONModel(Device);
         oDeviceModel.setDefaultBindingMode("OneWay");
         this.setModel(oDeviceModel, "device");

         //  It is done automatically by SAPUI5 with the help of the configuration entries in the descriptor. 
         // set i18n model
         // var i18nModel = new ResourceModel({
         //    bundleName : "sap.ui.demo.wt.i18n.i18n"
         // });
         // this.setModel(i18nModel, "i18n");
      // set dialog
         this._helloDialog = new HelloDialog(this.getAggregation("rootControl"));
         // create the views based on the url/hash
         this.getRouter().initialize();
      },


      openHelloDialog : function () {
         this._helloDialog.open();
      }
   });
});