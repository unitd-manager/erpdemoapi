********************************(20/03/2024 Translation(Goods Delivery-inserts field))**************************************
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdTradingGoods.Delivery Code', 'Delivery Code', 'رمز التسليم', 'GoodsDelivery Delivery Code field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Date', 'Date', 'تاريخ', 'GoodsDelivery Date field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Order Code', 'Order Code', 'رمز الطلب', 'GoodsDelivery Order Code field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Company Name', 'Company Name', 'اسم الشركة', 'GoodsDelivery Company Name field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Department', 'Department', 'قسم', 'GoodsDelivery Department field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Salesman', 'Salesman', 'بائع', 'GoodsDelivery Salesman field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Reference', 'Reference', 'مرجع', 'GoodsDelivery Reference field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.PO Code\r\n', 'PO Code\r\n', 'رمز الشراء', 'GoodsDelivery PO Code field\r\n', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Status\r\n', 'Status', 'حالة', 'GoodsDelivery Status field\r\n', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Item Title ', 'Item Title', 'عنوان البند', 'GoodsDelivery Item Title field ', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Description ', 'Description', 'وصف', 'GoodsDelivery Description field ', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Unit ', 'Unit', 'وحدة', 'GoodsDelivery Unit field ', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Ordered Quantity', 'Ordered Quantity', 'الكمية المطلوبة', 'GoodsDelivery Ordered Quantity field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Delivered Quantity', 'Delivered Quantity', 'كمية تسليمها', 'GoodsDelivery Delivered Quantity field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Unit Price', 'Unit Price', 'اسعر الوحدة', 'GoodsDelivery Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingGoods.Total Amount', 'Total Amount', 'المبلغ الإجمالي', 'GoodsDelivery Total Amount field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(23/03/2024 goods_delivery(GoodsDelivery-inserts field))**************************************

ALTER TABLE `goods_delivery` ADD `goods_delivery_id_arb` INT(50) NULL DEFAULT NULL AFTER `goods_delivery_id`;
ALTER TABLE `goods_delivery` ADD `order_id_arb` INT(50) NULL DEFAULT NULL AFTER `order_id`;
ALTER TABLE `goods_delivery` ADD `delivery_no_arb` INT(50) NULL DEFAULT NULL AFTER `delivery_no`;
ALTER TABLE `goods_delivery` ADD `company_id_arb` INT(50) NULL DEFAULT NULL AFTER `company_id`;
ALTER TABLE `goods_delivery` ADD `goods_delivery_date_arb` varchar(255) NULL DEFAULT NULL AFTER `goods_delivery_date`;
ALTER TABLE `goods_delivery` ADD `department_arb` varchar(255) NULL DEFAULT NULL AFTER `department`;
ALTER TABLE `goods_delivery` ADD `sales_man_arb` varchar(50) NULL DEFAULT NULL AFTER `sales_man`;
ALTER TABLE `goods_delivery` ADD `goods_ref_no_arb` text NULL DEFAULT NULL AFTER `goods_ref_no`;
ALTER TABLE `goods_delivery` ADD `po_no_arb` INT(50) NULL DEFAULT NULL AFTER `po_no`;
ALTER TABLE `goods_delivery` ADD `goods_delivery_status_arb` varchar(255) NULL DEFAULT NULL AFTER `goods_delivery_status`;
ALTER TABLE `goods_delivery` ADD `goods_delivery_code_arb` varchar(255) NULL DEFAULT NULL AFTER `goods_delivery_code`;

********************************(1/04/2024 goods_delivery_item(GoodsDelivery-inserts field))**************************************

ALTER TABLE `goods_delivery_item` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`;
ALTER TABLE `goods_delivery_item` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `description`;
ALTER TABLE `goods_delivery_item` ADD `quantity_arb` INT(50) NULL DEFAULT NULL AFTER `quantity`;
ALTER TABLE `goods_delivery_item` ADD `amount_arb` INT(50) NULL DEFAULT NULL AFTER `amount`;
ALTER TABLE `goods_delivery_item` ADD `unit_price_arb` INT(50) NULL DEFAULT NULL AFTER `unit_price`;
ALTER TABLE `goods_delivery_item` ADD `delivery_qty_arb` INT(50) NULL DEFAULT NULL AFTER `delivery_qty`;
ALTER TABLE `goods_delivery_item` ADD `unit_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `unit`;


