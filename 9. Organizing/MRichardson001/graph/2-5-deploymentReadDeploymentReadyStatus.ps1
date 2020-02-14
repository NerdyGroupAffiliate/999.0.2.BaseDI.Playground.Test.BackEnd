param([string]$serverName,[string]$serverVersion,[string]$serverBuild) 

echo "========================================================================"
echo "VALIDATING DEPLOYMENT - USUALLY 5 to 15 MINUTES DEPENDING ON NETWORK"
echo "========================================================================"

$serverVersionTransformed = $serverVersion.Replace(".","-")

$deploymentName = $($serverName) + "-" + $($serverVersionTransformed) + "-" + $($serverBuild)
$namespace = $serverName
$namespaceTransformed = $namespace.Replace("-data", "")
$namespaceTransformed = $namespaceTransformed.Replace("-east", "")
$namespaceTransformed = $namespaceTransformed.Replace("-central", "")

echo $serverVersion
echo $serverVersionTransformed
echo $deploymentName
echo $namespace
echo $namespaceTransformed

$ATTEMPTCOUNTER = 1
$DEPLOYMENT_READY = (kubectl get deployment $deploymentName --namespace $namespaceTransformed -o jsonpath="{.status.conditions[?(@.reason=='MinimumReplicasAvailable')].status}")
$DEPLOYMENT_CHECKED_STATUS = "failed"   

echo "Checking Deployment package named..."
echo $deploymentName

echo "DEPLOYMENT CHECK CURRENTLY SET TO 50 MINUTES BEFORE TIMEOUT"

Do 
{
    $MESSAGE = "Checking If Deployment is Ready Attempt " + $ATTEMPTCOUNTER  

    echo $MESSAGE
    
    $DEPLOYMENT_READY = (kubectl get deployment $deploymentName --namespace $namespaceTransformed -o jsonpath="{.status.conditions[?(@.reason=='MinimumReplicasAvailable')].status}")
    
	if ($DEPLOYMENT_READY -eq 'True')
	{
	   $DEPLOYMENT_CHECKED_STATUS = "passed"

	   break
	}

    Start-Sleep -Seconds 10

	$ATTEMPTCOUNTER ++
}
While($ATTEMPTCOUNTER -ne 300)

if($DEPLOYMENT_CHECKED_STATUS -ne "passed")
{
	echo "WARNING!!! DEPLOYMENT DID NOT SUCCEED AFTER 50 MINUTES OF TRYING...PLEASE USE KUBECTL TO INVESTIGATE WHY"

	exit 1
}

echo "Deployment is now ready"