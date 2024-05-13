..........................  Inventory Module Arabic New Fields (20/3/24)   ..........................
ALTER TABLE `inventory` ADD `inventory_code_arb` VARCHAR(100) NULL DEFAULT NULL AFTER `inventory_code`; 
ALTER TABLE `inventory` ADD `notes_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `notes`; 
ALTER TABLE `inventory` ADD `minimum_order_level_arb` INT(11) NULL DEFAULT NULL AFTER `minimum_order_level`;

..........................  Inventory Module Inserted fields in Translation (20/3/24)   ..........................
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`,
`modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.InventoryCode', 
'Inventory Code', 'رمز المخزون', 'Inventory Inventory Code', NULL, NULL, NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, 
`group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.ProductName', 
'Product Name', 'اسم المنتج', 'Inventory Product Name', '20-03-2024', '20-03-2024', NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, 
`group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.ProductType', 
'Product Type', 'نوع المنتج', 'Inventory Product Type', '20-03-2024', '20-03-2024', NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`,
`modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.ItemCode', 
'Item Code', 'رمز الصنف', 'Inventory Item Code', '20-03-2024', '20-03-2024', NULL, NULL, NULL, '0') 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, 
`modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.UOM', 
'UOM', 'وحدة القياس', 'Inventory UOM', '20-03-2024', '20-03-2024', NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, 
`modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.MOL', 
'MOL', 'الحد الأدنى لمستوى الطلب', 'Inventory MOL', '20-03-2024', '20-03-2024', NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, 
`modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.Notes', 
'Notes', 'ملحوظات', 'Inventory Notes', '20-03-2024', '20-03-2024', NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, 
`modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.TotalPurchasedQuantity', 
'Total Purchased Quantity', 'إجمالي الكمية المشتراة', 'Inventory Total Purchased Quantity', '20-03-2024', '20-03-2024', 
NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`,
`modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.SoldQuantity', 
'Sold Quantity', 'الكمية المباعة', 'Inventory Sold Quantity', '20-03-2024', '20-03-2024', NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, 
`modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.AvailableQuantityinStock', 
'Available Quantity in Stock', 'الكمية المتوفرة في المخزون', 'Inventory Available Quantity in Stock', '20-03-2024', '20-03-2024', 
NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.Stock', 'Stock', 'مخزون', 'Inventory Stock', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdInventory.AdjustStock', 'Adjust Stock', 'ضبط المخزون', 'Inventory Adjust Stock', NULL, NULL, NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdInventory.Edit', 'Edit', 'يحرر', 'Inventory Edit', NULL, NULL, NULL, NULL, NULL, '0'); 


.......................... Product Module Arabic New Fields(20/3/24) .....................................................
ALTER TABLE `product` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`; 
ALTER TABLE `product` ADD `product_type_arb` VARCHAR(100) NULL DEFAULT NULL AFTER `product_type`; 
ALTER TABLE `product` ADD `item_code_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `item_code`; 
ALTER TABLE `product` ADD `unit_arb` VARCHAR(100) NULL DEFAULT NULL AFTER `unit`; 

.......................... Category Module Inserted fields in translation(25/3/24) .....................................................
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdCategory.CategoryTitle', 'Category Title', 'عنوان الفئة', 'Category Title', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.Section', 'Section', 'قسم', 'Category Section', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.CategoryType', 'Category Type', 'نوع الفئة', 'Category Type', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.InternalLink', 'Internal Link', 'الرابط الداخلي', 'Category Internal Link', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.Published', 'Published', 'نشرت', 'Category Published', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.PublishedYes', 'PublishedYes', 'نعم', 'Category PublishedYes', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.PublishedNo', 'PublishedNo', 'لا', 'Category PublishedNo', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.PageTitle', 'Page Title', 'عنوان الصفحة', 'Category Page Title', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.PageDescription', 'Page Description', 'الصفحة الوصف', 'Category Page Description', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.PageKeywords', 'Page Keywords', 'الكلمات الرئيسية للصفحة', 'Category Page Keywords', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.SEOTitle', 'SEO Title', 'عنوان تحسين محركات البحث', 'Category SEO Title', '25-03-2024', NULL, NULL, NULL, NULL, '0')
(NULL, 'mdCategory.Edit', 'Edit', 'يحرر', 'Category Edit', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.Order', 'Order', 'طلب', 'Category Order', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdCategory.ID', 'ID', 'بطاقة تعريف', 'Category ID', '25-03-2024', NULL, NULL, NULL, NULL, '0');


