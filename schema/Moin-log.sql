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


