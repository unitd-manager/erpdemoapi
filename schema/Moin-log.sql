********************************(22/03/2024 Translation(project_equipmentIssue Insert Values))**************************************
INSERT INTO `translation` (`key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
('mdEquipmentIssue.ProjectName', 'Project Name', 'اسم المشروع', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
('mdEquipmentIssue.EquipmentCode', 'Equipment Code', 'رمز المعدات', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
('mdEquipmentIssue.IssueDate', 'Isssue Date', 'تاريخ الإصدار', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
('mdEquipmentIssue.AuthorizedBy', 'Authorized By', 'مفوض من', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
('mdEquipmentIssue.ReasonForIssue', 'Reason For Issue', 'سبب المشكلة', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
('mdEquipmentIssue.Notes', 'Notes', 'ملحوظات', NULL, NULL, NULL, NULL, NULL, NULL, '0');


ALTER TABLE `equipment_issue` ADD `reason_for_issue_arb` VARCHAR(255) NULL DEFAULT NULL;
ALTER TABLE `equipment_issue` ADD `authorized_by_arb` VARCHAR(255) NULL DEFAULT NULL;
ALTER TABLE `equipment_issue` ADD `notes_arb` VARCHAR(255) NULL DEFAULT NULL;

********************************(23/03/2024 Translation(project_changeRequest Insert Values))**************************************
INSERT INTO `translation` (`key_text`, `value`, `arb_value`, `chi_value`, `creation_date`, `modification_date`, `group_name`, `is_html_text`, `show_to_user`, `flag`) 
VALUES 
('mdChangeRequest.Title', 'Title', 'عنوان', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
('mdChangeRequest.ProjectTitle', 'Project Title', 'عنوان المشروع', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
('mdChangeRequest.SubmissionDate', 'Submission Date', 'تاريخ التقديم', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
('mdChangeRequest.ImplementationDate', 'Implementation Date', 'تاريخ التنفيذ', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
('mdChangeRequest.Description', 'Description', 'وصف', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
('mdChangeRequest.Status', 'Status', 'حالة', NULL, NULL, NULL, NULL, NULL, NULL, '0');

ALTER TABLE `change_request` ADD `change_request_title_arb` VARCHAR(255) NULL DEFAULT NULL;
ALTER TABLE `change_request` ADD `description_arb` VARCHAR(255) NULL DEFAULT NULL;
