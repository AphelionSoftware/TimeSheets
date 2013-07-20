SELECT '

ALTER TABLE dbo.' + table_name + 'ADD CONSTRAINT
	FK_' + table_name + '_ActiveType FOREIGN KEY
	(
	Active
	) REFERENCES dbo.ActiveType
	(
	ID
	)'
	FROM INFORMATION_SCHEMA.COLUMNS c
	WHERE c.COLUMN_NAME = 'Active'
	AND NOT EXISTS 
	(SELECT 1 FROM INFORMATION_SCHEMA.CHECK_CONSTRAINTS CC
	WHERE CC.CONSTRAINT_NAME = 'FK_' + table_name + '_ActiveType'
	)