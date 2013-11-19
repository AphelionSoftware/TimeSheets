CREATE FUNCTION fn_GetDateFromFilename 
(
	-- Add the parameters for the function here
	@Filename varchar(255)
)
RETURNS Date
AS
BEGIN
	DECLARE  @DateName varchar(255)

, @Date date
SET @DateName = SUBSTRING(@Filename, charindex('_',@Filename ) + 1, 8  )
IF ISNUMERIC(@DateName) = 1 
	SET @Date = CONVERT(date, @DateName, 114)
ELSE 
	SET @Date = '1900/01/01'
	RETURN @date

END