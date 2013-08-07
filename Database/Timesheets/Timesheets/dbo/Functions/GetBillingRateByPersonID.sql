CREATE FUNCTION [dbo].[GetBillingRateByPersonID]
(
	@BillingDetailPersonID int,
	@BillingDetailClientID int
)
RETURNS TABLE 
AS
RETURN 
(
	SELECT
		x.BillingDetailPersonID AS PersonID,
		x.BillingDetailClientID AS ClientID,
		x.StartDate,
		COALESCE(DATEADD(dd,-1,x.NextStartDate),'99991231') AS EndDate,
		x.rate
	FROM
	(
		SELECT 				
			RBD.BillingDetailPersonID,
			RBD.BillingDetailClientID,
			CONVERT(DATE, CAST(rBD.BillingDetailDateID AS CHAR(8)),112) AS StartDate,
			LEAD(CONVERT(DATE,CAST(rBD.BillingDetailDateID AS CHAR(8)),112),1) OVER 
			(
				ORDER BY 
					rBD.BillingDetailDateID
			)  AS NextStartDate,
			rBD.Rate,
			RBD.Active
		FROM dbo.BillingDetail AS rBD
		WHERE 
			rbd.BillingDetailPersonID = @BillingDetailPersonID
			AND rbd.BillingDetailClientID = @BillingDetailClientID
			AND rbD.Active = 1
	) AS x
);

GO



