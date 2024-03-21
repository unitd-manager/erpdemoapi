********************************(19/03/2024 Translation(Project-enquiry inserts field))**************************************
INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdProjectEnq.Enquiry Date', 'Enquiry Date', 'تاريخ الاستفسار', 'Project Enquiry Enquiry Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectEnq.Enquiry No', 'Enquiry No', 'رقم الاستفسار', 'Project Enquiry Enquiry No field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectEnq.Reference', 'Reference', 'مرجع', 'Project Enquiry Reference field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectEnq.BID Expiry', 'BID Expiry', 'انتهاء المزايدة', 'Project Enquiry BID Expiry', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectEnq.customer', 'Customer', 'عميل', ' Project Enquiry Customer field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(19/03/2024 project_enquiry(Project-enquiry Creates field))**************************************
ALTER TABLE `project_enquiry` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`
ALTER TABLE `project_enquiry` ADD `enquiry_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `enquiry_date`
ALTER TABLE `project_enquiry` ADD `project_end_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `project_end_date`;

********************************(19/03/2024 Translation(Project-Quotation inserts field))**************************************
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdProjectQuote.Enquiry Code', 'Enquiry Code', 'كود الاستفسار', 'Project Quote Enquiry Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Quotation Code', 'Quotation Code', 'رمز الاقتباس', 'Project Quotation quotation Code Field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Date', 'Date', 'تاريخ', 'project quote Date Quote field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Customer', 'Customer', 'عميل', 'project quote Customer field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Contact ', 'Contact ', 'اتصال', 'project quote Contact  field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Reference', 'Reference', 'مرجع', 'project quote Reference field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Status', 'Status', 'حالة', 'projectquote Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Net Total', 'Net Total', 'صافي المجموع', 'project quote Net Total field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdProjectQuote.Title', 'Title', 'عنوان', 'Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Description', 'Description', 'وصف', 'Description field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.', 'Qty', 'الكمية', 'Qty field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Unit Price', 'Unit Price', 'سعر الوحدة', 'Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Amount', 'Amount', 'كمية', 'Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Updated By', 'Updated By', 'تم التحديث بواسطة', 'Updated By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Action', 'Action', 'فعل', 'Action field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Unit', 'Unit', 'وحدة', 'Unit field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Remark', 'Remark', 'ملاحظة', 'Remark field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdProjectQuote.Unit', 'Unit Price', 'سعر الوحدة', 'Unit Price field', NULL, NULL, NULL, NULL, NULL, '0');
********************************(19/03/2024 project_quote(Project-Quotation Creates field))**************************************
ALTER TABLE `project_quote` ADD `quote_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `quote_code`;
ALTER TABLE `project_quote` ADD `quote_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `quote_date`;
ALTER TABLE `project_quote` ADD `quote_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `quote_status`;
ALTER TABLE `project_quote` ADD `ref_no_quote_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `ref_no_quote`;
ALTER TABLE `project_quote` ADD `total_amount_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `total_amount`;