********************************(20/03/2024 Translation(Sales Invoice-inserts field))**************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdTradingSalesInvoice.Invoice Code', 'Invoice Code', 'رمز الفاتورة', 'SalesInvoice Invoice Code field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Invoice Source', 'Invoice Source', 'مصدر الفاتورة', 'SalesInvoice Invoice Source field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Sales Order', 'Sales Order', 'طلب المبيعات', 'SalesInvoice Sales Order field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Company Name', 'Company Name', 'اسم الشركة', 'SalesInvoice Company Name field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Invoice Date', 'Invoice Date', 'تاريخ الفاتورة', 'SalesInvoice Invoice Date field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Invoice Due Date', 'Invoice Due Date', 'تاريخ استحقاق الفاتورة', 'SalesInvoice Invoice Due Date field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Invoice Amount', 'Invoice Amount', 'قيمة الفاتورة', 'SalesInvoice Invoice Amount field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Invoice Terms', 'Invoice Terms', 'شروط الفاتورة', 'SalesInvoice Invoice Terms field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Title', 'Title', 'عنوان', 'SalesInvoice Title field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Status', 'Status', 'حالة', 'SalesInvoice Title field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Unit', 'Unit', 'وحدة', 'SalesInvoice Unit field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Unit Price', 'Unit Price', 'سعر الوحدة', 'SalesInvoice Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Ordered Quantity', 'Ordered Quantity', 'الكمية المطلوبة', 'SalesInvoice Ordered Quantity field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Invoice Quantity', 'Invoice Quantity', 'كمية الفاتورة', 'SalesInvoice Invoice Quantity field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Total Cost', 'Total Cost', 'التكلفة الإجمالية', 'SalesInvoice Total Cost field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesInvoice.Updated By', 'Updated By', 'تم التحديث بواسطة', 'SalesInvoice Updated By field', NULL, NULL, NULL, NULL, NULL, '0');


********************************(25/03/2024 invoice(SalesInvoice-inserts field))**************************************


ALTER TABLE `invoice` ADD `invoice_id_arb` INT(50) NULL DEFAULT NULL AFTER `invoice_id`,
ALTER TABLE `invoice` ADD `invoice_code_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `invoice_code`,
ALTER TABLE `invoice` ADD `invoice_amount_arb` DECIMAL(50) NULL DEFAULT NULL AFTER `invoice_amount`,
ALTER TABLE `invoice` ADD `invoice_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `invoice_date`,
ALTER TABLE `invoice` ADD `mode_of_payment_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `mode_of_payment`,
ALTER TABLE `invoice` ADD `status_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `status`,
ALTER TABLE `invoice` ADD `staff_id_arb` INT(50) NULL DEFAULT NULL AFTER `staff_id`,
ALTER TABLE `invoice` ADD `purchase_order_id_arb` INT(50) NULL DEFAULT NULL AFTER `purchase_order_id`,
ALTER TABLE `invoice` ADD `invoice_type_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `invoice_type`,
ALTER TABLE `invoice` ADD `invoice_due_date_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `invoice_due_date`,
ALTER TABLE `invoice` ADD `invoice_terms_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `invoice_terms`,
ALTER TABLE `invoice` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`;

********************************(1/04/2024 invoice_credit_note_history(SalesInvoice createField))************************************