.......................... SubCategory Module Inserted fields in translation(25/3/24) ....................................................
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdSubCategory.Title', 'Title', 'عنوان', 'SubCategory Title', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.Category', 'Category', 'فئة', 'SubCategory Category', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.SubCategoryType', 'SubCategory Type', 'نوع الفئة الفرعية', 'SubCategory Sub Category Type', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.ExternalLink', 'External Link', 'رابط خارجي', 'SubCategory External Link', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.InternalLink', 'Internal Link', 'الرابط الداخلي', 'SubCategory Internal Link', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.Published', 'Published', 'نشرت', 'SubCategory Published', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.PublishedYes', 'Yes', 'نعم', 'SubCategory PublishedYes', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.PublishedNo', 'No', 'لا', 'SubCategory PublishedNo', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.PageTitle', 'Page Title', 'عنوان الصفحة', 'SubCategory Page Title', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.PageDescription', 'Page Description', 'الصفحة الوصف', 'SubCategory Page Description', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.PageKeywords', 'Page Keywords', 'الكلمات الرئيسية للصفحة', 'SubCategory Page Keywords', '25-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.SEOTitle', 'SEO Title', 'عنوان تحسين محركات البحث', 'SubCategory SEO Title', '25-03-2024', NULL, NULL, NULL, NULL, '0')

.......................... Category Module  Arabic Field creation(25/3/24) ....................................................
ALTER TABLE `category` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`;
ALTER TABLE `category` ADD `published_arb` INT(1) NULL DEFAULT NULL AFTER `published`; 
ALTER TABLE `category` ADD `category_type_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `category_type`; 
ALTER TABLE `category` ADD `meta_title_arb` TEXT  NULL DEFAULT NULL AFTER `meta_title`;
ALTER TABLE `category` ADD `meta_keyword_arb` TEXT NULL DEFAULT NULL AFTER `meta_keyword`; 
ALTER TABLE `category` ADD `internal_link_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `internal_link`; 
ALTER TABLE `category` ADD `category_title_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `category_title`; 
ALTER TABLE `category` ADD `seo_title_arb` TEXT  NULL DEFAULT NULL AFTER `seo_title`; 
ALTER TABLE `category` ADD `meta_description_arb` TEXT  NULL DEFAULT NULL AFTER `meta_description`; 
ALTER TABLE `category` ADD `created_by` VARCHAR(255) NULL DEFAULT NULL AFTER `creation_date`, ADD `modified_by` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `category` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`; 
ALTER TABLE `category` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`; 

