CREATE PROC dbo.mntTypeofWorkUpdate
(@OldTypeID INT
,@NewTypeID varchar(255)
)
as
/*



select soundex(t1.Typeofworksourcekey), t1.Typeofworksourcekey
,
t1.typeofworkid, t2.typeofworkid
, 'exec dbo.mntTypeofWorkUpdate ' + cast(t2.typeofworkid as varchar(50)) + ',' + cast(t1.typeofworkid as varchar(50))
 from 
dbo.Typeofwork T1
inner join dbo.typeofwork t2
on soundex(t1.Typeofworksourcekey) = soundex(t2.Typeofworksourcekey)
and not t1.typeofworkid = t2.typeofworkid

*/
/*DECLARE @OldType varchar(255)
,@NewType varchar(255)


UPDATE dbo.TimesheetDetail
SET TimesheetTypeOfWorkID = NewType.TypeOfWorkID
from dbo.TimesheetDetail TD
INNER JOIN dbo.TypeOfWork OldType
ON td.TimesheetTypeOfWorkID = OldType.TypeOfWorkID
and OldType.TypeOfWorkSourceKey COLLATE Latin1_General_CS_AS = @OldType COLLATE Latin1_General_CS_AS
inner join dbo.TypeOfWork NewType
on NewType.TypeOfWorkSourceKey COLLATE Latin1_General_CS_AS = @NewType COLLATE Latin1_General_CS_AS

*/

UPDATE dbo.TimesheetDetail
SET TimesheetTypeOfWorkID = @NewTypeID
from dbo.TimesheetDetail TD
WHERE TD.TimesheetTypeOfWorkID = @OldTypeID

DELETE FROM dbo.TypeOfWork where TypeOfWorkID = @OldTypeID

--select * from dbo.TypeOfWork