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


.......................... Product Module Arabic New Fields(20/3/24) .....................................................
ALTER TABLE `product` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`; 
ALTER TABLE `product` ADD `product_type_arb` VARCHAR(100) NULL DEFAULT NULL AFTER `product_type`; 
ALTER TABLE `product` ADD `item_code_arb` VARCHAR(50) NULL DEFAULT NULL AFTER `item_code`; 
ALTER TABLE `product` ADD `unit_arb` VARCHAR(100) NULL DEFAULT NULL AFTER `unit`; 