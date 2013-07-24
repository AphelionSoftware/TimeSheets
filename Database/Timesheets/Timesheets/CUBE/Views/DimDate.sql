








CREATE VIEW [CUBE].[DimDate]
as
SELECT 

ContractorYear = CASE WHEN Day(date) > 15 THEN		
				Year(DateAdd(month, 1,Date)) 
				ELSE Year(Date)
				END,
ContractorMonth = CASE WHEN Day(date) > 15 THEN		
				Month(DateAdd(month, 1,Date)) 
				ELSE MONTH(Date)
				END,

ContractorPeriod = CASE WHEN Day(date) > 15 THEN		
				'CP' + CAST(Year(DateAdd(month, 1,Date))  as char(4)) + ' - ' + RIGHT('0'+CAST(Month(DateAdd(month, 1,Date))  as varchar(2)),2)
				else
				'CP' + CAST(Year(Date)  as char(4)) + ' - ' + RIGHT('0'+CAST(Month(Date)  as varchar(2)),2)
				END
	,BillingYear =  CAST(  CASE WHEN Month(DateAdd(d, 7, date)) = Month(Date) 
					THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 6 AND  Year(DateAdd(d, 6, date)) = Year(Date) --Friday, add 6 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 7 AND  Year(DateAdd(d, 5, date)) = Year(Date) --Saturday, add 5 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 1 AND  Year(DateAdd(d, 4, date)) = Year(Date) --Sunday, add 4 days THEN Year(Date)
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 2 AND  Year(DateAdd(d, 3, date)) = Year(Date) --Monday, add 3 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 3 AND  Year(DateAdd(d, 2, date)) = Year(Date) --Tuesday, add 2 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 4 AND  Year(DateAdd(d, 1, date)) = Year(Date) --Wednesday, add 1 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 5 --Thursday, always part of period
						THEN Year(Date)
					ELSE Year(DateAdd(month,1, date))
					END
					as varchar(4))
	  ,WeekEndingBillingPeriod = 
	   CAST(  CASE WHEN Month(DateAdd(d, 7, date)) = Month(Date) 
					THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 6 AND  Year(DateAdd(d, 6, date)) = Year(Date) --Friday, add 6 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 7 AND  Year(DateAdd(d, 5, date)) = Year(Date) --Saturday, add 5 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 1 AND  Year(DateAdd(d, 4, date)) = Year(Date) --Sunday, add 4 days THEN Year(Date)
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 2 AND  Year(DateAdd(d, 3, date)) = Year(Date) --Monday, add 3 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 3 AND  Year(DateAdd(d, 2, date)) = Year(Date) --Tuesday, add 2 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 4 AND  Year(DateAdd(d, 1, date)) = Year(Date) --Wednesday, add 1 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 5 --Thursday, always part of period
						THEN Year(Date)
					ELSE Year(DateAdd(month,1, date))
					END
					as varchar(4))
					 + ' - ' + 
	  RIGHT('0' + CAST(  CASE WHEN Month(DateAdd(d, 7, date)) = Month(Date) 
					THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 6 AND  Month(DateAdd(d, 6, date)) = Month(Date) --Friday, add 6 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 7 AND  Month(DateAdd(d, 5, date)) = Month(Date) --Saturday, add 5 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 1 AND  Month(DateAdd(d, 4, date)) = Month(Date) --Sunday, add 4 days THEN MOnth(Date)
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 2 AND  Month(DateAdd(d, 3, date)) = Month(Date) --Monday, add 3 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 3 AND  Month(DateAdd(d, 2, date)) = Month(Date) --Tuesday, add 2 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 4 AND  Month(DateAdd(d, 1, date)) = Month(Date) --Wednesday, add 1 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 5 --Thursday, always part of period
						THEN Month(Date)
					
					ELSE Month(DateAdd(month,1, date))
					END
					as varchar(4))
					,2)
					+ ' ' +
					 Convert(varchar(10), CASE WHEN DayOfWeek = 'Sunday' THEN Date ELSE DATEADD(day, (DatePart(Weekday, date)-1) * -1, DateAdd(week, 1, Date) ) END,111)
		

		-----