.......................... SubCategory Module  Arabic Field creation(25/3/24) ....................................................
ALTER TABLE `sub_category` ADD `sub_category_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `sub_category_title`;
ALTER TABLE `sub_category` ADD `published_arb` INT(1) NULL DEFAULT NULL AFTER `published`; 
ALTER TABLE `sub_category` ADD `external_link_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `external_link`; 
ALTER TABLE `sub_category` ADD `sub_category_type_arb` VARCHAR(50)  NULL DEFAULT NULL AFTER `sub_category_type`;
ALTER TABLE `sub_category` ADD `internal_link_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `internal_link`; 
ALTER TABLE `sub_category` ADD `meta_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `meta_title`; 
ALTER TABLE `sub_category` ADD `meta_description_arb` TEXT NULL DEFAULT NULL AFTER `meta_description`; 
ALTER TABLE `sub_category` ADD `meta_keyword_arb` TEXT  NULL DEFAULT NULL AFTER `meta_keyword`; 
ALTER TABLE `sub_category` ADD `seo_title_arb` VARCHAR(255)  NULL DEFAULT NULL AFTER `seo_title`; 
ALTER TABLE `sub_category` ADD `created_by` VARCHAR(255) NULL DEFAULT NULL AFTER `creation_date`, ADD `modified_by` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `sub_category` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`; 
ALTER TABLE `sub_category` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`; 
ALTER TABLE `section` ADD `section_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `section_title`; 

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdSubCategory.Edit', 'Edit', 'يحرر', 'SubCategory Edit', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.Order', 'Edit', 'طلب', 'SubCategory Order', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.SubCatChildType', 'Sub Cat Child Type', 'نوع الطفل الفرعي القط', 'SubCategory Sub Cat Child Type', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.Section', 'Section', 'قسم', 'SubCategory Section', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdSubCategory.ID', 'ID', 'بطاقة تعريف', 'SubCategory ID', '30-03-2024', NULL, NULL, NULL, NULL, '0')



........................pricelist module updated fields(29/3/24).....................................
ALTER TABLE `price_list` ADD `customer_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `customer_name`;
ALTER TABLE `price_list` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;
ALTER TABLE `price_list` ADD `notes_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `notes`;
ALTER TABLE `price_list` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `price_list` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;

ALTER TABLE `price_list_item` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`;
ALTER TABLE `price_list_item` ADD `unit_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `unit`;
ALTER TABLE `price_list_item` ADD `price_arb` INT(50) NULL DEFAULT NULL AFTER `price`;
ALTER TABLE `price_list_item` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `price_list_item` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;
ALTER TABLE `price_list_item` CHANGE `price` `price` INT(50) NULL DEFAULT NULL; 

..............................Translation insertion fields(30/3/24)....................
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdPriceList.Edit', 'Edit', 'يحرر', 'SubCategory Edit', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.CustomerName', 'Customer Name', 'اسم الزبون', 'PriceList Customer Name', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.Notes ', 'Notes ', 'ملحوظات', 'PriceList Notes ', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.EffectiveDate', 'Effective Date', 'تاريخ النفاذ', 'PriceList Effective Date', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.ExpiryDate', 'Expiry Date', 'تاريخ الانتهاء', 'PriceList Expiry Date', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.Status', 'Status', 'حالة', 'PriceList Status', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.ID', 'ID', 'بطاقة تعريف', 'PriceList ID', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.Product Name ', 'Product Name', 'اسم المنتج', 'PriceList Product Name ', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.Price', 'Price', 'سعر', 'PriceList Price', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.Unit', 'Unit', 'وحدة', 'PriceList Unit', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.Action', 'Action', 'فعل', 'PriceList Action', '30-03-2024', NULL, NULL, NULL, NULL, '0')



.......................8/4/23(Created fields in product module)......................................................
ALTER TABLE `product` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`;
ALTER TABLE `product` ADD `product_code_arb`  varchar(50)  NULL DEFAULT NULL AFTER `product_code`; 
ALTER TABLE `product` ADD `description_arb` TEXT NULL DEFAULT NULL AFTER `description`; 
ALTER TABLE `product` ADD `qty_in_stock_arb` decimal(10,2)  NULL DEFAULT NULL AFTER `qty_in_stock`;
ALTER TABLE `product` ADD `price_arb` varchar(100) NULL DEFAULT NULL AFTER `price`; 
ALTER TABLE `product` ADD `published_arb` int(1)  NULL DEFAULT NULL AFTER `published`; 
ALTER TABLE `product` ADD `product_type_arb` varchar(100) NULL DEFAULT NULL AFTER `product_type`; 
ALTER TABLE `product` ADD `modified_by_arb` varchar(255)  NULL DEFAULT NULL AFTER `modified_by`; 
ALTER TABLE `product` ADD `created_by_arb` varchar(255)  NULL DEFAULT NULL AFTER `created_by`; 