ALTER TABLE `invoice_credit_note_history` ADD `item_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `item_title`;
ALTER TABLE `invoice_credit_note_history` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `description`;

********************************(1/04/2024 invoice_item(SalesInvoice createField))************************************
ALTER TABLE `invoice_item` ADD `qty_arb` INT(50) NULL DEFAULT NULL AFTER `qty`;
ALTER TABLE `invoice_item` ADD `item_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `item_title`;
ALTER TABLE `invoice_item` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `description`;
ALTER TABLE `invoice_item` ADD `remarks_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `remarks`;


********************************(20/03/2024 Translation(SalesReturn-inserts field))**************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdTradingSalesReturn.Invoice Code', 'Invoice Code', 'رمز الفاتورة', 'SalesReturn Invoice Code field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReturn.Status', 'Status', 'حالة', 'SalesReturn Status field\r\n', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReturn.Date', 'Date', 'تاريخ', 'SalesReturn Date field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReturn.Item', 'Item', 'غرض ', 'SalesReturn Item field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReturn.Quantity', 'Quantity', 'كمية', 'SalesReturn Quantity field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReturn.Unit Price', 'Unit Price', 'سعر الوحدة', 'SalesReturn Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReturn.Total', 'Total', 'المجموع ', 'SalesReturn Total field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReturn.Qty Returned', 'Qty Returned', 'الكمية التي تم إرجاعها ', 'SalesReturn Qty Returned field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(23/03/2024 sales_return(SalesReturn createField))************************************

ALTER TABLE `sales_return` ADD `sales_return_id_arb` INT(50) NULL DEFAULT NULL AFTER `sales_return_id`,
ALTER TABLE `sales_return` ADD `return_date_arb` varchar(255) NULL DEFAULT NULL AFTER `return_date`,
ALTER TABLE `sales_return` ADD `invoice_id_arb` INT(50) NULL DEFAULT NULL AFTER `invoice_id`,
ALTER TABLE `sales_return` ADD `status_arb` varchar(50) NULL DEFAULT NULL AFTER `status`,
ALTER TABLE `sales_return` ADD `order_id_arb` INT(50) NULL DEFAULT NULL AFTER `order_id`;
********************************(1/04/2024 sales_return_history(SalesReturn createField))************************************

ALTER TABLE `sales_return_history` ADD `qty_return_arb` INT(50) NULL DEFAULT NULL AFTER `qty_return`;
ALTER TABLE `sales_return_history` ADD `price_arb` INT(50) NULL DEFAULT NULL AFTER `price`;
ALTER TABLE `sales_return_history` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;

********************************(21/03/2024 Translation(Sales Receipt-inserts field))**************************************
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdTradingSalesReceipt.Order No', 'Order No', 'رقم الطلب', 'SalesReceipt Order No field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReceipt.Receipt Code', 'Receipt Code', 'رمز الاستلام', 'SalesReceipt Receipt Code field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReceipt.Mode of Payment', 'Mode of Payment', 'طريقة الدفع ', 'SalesReceipt Mode of Payment field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReceipt.Status', 'Status', 'حالة', 'SalesReceipt Status field\r\n', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReceipt.Amount', 'Amount', 'كمية ', 'SalesReceipt Amount field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReceipt.Date', 'Date', 'تاريخ', 'SalesReceipt Date field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingSalesReceipt.Print', 'Print', 'مطبعة ', 'SalesReceipt Print field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(23/03/2024 receipt(SalesReceipt createField))**************************************

ALTER TABLE `receipt` ADD `receipt_id_arb` INT(50) NULL DEFAULT NULL AFTER `receipt_id`,
ALTER TABLE `receipt` ADD `receipt_code_arb` INT(50) NULL DEFAULT NULL AFTER `receipt_code`;,
ALTER TABLE `receipt` ADD `amount_arb` INT(50) NULL DEFAULT NULL AFTER `amount`,
ALTER TABLE `receipt` ADD `mode_of_payment_arb` VARCHAR(50) NULL DEFAULT NULL AFTER 'mode_of_payment',
ALTER TABLE `receipt` ADD `receipt_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `receipt_date`,
ALTER TABLE `receipt` ADD `receipt_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `receipt_status`;

********************************(25/03/2024 Translation(Training-inserts field))**************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL,'mdHRTraining.id', 'id', 'بطاقة تعريف', 'Training id field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRTraining.Title', 'Title', 'عنوان', 'Training Title field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRTraining.Trainer', 'Trainer', 'مدرب', 'Training Trainer field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRTraining.Date', 'Date', 'تاريخ', 'Training Date field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRTraining.From Date', 'From Date', 'من التاريخ', 'Training From Date field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRTraining.To Date', 'To Date', 'ان يذهب في موعد', 'Training To Date field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRTraining.Description', 'Description', 'وصف', 'Training Description field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRTraining.Training Company Name', 'Training Company Name', 'وصف', 'Training Training Company Name field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRTraining.Training Company address', 'Training Company address', 'وصف', 'Training Training Company address field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRTraining.Training Company email', 'Training Company email', 'وصف', 'Training Training Company email field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRTraining.Training Company phone', 'Training Company phone', 'وصف', 'Training Training Company phone field', NULL,NULL,NULL,NULL,NULL,0);

********************************(25/03/2024 receipt(Training createField))**************************************

ALTER TABLE `training` ADD `training_id_arb` INT(50) NULL DEFAULT NULL AFTER `training_id`,
ALTER TABLE `training` ADD `from_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `from_date`,
ALTER TABLE `training` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`,
ALTER TABLE `training` ADD `trainer_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `trainer`,
ALTER TABLE `training` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `description`,
ALTER TABLE `training` ADD `to_date_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `to_date`,
ALTER TABLE `training` ADD `training_company_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `training_company_name`,
ALTER TABLE `training` ADD `training_company_address_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `training_company_address`,
ALTER TABLE `training` ADD `training_company_email_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `training_company_email`,
ALTER TABLE `training` ADD `training_company_phone_arb` INT(50) NULL DEFAULT NULL AFTER `training_company_phone`;

