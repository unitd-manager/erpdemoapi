********************************(21/03/2024 Translation(Supplier field))**************************************(Gobi)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.CompanyName', 'Company Name', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'اسم الشركة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Email', 'Email', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'بريد إلكتروني');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Fax', 'Fax', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'فاكس');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Mobile', 'Mobile', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'متحرك');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Status', 'Status', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'حالة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.GST NO', 'GST NO', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'رقم ضريبة السلع والخدمات'), (NULL, 'mdSupplier.Payment Details', 'Payment Details', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'بيانات الدفع');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Terms', 'Terms', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'شروط');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSuplier.Contact Person', 'Contact Person', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'الشخص الذي يمكن الاتصال به');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Address 1', 'Address 1', NULL, NULL, NULL, NULL, NULL, NULL, '0', '1 العنوان ');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Address 2', 'Address 2', NULL, NULL, NULL, NULL, NULL, NULL, '0', '2 العنوان ');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.State/Zip', 'State/Zip', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'الرمز البريدي الدولة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Country', 'Country', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'دولة');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Pin Code', 'Pin Code', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'الرمز السري');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Supplier Name', 'Supplier Name', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'اسم المورد');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Website', 'Website', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'موقع إلكتروني');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`, `arb_value`) VALUES (NULL, 'mdSupplier.Supplier Details', 'Supplier Details', NULL, NULL, NULL, NULL, NULL, NULL, '0', 'تفاصيل المورد');

********************************(25/03/2024 supplier(supplier createField))**************************************(Gobi)
ALTER TABLE `supplier` ADD `company_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `company_name`;
ALTER TABLE `supplier` ADD `email_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `email`;
ALTER TABLE `supplier` ADD `address_street_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_street`;
ALTER TABLE `supplier` ADD `address_town_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_town`;
ALTER TABLE `supplier` ADD `address_state_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_state`;
ALTER TABLE `supplier` ADD `address_country_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_country`;
ALTER TABLE `supplier` ADD `address_po_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_po_code`;
ALTER TABLE `supplier` ADD `phone_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `phone`;
ALTER TABLE `supplier` ADD `fax_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `fax`;
ALTER TABLE `supplier` ADD `notes_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `notes`;
ALTER TABLE `supplier` ADD `creation_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `creation_date`;
ALTER TABLE `supplier` ADD `modification_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modification_date`;
ALTER TABLE `supplier` ADD `mobile_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `mobile`;
ALTER TABLE `supplier` ADD `flag_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `flag`;
ALTER TABLE `supplier` ADD `address_flat_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_flat`;
ALTER TABLE `supplier` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;
ALTER TABLE `supplier` ADD `website_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `website`;
ALTER TABLE `supplier` ADD `category_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `category`;
ALTER TABLE `supplier` ADD `comment_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `comment_by`;
ALTER TABLE `supplier` ADD `company_size_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `company_size`;
ALTER TABLE `supplier` ADD `industry_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `industry`;
ALTER TABLE `supplier` ADD `source_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `source`;
ALTER TABLE `supplier` ADD `group_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `group_name`;
ALTER TABLE `supplier` ADD `supplier_type_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `supplier_type`;
ALTER TABLE `supplier` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `supplier` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;
ALTER TABLE `supplier` ADD `chi_company_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `chi_company_name`;
ALTER TABLE `supplier` ADD `chi_company_address_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `chi_company_address`;
ALTER TABLE `supplier` ADD `contact_person_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `contact_person`;
ALTER TABLE `supplier` ADD `billing_address_flat_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `billing_address_flat`;
ALTER TABLE `supplier` ADD `billing_address_street_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `billing_address_street`;
ALTER TABLE `supplier` ADD `billing_address_country_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `billing_address_country`;
ALTER TABLE `supplier` ADD `billing_address_po_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `billing_address_po_code`;
ALTER TABLE `supplier` ADD `gst_no_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `gst_no`;
ALTER TABLE `supplier` ADD `terms_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `terms`;
ALTER TABLE `supplier` ADD `payment_details_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `payment_details`;

********************************(25/03/2024 supplierPriceList(supplierPriceList createField))**************************************(Gobi)
ALTER TABLE `supplier_price_list` ADD `notes_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `notes`;
ALTER TABLE `supplier_price_list` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;
ALTER TABLE `supplier_price_list` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `supplier_price_list` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;

