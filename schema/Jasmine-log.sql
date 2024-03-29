********************************(19/03/2024 Translation(chart of account inserts field))**************************************
INSERT INTO `valuelist` (`valuelist_id`, `key_text`,`value`, `value_arb`, `chi_value`, `creation_date`, `modification_date`, `sort_order`, `flag`, `code`) VALUES (NULL, 'Account Category', 'ASSET', 'أصل', NULL, '20-03-2024 14:46:31', '20-03-2024 14:46:31', NULL, NULL, NULL);

INSERT INTO `valuelist` (`valuelist_id`, `key_text`,`value`, `value_arb`, `chi_value`, `creation_date`, `modification_date`, `sort_order`, `flag`, `code`) VALUES
 (NULL, 'Account Category', 'LIABILITY', 'مسؤولية', NULL, '20-03-2024 14:46:31', '20-03-2024 14:46:31', NULL, NULL, NULL);

INSERT INTO `valuelist` (`valuelist_id`, `key_text`,`value`, `value_arb`, `chi_value`, `creation_date`, `modification_date`, `sort_order`, `flag`, `code`) VALUES
 (NULL, 'Account Category', 'EXPENSE', 'نفقات', NULL, '20-03-2024 14:46:31', '20-03-2024 14:46:31', NULL, NULL, NULL);

INSERT INTO `valuelist` (`valuelist_id`, `key_text`,`value`, `value_arb`, `chi_value`, `creation_date`, `modification_date`, `sort_order`, `flag`, `code`) VALUES
 (NULL, 'Account Category', 'INCOME', 'إيراد', NULL, '20-03-2024 14:46:31', '20-03-2024 14:46:31', NULL, NULL, NULL);

INSERT INTO `valuelist` (`valuelist_id`, `key_text`,`value`, `value_arb`, `chi_value`, `creation_date`, `modification_date`, `sort_order`, `flag`, `code`) VALUES
 (NULL, 'Account Category', 'CAPITAL','عاصمة', NULL, '20-03-2024 14:46:31', '20-03-2024 14:46:31', NULL, NULL, NULL);

INSERT INTO `valuelist` (`valuelist_id`, `key_text`,`value`, `value_arb`, `chi_value`, `creation_date`, `modification_date`, `sort_order`, `flag`, `code`) VALUES
 (NULL, 'Account Category', 'FIXED ASSET','أصل ثابت', NULL, '20-03-2024 14:46:31', '20-03-2024 14:46:31', NULL, NULL, NULL);

INSERT INTO `valuelist` (`valuelist_id`, `key_text`,`value`, `value_arb`, `chi_value`, `creation_date`, `modification_date`, `sort_order`, `flag`, `code`) VALUES
 (NULL, 'Account Category', 'CURRENT ASSET','الاصول المتداولة', NULL, '20-03-2024 14:46:31', '20-03-2024 14:46:31', NULL, NULL, NULL);

INSERT INTO `valuelist` (`valuelist_id`, `key_text`,`value`, `value_arb`, `chi_value`, `creation_date`, `modification_date`, `sort_order`, `flag`, `code`) VALUES
 (NULL, 'Account Category', 'BANK ACCOUNTS','حساب البنك', NULL, '20-03-2024 14:46:31', '20-03-2024 14:46:31', NULL, NULL, NULL);

INSERT INTO `valuelist` (`valuelist_id`, `key_text`,`value`, `value_arb`, `chi_value`, `creation_date`, `modification_date`, `sort_order`, `flag`, `code`) VALUES
 (NULL, 'Account Category', 'SUNDRY DEBTORS', 'مدينون متنوعون', NULL, '20-03-2024 14:46:31', '20-03-2024 14:46:31', NULL, NULL, NULL);

INSERT INTO `valuelist` (`valuelist_id`, `key_text`,`value`, `value_arb`, `chi_value`, `creation_date`, `modification_date`, `sort_order`, `flag`, `code`) VALUES
 (NULL, 'Account Category', 'SUNDRY CREDITORS', 'المدينون المتنوعون', NULL, '20-03-2024 14:46:31', '20-03-2024 14:46:31', NULL, NULL, NULL);



INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdAccMap.Ttile', 'Ttile', 'عنوان', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdAccMap.Code', 'Code', 'شفرة', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdAccMap.Customer', 'Customer', 'عميل', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdAccMap.Parent', 'Parent', 'الأبوين', NULL, NULL, NULL, NULL, NULL, NULL, '0');

ALTER TABLE `acc_category` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`; 
ALTER TABLE `acc_category` ADD `category_type_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`; 

********************************(22/03/2024 Translation(chart of account inserts field))**************************************

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdChartAcc.Title', 'Title', 'عنوان', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdChartAcc.Code', 'Code', 'شفرة', NULL, NULL, NULL, NULL, NULL, NULL, '0');
INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdChartAcc.Category', 'Category', 'فئة', NULL, NULL, NULL, NULL, NULL, NULL, '0');


ALTER TABLE `acc_head` ADD `acc_category_arb_id` INT(11) NULL DEFAULT NULL; 

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJournal.Account', 'Account', 'فئة', NULL, NULL, NULL, NULL, NULL, NULL, '0');

ALTER TABLE `journal_master` ADD `narration_arb` VARCHAR(2500) NULL DEFAULT NULL; 
ALTER TABLE `journal` ADD `narration_arb` VARCHAR(2500) NULL DEFAULT NULL; 


********************************(25/03/2024 Translation(ledger))**************************************
INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.SNo', 'SNo', 'سنو', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.Edit', 'Edit', 'يحرر', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.Title', 'Title', 'عنوان', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.EntryDate', 'EntryDate', 'موعد الدخول', NULL, NULL, NULL, NULL, NULL, NULL, '0');


INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.Narration', 'Narration', 'السرد', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.Debit', 'Debit', 'دَين', NULL, NULL, NULL, NULL, NULL, NULL, '0');


INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.Credit', 'Credit', 'ائتمان', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.please', 'Please select account name and click GO', 'الرجاء تحديد اسم الحساب ثم انقر فوق "انتقال".', NULL, NULL, NULL, NULL, NULL, NULL, '0');


INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.Account', 'Account', 'حساب', NULL, NULL, NULL, NULL, NULL, NULL, '0');


INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.Ledger', 'Ledger Bal', 'توازن دفتر الأستاذ', NULL, NULL, NULL, NULL, NULL, NULL, '0');


INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.Total', 'Total', 'المجموع', NULL, NULL, NULL, NULL, NULL, NULL, '0');


INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdLedger.Go', 'Go', 'ذهب', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdChartAcc.Id', 'Id', 'بطاقة تعريف', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdChartAcc.Edit', 'Edit', 'يحرر', NULL, NULL, NULL, NULL, NULL, NULL, '0');


INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJournal.Id', 'Id', 'بطاقةتعريف', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJournal.Edit', 'Edit', 'يحرر', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJournal.Title', 'Title', 'عنوان', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJournal.EntryDate', 'Date', 'موعد الدخول', NULL, NULL, NULL, NULL, NULL, NULL, '0');


INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJournal.Narration', 'Narration', 'السرد', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJournal.Debit', 'Debit', 'دَين', NULL, NULL, NULL, NULL, NULL, NULL, '0');

INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJournal.Account', 'Account', 'حساب', NULL, NULL, NULL, NULL, NULL, NULL, '0');


INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJournal.Credit', 'Credit', 'ائتمان', NULL, NULL, NULL, NULL, NULL, NULL, '0');

ALTER TABLE `acc_head` ADD `title_arb` INT(11) NULL DEFAULT NULL; 
