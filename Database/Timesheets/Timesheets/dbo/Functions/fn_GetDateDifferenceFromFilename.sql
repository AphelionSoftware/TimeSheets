CREATE FUNCTION fn_GetDateDifferenceFromFilename 
(
	-- Add the parameters for the function here
	@Filename varchar(255)
	,@DateID int
)
RETURNS INT
AS
BEGIN
	DECLARE  @DateName varchar(255)
, @Date date
,@TimesheetDate date
SET @DateName = SUBSTRING(@Filename, charindex('_',@Filename ) + 1, 8  )
IF ISNUMERIC(@DateName) = 1 
	SET @Date = CONVERT(date, @DateName, 114)
ELSE 
	SET @Date = '1900/01/01'

SET @TimesheetDate = CONVERT(date, cast(@DateID as varchar(10)), 112)

RETURN DateDiff(DAY, @Date, @TimesheetDate)

END