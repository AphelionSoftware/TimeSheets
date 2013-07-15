INSERT INTO dbo.ActiveType
(ID, Code, Name)
SELECT -1, 'DEL', 'Deleted'
UNION 
SELECT 0, 'IN', 'Inactive'
UNION 
SELECT 1, 'ACT', 'Active'