********************************(25/03/2024 supplierPriceListItem(supplierPriceListItem createField))**************************************(Gobi)
ALTER TABLE `supplier_price_list_item` ADD `price_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `price`;
ALTER TABLE `supplier_price_list_item` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`;
ALTER TABLE `supplier_price_list_item` ADD `unit_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `unit`;
ALTER TABLE `supplier_price_list_item` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `supplier_price_list_item` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;


********************************(25/03/2024 Translation(SupplierPriceList field))**************************************(Gobi)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.Customer Name', 'Customer Name', 'اسم العميل', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.Notes', 'Notes', 'الحواشي', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.Effective Date', 'Effective Date', 'تاريخ النفاذ', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.Expiry Date', 'Expiry Date', 'تاريخ انتهاء الصلاحية', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.Status', 'Status', 'الحالة', NULL, NULL, NULL, NULL, NULL, NULL, '0');


********************************(25/03/2024 SuplierReceipt(MakeSupplier field))**************************************(Gobi)
ALTER TABLE `supplier_receipt` ADD `amount_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `amount`;
ALTER TABLE `supplier_receipt` ADD `mode_of_payment_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `mode_of_payment`;
ALTER TABLE `supplier_receipt` ADD `remarks_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `remarks`;
ALTER TABLE `supplier_receipt` ADD `receipt_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `receipt_status`;
ALTER TABLE `supplier_receipt` ADD `type_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `type`;
ALTER TABLE `supplier_receipt` ADD `bank_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `bank_name`;
ALTER TABLE `supplier_receipt` ADD `company_contact_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `company_contact_name`;
ALTER TABLE `supplier_receipt` ADD `cust_first_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `cust_first_name`;
ALTER TABLE `supplier_receipt` ADD `cust_address1_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `cust_address1`;
ALTER TABLE `supplier_receipt` ADD `cust_address2_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `cust_address2`;
ALTER TABLE `supplier_receipt` ADD `issued_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `issued_by`;

