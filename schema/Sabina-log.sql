********************************(19/03/2024 Translation(RequestForQuote insertField))**************************************(Sabina)
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdRequestForQuote.Purchase Request Code', 'Purchase Request Code', 'كود طلب الشراء', 'Purchase Request Code field in RequestForQuote ', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdRequestForQuote.Request For Quote Code', 'Request For Quote Code', 'طلب رمز اقتباس', 'Request For Quote Code in RequestForQuote', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdRequestForQuote.Status', 'Status', 'حالة', 'RequestForQuote Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdRequestForQuote.Date Issued', 'Date Issued', 'تاريخ الإصدار', 'RequestForQuote Date Issued field', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdRequestForQuote.Due Date', 'Due Date', 'تاريخ الاستحقاق', 'RequestForQuote Due Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdRequestForQuote.Supplier Name', 'Supplier Name', 'اسم المورد', 'RequestForQuote Supplier Name field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(20/03/2024 project_quote(RequestForQuote createField))**************************************(Sabina)
ALTER TABLE `purchase_quote` ADD `rq_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `rq_code`; 
ALTER TABLE `purchase_quote` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 
ALTER TABLE `purchase_quote` ADD `date_issued_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `date_issued`; 
ALTER TABLE `purchase_quote` ADD `due_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `due_date`; 

********************************(19/03/2024 Translation(PurchaseRequest insertField))**************************************(Sabina)
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdPurchaseRequest.Purchase Request code', 'Purchase Request code', 'كود طلب الشراء', 'PurchaseRequest Purchase Request code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Purchase Request Date', 'Purchase Request Date', 'تاريخ طلب الشراء', 'PurchaseRequest Purchase Request Date field', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdPurchaseRequest.Purchase Delivery Date', 'Purchase Delivery Date', 'تاريخ تسليم الشراء', 'PurchaseRequest Purchase Delivery Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Department', 'Department', 'قسم', 'PurchaseRequest Department field', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdPurchaseRequest.Customer Name', 'Customer Name', 'اسم الزبون', 'PurchaseRequest Customer Name field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Status', 'Status', 'حالة', 'PurchaseRequest Status field', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdPurchaseRequest.Priority', 'Priority', 'أولوية', 'PurchaseRequest Priority field', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdPurchaseRequest.Title', 'Title', 'عنوان', 'PurchaseRequest Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Unit', 'Unit', 'وحدة', 'PurchaseRequest Unit field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Quantity', 'Quantity', 'الكمية', 'PurchaseRequest Quantity field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Created By', 'Created By', 'انشأ من قبل', 'PurchaseRequest Created By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Updated By', 'Updated By', 'تم التحديث بواسطة', 'PurchaseRequest Updated By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Action', 'Action', 'فعل', 'PurchaseRequest Action field', NULL, NULL, NULL, NULL, NULL, '0');
 
********************************(20/03/2024 purchase_request(PurchaseRequest createField))**************************************(Sabina)
ALTER TABLE `purchase_request` ADD `purchase_request_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_request_code`; 
ALTER TABLE `purchase_request` ADD `purchase_request_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_request_date`; 
ALTER TABLE `purchase_request` ADD `purchase_delivery_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_delivery_date`; 
ALTER TABLE `purchase_request` ADD `department_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `department`; 
ALTER TABLE `purchase_request` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 
ALTER TABLE `purchase_request` ADD `priority_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `priority`; 

********************************(20/03/2024 purchase_request_items(PurchaseRequest createField))**************************************(Sabina)
ALTER TABLE `purchase_request_items` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`; 
ALTER TABLE `purchase_request_items` ADD `unit_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `unit`; 
ALTER TABLE `purchase_request_items` ADD `purchase_request_qty_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_request_qty`; 
ALTER TABLE `purchase_request_items` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`; 
ALTER TABLE `purchase_request_items` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`; 

********************************(19/03/2024 Translation(GoodsReceipt insertField))**************************************(Sabina)

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdGoodsReceipt.PO Code', 'PO Code', 'رمز الشراء', 'GoodsReceipt PO Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdGoodsReceipt.Supplier Name', 'Supplier Name', 'اسم المورد', 'GoodsReceipt Supplier Name field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdGoodsReceipt.Goods Received Date', 'Goods Received Date', 'تاريخ استلام البضائع', 'GoodsReceipt Goods Received Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdGoodsReceipt.Received By', 'Received By', 'استلمت من قبل', 'GoodsReceipt Received By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdGoodsReceipt.Total Amount', 'Total Amount', 'المبلغ الإجمالي', 'GoodsReceipt Total Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdGoodsReceipt.Status', 'Status', 'حالة', 'GoodsReceipt Status field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(20/03/2024 goods_receipt(GoodsReceipt createField))**************************************(Sabina)
ALTER TABLE `goods_receipt` ADD `goods_received_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `goods_received_date`; 
ALTER TABLE `goods_receipt` ADD `total_amount_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `total_amount`; 
ALTER TABLE `goods_receipt` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 

********************************(20/03/2024 goods_receipt_items(GoodsReceipt createField))**************************************(Sabina)
ALTER TABLE `goods_receipt_items` ADD `po_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `po_code`; 
ALTER TABLE `goods_receipt_items` ADD `item_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `item_title`; 
ALTER TABLE `goods_receipt_items` ADD `unit_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `unit`; 
ALTER TABLE `goods_receipt_items` ADD `ordered_quantity_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `ordered_quantity`; 
ALTER TABLE `goods_receipt_items` ADD `goods_received_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `goods_received_date`; 
ALTER TABLE `goods_receipt_items` ADD `goods_received_qty_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `goods_received_qty`; 
ALTER TABLE `goods_receipt_items` ADD `unit_price_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `unit_price`; 
ALTER TABLE `goods_receipt_items` ADD `total_cost_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `total_cost`; 

********************************(19/03/2024 Translation(PurchaseReturn insertField))**************************************(Sabina)

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdPurchaseReturn.Purchase Invoice Number', 'Purchase Invoice Number', 'رقم فاتورة الشراء', 'PurchaseReturn Purchase Invoice Number field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Return Date', 'Return Date', 'تاريخ العودة', 'PurchaseReturn Return Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Status', 'Status', 'حالة', 'PurchaseReturn Status field', NULL, NULL, NULL, NULL, NULL, '0');


INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdPurchaseReturn.Item', 'Item', 'غرض', 'PurchaseReturn Item field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Quantity', 'Quantity', 'الكمية', 'PurchaseReturn Quantity field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Total', 'Total', 'المجموع', 'Total field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdPurchaseReturn.Title', 'Title', 'عنوان', 'PurchaseReturn Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Description', 'Description', 'وصف', 'PurchaseReturn Description field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Qty', 'Qty', 'الكمية', 'PurchaseReturn Qty field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Unit Price', 'Unit Price', 'سعر الوحدة', 'PurchaseReturn Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Amount', 'Amount', 'كمية', 'PurchaseReturn Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Updated By', 'Updated By', 'تم التحديث بواسطة', 'PurchaseReturn Updated By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Action', 'Action', 'فعل', 'PurchaseReturn Action field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(20/03/2024 purchase_return (PurchaseReturn createField))**************************************(Sabina)
ALTER TABLE `purchase_return` ADD `purchase_return_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_return_date`; 
ALTER TABLE `purchase_return` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 

********************************(20/03/2024 purchase_return_items (PurchaseReturn createField))**************************************(Sabina)
ALTER TABLE `purchase_return_items` ADD `item_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `item_title`; 
ALTER TABLE `purchase_return_items` ADD `ordered_quantity_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `ordered_quantity`; 
ALTER TABLE `purchase_return_items` ADD `total_cost_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `total_cost`; 
ALTER TABLE `purchase_return_items` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `description`; 