.................................8/4/23(Truncate the table in erpclient url).........................................
TRUNCATE TABLE `erpclient`.`document`; 
TRUNCATE TABLE `erpclient`.`dormitory`; 
TRUNCATE TABLE `erpclient`.`empleave`; 
TRUNCATE TABLE `erpclient`.`employee`; 
TRUNCATE TABLE `erpclient`.`employee_category`; 
TRUNCATE TABLE `erpclient`.`employee_timesheet`; 
TRUNCATE TABLE `erpclient`.`employee_timesheet_finance`; 
TRUNCATE TABLE `erpclient`.`enquiry`; 
TRUNCATE TABLE `erpclient`.`equipment_issue`; 
TRUNCATE TABLE `erpclient`.`equipment_request`; 
TRUNCATE TABLE `erpclient`.`equipment_request_item`; 
TRUNCATE TABLE `erpclient`.`expense`; 
TRUNCATE TABLE `erpclient`.`expense_group`; 
TRUNCATE TABLE `erpclient`.`expense_sub_group`; 
TRUNCATE TABLE `erpclient`.`geo_country`; 
TRUNCATE TABLE `erpclient`.`goods_delivery`; 
TRUNCATE TABLE `erpclient`.`goods_delivery_item`; 
TRUNCATE TABLE `erpclient`.`goods_receipt`; 
TRUNCATE TABLE `erpclient`.`goods_receipt_items`; 
TRUNCATE TABLE `erpclient`.`income_group`; 
TRUNCATE TABLE `erpclient`.`income_sub_group`; 
TRUNCATE TABLE `erpclient`.`interest`; 
TRUNCATE TABLE `erpclient`.`interest_contact`; 
TRUNCATE TABLE `erpclient`.`inventory`; 
TRUNCATE TABLE `erpclient`.`Inventory_history`; 
TRUNCATE TABLE `erpclient`.`invoice`; 
TRUNCATE TABLE `erpclient`.`invoice_credit_note_history`; 
TRUNCATE TABLE `erpclient`.`invoice_item`; 
TRUNCATE TABLE `erpclient`.`invoice_receipt_history`; 
TRUNCATE TABLE `erpclient`.`job_information`; 
TRUNCATE TABLE `erpclient`.`job_order`; 
TRUNCATE TABLE `erpclient`.`journal`; 
TRUNCATE TABLE `erpclient`.`journal_master`; 
TRUNCATE TABLE `erpclient`.`labour_request`; 
TRUNCATE TABLE `erpclient`.`leave_policy`; 
TRUNCATE TABLE `erpclient`.`leave_policy_employee_type`; 
TRUNCATE TABLE `erpclient`.`loan`; 
TRUNCATE TABLE `erpclient`.`loan_repayment_history`; 
TRUNCATE TABLE `erpclient`.`materials_request_line_items`; 
TRUNCATE TABLE `erpclient`.`materials_returned`; 
TRUNCATE TABLE `erpclient`.`material_issue`; 
TRUNCATE TABLE `erpclient`.`material_needed`; 
TRUNCATE TABLE `erpclient`.`material_request`; 
TRUNCATE TABLE `erpclient`.`material_request_item`; 
TRUNCATE TABLE `erpclient`.`media`; 
TRUNCATE TABLE `erpclient`.`mod_acc_other_action`; 
TRUNCATE TABLE `erpclient`.`mod_acc_room`; 
TRUNCATE TABLE `erpclient`.`mod_acc_room_user_group`; 
TRUNCATE TABLE `erpclient`.`mod_acc_user_group_other_action`; 
TRUNCATE TABLE `erpclient`.`opportunity_costing_summary`; 
TRUNCATE TABLE `erpclient`.`opportunity_costing_summary_history`; 
TRUNCATE TABLE `erpclient`.`opportunity_employee`; 
TRUNCATE TABLE `erpclient`.`opportunity_project_history`; 
TRUNCATE TABLE `erpclient`.`opportunity_staff`; 
TRUNCATE TABLE `erpclient`.`orders`; 
TRUNCATE TABLE `erpclient`.`order_item`; 
TRUNCATE TABLE `erpclient`.`other_comp_emp`; 
TRUNCATE TABLE `erpclient`.`payment`; 
TRUNCATE TABLE `erpclient`.`payroll_management`; 
TRUNCATE TABLE `erpclient`.`planning_bom`; 
TRUNCATE TABLE `erpclient`.`planning_cpanel`; 
TRUNCATE TABLE `erpclient`.`po_product`; 
TRUNCATE TABLE `erpclient`.`price_list`; 
TRUNCATE TABLE `erpclient`.`price_list_item`; 
TRUNCATE TABLE `erpclient`.`Print_Label`; 
TRUNCATE TABLE `erpclient`.`productproduct_company`; 
TRUNCATE TABLE `erpclient`.`product_pagination`; 
TRUNCATE TABLE `erpclient`.`product_price`; 
TRUNCATE TABLE `erpclient`.`product_price_history`; 
TRUNCATE TABLE `erpclient`.`project`; 
TRUNCATE TABLE `erpclient`.`project_claim`; 
TRUNCATE TABLE `erpclient`.`project_employee`; 
TRUNCATE TABLE `erpclient`.`project_enquiry`; 
TRUNCATE TABLE `erpclient`.`project_job`; 
TRUNCATE TABLE `erpclient`.`project_job_items`; 
TRUNCATE TABLE `erpclient`.`project_materials`; 
TRUNCATE TABLE `erpclient`.`project_planning`; 
TRUNCATE TABLE `erpclient`.`project_quote`; 
TRUNCATE TABLE `erpclient`.`project_quote_items`; 
TRUNCATE TABLE `erpclient`.`project_service`; 
TRUNCATE TABLE `erpclient`.`project_staff`; 
TRUNCATE TABLE `erpclient`.`project_task`; 
TRUNCATE TABLE `erpclient`.`proposal`; 
TRUNCATE TABLE `erpclient`.`proposal_employee`; 
TRUNCATE TABLE `erpclient`.`purchase_invoice`; 
TRUNCATE TABLE `erpclient`.`purchase_invoice_items`; 
TRUNCATE TABLE `erpclient`.`purchase_order`; 
TRUNCATE TABLE `erpclient`.`purchase_quote`; 
TRUNCATE TABLE `erpclient`.`purchase_quote_items`; 
TRUNCATE TABLE `erpclient`.`purchase_request`; 
TRUNCATE TABLE `erpclient`.`purchase_request_items`; 
TRUNCATE TABLE `erpclient`.`purchase_return`; 
TRUNCATE TABLE `erpclient`.`purchase_return_items`; 
TRUNCATE TABLE `erpclient`.`quote`; 
TRUNCATE TABLE `erpclient`.`quote_category`; 
TRUNCATE TABLE `erpclient`.`quote_columns`; 
TRUNCATE TABLE `erpclient`.`quote_items`; 
TRUNCATE TABLE `erpclient`.`quote_items_log`; 
TRUNCATE TABLE `erpclient`.`quote_log`; 
TRUNCATE TABLE `erpclient`.`receipt`; 
TRUNCATE TABLE `erpclient`.`renewals`; 
TRUNCATE TABLE `erpclient`.`sales_return`; 
TRUNCATE TABLE `erpclient`.`sales_return_history`; 
TRUNCATE TABLE `erpclient`.`schedule`; 
TRUNCATE TABLE `erpclient`.`section`; 
TRUNCATE TABLE `erpclient`.`service`; 
TRUNCATE TABLE `erpclient`.`setting`; 
TRUNCATE TABLE `erpclient`.`site`; 
TRUNCATE TABLE `erpclient`.`smart_attendance`; 
TRUNCATE TABLE `erpclient`.`stock_history`; 
TRUNCATE TABLE `erpclient`.`stock_transfer`; 
TRUNCATE TABLE `erpclient`.`stock_transfer_history`; 
TRUNCATE TABLE `erpclient`.`sub_category`; 
TRUNCATE TABLE `erpclient`.`sub_con`; 
TRUNCATE TABLE `erpclient`.`sub_con_payments`; 
TRUNCATE TABLE `erpclient`.`sub_con_payments_history`; 
TRUNCATE TABLE `erpclient`.`sub_con_work_order`; 
TRUNCATE TABLE `erpclient`.`supplier`; 
TRUNCATE TABLE `erpclient`.`supplier_order`; 
TRUNCATE TABLE `erpclient`.`supplier_order_history`; 
TRUNCATE TABLE `erpclient`.`supplier_price_list`; 
TRUNCATE TABLE `erpclient`.`supplier_price_list_item`; 
TRUNCATE TABLE `erpclient`.`supplier_receipt`; 
TRUNCATE TABLE `erpclient`.`supplier_receipt_history`; 
TRUNCATE TABLE `erpclient`.`support`; 
TRUNCATE TABLE `erpclient`.`task`; 
TRUNCATE TABLE `erpclient`.`task_history`; 
TRUNCATE TABLE `erpclient`.`task_staff`; 
TRUNCATE TABLE `erpclient`.`template`; 
TRUNCATE TABLE `erpclient`.`third_party_cost`; 
TRUNCATE TABLE `erpclient`.`timesheet`; 
TRUNCATE TABLE `erpclient`.`training`; 
TRUNCATE TABLE `erpclient`.`training_staff`; 
TRUNCATE TABLE `erpclient`.`translation`; 
TRUNCATE TABLE `erpclient`.`user_group`; 
TRUNCATE TABLE `erpclient`.`valuelist`; 
TRUNCATE TABLE `erpclient`.`vehicle`; 
TRUNCATE TABLE `erpclient`.`vehicle_fuel`; 
TRUNCATE TABLE `erpclient`.`vehicle_insurance`; 
TRUNCATE TABLE `erpclient`.`vehicle_service`; 
TRUNCATE TABLE `erpclient`.`work_order_line_items`; 

