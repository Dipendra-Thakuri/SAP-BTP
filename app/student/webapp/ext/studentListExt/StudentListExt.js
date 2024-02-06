sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        SetAlumni: function(oBindingContext,aSelectedContexts) {       
             aSelectedContexts.forEach(element => {
                MessageToast.show("Nikil Bhai Set");
                var aData = jQuery.ajax({
                    type: "PATCH",
                    contentType: "application/json",
                    url: "/odata/v4/student-db"+element.sPath,
                    data: JSON.stringify({is_alumni:true})
                }).then(element.requestRefresh());
            });
        },
        SetStudent: function(oBindingContext,aSelectedContexts) {       
            aSelectedContexts.forEach(element => {
               MessageToast.show("Nikil Bhai Not Set");
               var aData = jQuery.ajax({
                   type: "PATCH",
                   contentType: "application/json",
                   url: "/odata/v4/student-db"+element.sPath,
                   data: JSON.stringify({is_alumni:false})
               }).then(element.requestRefresh());
           });
       }
    }
}
)