********************************(22/03/2024 Translation(PurchaseRequest insertField))**************************************(Sabina)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdPurchaseRequest.Product Name', 'Product Name', 'اسم المنتج', 'PurchaseRequest Product Name field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(23/03/2024 Translation(PurchaseReturn insertField))**************************************(Sabina)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdPurchaseReturn.Purchase Invoice Date', 'Purchase Invoice Date', 'تاريخ فاتورة الشراء', 'PurchaseReturn Purchase Invoice Date field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(26/03/2024 Translation(CreditNote insertField))**************************************(Sabina)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdCreditNote.Order No', 'Order No', 'رقم الطلب', 'CreditNote Order No field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdCreditNote.Code', 'Code', 'شفرة', 'CreditNote Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdCreditNote.Mode of Payment', 'Mode of Payment', 'طريقة الدفع', 'CreditNote Mode of Payment field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdCreditNote.Status', 'Status', 'حالة', 'CreditNote Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdCreditNote.Amount', 'Amount', 'كمية', 'CreditNote Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdCreditNote.Date', 'Date', 'تاريخ', 'CreditNote Date field', NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdCreditNote.Invoice', 'Invoice', 'فاتورة', 'CreditNote Invoice field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdCreditNote.Orders', 'Orders', 'طلبات', 'CreditNote Orders field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(26/03/2024 Translation(DebitNote insertField))**************************************(Sabina)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdDebitNote.Order No', 'Order No', 'رقم الطلب', 'DebitNote Order No field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdDebitNote.Code', 'Code', 'شفرة', 'DebitNote Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdDebitNote.Mode of Payment', 'Mode of Payment', 'طريقة الدفع', 'DebitNote Mode of Payment field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdDebitNote.Status', 'Status', 'حالة', 'DebitNote Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdDebitNote.Amount', 'Amount', 'كمية', 'DebitNote Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdDebitNote.Date', 'Date', 'تاريخ', 'DebitNote Date field', NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdDebitNote.Invoice', 'Invoice', 'فاتورة', 'DebitNote Invoice field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdDebitNote.Orders', 'Orders', 'طلبات', 'DebitNote Orders field', NULL, NULL, NULL, NULL, NULL, '0'); 