********************************(25/03/2024 Translation(Loan-inserts field))************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL,'mdHRLoan.Employee Name', 'Employee Name', 'اسم الموظف', 'Loan Employee Name field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLoan.Loan Application Date', 'Loan Application Date', 'تاريخ طلب القرض', 'Loan Loan Application Date field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLoan.Total Loan Amount', 'Total Loan Amount', 'إجمالي مبلغ القرض', 'Loan Total Loan Amount field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLoan.Amount Payable(per month)', 'Amount Payable(per month)', 'المبلغ المستحق (شهريا)', 'Loan Amount Payable(per month) field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLoan.Total Amount Paid', 'Total Amount Paid', 'إجمالي المبلغ المدفوع', 'Loan Total Amount Paid field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLoan.Amount Payable	', 'Amount Payable	', 'المبلغ المستحق', 'Loan Amount Payable field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLoan.Status', 'Status', 'حالة', 'Loan Status field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLoan.Type of Loan', 'Type of Loan', 'نوع القرض', 'Loan Type of Loan field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLoan.Loan Start Date', 'Loan Start Date', 'تاريخ بدء القرض', 'Loan Loan Start Date field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLoan.Actual Loan Closing Date', 'Actual Loan Closing Date', 'تاريخ إغلاق القرض الفعلي', 'Loan Actual Loan Closing Date field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLoan.Notes', 'Notes', 'ملحوظات', 'Loan Notes field', NULL,NULL,NULL,NULL,NULL,0);
(NULL,'mdHRLoan.Date', 'Date', 'ملحوظات', 'Loan Date field', NULL,NULL,NULL,NULL,NULL,0);
(NULL,'mdHRLoan.Amount', 'Amount', 'ملحوظات', 'Loan Amount field', NULL,NULL,NULL,NULL,NULL,0);
(NULL,'mdHRLoan.Remarks', 'Remarks', 'ملحوظات', 'Loan Remarks field', NULL,NULL,NULL,NULL,NULL,0);


********************************(25/03/2024 loan(loan createField))*************************************************************************
ALTER TABLE `loan` ADD `loan_id_arb` INT(50) NULL DEFAULT NULL AFTER `loan_id`,
ALTER TABLE `loan` ADD `date_arb` varchar(255) NULL DEFAULT NULL AFTER `date`;
ALTER TABLE `loan` ADD `amount_arb` decimal(50) NULL DEFAULT NULL AFTER `amount`;
ALTER TABLE `loan` ADD `type_arb` varchar(255) NULL DEFAULT NULL AFTER `type`;
ALTER TABLE `loan` ADD `status_arb` varchar(255) NULL DEFAULT NULL AFTER `status`;
ALTER TABLE `loan` ADD `due_date_arb` varchar(255) NULL DEFAULT NULL AFTER `due_date`;
ALTER TABLE `loan` ADD `no_of_months_arb` INT(50) NULL DEFAULT NULL AFTER `no_of_months`;
ALTER TABLE `loan` ADD `deduction_arb` decimal(50) NULL DEFAULT NULL AFTER `deduction`;
ALTER TABLE `loan` ADD `approved_by_arb` varchar(255) NULL DEFAULT NULL AFTER `approved_by`;
ALTER TABLE `loan` ADD `loan_closing_date_arb` varchar(255) NULL DEFAULT NULL AFTER `loan_closing_date`;
ALTER TABLE `loan` ADD `month_amount_arb` INT(50) NULL DEFAULT NULL AFTER `month_amount`;
ALTER TABLE `loan` ADD `loan_start_date_arb` varchar(255) NULL DEFAULT NULL AFTER `loan_start_date`;
ALTER TABLE `loan` ADD `notes_arb` text NULL DEFAULT NULL AFTER `notes`;
ALTER TABLE `loan` ADD `amount_payable_arb` INT(50) NULL DEFAULT NULL AFTER `amount_payable`;

********************************(25/03/2024 loan_repayment_history(loan createField))*************************************************************************

ALTER TABLE `loan_repayment_history` ADD `generated_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `generated_date`;
ALTER TABLE `loan_repayment_history` ADD `loan_repayment_amount_per_month_arb` INT(255) NULL DEFAULT NULL AFTER `loan_repayment_amount_per_month`;
ALTER TABLE `loan_repayment_history` ADD `remarks_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `remarks`;