..................................New table-project_invoive(9/4/24)..............................
CREATE TABLE `project_invoice` (
  `project_invoice_id` int(11) NOT NULL,
  `project_invoice_id_arb` int(50) DEFAULT NULL,
  `project_invoice_code` varchar(50) DEFAULT NULL,
  `project_invoice_code_arb` varchar(50) DEFAULT NULL,
  `project_invoice_amount` decimal(10,2) DEFAULT NULL,
  `project_invoice_amount_arb` decimal(50,0) DEFAULT NULL,
  `project_invoice_date` varchar(255) DEFAULT NULL,
  `project_invoice_date_arb` varchar(255) DEFAULT NULL,
  `mode_of_payment` varchar(50) DEFAULT NULL,
  `mode_of_payment_arb` varchar(50) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `status_arb` varchar(50) DEFAULT NULL,
  `staff_id` int(11) DEFAULT NULL,
  `staff_id_arb` int(50) DEFAULT NULL,
  `creation_date` varchar(255) DEFAULT NULL,
  `modification_date` varchar(255) DEFAULT NULL,
  `flag` int(1) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `purchase_order_id` int(11) DEFAULT NULL,
  `purchase_order_id_arb` int(50) DEFAULT NULL,
  `project_invoice_type` varchar(200) DEFAULT NULL,
  `project_invoice_type_arb` varchar(50) DEFAULT NULL,
  `project_invoice_due_date` varchar(255) DEFAULT NULL,
  `project_invoice_due_date_arb` varchar(50) DEFAULT NULL,
  `project_invoice_terms` text DEFAULT NULL,
  `project_invoice_terms_arb` varchar(255) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `cst` int(1) DEFAULT NULL,
  `vat` int(1) DEFAULT NULL,
  `cst_value` decimal(10,2) DEFAULT NULL,
  `vat_value` decimal(10,2) DEFAULT NULL,
  `frieght` int(11) DEFAULT NULL,
  `p_f` int(11) DEFAULT NULL,
  `discount` varchar(100) DEFAULT NULL,
  `project_invoice_code_vat` int(50) DEFAULT NULL,
  `project_invoice_used` int(1) DEFAULT NULL,
  `project_invoice_code_vat_quote` int(50) DEFAULT NULL,
  `site_id` int(11) DEFAULT NULL,
  `manual_project_invoice_seq` int(1) DEFAULT NULL,
  `apply_general_vat` int(1) DEFAULT NULL,
  `selling_company` varchar(50) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `project_invoice_paid_date` date DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `project_invoice_sent_out` tinyint(1) DEFAULT NULL,
  `gst_percentage` tinyint(4) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `title_arb` varchar(255) DEFAULT NULL,
  `rate_text` varchar(255) DEFAULT NULL,
  `qty_text` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `reference_no` varchar(50) DEFAULT NULL,
  `CBF_Ref_No` varchar(50) DEFAULT NULL,
  `project_invoice_code_user` varchar(255) DEFAULT NULL,
  `project_invoice_sent_out_date` date DEFAULT NULL,
  `payment_terms` text DEFAULT NULL,
  `po_number` varchar(255) DEFAULT NULL,
  `project_location` varchar(255) DEFAULT NULL,
  `project_reference` varchar(255) DEFAULT NULL,
  `quote_code` varchar(50) DEFAULT NULL,
  `project_invoice_manual_code` varchar(150) DEFAULT NULL,
  `so_ref_no` varchar(100) DEFAULT NULL,
  `code` varchar(100) DEFAULT NULL,
  `site_code` varchar(100) DEFAULT NULL,
  `attention` varchar(100) DEFAULT NULL,
  `reference` text DEFAULT NULL,
  `gst_value` float DEFAULT NULL,
  `Clearance_status` varchar(255) DEFAULT NULL,
  `qr_code` varchar(255) DEFAULT NULL,
  `unique_id` varchar(255) DEFAULT NULL,
  `xml_hash` varchar(255) DEFAULT NULL,
  `source_type` varchar(255) DEFAULT NULL,
  `project_invoice_source_id` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

...............................project_invice_itme table.........................

--
-- Database: `databaseerp`
--

-- --------------------------------------------------------

--
-- Table structure for table `project_invoice_item`
--

CREATE TABLE `project_invoice_item` (
  `project_invoice_item_id` int(10) NOT NULL,
  `project_invoice_id` int(10) UNSIGNED DEFAULT NULL,
  `record_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `qty` int(11) DEFAULT NULL,
  `qty_arb` int(11) DEFAULT NULL,
  `unit_price` decimal(10,2) DEFAULT 0.00,
  `unit_price_arb` decimal(10,2) DEFAULT NULL,
  `item_title` varchar(255) DEFAULT NULL,
  `item_title_arb` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `module` varchar(50) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `cost_price` decimal(10,2) DEFAULT NULL,
  `cost_price_arb` decimal(10,2) DEFAULT NULL,
  `order_item_id` int(11) DEFAULT NULL,
  `item_code` varchar(255) DEFAULT NULL,
  `vat` decimal(10,2) DEFAULT NULL,
  `discount_percentage` decimal(10,2) DEFAULT NULL,
  `discount_type` varchar(100) DEFAULT NULL,
  `site_id` int(11) DEFAULT NULL,
  `item_code_backup` varchar(100) DEFAULT NULL,
  `unit` varchar(25) DEFAULT NULL,
  `unit_arb` varchar(25) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `description_arb` text DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `modification_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `month` int(4) DEFAULT NULL,
  `year` int(6) DEFAULT NULL,
  `total_cost` varchar(100) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `s_no` varchar(100) DEFAULT NULL,
  `qty_returned` decimal(10,2) DEFAULT NULL,
  `project_goods_delivery_id` int(11) DEFAULT NULL,
  `project_goods_delivery_item_id` int(11) DEFAULT NULL,
  `project_order_id` int(11) DEFAULT NULL,
  `creation_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `project_invoice_qty` int(11) DEFAULT NULL,
  `project_invoice_qty_arb` int(11) DEFAULT NULL,
  `project_invoice_source_id` int(11) DEFAULT NULL,
  `source_type` varchar(255) DEFAULT NULL,
  `project_quote_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

.....................Project sales invoice..............................
ALTER TABLE `project_invoice` ADD `source_type_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `source_type`; 
ALTER TABLE `project_invoice` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`; 
ALTER TABLE `project_invoice_item` ADD `unit_price_arb` decimal(10,2)  NULL DEFAULT NULL AFTER `unit_price`; 
ALTER TABLE `project_invoice_item` ADD `item_title_arb` varchar(255)  NULL DEFAULT NULL AFTER `item_title`; 
ALTER TABLE `project_invoice_item` ADD `cost_price_arb` decimal(10,2)  NULL DEFAULT NULL AFTER `cost_price`; 
ALTER TABLE `project_invoice_item` ADD `project_invoice_qty_arb` int(11)   NULL DEFAULT NULL AFTER `project_invoice_qty`; 
ALTER TABLE `project_invoice_item` ADD `qty_arb` int(11)   NULL DEFAULT NULL AFTER `qty`; 
ALTER TABLE `project_invoice_item` ADD `description_arb` text   NULL DEFAULT NULL AFTER `description`; 
ALTER TABLE `project_invoice_item` ADD `unit_arb` varchar(25)   NULL DEFAULT NULL AFTER `unit`; 



..................Product module Inserted translation field(10/4/24).................
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdProduct.Edit', 'Edit', 'يحرر', 'Product Edit', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.ItemCode', 'Item Code', 'رمز الصنف', 'Product Item Code', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.ProductName', 'Product Name', 'اسم المنتج', 'Product Name', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.ProductType', 'Product Type', 'نوع المنتج', 'Product Type', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.Price', 'Price', 'سعر', 'Product Price', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.Unit', 'Unit', 'وحدة', 'Product Unit', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.Quantity in Stock ', 'Quantity in Stock ', 'الكميه في المخزن', 'Product Quantity in Stock ', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.ModifiedBy', 'Modified By', 'تم التعديل بواسطة', 'Product ModifiedBy', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.Category', 'Category', 'فئة', 'Product Category', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.ShortDescription ', 'Short Description ', 'وصف قصير', 'Product Short Description ', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.Published', 'Published', 'نشرت', 'Product Published', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.PublishedYes', 'Yes', 'نعم', 'Product PublishedYes', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.PublishedNo', 'No', 'لا', 'Product PublishedNo', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProduct.Description', 'Description', 'وصف', 'Product Description', '10-04-2024', NULL, NULL, NULL, NULL, '0')

.........................................Project sales invoice(translation inserted fields)..................................................................................................
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdProjectSalesInvoice.Edit', 'Edit', 'يحرر', 'Project Sales Invoice Edit', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProjectSalesInvoice.InvoiceCode', 'Invoice Code', 'رمز الفاتورة', 'Project Sales Invoice Code', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProjectSalesInvoice.CompanyName', 'Company Name', 'اسم الشركة', 'Project Sales Invoice Company', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProjectSalesInvoice.InvoiceDate', 'Invoice Date', 'تاريخ الفاتورة', 'Project Sales Invoice Date', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProjectSalesInvoice.InvoiceDueDate', 'Invoice Due Date', 'تاريخ استحقاق الفاتورة', 'Project Sales Invoice Due Date', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProjectSalesInvoice.Status', 'Status', 'حالة', 'Project Sales Invoice Status', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProjectSalesInvoice.InvoiceSource', 'Invoice Source', 'مصدر الفاتورة', 'Project Sales Invoice Source', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProjectSalesInvoice.SalesOrder', 'Sales Order', 'مصدر الفاتورة', 'Project Sales Invoice Sales Order', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProjectSalesInvoice.GoodsDelivery', 'Goods Delivery', 'تسليم جيد', 'Project Sales Invoice Goods Delivery', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProjectSalesInvoice.InvoiceAmount', 'Invoice Amount', 'قيمة الفاتورة', 'Project Sales Invoice Amount', '10-04-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdProjectSalesInvoice.InvoiceTerms', 'Invoice Terms', 'شروط الفاتورة', 'Project Sales Invoice Terms', '10-04-2024', NULL, NULL, NULL, NULL, '0')
........................................Project Invoice Item Table(20/4/24)............................
--
-- Database: `databaseerp`
--

