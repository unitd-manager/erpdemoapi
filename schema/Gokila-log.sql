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

********************************(22/03/2024 translation(Trading-Quotation inserts field))**************************************(Gokila)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Net Amount', 'Net Amount', 'Trading Quotation amount field', NULL, NULL, NULL, NULL, NULL, '0', 'اضف جديد');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Amount', 'Amount', 'Trading Quotation Amount', NULL, NULL, NULL, NULL, NULL, '0', 'كمية');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Description', 'Description', 'Trading Quotation Description', NULL, NULL, NULL, NULL, NULL, '0', 'وصف');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Quantity', 'Quantity', 'Trading Quotation Quantity Field', NULL, NULL, NULL, NULL, NULL, '0', 'كمية');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Title', 'Title', 'Trading Quotation Title Field', NULL, NULL, NULL, NULL, NULL, '0', 'عنوان');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.Unit Price', 'Unit Price', 'Trading Quotation Unit Price Field', NULL, NULL, NULL, NULL, NULL, '0', 'سعر الوحدة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingQuote.updated By', 'Updated By', 'Quotation Updated By Field', NULL, NULL, NULL, NULL, NULL, '0', 'تم التحديث بواسطة');

********************************(22/03/2024 trading_quotation(Trading-Quotation Creates field))**************************************(Gokila)
ALTER TABLE `quote` ADD `quote_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `quote_code`;
ALTER TABLE `quote` ADD `ref_no_quote_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `ref_no_quote`; 
ALTER TABLE `quote` ADD `quote_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `quote_status`;  

********************************(22/03/2024 Translation(Trading-Order inserts field))**************************************(Gokila)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingOrder.Status', 'Status', 'Trading Order Status Field', NULL, NULL, NULL, NULL, NULL, '0', 'حالة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingOrder.Net Amount', 'Net Amount', 'Trading Order Amount Field', NULL, NULL, NULL, NULL, NULL, '0', 'اضف جديد');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingOrder.Customer', 'Customer', 'Trading  Order Customer Field', NULL, NULL, NULL, NULL, NULL, '0', 'عميل');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingOrder.Quote Code', 'Quote Code', 'Trading Order Quote Code Field', NULL, NULL, NULL, NULL, NULL, '0', 'رمز الاقتباس');

********************************(23/03/2024 trading_Order(Trading-Quotation Creates field))**************************************(Gokila)
ALTER TABLE `orders` ADD `order_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `order_code`; 
ALTER TABLE `orders` ADD `order_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `order_status`; 
ALTER TABLE `orders` ADD `order_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `order_date`; 

********************************(23/03/2024 Translation(Trading-Invoice inserts field))**************************************
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingInvoice.Invoice No', 'Invoice No', 'Trading Invoice No field', NULL, NULL, NULL, NULL, NULL, '0', 'رقم الفاتورة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingInvoice.Invoice Date', 'Invoice Date', 'Trading Invoice Date Field', NULL, NULL, NULL, NULL, NULL, '0', 'تاريخ الفاتورة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingInvoice.Status', 'Status', 'Trading invoice Status Field ', NULL, NULL, NULL, NULL, NULL, '0', 'حالة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingInvoice.Amount', 'Amount', 'Trading Invoice Amount Field', NULL, NULL, NULL, NULL, NULL, '0', 'كمية');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingInvoice.Due Date', 'Due Date', 'Trading Invoice Due Date Field', NULL, NULL, NULL, NULL, NULL, '0', 'تاريخ الاستحقاق');

********************************(23/03/2024 Translation(Trading-Receipt inserts field))**************************************
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingReceipt.Receipt No', 'Receipt No', 'Trading Receipt No field', NULL, NULL, NULL, NULL, NULL, '0', 'رقم الإيصال');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingReceipt.Receipt Date', 'Receipt Date', 'Trading Receipt Date Field', NULL, NULL, NULL, NULL, NULL, '0', 'تاريخ استلام');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingReceipt.Status', 'Status', 'Trading Receipt Status Field', NULL, NULL, NULL, NULL, NULL, '0', 'حالة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingReceipt.ModeOfPayment', 'Mode Of Payment', 'Trading Receipt Mode of Payment Field', NULL, NULL, NULL, NULL, NULL, '0', 'طريقة الدفع');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingReceipt.Receipt Amount', 'Receipt Amount', 'Trading Receipt Amount Field', NULL, NULL, NULL, NULL, NULL, '0', 'قيمة الوصل');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingReceipt.Invoice No', 'Invoice No', 'Trading Invoice No or Receipt Field', NULL, NULL, NULL, NULL, NULL, '0', 'رقم الفاتورة');