********************************(25/03/2024 Translation(Leave-inserts field))**************************************
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL,'mdHRLeave.Employee Name', 'Employee Name', 'اسم الموظف', 'Leave Employee Name field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLeave.Designation', 'Designation', 'تعيين', 'Leave Designation field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLeave.Status', 'Status', 'حالة', 'Leave Status field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLeave.From Date', 'From Date', 'من التاريخ', 'Leave From Date field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLeave.To Date', 'To Date', 'ان يذهب في موعد', 'Leave To Date field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLeave.No of Days(Current Month)', 'No of Days(Current Month)', 'عدد الأيام (الشهر الحالي)', 'Leave No of Days(Current Month) field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLeave.No of Days(Next Month)', 'No of Days(Next Month)', 'عدد الأيام (الشهر القادم)', 'Leave No of Days(Next Month) field', NULL,NULL,NULL,NULL,NULL,0),
(NULL,'mdHRLeave.Leave Type', 'Leave Type', 'نوع الإجازة', 'Leave Leave Type field', NULL,NULL,NULL,NULL,NULL,0);


********************************(25/03/2024 empleave(Leave createField))*************************************************************************

ALTER TABLE `empleave` ADD `leave_id_arb` INT(50) NULL DEFAULT NULL AFTER `leave_id`;
ALTER TABLE `empleave` ADD `date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `date`;
ALTER TABLE `empleave` ADD `employee_id_arb` INT(50) NULL DEFAULT NULL AFTER `employee_id`;
ALTER TABLE `empleave` ADD `leave_type_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `leave_type`;
ALTER TABLE `empleave` ADD `from_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `from_date`;
ALTER TABLE `empleave` ADD `to_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `to_date`;
ALTER TABLE `empleave` ADD `reason_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `reason`;
ALTER TABLE `empleave` ADD `no_of_days_arb` INT(50) NULL DEFAULT NULL AFTER `no_of_days`;
ALTER TABLE `empleave` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;
ALTER TABLE `empleave` ADD `no_of_days_next_month_arb` INT(50) NULL DEFAULT NULL AFTER `no_of_days_next_month`;
ALTER TABLE `empleave` ADD `went_overseas_arb` INT(50) NULL DEFAULT NULL AFTER `went_overseas`;

********************************(16/04/2024 Translation(ProjectSalesReturn-inserts field))**************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdTradingProjSalesReturn.Invoice Code', 'Invoice Code', 'رمز الفاتورة', 'SalesReturn Invoice Code field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Status', 'Status', 'حالة', 'SalesReturn Status field\r\n', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Date', 'Date', 'تاريخ', 'SalesReturn Date field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Item', 'Item', 'غرض ', 'SalesReturn Item field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Quantity', 'Quantity', 'كمية', 'SalesReturn Quantity field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Unit Price', 'Unit Price', 'سعر الوحدة', 'SalesReturn Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Total', 'Total', 'المجموع ', 'SalesReturn Total field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Qty Returned', 'Qty Returned', 'الكمية التي تم إرجاعها ', 'SalesReturn Qty Returned field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(16/04/2024 proj_sales_return(ProjectSalesReturn createField))************************************

ALTER TABLE `proj_sales_return` ADD `sales_return_id_arb` INT(50) NULL DEFAULT NULL AFTER `sales_return_id`,
ALTER TABLE `proj_sales_return` ADD `return_date_arb` varchar(255) NULL DEFAULT NULL AFTER `return_date`,
ALTER TABLE `proj_sales_return` ADD `invoice_id_arb` INT(50) NULL DEFAULT NULL AFTER `invoice_id`,
ALTER TABLE `proj_sales_return` ADD `status_arb` varchar(50) NULL DEFAULT NULL AFTER `status`,
ALTER TABLE `proj_sales_return` ADD `order_id_arb` INT(50) NULL DEFAULT NULL AFTER `order_id`;
********************************(16/04/2024 proj_sales_return_history(ProjectSalesReturn createField))************************************

ALTER TABLE `proj_sales_return_history` ADD `qty_return_arb` INT(50) NULL DEFAULT NULL AFTER `qty_return`;
ALTER TABLE `proj_sales_return_history` ADD `price_arb` INT(50) NULL DEFAULT NULL AFTER `price`;
ALTER TABLE `proj_sales_return_history` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;
