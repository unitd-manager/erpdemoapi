********************************(19/03/2024 Translation(Trading-enquiry inserts field))**************************************(Gokila)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Title', 'Title', 'Trading Enquiry Title field', NULL, NULL, NULL, NULL, NULL, '0', 'عنوان');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Enquiry Date', 'Enquiry Date', 'Trading Enquiry Date Field', NULL, NULL, NULL, NULL, NULL, '0', 'تاريخ الاستفسار');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Enquiry Status', 'Enquiry Status', 'Trading enquiry Status Field', NULL, NULL, NULL, NULL, NULL, '0', 'حالة الاستفسار');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Client', 'Client', 'Trading Enquiry Client Field', NULL, NULL, NULL, NULL, NULL, '0', 'عميل');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Reference', 'Reference', 'Trading Enquiry reference field', NULL, NULL, NULL, NULL, NULL, '0', 'مرجع');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Expiry Date', 'Expiry Date', 'Trading Enquiry Expiry Date', NULL, NULL, NULL, NULL, NULL, '0', 'تاريخ الانتهاء');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingEnq.Notes', 'Notes', 'Trading Enquiry Notes', NULL, NULL, NULL, NULL, NULL, '0', 'ملحوظات');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTrading.EnquiryItemTitle', 'Title', 'Trading Enquiry Item Title', NULL, NULL, NULL, NULL, NULL, '0', 'عنوان');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTrading.EnquiryItemDescription', 'Description', 'Trading Enquiry Item Description', NULL, NULL, NULL, NULL, NULL, '0', 'وصف');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTrading.EnquiryItemQuantity', 'Quantity', 'Trading Enquiry Quantity Field', NULL, NULL, NULL, NULL, NULL, '0', 'كمية');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTrading.EnquiryUnitPrice', 'Unit Price', 'Trading Enquiry unit price Field', NULL, NULL, NULL, NULL, NULL, '0', 'سعر الوحدة');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTrading.EnquiryAmount', 'Amount', 'Trading Enquiry Amount field', NULL, NULL, NULL, NULL, NULL, '0', 'كمية');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTrading.Category', 'Category', 'Trading Enquiry CategoryField', NULL, NULL, NULL, NULL, NULL, '0', 'فئة');

********************************(20/03/2024 project_enquiry(Trading-enquiry Creates field))**************************************(Gokila)
ALTER TABLE `opportunity` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 

ALTER TABLE `opportunity` ADD `service_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `services`; 

ALTER TABLE `opportunity` ADD `opportunity_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `opportunity_code`; 


********************************(20/03/2024 Translation(Trading-Quotation inserts field))**************************************(Gokila)

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Quotation Code', 'Quotation Code', 'Trading Quoatation Code Field', NULL, NULL, NULL, NULL, NULL, '0', 'رمز الاقتباس');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Quotation Date', 'Quotation Date', 'Trading Quotation Date field', NULL, NULL, NULL, NULL, NULL, '0', 'تاريخ الاقتباس');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Reference', 'Reference', 'Trading Quotation Reference Field', NULL, NULL, NULL, NULL, NULL, '0', 'مرجع');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Customer', 'Customer', 'Quotation Customer fields', NULL, NULL, NULL, NULL, NULL, '0', 'عميل');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Contact', 'Contact', 'Trading Quotation Contact field', NULL, NULL, NULL, NULL, NULL, '0', 'اتصال');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Status', 'Status', 'Trading Quotation Status Field', NULL, NULL, NULL, NULL, NULL, '0', 'حالة');