-- --------------------------------------------------------

--
-- Table structure for table `invoice_item`
--

CREATE TABLE `project_invoice_item` (
  `project_invoice_item_id` int(10) NOT NULL,
  `project_invoice_id` int(10) UNSIGNED DEFAULT NULL,
  `record_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `qty` int(11) DEFAULT NULL,
  `unit_price` decimal(10,2) DEFAULT 0.00,
  `item_title` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `module` varchar(50) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `cost_price` decimal(10,2) DEFAULT NULL,
  `order_item_id` int(11) DEFAULT NULL,
  `item_code` varchar(255) DEFAULT NULL,
  `vat` decimal(10,2) DEFAULT NULL,
  `discount_percentage` decimal(10,2) DEFAULT NULL,
  `discount_type` varchar(100) DEFAULT NULL,
  `site_id` int(11) DEFAULT NULL,
  `item_code_backup` varchar(100) DEFAULT NULL,
  `unit` varchar(25) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `modification_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `month` int(4) DEFAULT NULL,
  `year` int(6) DEFAULT NULL,
  `total_cost` varchar(100) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `s_no` varchar(100) DEFAULT NULL,
  `qty_returned` decimal(10,2) DEFAULT NULL,
  `project_goods_delivery_id` int(11) DEFAULT NULL,
  `project_goods_delivery_item_id` int(11) DEFAULT NULL,
  `project_order_id` int(11) DEFAULT NULL,
  `creation_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `project_invoice_qty` int(11) DEFAULT NULL,
  `project_invoice_source_id` int(11) DEFAULT NULL,
  `source_type` varchar(255) DEFAULT NULL,
  `project_quote_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

........................................pdf(material requset)(23/4/24)......................................
ALTER TABLE `contact` ADD `company_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `company_name`; 
ALTER TABLE `contact` ADD `first_name_arb` VARCHAR(100) NULL DEFAULT NULL AFTER `first_name`; 

...............................Qutation-5-2-24.....................................
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdTradingQuote.Enquiry Code', 'Enquiry Code', 'كود الاستفسار', 'Trading Enquiry Code field', NULL, NULL, NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdTradingQuote.Action', 'Action', 'فعل', 'Quotation Action Field', NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdTradingQuote.Unit', 'Unit', 'وحدة', 'Quotation Unit Field', NULL, NULL, NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdTradingQuote.Remarks', 'Remarks', 'ملاحظات', 'Quotation Remarks Field', NULL, NULL, NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdTradingEnq.Category', 'Category', 'فئة', 'Trading Enquiry Category Field', NULL, NULL, NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdTradingEnq.Website', 'Website', 'موقع إلكتروني', 'Trading Enquiry Website field', NULL, NULL, NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdClient.CompanySource', 'Company Source', 'مصدر الشركة', 'Client Module Company Source filed', '2024-03-17T15:55:28.757Z', '2024-03-17T15:57:05.861Z', NULL, 'Text', NULL, NULL);
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdClient.SupplierType', 'Supplier Type', 'نوع المورد', 'Client Module Supplier Type filed', '2024-03-17T15:55:28.757Z', '2024-03-17T15:57:05.861Z', NULL, 'Text', NULL, NULL); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdClient.Industry', 'Industry', 'صناعة', 'Client Module Industry filed', '2024-03-17T15:55:28.757Z', '2024-03-17T15:57:05.861Z', NULL, 'Text', NULL, NULL); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdClient.CompanySize', 'Company Size', 'حجم الشركة', 'Client Module Company Size filed', '2024-03-17T15:55:28.757Z', '2024-03-17T15:57:05.861Z', NULL, 'Text', NULL, NULL); 
ALTER TABLE `project_quote_items` CHANGE `opportunity_id` `project_enquiry_id` INT(11) NULL DEFAULT NULL; 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdProjectEnq.Title', 'Title', 'عنوان', 'project Enquiry Title', NULL, NULL, NULL, NULL, NULL, '0'); 
INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdTradingEnq.Customer', 'Customer', 'عميل', 'Trading Enquiry Customer', NULL, NULL, NULL, NULL, NULL, '0'); 


ALTER TABLE `project_goods_delivery_item` CHANGE `goods_delivery_item_id` `project_goods_delivery_item_id` INT(11) NOT NULL AUTO_INCREMENT; 

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdTradingSalesInvoice.Status', 'Invoice Status', 'حالة الفاتورة', 'GoodsDelivery Invoice Status', NULL, NULL, NULL, NULL, NULL, '0'); 
