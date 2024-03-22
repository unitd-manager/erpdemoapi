********************************(19/03/2024 Translation(Project-enquiry inserts field))**************************************
INSERT   INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdProjectEnq.Enquiry Date', 'Enquiry Date', 'تاريخ الاستفسار', 'Project Enquiry Enquiry Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectEnq.Enquiry No', 'Enquiry No', 'رقم الاستفسار', 'Project Enquiry Enquiry No field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectEnq.Reference', 'Reference', 'مرجع', 'Project Enquiry Reference field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectEnq.BID Expiry', 'BID Expiry', 'انتهاء المزايدة', 'Project Enquiry BID Expiry', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectEnq.customer', 'Customer', 'عميل', ' Project Enquiry Customer field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(19/03/2024 project_enquiry(Project-enquiry Creates field))**************************************
ALTER TABLE `project_enquiry` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`
ALTER TABLE `project_enquiry` ADD `enquiry_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `enquiry_date`
ALTER TABLE `project_enquiry` ADD `project_end_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `project_end_date`;

********************************(19/03/2024 Translation(Project-Quotation inserts field))**************************************
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdProjectQuote.Enquiry Code', 'Enquiry Code', 'كود الاستفسار', 'Project Quote Enquiry Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Quotation Code', 'Quotation Code', 'رمز الاقتباس', 'Project Quotation quotation Code Field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Date', 'Date', 'تاريخ', 'project quote Date Quote field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Customer', 'Customer', 'عميل', 'project quote Customer field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Contact ', 'Contact ', 'اتصال', 'project quote Contact  field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Reference', 'Reference', 'مرجع', 'project quote Reference field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Status', 'Status', 'حالة', 'projectquote Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Net Total', 'Net Total', 'صافي المجموع', 'project quote Net Total field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdProjectQuote.Title', 'Title', 'عنوان', 'Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Description', 'Description', 'وصف', 'Description field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.', 'Qty', 'الكمية', 'Qty field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Unit Price', 'Unit Price', 'سعر الوحدة', 'Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Amount', 'Amount', 'كمية', 'Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Updated By', 'Updated By', 'تم التحديث بواسطة', 'Updated By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Action', 'Action', 'فعل', 'Action field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Unit', 'Unit', 'وحدة', 'Unit field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProjectQuote.Remark', 'Remark', 'ملاحظة', 'Remark field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdProjectQuote.Unit', 'Unit Price', 'سعر الوحدة', 'Unit Price field', NULL, NULL, NULL, NULL, NULL, '0');
********************************(19/03/2024 project_quote(Project-Quotation Creates field))**************************************
ALTER TABLE `project_quote` ADD `quote_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `quote_code`;
ALTER TABLE `project_quote` ADD `quote_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `quote_date`;
ALTER TABLE `project_quote` ADD `quote_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `quote_status`;
ALTER TABLE `project_quote` ADD `ref_no_quote_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `ref_no_quote`;
ALTER TABLE `project_quote` ADD `total_amount_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `total_amount`;