********************************(25/03/2024 SuplierReceiptHistory(MakeSupplier field))**************************************(Gobi)
ALTER TABLE `supplier_receipt_history` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`;

********************************(25/03/2024 Translation(MakeSupplier field))**************************************(Gobi)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdMakeSupplier.ModeOfPayment', 'Mode of Payment', 'طريقة الدفع', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdMakeSupplier.Status', 'Status', 'حالة', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdMakeSupplier.Amount', 'Amount', 'كمية', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdMakeSupplier.PurchaseOrders', 'Purchase Orders', 'طلبات الشراء', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdMakeSupplier.Notes', 'Notes', 'ملحوظات', NULL, NULL, NULL, NULL, NULL, NULL, '0');

********************************(29/03/2024 Translation(Supplier field))**************************************(Gobi)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.Name', 'Name', 'اسم', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.ContactPerson', 'Contact Person', 'الشخص الذي يمكن الاتصال', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.SupplierName', 'Supplier Name', 'اسم المورد', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.Telephone', 'Telephone', 'هاتف', NULL, NULL, NULL, NULL, NULL, NULL, '0');


********************************(29/03/2024 Translation(SupplierPriceList field))**************************************(Gobi)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.CustomerName', 'Customer Name', 'اسم الزبون', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.EffectiveDate', 'Effective Date', 'تاريخ النفاذ', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.SupplierListName', 'Supplier List Name', 'اسم قائمة الموردين', NULL, NULL, NULL, NULL, NULL, NULL, '0');


********************************(31/03/2024 Translation(SupplierPriceList field))**************************************(Gobi)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.Name', 'Name', 'اسم', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.Price', 'Price', 'سعر', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.Unit', 'Unit', 'وحدة', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.Action', 'Action', 'فعل', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.ProductName', 'Product Name', 'اسم المنتج', NULL, NULL, NULL, NULL, NULL, NULL, '0');

********************************(31/03/2024 Translation(Supplier field))**************************************(Gobi)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.Telephone', 'Telephone', 'هاتف', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.PoDate', 'PO Date', 'تاريخ أمر الشراء', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.PoCode', 'PO CODE', 'رمز أمر الشراء', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.PoValue', 'PO value', 'قيمة أمر الشراء', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.Balance', 'Balance', 'توازن', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.PaymentStatus', 'Payment Status', 'حالة السداد', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.History', 'History', 'تاريخ', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.ModeOfPayment', 'Mode of Payment', 'طريقة الدفع', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.Amount', 'Amount', 'كمية', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.Date', 'Date', 'تاريخ', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplier.Cancel', 'Cancel', 'يلغي', NULL, NULL, NULL, NULL, NULL, NULL, '0');

********************************(31/03/2024 Translation(MakeSupplier field))**************************************(Gobi)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdMakeSupplier.Date', 'Date', 'تاريخ', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdMakeSupplier.ReceiptCode', 'Receipt Code', 'رمز الاستلام', NULL, NULL, NULL, NULL, NULL, NULL, '0');


********************************(01/04/2024 Supplier order(MakeSupplier field))**************************************(Gobi)
ALTER TABLE `supplier_order` ADD `so_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `so_code`;
ALTER TABLE `supplier_order` ADD `flag_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `flag`;
ALTER TABLE `supplier_order` ADD `creation_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `creation_date`;
ALTER TABLE `supplier_order` ADD `modification_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modification_date`;
ALTER TABLE `supplier_order` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `supplier_order` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;
ALTER TABLE `supplier_order` ADD `date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `date`;

********************************(01/04/2024 Supplier order History(Supplier field))**************************************(Gobi)
ALTER TABLE `supplier_order_history` ADD `created_by` VARCHAR(255) NULL DEFAULT NULL AFTER `modification_date`;
ALTER TABLE `supplier_order_history` ADD `modified_by` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `supplier_order_history` ADD `creation_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `creation_date`;
ALTER TABLE `supplier_order_history` ADD `modification_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modification_date`;
ALTER TABLE `supplier_order_history` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `supplier_order_history` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;



********************************(01/04/2024 Supplier Price list(Supplier field))**************************************(Gobi)
ALTER TABLE `supplier_price_list` ADD `effective_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `effective_date`;
ALTER TABLE `supplier_price_list` ADD `expiry_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `expiry_date`;
ALTER TABLE `supplier_price_list` ADD `creation_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `creation_date`;
ALTER TABLE `supplier_price_list` ADD `modification_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modification_date`;

********************************(01/04/2024 Supplier Price list Item(Supplier field))**************************************(Gobi)
ALTER TABLE `supplier_price_list_item` ADD `creation_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `creation_date`;
ALTER TABLE `supplier_price_list_item` ADD `modification_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modification_date`;