, BillingPeriodText = 
	   CAST(  CASE WHEN Month(DateAdd(d, 7, date)) = Month(Date) 
					THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 6 AND  Year(DateAdd(d, 6, date)) = Year(Date) --Friday, add 6 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 7 AND  Year(DateAdd(d, 5, date)) = Year(Date) --Saturday, add 5 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 1 AND  Year(DateAdd(d, 4, date)) = Year(Date) --Sunday, add 4 days THEN Year(Date)
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 2 AND  Year(DateAdd(d, 3, date)) = Year(Date) --Monday, add 3 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 3 AND  Year(DateAdd(d, 2, date)) = Year(Date) --Tuesday, add 2 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 4 AND  Year(DateAdd(d, 1, date)) = Year(Date) --Wednesday, add 1 days
						THEN Year(Date)
					WHEN DATEPART(WEEKDAY, date) = 5 --Thursday, always part of period
						THEN Year(Date)
					ELSE Year(DateAdd(month,1, date))
					END
					as varchar(4))
					 + ' - ' + 
	  RIGHT('0' + CAST(  CASE WHEN Month(DateAdd(d, 7, date)) = Month(Date) 
					THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 6 AND  Month(DateAdd(d, 6, date)) = Month(Date) --Friday, add 6 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 7 AND  Month(DateAdd(d, 5, date)) = Month(Date) --Saturday, add 5 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 1 AND  Month(DateAdd(d, 4, date)) = Month(Date) --Sunday, add 4 days THEN MOnth(Date)
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 2 AND  Month(DateAdd(d, 3, date)) = Month(Date) --Monday, add 3 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 3 AND  Month(DateAdd(d, 2, date)) = Month(Date) --Tuesday, add 2 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 4 AND  Month(DateAdd(d, 1, date)) = Month(Date) --Wednesday, add 1 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 5 --Thursday, always part of period
						THEN Month(Date)
					
					ELSE Month(DateAdd(month,1, date))
					END
					as varchar(4))
					,2)

		-----
,BillingPeriod = CASE WHEN Month(DateAdd(d, 7, date)) = Month(Date) 
					THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 6 AND  Month(DateAdd(d, 6, date)) = Month(Date) --Friday, add 6 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 7 AND  Month(DateAdd(d, 5, date)) = Month(Date) --Saturday, add 5 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 1 AND  Month(DateAdd(d, 4, date)) = Month(Date) --Sunday, add 4 days THEN MOnth(Date)
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 2 AND  Month(DateAdd(d, 3, date)) = Month(Date) --Monday, add 3 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 3 AND  Month(DateAdd(d, 2, date)) = Month(Date) --Tuesday, add 2 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 4 AND  Month(DateAdd(d, 1, date)) = Month(Date) --Wednesday, add 1 days
						THEN Month(Date)
					WHEN DATEPART(WEEKDAY, date) = 5 --Thursday, always part of period
						THEN Month(Date)
					ELSE Month(DateAdd(month,1, date))
					END
	   , WeekEnding = CASE WHEN DayOfWeek = 'Sunday' THEN Date ELSE DATEADD(day, (DatePart(Weekday, date)-1) * -1, DateAdd(week, 1, Date) ) END
	  , WeekEndingText  = Convert(varchar(10), CASE WHEN DayOfWeek = 'Sunday' THEN Date ELSE DATEADD(day, (DatePart(Weekday, date)-1) * -1, DateAdd(week, 1, Date) ) END,111)

			

,[DateSK]
      ,[DateID]
      ,[Date]
      ,[Day]
      ,[DaySuffix]
      ,[DayOfWeek]
      ,[DOWInMonth]
      ,[DayOfYear]
      ,[WeekOfYear]
      ,[WeekOfMonth]
	  	  
      ,[MonthNumber]
      ,[MonthName]
	  ,MonthNameYear = left(monthname, 3) + ' - ' + yearname

      ,[Quarter]
      ,[QuarterName]
      ,[YearName]
      ,[YearNumber]
      ,[StandardDate]
      ,[IsPublicHoliday]
      ,[HolidayText]
	  , CASE WHEN NOT DatePart(dw,Date) in (1,7) AND NOT IsPublicHoliday = 1 THEN 1 ELSE 0 END WorkDay
	 
  FROM [dbo].[DimDate]