********************************(20/03/2024 translation(Proposal inserts field))**************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdproposal.Quotation Code', 'Quotation Code', 'رمز الاقتباس', 'Proposal  Quotation Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Proposal Code', 'Proposal Code', 'رمز الاقتراح', 'Prposal Proposal Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Title', 'Title', 'عنوان', 'Proposal Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Company Name', 'Company Name', 'اسم الشركة', 'Proposal Company Name field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Contact', 'Contact', 'اتصال', 'Proposal Contact field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Est Start_Date', 'Est Start_Date', 'تاريخ البدء المتوقع', 'Proposal Est Start_Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Est End_Date', 'Est End_Date', 'تاريخ الانتهاء المتوقع', 'Proposal Est End_Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Budget', 'Budget', 'ميزانية', 'Proposal Budget field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Project Manager', 'Project Manager', 'مدير المشروع', 'Proposal Project Manager field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Description', 'Description', 'وصف', 'Proposal Description field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdproposal.Status', 'Status', 'حالة', 'Proposal Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.No of Employees', 'No of Employees', 'عدد الموظفين', 'Prposal No of Employees field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Date', 'Date', 'تاريخ', 'Proposal Date field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) VALUES (NULL, 'mdproposal.Qty', 'Qty', 'الكمية', 'Proposal Qty field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Unit Price', 'Unit Price', 'سعر الوحدة', 'Proposal Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdproposal.Amount', 'Amount', 'كمية', 'Proposal Amount field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(20/03/2024 proposal(proposal Creates field))**************************************


ALTER TABLE `proposal` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`;
ALTER TABLE `proposal` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;
ALTER TABLE `proposal` ADD `est_start_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `est_start_date`;
ALTER TABLE `proposal` ADD `est_end_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `est_end_date`;
ALTER TABLE `proposal` ADD `budget_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `budget`;
ALTER TABLE `proposal` ADD `project_manager_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `project_manager`;
ALTER TABLE `proposal` ADD `no_of_employees_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `no_of_employees`;
ALTER TABLE `proposal` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `description`;
ALTER TABLE `proposal` ADD `proposal_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `proposal_date`;

********************************(21/03/2024 Translation(Project inserts field))**************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdProject.Title', 'Title', 'عنوان', 'Project Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Category', 'Category', 'فئة', 'Project Category field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Status', 'Status', 'حالة', 'Project Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Company', 'Company Name', 'اسم الشركة', 'Project Company Name field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Contact', 'Contact', 'اتصال', 'Project Contact field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Start Date', 'Start Date', 'تاريخ البدء', 'Project Start Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Estimated Finish Date', 'Estimated Finish Date', 'تاريخ الانتهاء المقدر', 'Project Estimated Finish Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Description', 'Description', 'وصف', 'Project Description field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Project Manager', 'Project Manager', 'مدير المشروع', 'Project Project Manager field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`)
VALUES (NULL, 'mdProject.Qty', 'Qty', 'الكمية', 'Project Qty field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Unit Price', 'Unit Price', 'سعر الوحدة', 'Project Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Amount', 'Amount', 'كمية', 'Project Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Updated By', 'Updated By', 'تم التحديث بواسطة', 'Project Updated By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Action', 'Action', 'فعل', 'Project Action field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdProject.Net Amount', 'Net Amount', 'كمية الشبكة', 'Project Net Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Reference', 'Reference', 'مرجع', 'Project Reference field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Customer', 'Customer', 'عميل', 'Project Customer field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Date', 'Date', 'تاريخ', 'Project Jop order Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Job Order Title', 'Job Order Title', 'عنوان أمر الوظيفة', 'Project Job Order Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Job Order No', 'Job Order No', 'رقم أمر العمل', 'Project Job Order No', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Unit', 'Unit', 'وحدة', 'Project Material Unit field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdProject.Remarks', 'Remarks', 'ملاحظات', 'Project Material Remarks field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(21/03/2024 Project(Project Creates field))**************************************
ALTER TABLE `project` ADD `title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `title`;
ALTER TABLE `project` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `description`;
ALTER TABLE `project` ADD `start_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `start_date`;
ALTER TABLE `project` ADD `estimated_finish_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `estimated_finish_date`;
ALTER TABLE `project` ADD `actual_finish_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `actual_finish_date`;
ALTER TABLE `project` ADD `project_value_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `project_value`;
ALTER TABLE `project` ADD `notes_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `notes`;
ALTER TABLE `project` ADD `project_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `project_code`;
ALTER TABLE `project` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;
ALTER TABLE `project` ADD `category_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `category`;
ALTER TABLE `project` ADD `quote_ref_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `quote_ref`;
ALTER TABLE `project` ADD `client_type_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `client_type`;
ALTER TABLE `project` ADD `created_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `created_by`;
ALTER TABLE `project` ADD `enquiry_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `enquiry_date`;
ALTER TABLE `project` ADD `modified_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `modified_by`;
ALTER TABLE `project` ADD `currency_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `currency`;
ALTER TABLE `project` ADD `payment_terms_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `payment_terms`;


********************************(21/03/2024 Translation(Jop Order inserts field))**************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJobOrder.Net Total', 'Net Total', 'صافي المجموع', 'JopOrder Net Total field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Status', 'Status', 'حالة', 'jo[p order Status field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Reference', 'Reference', 'مرجع', 'jop order Reference field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Contact', 'Contact', 'اتصال', 'jop order Contact  field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Customer', 'Customer', 'عميل', 'joporder Customer field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Date', 'Date', 'تاريخ', ' jop order Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Job Title', 'Job Title', 'مسمى وظيفي', 'Jop Order Job Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Job Number', 'Job Number', 'رقم الوظيفة', 'Jop Order Job Number field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdJobOrder.Titles', 'Title', 'عنوان', 'Jop order Title field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Description', 'Description', 'وصف', 'jop order Description field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Qty', 'Qty', 'الكمية', 'jop order Qty field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Unit Price', 'Unit Price', 'سعر الوحدة', 'Jop order Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Amount', 'Amount', 'كمية', 'joporder Amount field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'dJobOrder.Updated By', 'Updated By', 'تم التحديث بواسطة', 'joporder Updated By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Action', 'Action', 'فعل', 'joporder Action field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Unit', 'Unit', 'وحدة', 'jopoder Unit field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdJobOrder.Remarks', 'Remarks', 'ملاحظات', 'joporder Remarks field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`)
 VALUES (NULL, 'mdJobOrder.Updated By', 'Updated By', 'تم التحديث بواسطة', 'job order Updated By field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(21/03/2024 project_job(Job order Creates field))**************************************

ALTER TABLE `project_job` ADD `job_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `job_title`;
ALTER TABLE `project_job` ADD `job_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `job_code`;
ALTER TABLE `project_job` ADD `job_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `job_date`;
ALTER TABLE `project_job` ADD `job_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `job_status`;
ALTER TABLE `project_job` ADD `ref_no_job_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `ref_no_job`;

********************************(21/03/2024 Translation(material issue inserts field))*************************************


INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`)
 VALUES (NULL, 'mdMaterialIssue.Project Name', 'Project Name', 'اسم المشروع', 'Material issue Project Name field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdMaterialIssue.Code', 'Code', 'شفرة', 'Material issue Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdMaterialIssue.Issue Date', 'Issue Date', 'تاريخ الإصدار', 'material issue Issue Date field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdMaterialIssue.Reason For Issue', 'Reason For Issue', 'سبب المشكلة', 'material issue Reason For Issue', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdMaterialIssue.Authorized By', 'Authorized By', 'مفوض من', 'material issue Authorized By field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdMaterialIssue.Notes', 'Notes', 'ملحوظات', 'material issue Notes field', NULL, NULL, NULL, NULL, NULL, '0');

********************************(21/03/2024 material_issue(material issue Creates field))**************************************

ALTER TABLE `material_issue` ADD `material_issue_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `material_issue_date`;
ALTER TABLE `material_issue` ADD `reason_for_issue_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `reason_for_issue`;
ALTER TABLE `material_issue` ADD `authorized_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `authorized_by`;
ALTER TABLE `material_issue` ADD `notes_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `notes`;