********************************(26/03/2024 credit_note (credit_note createField))**************************************(Sabina)
ALTER TABLE `credit_note` ADD `credit_note_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `credit_note_code`; 
ALTER TABLE `credit_note` ADD `amount_arb` FLOAT(10,2) NULL DEFAULT NULL AFTER `amount`; 
ALTER TABLE `credit_note` ADD `mode_of_payment_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `mode_of_payment`; 
ALTER TABLE `credit_note` ADD `credit_note_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `credit_note_date`; 
ALTER TABLE `credit_note` ADD `credit_note_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `credit_note_status`; 

********************************(26/03/2024 debit_note (debit_note createField))**************************************(Sabina)
ALTER TABLE `debit_note` ADD `debit_note_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `debit_note_code`; 
ALTER TABLE `debit_note` ADD `amount_arb` FLOAT(10,2) NULL DEFAULT NULL AFTER `amount`; 
ALTER TABLE `debit_note` ADD `mode_of_payment_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `mode_of_payment`; 
ALTER TABLE `debit_note` ADD `debit_note_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `debit_note_date`; 
ALTER TABLE `debit_note` ADD `debit_note_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `debit_note_status`; 

********************************(27/03/2024 Translation(Employee insertField))**************************************(Sabina)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdEmployee.Code', 'Code', 'شفرة', 'Employee Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Full Name', 'Full Name', 'الاسم الكامل', 'Employee Full Name field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Salutation', 'Salutation', 'تحية', 'Employee Salutation field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Gender', 'Gender', 'جنس', 'Employee Gender field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Status', 'Status', 'حالة', 'Employee Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Date of Birth', 'Date of Birth', 'تاريخ الميلاد', 'Employee Date of Birth field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Passport No', 'Passport No', 'رقم جواز السفر', 'Employee Passport No field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Passport Expiry', 'Passport Expiry', 'انتهاء جواز السفر', 'Employee Passport Expiry field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Marital Status', 'Marital Status', 'الحالة الاجتماعية', 'Employee Marital Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Nationality', 'Nationality', 'جنسية', 'Employee Nationality field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Race', 'Race', 'سباق', 'Employee Race field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Religion', 'Religion', 'دِين', 'Employee Religion field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Project Designation', 'Project Designation', 'تسمية المشروع', 'Employee Project Designation field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Login Email', 'Login Email', 'تسجيل الدخول (البريد الإلكتروني', 'Employee Login Email field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Password', 'Password', 'كلمة المرور', 'Employee Password field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.User Group', 'User Group', 'مجموعة المستخدمين', 'Employee User Group field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Published', 'Published', 'نشرت', 'Employee Published field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Pass Type', 'Pass Type', 'نوع المرور', 'Employee Pass Type field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Fin No', 'Fin No', 'رقم الزعنفة', 'Employee Fin No field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Fin No Expiry date', 'Fin No Expiry date', 'تاريخ انتهاء صلاحية رقم الزعنفة', 'Employee Fin No Expiry date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Work Permit Expiry date', 'Work Permit Expiry date', 'تاريخ انتهاء تصريح العمل', 'Employee Work Permit Expiry date field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Qualification 1', 'Qualification 1', 'المؤهل 1', 'Qualification 1 field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Degree', 'Degree', 'درجة', 'Employee Degree field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Year of completion', 'Year of completion', 'سنة الانتهاء', 'Employee Year of completion field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Qualification 2', 'Qualification 2', 'المؤهل 2', 'Employee Qualification 2 field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Qualification 3', 'Qualification 3', 'المؤهل 3', 'Employee Qualification 3 field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Address 1', 'Address 1', 'العنوان 1', 'Employee Address 1 field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Address 2', 'Address 2', 'العنوان 2', 'Employee Address 2 field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Postal Code', 'Postal Code', 'رمز بريدي', 'Employee Postal Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Country', 'Country', 'دولة', 'Employee Country field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.HP/Mobile No.', 'HP/Mobile No.', 'اتش بي / رقم الجوال', 'Employee HP/Mobile No.field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Alternate Contact number', 'Alternate Contact number', 'رقم الاتصال البديل', 'Employee Alternate Contact number field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Email', 'Email', 'بريد إلكتروني', 'Employee Email field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Name', 'Name', 'اسم', 'Employee Name field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Phone 1', 'Phone 1', 'الهاتف 1', 'Employee Phone 1 field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Phone 2', 'Phone 2', 'الهاتف 2', 'Employee Phone 2 field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(31/03/2024 Translation(Employee insertField))**************************************(Sabina)

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Yes', 'Yes', 'نعم', 'Employee Yes field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.No', 'No', 'لا', 'Employee No field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Team', 'Team', 'فريق', 'Employee Team field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Pay', 'Pay', 'يدفع', 'Employee Pay field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Company', 'Company', 'شركة', 'Employee Company field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Experience', 'Experience', 'خبرة', 'Employee Experience field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Project manager', 'Project manager', 'مدير المشروع', 'Employee Project manager field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Team Leader', 'Team Leader', 'رئيس الفريق', 'Employee Team Leader field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(01/04/2024 Translation(Employee insertField))**************************************(Sabina)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.SPR Year', 'SPR Year', 'سنة ص ص', 'Employee SPR Year field', NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Work Permit No', 'Work Permit No', 'رقم تصريح العمل', 'Employee Work Permit No field', NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.NRIC No', 'NRIC No', 'ن ص ج لا', 'Employee NRIC No field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(01/04/2024 Employee (Employee createField))**************************************(Sabina)
ALTER TABLE `employee` ADD `employee_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `employee_name`; 
ALTER TABLE `employee` ADD `salutation_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `salutation`; 
ALTER TABLE `employee` ADD `gender_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `gender`; 
ALTER TABLE `employee` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 
ALTER TABLE `employee` ADD `marital_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `marital_status`; 
ALTER TABLE `employee` ADD `nationality_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `nationality`; 
ALTER TABLE `employee` ADD `race_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `race`; 
ALTER TABLE `employee` ADD `religion_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `religion`; 
ALTER TABLE `employee` ADD `project_designation_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `project_designation`; 
ALTER TABLE `employee` ADD `project_manager_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `project_manager`; 
ALTER TABLE `employee` ADD `team_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `team`; 
ALTER TABLE `employee` ADD `notes_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `notes`; 
ALTER TABLE `employee` ADD `email_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `email`; 
ALTER TABLE `employee` ADD `pass_word_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `pass_word`; 
ALTER TABLE `employee` ADD `published_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `published`; 
ALTER TABLE `employee` ADD `admin_staff_arb` TINYINT(1) NULL DEFAULT NULL AFTER `admin_staff`;
ALTER TABLE `employee` ADD `pay` VARCHAR(255) NULL DEFAULT NULL AFTER `admin_staff_arb`, ADD `pay_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `pay`; 
ALTER TABLE `employee` ADD `emp_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `emp_code`; 
ALTER TABLE `employee` ADD `team_leader` TINYINT(4) NULL DEFAULT NULL AFTER `pay_arb`, ADD `team_leader_arb` TINYINT(4) NULL DEFAULT NULL AFTER `team_leader`; 
ALTER TABLE `employee` ADD `first_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `first_name`; 

********************************(01/04/2024 Employee (Employee createField))**************************************(Sabina)
ALTER TABLE `employee` ADD `citizen_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `citizen`; 
ALTER TABLE `employee` ADD `nric_no_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `nric_no`; 
ALTER TABLE `employee` ADD `fin_no_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `fin_no`; 
ALTER TABLE `employee` ADD `spr_year_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `spr_year`; 
ALTER TABLE `employee` ADD `work_permit_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `work_permit`; 
ALTER TABLE `employee` ADD `educational_qualitifcation1_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `educational_qualitifcation1`; 
ALTER TABLE `employee` ADD `degree1_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `degree1`; 
ALTER TABLE `employee` ADD `educational_qualitifcation2_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `educational_qualitifcation2`; 
ALTER TABLE `employee` ADD `degree2_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `degree2`; 
ALTER TABLE `employee` ADD `educational_qualitifcation3_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `educational_qualitifcation3`; 
ALTER TABLE `employee` ADD `degree3_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `degree3`; 
ALTER TABLE `employee` ADD `address_area_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_area`; 
ALTER TABLE `employee` ADD `address_street_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_street`; 

********************************(02/04/2024 Employee (Employee createField))**************************************(Sabina)
ALTER TABLE `employee` ADD `address_po_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_po_code`; 
ALTER TABLE `employee` ADD `address_country1_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_country1`; 
ALTER TABLE `employee` ADD `mobile_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `mobile`; 
ALTER TABLE `employee` ADD `phone_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `phone`; 
ALTER TABLE `employee` ADD `foreign_addrs_area_arb` TEXT NOT NULL AFTER `foreign_addrs_area`; 
ALTER TABLE `employee` ADD `foreign_addrs_streetarb` TEXT NULL DEFAULT NULL AFTER `foreign_addrs_street`; 
ALTER TABLE `employee` ADD `foreign_addrs_country_arb` TEXT NULL DEFAULT NULL AFTER `foreign_addrs_country`; 

********************************(02/04/2024 Translation(Employee insertField))**************************************(Sabina)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Address', 'Address', 'عنوان', 'Employee Address field', NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdEmployee.Basic Pay', 'Basic Pay', 'الدفع الأساسي', 'Employee Basic Pay field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.From Date', 'From Date', 'من التاريخ', 'Employee From Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.To Date', 'To Date', 'ان يذهب في موعد', 'Employee To Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdEmployee.Course Title', 'Course Title', 'عنوان الدورة', 'Employee Course Title field', NULL, NULL, NULL, NULL, NULL, '0');