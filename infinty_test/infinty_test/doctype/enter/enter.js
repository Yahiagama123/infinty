// Copyright (c) 2023, s and contributors
// For license information, please see license.txt

frappe.ui.form.on('Enter', {
	// refresh: function(frm) {

	// }
});


frappe.ui.form.on("Enter", {
    enter_count:function(frm,cdt,cdn){
        const row = locals[cdt][cdn];
			if(row.status=="Enter"){
			
            frappe.model.set_value(cdt, cdn, "diff", row.enter_count-row.count_exit);
   
        }
		if(row.status=="Exit"){
			
			frappe.model.set_value(cdt, cdn, "diff", "0");

		}
    }
});