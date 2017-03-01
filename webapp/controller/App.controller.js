sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.controller.App", {
	  //  	onInit : function () {
			// // set data model on view
			// var oData = {
			// 	recipient : {
			// 	   name : "World"
			// 	}
			// };
			// var oModel = new JSONModel(oData);
			// this.getView().setModel(oModel);
	  //        // set i18n model on view
	  //        var i18nModel = new ResourceModel({
	  //           bundleName: "sap.ui.demo.wt.i18n.i18n"
	  //        });
	  //        this.getView().setModel(i18nModel, "i18n");
	  //     },

	  // moved to HelloPanel.controller
		// onShowHello : function () {
		//  // show a native JavaScript alert
		//  // alert("Hello World");
		// 	// read msg from i18n model
		// 	var oBundle = this.getView().getModel("i18n").getResourceBundle();
		// 	var sRecipient = this.getView().getModel().getProperty("/recipient/name");
		// 	var sMsg = oBundle.getText("helloMsg", [sRecipient]);
		// 	// show message
		// 	MessageToast.show(sMsg);
		// }
   });
});