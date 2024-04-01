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


ALTER TABLE `goods_receipt_items` ADD `po_product_id` INT(10) NULL DEFAULT NULL AFTER `total_cost_arb`;
ALTER TABLE `purchase_return` ADD `modified_by` VARCHAR(255) NULL DEFAULT NULL AFTER `status_arb`;
INSERT INTO `setting` (`setting_id`, `description`, `key_text`, `value`, `creation_date`, `modification_date`, `group_name`, `value_type`, `show_to_user`, `chi_value`, `used_for_admin`, `used_for_www`, `flag`, `site_id`) VALUES (NULL, 'Purchase InvoiceCode Prefix', 'PurchaseInvoiceCodePrefix', 'PI', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL);
INSERT INTO `setting` (`setting_id`, `description`, `key_text`, `value`, `creation_date`, `modification_date`, `group_name`, `value_type`, `show_to_user`, `chi_value`, `used_for_admin`, `used_for_www`, `flag`, `site_id`) VALUES (NULL, 'next Purchase InvoiceCode', 'nextPurchaseInvoiceCode', '1000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL);

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