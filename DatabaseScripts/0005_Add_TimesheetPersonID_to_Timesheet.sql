ALTER TABLE Timesheet
ADD TimesheetPersonID INT;
GO

UPDATE Timesheet
SET TimesheetDate = TimesheetDateID
WHERE 
	CHARINDEX('_',TimesheetDate,1) > 0;
GO

UPDATE Timesheet
SET TimesheetPerson = SUBSTRING(TimesheetPerson,1,(CHARINDEX('_',TimesheetPerson,1)-1))
WHERE 
	CHARINDEX('_',TimesheetPerson,1) > 0;
GO

UPDATE Timesheet
SET TimesheetPerson = SUBSTRING(TimesheetPerson,1,(CHARINDEX('-',TimesheetPerson,1)-1))
WHERE 
	CHARINDEX('-',TimesheetPerson,1) > 0;
GO


UPDATE Timesheet
SET TimesheetPerson = 'MichaelJohnson'
WHERE
	TimesheetPerson = 'MikeJohnson';
GO

UPDATE Timesheet
SET TimesheetPerson = 'MattHorn'
WHERE
	TimesheetPerson = 'Matt';
GO


UPDATE Timesheet
SET TimesheetPerson = 'BhaveshLala'
WHERE
	TimesheetPerson = 'Bhavesh';
GO

UPDATE Timesheet
SET TimesheetPerson = 'AndrewThornton-Smith'
WHERE
	TimesheetPerson = 'AndrewThorntonSmith'
	OR TimesheetPerson = 'AndrewThornton';
GO

UPDATE ts
SET ts.TimesheetPersonID = p.PersonID
FROM TImesheet AS ts
LEFT JOIN
(
	SELECT
		PersonID,
		REPLACE(PersonName,' ','') AS TimesheetPerson
	FROM Person
) AS p ON 
	ts.TimesheetPerson = p.TimesheetPerson;
GO


DELETE FROM TimesheetDetail
WHERE TimesheetDetailName = 'N/A';
GO

DELETE FROM Timesheet
WHERE TimesheetPersonID IS NULL;
GO

ALTER TABLE Timesheet
ADD CONSTRAINT fk_TimesheetPersonID
FOREIGN KEY 
(
	TimesheetPersonID
)
REFERENCES dbo.Person
(
	PersonID
);
GO