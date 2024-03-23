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

********************************(22/03/2024 Translation(Subcon inserts field))*************************************

INSERT INTO `translation`
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdSubcon.Postal Code', 'Postal Code', 'رمز بريدي', 'Subcon Postal Code field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdSubcon.Name', 'Name', 'اسم', 'Suncon Name field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdSubcon.Email', 'Email', 'بريد إلكتروني', 'subcon Email field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdSubcon.Fax', 'Fax', 'فاكس', 'subcon Fax field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdSubcon.Mobile', 'Mobile', 'متحرك', 'subcon Mobile field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdSubcon.Status', 'Status', NULL, 'حالة', 'Subcon Status field', NULL, NULL, NULL, NULL, '0'), (NULL, 'mdSubcon.Address 1', 'Address 1', 'العنوان 1', 'subcon Address 1 field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdSubcon.Address 2', 'Address 2', 'العنوان 2', 'subcon Address 2 field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdSubcon.Country', 'Country', 'دولة', 'subcon Country field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdSubcon.Postal Code', 'Postal Code', 'رمز بريدي', 'subcon Postal Code field', NULL, NULL, NULL, NULL, NULL, '0')


********************************(22/03/2024 subcon(subcon Creates field))**************************************

ALTER TABLE `sub_con` ADD `email_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `email`;
ALTER TABLE `sub_con` ADD `address_street_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_street`;
ALTER TABLE `sub_con` ADD `address_town_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_town`;
ALTER TABLE `sub_con` ADD `address_state_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_state`;
ALTER TABLE `sub_con` ADD `phone_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `phone`;
ALTER TABLE `sub_con` ADD `fax_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `fax`;
ALTER TABLE `sub_con` ADD `mobile_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `mobile`;
ALTER TABLE `sub_con` ADD `address_flat_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `address_flat`;
ALTER TABLE `sub_con` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;
ALTER TABLE `sub_con` ADD `website_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `website`;
ALTER TABLE `sub_con` ADD `category_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `category`;
ALTER TABLE `sub_con` ADD `company_name_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `company_name`;


********************************(22/03/2024 Translation(Project Task inserts field))*************************************
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdProjectTask.Task Title', 'Task Title', 'عنوان المهمة', 'Project Task Task Title field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.Job Order Title', 'Job Order Title', 'عنوان أمر الوظيفة', 'project task Job Order Title field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.Job Order Code', 'Job Order Code', 'رمز طلب الوظيفة', 'project task Job Order Code field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.Project Name', 'Project Name', 'اسم المشروع', 'Project task Project Name field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.Staff Name', 'Staff Name', 'اسم الموظفين', 'Project task Staff Name field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.Start Date', 'Start Date', 'تاريخ البدء', 'project task Start Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.End Date', 'End Date', 'تاريخ الانتهاء', 'project task End Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.Actual Comp Date', 'Actual Comp Date', 'تاريخ الشركات الفعلي', 'Project task Actual Comp Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.Status', 'Status', 'حالة', 'Project task Status field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.Task Type', 'Task Type', 'نوع المهمة', 'Project task Task Type field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.Priority', 'Priority', 'أولوية', 'Project task Priority field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdProjectTask.Completion', 'Completion', 'انتهاء', 'Project task Completion field', NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` (
    `translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdProjectTask.Actual Hours', 'Actual Hours', 'الساعات الفعلية', 'Project Task Actual Hours field', NULL, NULL, NULL, NULL, NULL, '0');
INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
(NULL, 'mdProjectTask.Estimated Hours', 'Estimated Hours', 'الساعات المقدرة', 'Projec Task Estimated Hours field', NULL, NULL, NULL, NULL, NULL, '0');
********************************(22/03/2024 project_task(project_task Creates field))**************************************

ALTER TABLE `project_task` ADD `start_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `start_date`;
ALTER TABLE `project_task` ADD `end_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `end_date`;
ALTER TABLE `project_task` ADD `completion_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `completion`;
ALTER TABLE `project_task` ADD `task_title_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `task_title`;
ALTER TABLE `project_task` ADD `status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `status`;
ALTER TABLE `project_task` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `description`;
ALTER TABLE `project_task` ADD `estimated_hours_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `estimated_hours`;
ALTER TABLE `project_task` ADD `actual_hours_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `actual_hours`;
ALTER TABLE `project_task` ADD `actual_completed_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `actual_completed_date`;
ALTER TABLE `project_task` ADD `task_type_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `task_type`;
ALTER TABLE `project_task` ADD `priority_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `priority`;


********************************(23/03/2024 Translation(Material request inserts field))*************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES
(NULL, 'mdMaterialRequest.Action', 'Action', 'فعل', 'Material Request Action field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdMaterialRequest.Updated By', 'Updated By', 'تم التحديث بواسطة', 'Material Request Updated By field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdMaterialRequest.Amount', 'Amount', 'كمية', 'Material Request Amount field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdMaterialRequest.Unit Price', 'Unit Price', 'سعر الوحدة', 'Material Request Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Qty', 'Qty', 'الكمية', 'Material Request Qty field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Supplier', 'Supplier', 'المورد', 'Material Request Supplier field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Brand', 'Brand', 'ماركة', 'Material Request Brand field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Description', 'Description', 'وصف', 'Material Request Description field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Approved Date', 'Approved Date', 'تاريخ الموافقة', 'Material Request Approved Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Approved By', 'Approved By', 'تمت الموافقة عليه من قبل', 'Material Request Approved By field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Request By', 'Request By', 'الطلب بواسطة', 'Material Request Request By field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Material Request Date', 'Material Request Date', 'تاريخ الطلب', 'Material Request Material Request Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Status', 'Status', 'حالة', 'Material Request Status field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Payment Terms', 'Payment Terms', 'شروط الدفع', 'Material Request Payment Terms field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Date', 'Date', 'تاريخ', 'Material Request Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdMaterialRequest.Request Code', 'Request Code', 'كود الطلب', 'Material Request Request Code field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO 
`translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdMaterialRequest.Shipping Method', 'Shipping Method', 'طريقة الشحن', 'Material Request Shipping Method field', NULL, NULL, NULL, NULL, NULL, '0'), (NULL, 'mdMaterialRequest.Site Reference', 'Site Reference', 'مرجع الموقع', 'Material Request Site Reference field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES
 (NULL, 'mdMaterialRequest.Title', 'Title', 'عنوان', 'Material Request Title field', NULL, NULL, NULL, NULL, NULL, '0'),
 (NULL, 'mdMaterialRequest.Remarks', 'Remarks', 'ملاحظات', 'Material Request Remarks field', NULL, NULL, NULL, NULL, NULL, '0'),
 (NULL, 'mdMaterialRequest.Unit', 'Unit', 'وحدة', 'Material Request Unit field', NULL, NULL, NULL, NULL, NULL, '0');

 INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
 VALUES 
 (NULL, 'mdMaterialRequest.Project Name', 'Project Name', 'اسم المشروع', 'Material Request Project Name field', NULL, NULL, NULL, NULL, NULL, '0');


