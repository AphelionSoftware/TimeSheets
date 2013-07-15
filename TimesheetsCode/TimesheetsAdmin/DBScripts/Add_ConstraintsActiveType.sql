
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


ALTER TABLE dbo.BillingDetail ADD CONSTRAINT
	FK_BillingDetail_ActiveType FOREIGN KEY
	(
	Active
	) REFERENCES dbo.ActiveType
	(
	ID
	)
	GO 
	


ALTER TABLE dbo.Person ADD CONSTRAINT
	FK_Person_ActiveType FOREIGN KEY
	(
	Active
	) REFERENCES dbo.ActiveType
	(
	ID
	)
	GO 
	


ALTER TABLE dbo.TimesheetDetail ADD CONSTRAINT
	FK_TimesheetDetail_ActiveType FOREIGN KEY
	(
	Active
	) REFERENCES dbo.ActiveType
	(
	ID
	)
	GO 
	


ALTER TABLE dbo.OverallStatus ADD CONSTRAINT
	FK_OverallStatus_ActiveType FOREIGN KEY
	(
	Active
	) REFERENCES dbo.ActiveType
	(
	ID
	)
	GO 
	


ALTER TABLE dbo.Client ADD CONSTRAINT
	FK_Client_ActiveType FOREIGN KEY
	(
	Active
	) REFERENCES dbo.ActiveType
	(
	ID
	)
	GO 
	


ALTER TABLE dbo.BillingStatus ADD CONSTRAINT
	FK_BillingStatus_ActiveType FOREIGN KEY
	(
	Active
	) REFERENCES dbo.ActiveType
	(
	ID
	)
	GO 
	


ALTER TABLE dbo.TypeOfWork ADD CONSTRAINT
	FK_TypeOfWork_ActiveType FOREIGN KEY
	(
	Active
	) REFERENCES dbo.ActiveType
	(
	ID
	)
	GO 
	


ALTER TABLE dbo.Project ADD CONSTRAINT
	FK_Project_ActiveType FOREIGN KEY
	(
	Active
	) REFERENCES dbo.ActiveType
	(
	ID
	)
	GO 
	


ALTER TABLE dbo.Timesheet ADD CONSTRAINT
	FK_Timesheet_ActiveType FOREIGN KEY
	(
	Active
	) REFERENCES dbo.ActiveType
	(
	ID
	)
	GO 
	