********************************(23/03/2024 trading_Quotation(Trading-Quotation Creates field))**************************************(Gokila)
ALTER TABLE `quote_items` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `description`; 
ALTER TABLE `quote_items` ADD `unit_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `unit`; 
ALTER TABLE `quote_items` ADD `remarks_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `remarks`;
ALTER TABLE `quote_items` ADD `quantity_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `quantity`; 
ALTER TABLE `quote_items` ADD `unit_price_arb` INT(100) NULL DEFAULT NULL AFTER `unit_price`; 
ALTER TABLE `product` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`; 

********************************(23/03/2024 trading_customer(Trading-client Creates field))**************************************(Gokila)
ALTER TABLE `company` ADD `phone_arb` INT NULL DEFAULT NULL AFTER `phone`; 
ALTER TABLE `company` ADD `email_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `email`; 
ALTER TABLE `company` ADD `website_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `website`; 
ALTER TABLE `contact` ADD `salutation_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `salutation`; 
ALTER TABLE `contact` ADD `position_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `position`; 


********************************(25/03/2024 trading_customer(Trading-client Creates field))**************************************(Gokila)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingContact.Name', 'Name', 'Contact Name Field', NULL, NULL, NULL, NULL, NULL, '0', 'اسم');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingContact.Title', 'Title', 'Trading contact Salutation field', NULL, NULL, NULL, NULL, NULL, '0', 'تحية');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingContact.Email', 'Email', 'Trading Contact Field', NULL, NULL, NULL, NULL, NULL, '0', 'بريد إلكتروني');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingContact.Phone', 'Phone(Direct)', 'Contact Phone Field', NULL, NULL, NULL, NULL, NULL, '0', 'الهاتف (مباشر)');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingContact.Mobile', 'Mobile', 'contact Mobile Field', NULL, NULL, NULL, NULL, NULL, '0', 'متحرك');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingContact.Position', 'Position', 'Contact Position Field', NULL, NULL, NULL, NULL, NULL, '0', 'موضع');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdTradingContact.Department', 'Department', 'Contact Department Feild', NULL, NULL, NULL, NULL, NULL, '0', 'قسم');


ALTER TABLE `contact` ADD `email_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `email`; 
ALTER TABLE `contact` ADD `phone_direct_arb` INT(100) NULL DEFAULT NULL AFTER `phone_direct`; 
ALTER TABLE `contact` ADD `mobile_arb` INT(100) NULL DEFAULT NULL AFTER `mobile`; 
ALTER TABLE `contact` ADD `phone_arb` INT(100) NULL DEFAULT NULL AFTER `phone`; 
ALTER TABLE `opportunity` ADD `category_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `category`; 
ALTER TABLE `company` ADD `supplier_type_arb` VARCHAR(255)  NULL AFTER `supplier_type`; 
ALTER TABLE `company` ADD `industry_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `industry`; 
ALTER TABLE `company` ADD `source_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `source`; 
ALTER TABLE `company` ADD `company_size_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `company_size`; 
ALTER TABLE `company` ADD `address_country_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_country`; 
ALTER TABLE `valuelist` ADD `value_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `value`; 

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdClient.phone','Main Phone', 'new company phone field', NULL, NULL, NULL, NULL, NULL, '0', 'هاتف');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdClient.Fax', 'Main Fax', 'client Fax field', NULL, NULL, NULL, NULL, NULL, '0', 'فاكس');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdClient.Address1', 'Address 1', 'client address1 Field', NULL, NULL, NULL, NULL, NULL, '0', 'العنوان 1');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdClient.Postal Code', 'Postal Code', 'Client Postal Code Field', NULL, NULL, NULL, NULL, NULL, '0', 'رمز بريدي');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdClient.Country', 'Country', 'client Country Field', NULL, NULL, NULL, NULL, NULL, '0', 'دولة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdClient.Company Source', 'Company Source', 'client Company Source Field', NULL, NULL, NULL, NULL, NULL, '0', 'مصدر الشركة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdClient.Supplier Type', 'Supplier Type', 'client Supplier Type Field', NULL, NULL, NULL, NULL, NULL, '0', 'نوع المورد');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdClient.Industry', 'Industry', 'Client Industry Field', NULL, NULL, NULL, NULL, NULL, '0', 'صناعة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdClient.Company Size', 'Company Size', 'Client Company Size Field', NULL, NULL, NULL, NULL, NULL, '0', 'حجم الشركة');