********************************(23/03/2024 material_request(material_request Creates field))**************************************

ALTER TABLE `material_request` ADD `material_request_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `material_request_code`;
ALTER TABLE `material_request` ADD `material_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `material_status`;
ALTER TABLE `material_request` ADD `material_request_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `material_request_date`;
ALTER TABLE `material_request` ADD `request_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `request_date`;
ALTER TABLE `material_request` ADD `site_reference_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `site_reference`;
ALTER TABLE `material_request` ADD `request_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `request_by`;
ALTER TABLE `material_request` ADD `approved_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `approved_by`;
ALTER TABLE `material_request` ADD `approved_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `approved_date`;
ALTER TABLE `material_request` ADD `shipping_method_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `shipping_method`;
ALTER TABLE `material_request` ADD `payment_terms_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `payment_terms`;
ALTER TABLE `material_request` ADD `delivery_terms_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `delivery_terms`;

********************************(23/03/2024 Translation(Equipment request inserts field))*************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES
(NULL, 'mdEquipmentRequest.Action', 'Action', 'فعل', 'Equipment Request Action field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdEquipmentRequest.Updated By', 'Updated By', 'تم التحديث بواسطة', 'Equipment Request Updated By field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdEquipmentRequest.Amount', 'Amount', 'كمية', 'Equipment Request Amount field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdEquipmentRequest.Unit Price', 'Unit Price', 'سعر الوحدة', 'Equipment Request Unit Price field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Qty', 'Qty', 'الكمية', 'Equipment Request Qty field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Supplier', 'Supplier', 'المورد', 'Equipment Request Supplier field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Brand', 'Brand', 'ماركة', 'Equipment Request Brand field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Description', 'Description', 'وصف', 'Equipment Request Description field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Approved Date', 'Approved Date', 'تاريخ الموافقة', 'Equipment Request Approved Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Approved By', 'Approved By', 'تمت الموافقة عليه من قبل', 'Equipment Request Approved By field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Request By', 'Request By', 'الطلب بواسطة', 'Equipment Request Request By field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Equipment Request Date', 'Equipment Request Date', 'تاريخ طلب المعدات', 'Equipment Request Equipment Request Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Status', 'Status', 'حالة', 'Equipment Request Status field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Payment Terms', 'Payment Terms', 'شروط الدفع', 'Equipment Request Payment Terms field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Date', 'Date', 'تاريخ', 'Equipment Request Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Request Code', 'Request Code', 'كود الطلب', 'Equipment Request Request Code field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO 
`translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES (NULL, 'mdEquipmentRequest.Shipping Method', 'Shipping Method', 'طريقة الشحن', 'Equipment Request Shipping Method field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdEquipmentRequest.Site Reference', 'Site Reference', 'مرجع الموقع', 'Equipment Request Site Reference field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES
 (NULL, 'mdEquipmentRequest.Title', 'Title', 'عنوان', 'Material Request Title field', NULL, NULL, NULL, NULL, NULL, '0'),
 (NULL, 'mdEquipmentRequest.Remarks', 'Remarks', 'ملاحظات', 'Material Request Remarks field', NULL, NULL, NULL, NULL, NULL, '0'),
 (NULL, 'mdEquipmentRequest.Unit', 'Unit', 'وحدة', 'Material Request Unit field', NULL, NULL, NULL, NULL, NULL, '0');

INSERT INTO `translation` (`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
 VALUES 
 (NULL, 'mdEquipmentRequest.Project Name', 'Project Name', 'اسم المشروع', 'Material Request Project Name field', NULL, NULL, NULL, NULL, NULL, '0'); 

********************************(23/03/2024 equipment_request(equipment_request Creates field))**************************************


 ALTER TABLE `equipment_request` ADD `equipment_request_code_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `equipment_request_code`;
ALTER TABLE `equipment_request` ADD `equipment_status_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `equipment_status`;
ALTER TABLE `equipment_request` ADD `equipment_request_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `equipment_request_date`;
ALTER TABLE `equipment_request` ADD `request_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `request_date`;
ALTER TABLE `equipment_request` ADD `site_reference_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `site_reference`;
ALTER TABLE `equipment_request` ADD `request_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `request_by`;
ALTER TABLE `equipment_request` ADD `approved_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `approved_by`;
ALTER TABLE `equipment_request` ADD `approved_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `approved_date`;
ALTER TABLE `equipment_request` ADD `shipping_method_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `shipping_method`;
ALTER TABLE `equipment_request` ADD `payment_terms_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `payment_terms`;
ALTER TABLE `equipment_request` ADD `delivery_terms_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `delivery_terms`;

********************************(23/03/2024 Translation(Labour request inserts field))*************************************

INSERT INTO `translation` 
(`translation_id`, `key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES
(NULL, 'mdLabourRequest.Code', 'Code', 'فعل', 'Labour Request Code field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdLabourRequest.Request Date', 'Request Date', 'تم التحديث بواسطة', 'Labour Request Request Date field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdLabourRequest.Project Name', 'Project Name', 'كمية', 'Labour Request Project Name field', NULL, NULL, NULL, NULL, NULL, '0'),
(NULL, 'mdLabourRequest.Start Date', 'Start Date', 'سعر الوحدة', 'Labour Request Start Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdLabourRequest.No Of Employee', 'No Of Employee', 'الكمية', 'Labour Request No Of Employee field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdLabourRequest.Job Description', 'Job Description', 'المورد', 'Labour Request Job Description field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdLabourRequest.End Date', 'End Date', 'ماركة', 'Labour Request End Date field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdLabourRequest.Request By', 'Request By', 'وصف', 'Labour Request Request By field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdLabourRequest.Request Urgency', 'Request Urgency', 'تاريخ الموافقة', 'Labour Request Request Urgency field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdLabourRequest.Request Type', 'Request Type', 'تمت الموافقة عليه من قبل', 'Labour Request Request Type field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdLabourRequest.Skills Required', 'Skills Required', 'الطلب بواسطة', 'Labour Request Skills Required field', NULL, NULL, NULL, NULL, NULL, '0'), 
(NULL, 'mdLabourRequest.Department', 'Department', 'تاريخ طلب المعدات', 'Labour Request Department field', NULL, NULL, NULL, NULL, NULL, '0'); 

********************************(23/03/2024 labour_request(labour_request Creates field))**************************************

 ALTER TABLE `labour_request` ADD `request_by_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `request_by`;
ALTER TABLE `labour_request` ADD `request_urgency_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `request_urgency`;
ALTER TABLE `labour_request` ADD `request_type_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `request_type`;
ALTER TABLE `labour_request` ADD `job_description_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `job_description`;
ALTER TABLE `labour_request` ADD `skills_required_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `skills_required`;
ALTER TABLE `labour_request` ADD `no_of_employees_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `no_of_employees`;
ALTER TABLE `labour_request` ADD `department_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `department`;
ALTER TABLE `labour_request` ADD `request_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `request_date`;
ALTER TABLE `labour_request` ADD `request_start_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `request_start_date`;
ALTER TABLE `labour_request` ADD `request_end_date_arb` VARCHAR(255) NULL DEFAULT NULL AFTER `request_end_date`;

