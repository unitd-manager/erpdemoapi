********************************(19/03/2024 Translation(RequestForQuote insertField))**************************************(Sabina)
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdRequestForQuote.Purchase Request Code', 'Purchase Request Code', 'كود طلب الشراء', 'Purchase Request Code field in RequestForQuote ', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdRequestForQuote.Request For Quote Code', 'Request For Quote Code', 'طلب رمز اقتباس', 'Request For Quote Code in RequestForQuote', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdRequestForQuote.Status', 'Status', 'حالة', 'RequestForQuote Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdRequestForQuote.Date Issued', 'Date Issued', 'تاريخ الإصدار', 'RequestForQuote Date Issued field', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdRequestForQuote.Due Date', 'Due Date', 'تاريخ الاستحقاق', 'RequestForQuote Due Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdRequestForQuote.Supplier Name', 'Supplier Name', 'اسم المورد', 'RequestForQuote Supplier Name field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(20/03/2024 project_quote(RequestForQuote createField))**************************************(Sabina)
ALTER TABLE `purchase_quote` ADD `rq_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `rq_code`; 
ALTER TABLE `purchase_quote` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 
ALTER TABLE `purchase_quote` ADD `date_issued_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `date_issued`; 
ALTER TABLE `purchase_quote` ADD `due_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `due_date`; 

********************************(19/03/2024 Translation(PurchaseRequest insertField))**************************************(Sabina)
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdPurchaseRequest.Purchase Request code', 'Purchase Request code', 'كود طلب الشراء', 'PurchaseRequest Purchase Request code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Purchase Request Date', 'Purchase Request Date', 'تاريخ طلب الشراء', 'PurchaseRequest Purchase Request Date field', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdPurchaseRequest. Purchase Delivery Date', 'Purchase Delivery Date', 'تاريخ تسليم الشراء', 'PurchaseRequest Purchase Delivery Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Department', 'Department', 'قسم', 'PurchaseRequest Department field', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdPurchaseRequest.Customer Name', 'Customer Name', 'اسم الزبون', 'PurchaseRequest Customer Name field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Status', 'Status', 'حالة', 'PurchaseRequest Status field', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdPurchaseRequest.Priority', 'Priority', 'أولوية', 'PurchaseRequest Priority field', NULL, NULL, NULL, NULL, NULL, '0'),(NULL, 'mdPurchaseRequest.Title', 'Title', 'عنوان', 'PurchaseRequest Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Unit', 'Unit', 'وحدة', 'PurchaseRequest Unit field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Quantity', 'Quantity', 'الكمية', 'PurchaseRequest Quantity field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Created By', 'Created By', 'انشأ من قبل', 'PurchaseRequest Created By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Updated By', 'Updated By', 'تم التحديث بواسطة', 'PurchaseRequest Updated By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseRequest.Action', 'Action', 'فعل', 'PurchaseRequest Action field', NULL, NULL, NULL, NULL, NULL, '0');
 
********************************(20/03/2024 purchase_request(PurchaseRequest createField))**************************************(Sabina)
ALTER TABLE `purchase_request` ADD `purchase_request_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_request_code`; 
ALTER TABLE `purchase_request` ADD `purchase_request_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_request_date`; 
ALTER TABLE `purchase_request` ADD `purchase_delivery_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_delivery_date`; 
ALTER TABLE `purchase_request` ADD `department_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `department`; 
ALTER TABLE `purchase_request` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 
ALTER TABLE `purchase_request` ADD `priority_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `priority`; 

********************************(20/03/2024 purchase_request_items(PurchaseRequest createField))**************************************(Sabina)
ALTER TABLE `purchase_request_items` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`; 
ALTER TABLE `purchase_request_items` ADD `unit_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `unit`; 
ALTER TABLE `purchase_request_items` ADD `purchase_request_qty_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_request_qty`; 
ALTER TABLE `purchase_request_items` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`; 
ALTER TABLE `purchase_request_items` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`; 

********************************(19/03/2024 Translation(GoodsReceipt insertField))**************************************(Sabina)

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdGoodsReceipt.PO Code', 'PO Code', 'رمز الشراء', 'GoodsReceipt PO Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdGoodsReceipt.Supplier Name', 'Supplier Name', 'اسم المورد', 'GoodsReceipt Supplier Name field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdGoodsReceipt.Goods Received Date', 'Goods Received Date', 'تاريخ استلام البضائع', 'GoodsReceipt Goods Received Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdGoodsReceipt.Received By', 'Received By', 'استلمت من قبل', 'GoodsReceipt Received By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdGoodsReceipt.Total Amount', 'Total Amount', 'المبلغ الإجمالي', 'GoodsReceipt Total Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdGoodsReceipt.Status', 'Status', 'حالة', 'GoodsReceipt Status field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(20/03/2024 goods_receipt(GoodsReceipt createField))**************************************(Sabina)
ALTER TABLE `goods_receipt` ADD `goods_received_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `goods_received_date`; 
ALTER TABLE `goods_receipt` ADD `total_amount_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `total_amount`; 
ALTER TABLE `goods_receipt` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 

********************************(20/03/2024 goods_receipt_items(GoodsReceipt createField))**************************************(Sabina)
ALTER TABLE `goods_receipt_items` ADD `po_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `po_code`; 
ALTER TABLE `goods_receipt_items` ADD `item_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `item_title`; 
ALTER TABLE `goods_receipt_items` ADD `unit_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `unit`; 
ALTER TABLE `goods_receipt_items` ADD `ordered_quantity_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `ordered_quantity`; 
ALTER TABLE `goods_receipt_items` ADD `goods_received_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `goods_received_date`; 
ALTER TABLE `goods_receipt_items` ADD `goods_received_qty_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `goods_received_qty`; 
ALTER TABLE `goods_receipt_items` ADD `unit_price_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `unit_price`; 
ALTER TABLE `goods_receipt_items` ADD `total_cost_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `total_cost`; 

********************************(19/03/2024 Translation(PurchaseReturn insertField))**************************************(Sabina)

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdPurchaseReturn.Purchase Invoice Number', 'Purchase Invoice Number', 'رقم فاتورة الشراء', 'PurchaseReturn Purchase Invoice Number field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Return Date', 'Return Date', 'تاريخ العودة', 'PurchaseReturn Return Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Status', 'Status', 'حالة', 'PurchaseReturn Status field', NULL, NULL, NULL, NULL, NULL, '0');


INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdPurchaseReturn.Item', 'Item', 'غرض', 'PurchaseReturn Item field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Quantity', 'Quantity', 'الكمية', 'PurchaseReturn Quantity field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Total', 'Total', 'المجموع', 'Total field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdPurchaseReturn.Title', 'Title', 'عنوان', 'PurchaseReturn Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Description', 'Description', 'وصف', 'PurchaseReturn Description field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Qty', 'Qty', 'الكمية', 'PurchaseReturn Qty field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Unit Price', 'Unit Price', 'سعر الوحدة', 'PurchaseReturn Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Amount', 'Amount', 'كمية', 'PurchaseReturn Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Updated By', 'Updated By', 'تم التحديث بواسطة', 'PurchaseReturn Updated By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdPurchaseReturn.Action', 'Action', 'فعل', 'PurchaseReturn Action field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(20/03/2024 purchase_return (PurchaseReturn createField))**************************************(Sabina)
ALTER TABLE `purchase_return` ADD `purchase_return_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `purchase_return_date`; 
ALTER TABLE `purchase_return` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`; 

********************************(20/03/2024 purchase_return_items (PurchaseReturn createField))**************************************(Sabina)
ALTER TABLE `purchase_return_items` ADD `item_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `item_title`; 
ALTER TABLE `purchase_return_items` ADD `ordered_quantity_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `ordered_quantity`; 
ALTER TABLE `purchase_return_items` ADD `total_cost_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `total_cost`; 
ALTER TABLE `purchase_return_items` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `description`; 