********************************(01/04/2024 Supplier Receipt(Supplier field))**************************************(Gobi)
ALTER TABLE `supplier_receipt` ADD `supplier_receipt_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `supplier_receipt_code`;
ALTER TABLE `supplier_receipt` ADD `date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `date`;
ALTER TABLE `supplier_receipt` ADD `published_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `published`;
ALTER TABLE `supplier_receipt` ADD `flag_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `flag`;
ALTER TABLE `supplier_receipt` ADD `creation_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `creation_date`;
ALTER TABLE `supplier_receipt` ADD `modification_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modification_date`;
ALTER TABLE `supplier_receipt` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `supplier_receipt` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;
ALTER TABLE `supplier_receipt` ADD `cheque_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `cheque_date`;
ALTER TABLE `supplier_receipt` ADD `cheque_no_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `cheque_no`;
ALTER TABLE `supplier_receipt` ADD `coi_no_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `coi_no`;
ALTER TABLE `supplier_receipt` ADD `company_contact_salutation_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `company_contact_salutation`;
ALTER TABLE `supplier_receipt` ADD `cust_email_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `cust_email`;
ALTER TABLE `supplier_receipt` ADD `cust_address_po_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `cust_address_po_code`;
ALTER TABLE `supplier_receipt` ADD `cust_address_country_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `cust_address_country_code`;
ALTER TABLE `supplier_receipt` ADD `advance_payment_used_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `advance_payment_used`;


********************************(01/04/2024 Supplier Receipt History(Supplier field))**************************************(Gobi)
ALTER TABLE `supplier_receipt_history` ADD `published_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `published`;
ALTER TABLE `supplier_receipt_history` ADD `flag_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `flag`;
ALTER TABLE `supplier_receipt_history` ADD `creation_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `creation_date`;
ALTER TABLE `supplier_receipt_history` ADD `modification_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modification_date`;
ALTER TABLE `supplier_receipt_history` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `supplier_receipt_history` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;
ALTER TABLE `supplier_receipt_history` ADD `amount_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `amount`;
ALTER TABLE `supplier_receipt_history` ADD `purchase_order_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_order_date`;
ALTER TABLE `supplier_receipt_history` ADD `invoice_paid_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `invoice_paid_status`;
ALTER TABLE `supplier_receipt_history` ADD `receipt_type_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `receipt_type`;
ALTER TABLE `supplier_receipt_history` ADD `gst_amount_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `gst_amount`;


********************************(02/04/2024 Goods receipt)**************************************(Gobi)
ALTER TABLE `goods_receipt_items` ADD `po_product_id` INT(10) NULL DEFAULT NULL AFTER `total_cost_arb`;

********************************(02/04/2024 Purchasereturn)**************************************(Gobi)
ALTER TABLE `purchase_return` ADD `modified_by` VARCHAR(255) NULL DEFAULT NULL AFTER `status_arb`;

