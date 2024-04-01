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
(NULL, 'mdPriceList.Name ', 'Name', 'اسم', 'PriceList Name ', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.Price', 'Price', 'سعر', 'PriceList Price', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.Unit', 'Unit', 'وحدة', 'PriceList Unit', '30-03-2024', NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdPriceList.Action', 'Action', 'فعل', 'PriceList Action', '30-03-2024', NULL, NULL, NULL, NULL, '0')




