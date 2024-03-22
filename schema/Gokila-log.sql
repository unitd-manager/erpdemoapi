********************************(19/03/2024 Translation(Trading-enquiry inserts field))**************************************(Gokila)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Title', 'Title', 'Trading Enquiry Title field', NULL, NULL, NULL, NULL, NULL, '0', 'عنوان');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Enquiry Date', 'Enquiry Date', 'Trading Enquiry Date Field', NULL, NULL, NULL, NULL, NULL, '0', 'تاريخ الاستفسار');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Enquiry Status', 'Enquiry Status', 'Trading enquiry Status Field', NULL, NULL, NULL, NULL, NULL, '0', 'حالة الاستفسار');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Client', 'Client', 'Trading Enquiry Client Field', NULL, NULL, NULL, NULL, NULL, '0', 'عميل');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Reference', 'Reference', 'Trading Enquiry reference field', NULL, NULL, NULL, NULL, NULL, '0', 'مرجع');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Expiry Date', 'Expiry Date', 'Trading Enquiry Expiry Date', NULL, NULL, NULL, NULL, NULL, '0', 'تاريخ الانتهاء');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Notes', 'Notes', 'Trading Enquiry Notes', NULL, NULL, NULL, NULL, NULL, '0', 'ملحوظات');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Title', 'Title', 'Trading Enquiry Item Title', NULL, NULL, NULL, NULL, NULL, '0', 'عنوان');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Description', 'Description', 'Trading Enquiry Item Description', NULL, NULL, NULL, NULL, NULL, '0', 'وصف');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Quantity', 'Quantity', 'Trading Enquiry Quantity Field', NULL, NULL, NULL, NULL, NULL, '0', 'كمية');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.UnitPrice', 'Unit Price', 'Trading Enquiry unit price Field', NULL, NULL, NULL, NULL, NULL, '0', 'سعر الوحدة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Amount', 'Amount', 'Trading Enquiry Amount field', NULL, NULL, NULL, NULL, NULL, '0', 'كمية');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Category', 'Category', 'Trading Enquiry CategoryField', NULL, NULL, NULL, NULL, NULL, '0', 'فئة');

********************************(20/03/2024 project_enquiry(Trading-enquiry Creates field))**************************************(Gokila)
ALTER TABLE `opportunity` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 
ALTER TABLE `opportunity` ADD `service_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `services`; 
ALTER TABLE `opportunity` ADD `opportunity_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `opportunity_code`; 
ALTER TABLE `opportunity` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`; 


********************************(20/03/2024 Translation(Trading-Quotation inserts field))**************************************(Gokila)

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Quotation Code', 'Quotation Code', 'Trading Quoatation Code Field', NULL, NULL, NULL, NULL, NULL, '0', 'رمز الاقتباس');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Quotation Date', 'Quotation Date', 'Trading Quotation Date field', NULL, NULL, NULL, NULL, NULL, '0', 'تاريخ الاقتباس');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Reference', 'Reference', 'Trading Quotation Reference Field', NULL, NULL, NULL, NULL, NULL, '0', 'مرجع');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Customer', 'Customer', 'Quotation Customer fields', NULL, NULL, NULL, NULL, NULL, '0', 'عميل');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Contact', 'Contact', 'Trading Quotation Contact field', NULL, NULL, NULL, NULL, NULL, '0', 'اتصال');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Status', 'Status', 'Trading Quotation Status Field', NULL, NULL, NULL, NULL, NULL, '0', 'حالة');

********************************(20/03/2024 Translation(Trading-Order inserts field))**************************************(Gokila)

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingOrder.Order Code', 'Order Code', 'Trading Sales Order code field', NULL, NULL, NULL, NULL, NULL, '0', 'طلب اليوم');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingOrder.Order Date', 'Order Date', 'Sales Order Date Field', NULL, NULL, NULL, NULL, NULL, '0', 'تاريخ الطلب');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingOrder.Item Title', 'Item Title', 'Trading saes Order Item Field', NULL, NULL, NULL, NULL, NULL, '0', NULL), (NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', 'عنوان البند');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingOrder.Quantity', 'Quantity', 'Trading Sales Order item Quantity Field', NULL, NULL, NULL, NULL, NULL, '0', 'كمية');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingOrder.Unit', 'Unit', 'Trading sales order Unit field', NULL, NULL, NULL, NULL, NULL, '0', 'وحدة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingOrder.Price', 'Price', 'Sales Order Price Field', NULL, NULL, NULL, NULL, NULL, '0', 'سعر');

********************************(20/03/2024 Trading-salesOrder(Trading-order Creates field))**************************************(Gokila)
ALTER TABLE `order_item` ADD `item_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `item_title`; 
ALTER TABLE `order_item` ADD `unit_arb` VARCHAR(255) NOT NULL AFTER `unit`; 
ALTER TABLE `order_item` ADD `qty_arb` INT(11) NULL DEFAULT NULL AFTER `qty`; 


********************************(21/03/2024 project_enquiry(Trading-enquiry Creates field))**************************************(Gokila)
ALTER TABLE `opportunity` ADD `enquiry_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `enquiry_date`; 
ALTER TABLE `opportunity` ADD `Project_end_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `project_end_date`;
ALTER TABLE `opportunity` ADD `office_ref_no_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `office_ref_no`;