********************************(02/04/2024 setting)**************************************(Gobi)
INSERT INTO `setting` (`setting_id`, `description`, `key_text`, `value`, `creation_date`, `modification_date`, `group_name`, `value_type`, `show_to_user`, `chi_value`, `used_for_admin`, `used_for_www`, `flag`, `site_id`) VALUES (NULL, 'Purchase InvoiceCode Prefix', 'PurchaseInvoiceCodePrefix', 'PI', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL);
INSERT INTO `setting` (`setting_id`, `description`, `key_text`, `value`, `creation_date`, `modification_date`, `group_name`, `value_type`, `show_to_user`, `chi_value`, `used_for_admin`, `used_for_www`, `flag`, `site_id`) VALUES (NULL, 'next Purchase InvoiceCode', 'nextPurchaseInvoiceCode', '1000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL);


ALTER TABLE `supplier_receipt` CHANGE `date` `date` VARCHAR(255) NULL DEFAULT NULL;


INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdSupplierPriceList.ExpiryDate', 'Expiry Date', 'تاريخ النفاذ', NULL, NULL, NULL, NULL, NULL, NULL, '0');



********************************(29/04/2024 Purchase Invoice)**************************************(Gobi)

ALTER TABLE `purchase_invoice` ADD `purchase_invoice_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_invoice_code`;
ALTER TABLE `purchase_invoice` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;

********************************(29/04/2024 Purchase Invoice Item)**************************************(Gobi)
ALTER TABLE `purchase_invoice_items` ADD `total_cost_arb` VARCHAR(10) NULL DEFAULT NULL AFTER `total_cost`;
ALTER TABLE `purchase_invoice_items` ADD `unit_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `unit`;
ALTER TABLE `purchase_invoice_items` ADD `ordered_quantity_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `ordered_quantity`;
ALTER TABLE `purchase_invoice_items` ADD `cost_price_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `cost_price`;

********************************(29/04/2024 Purchase order)**************************************(Gobi)
ALTER TABLE `purchase_order` ADD `po_code_arb` VARCHAR(10) NULL DEFAULT NULL AFTER `po_code`;


********************************(29/04/2024 po product)**************************************(Gobi)
ALTER TABLE `po_product` ADD `qty_arb` INT(10) NULL DEFAULT NULL AFTER `qty`;
ALTER TABLE `po_product` ADD `qty_delivered_arb` INT(10) NULL DEFAULT NULL AFTER `qty_delivered`;
ALTER TABLE `po_product` ADD `cost_price_arb` INT(10) NULL DEFAULT NULL AFTER `cost_price`;
ALTER TABLE `po_product` ADD `quantity_arb` INT(10) NULL DEFAULT NULL AFTER `quantity`;



********************************(29/04/2024 Employee)**************************************(Gobi)
ALTER TABLE `employee` ADD `nric_no_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `nric_no`;
ALTER TABLE `employee` ADD `fin_no_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `fin_no`;
ALTER TABLE `employee` ADD `citizen_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `citizen`;
ALTER TABLE `employee` ADD `passport_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `passport`;



********************************(29/04/2024 Job information)**************************************(Gobi)
ALTER TABLE `job_information` ADD `rest_day_per_week_arb` VARCHAR(10) NULL DEFAULT NULL AFTER `rest_day_per_week`;
ALTER TABLE `job_information` ADD `paid_annual_leave_per_year_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `paid_annual_leave_per_year`;
ALTER TABLE `job_information` ADD `hourly_pay` VARCHAR(255) NULL DEFAULT NULL AFTER `over_time_rate`;

********************************(29/04/2024 Translation)**************************************(Gobi)
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdHRTraining.Title', 'Title', 'عنوان', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdHRTraining.Trainer', 'Trainer', 'مدرب', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdHRTraining.Date', 'Date', 'تاريخ', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdHRTraining.From Date', 'From Date', 'من التاريخ', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdHRTraining.To Date', 'To Date', 'ان يذهب في موعد', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdHRTraining.Description', 'Description', 'وصف', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdHRTraining.Training Company Name', 'Training Company Name', 'اسم شركة التدريب', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdHRTraining.Training Company address', 'Training Company address', 'عنوان شركة التدريب', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdHRTraining.Training Company email', 'Training Company email', 'البريد الإلكتروني لشركة ', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdHRTraining.Training Company phone', 'Training Company phone', 'هاتف شركة التدريب', NULL, NULL, NULL, NULL, NULL, NULL, '0');


********************************(2/5/2024 Po Product)**************************************(Gobi)
ALTER TABLE `po_product` CHANGE `item_title_arb` `item_title_arb` VARCHAR(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL;






***********(04/05/2024 proj_sales_return(ProjectSalesReturn createTable))*************

CREATE TABLE proj_sales_return ( proj_sales_return_id INT PRIMARY KEY, proj_sales_return_id_arb VARCHAR(255), return_date VARCHAR(255), return_date_arb VARCHAR(255), creation_date VARCHAR(255), modification_date VARCHAR(255), project_invoice_id INT, project_invoice_id_arb VARCHAR(255), status VARCHAR(50), status_arb VARCHAR(255), order_id INT, order_id_arb VARCHAR(255), created_by VARCHAR(100), modified_by VARCHAR(100) );

***********(04/05/2024  Translation(ProjectSalesReturn-inserts field))*************

INSERT INTO translation 
(translation_id, key_text, value, arb_value, chi_value, creation_date, modification_date, group_name, is_html_text, show_to_user, flag) 
VALUES 
(NULL, 'mdTradingProjSalesReturn.Invoice Code', 'Invoice Code', 'رمز الفاتورة', 'SalesReturn Invoice Code field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Status', 'Status', 'حالة', 'SalesReturn Status field\r\n', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Date', 'Date', 'تاريخ', 'SalesReturn Date field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Item', 'Item', 'غرض ', 'SalesReturn Item field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Quantity', 'Quantity', 'كمية', 'SalesReturn Quantity field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Unit Price', 'Unit Price', 'سعر الوحدة', 'SalesReturn Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Total', 'Total', 'المجموع ', 'SalesReturn Total field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdTradingProjSalesReturn.Qty Returned', 'Qty Returned', 'الكمية التي تم إرجاعها ', 'SalesReturn Qty Returned field', NULL, NULL, NULL, NULL, NULL, '0');

***********(04/05/2024  proj_sales_return(ProjectSalesReturn createField))*************

ALTER TABLE proj_sales_return ADD sales_return_id_arb INT(50) NULL DEFAULT NULL AFTER  	proj_sale_return_id;
ALTER TABLE proj_sales_return ADD return_date_arb varchar(255) NULL DEFAULT NULL AFTER return_date;
ALTER TABLE proj_sales_return ADD invoice_id_arb INT(50) NULL DEFAULT NULL AFTER invoice_id;
ALTER TABLE proj_sales_return ADD status_arb varchar(50) NULL DEFAULT NULL AFTER status;
ALTER TABLE proj_sales_return ADD order_id_arb INT(50) NULL DEFAULT NULL AFTER order_id;


***********(04/05/2024  proj_sales_return_history(ProjectSalesReturn createField))*************

ALTER TABLE proj_sales_return_history ADD qty_return_arb INT(50) NULL DEFAULT NULL AFTER qty_return;
ALTER TABLE proj_sales_return_history ADD price_arb INT(50) NULL DEFAULT NULL AFTER price;
ALTER TABLE proj_sales_return_history ADD status_arb VARCHAR(255) NULL DEFAULT NULL AFTER status;


***********(15/05/2024  purchase_return_items(purchase_return_items createField))*************
ALTER TABLE `purchase_return_items` ADD `cost_price` VARCHAR(255) NULL DEFAULT NULL AFTER `total_cost_arb`;
ALTER TABLE `purchase_return_items` ADD `cost_price_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `cost_price`;


***********(15/05/2024  purchase_return(purchase_return createField))*************
ALTER TABLE `purchase_return` ADD `modified_by` VARCHAR(255) NULL DEFAULT NULL AFTER `status_arb`;
ALTER TABLE `purchase_return` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;



CREATE TABLE `proj_sales_return_history` (
  `proj_sales_return_history_id` int(10) NOT NULL,
  `project_invoice_id` int(10) DEFAULT NULL,
  `return_date` varchar(255) DEFAULT NULL,
  `return_date_arb` varchar(255) DEFAULT NULL,
  `creation_date` varchar(255) DEFAULT NULL,
  `modification_date` varchar(255) DEFAULT NULL,
  `project_invoice_item_id` int(10) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `qty_returned` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;




INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdJobInformation.S Pass No', 'S Pass No', 'رقم المرور S', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdJobInformation.Length of Probation', 'Length of Probation', 'طول فترة الاختبار', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdJobInformation.Probation Start Date', 'Probation Start Date', 'تاريخ بدء الاختبار', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdJobInformation.Probation End Date', 'Probation End Date', 'تاريخ انتهاء الاختبار', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdJobInformation.Over Time Rate', 'Over Time Rate', 'معدل مرور الوقت', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdPayrollManagement.Plase create Job information records for the below employees to make them appear in payroll', 'Plase create Job information records for the below employees to make them appear in payroll', 'يرجى إنشاء سجلات معلومات الوظيفة للموظفين أدناه لجعلهم يظهرون في كشوف المرتبات', NULL, NULL, NULL, NULL, NULL, NULL, '0');




INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdJobInformation.Pay CDAC', 'Pay CDAC', 'دفع CDAC', NULL, NULL, NULL, NULL, NULL, NULL, '0')
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdJobInformation.Pay SINDA', 'Pay SINDA', 'ادفع سيندا', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdJobInformation.Pay MBMF', 'Pay MBMF', 'ادفع MBMF', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdJobInformation.Pay EUCF', 'Pay EUCF', 'دفع EUCF', NULL, NULL, NULL, NULL, NULL, NULL, '0');