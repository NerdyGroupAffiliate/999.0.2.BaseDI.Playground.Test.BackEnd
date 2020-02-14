param([string]$appName) 

echo "========================================================================"
echo "VALIDATING APPLICATION"
echo "========================================================================"

$appName = $appName.Replace("-east", "")
$appName = $appName.Replace("-central", "")

$namespace = $appName
$namespaceTransformed = $namespace.Replace("-data", "")

echo $appName

$ATTEMPTCOUNTER = 1
$RELEASE_POD_READY = (kubectl get pods -l app=$appName --namespace $namespaceTransformed --field-selector=status.phase==Running -o jsonpath="{.items}")
$RELEASE_POD_CHECKED_STATUS = "failed" 

echo "APPLICATION CHECK CURRENTLY SET TO 25 MINUTES BEFORE TIMEOUT"

Do 
{ 
    $MESSAGE = "Checking If Application is Ready Attempt " + $ATTEMPTCOUNTER  

	echo $MESSAGE

    $RELEASE_POD_READY = (kubectl get pods -l app=$appName --namespace $namespace --field-selector=status.phase==Running -o jsonpath="{.items}") 
    
	if ($RELEASE_POD_READY -ne '[]')
	{
	   $RELEASE_POD_CHECKED_STATUS = "passed"

	   break
	}

	Start-Sleep -Seconds 10 

	$ATTEMPTCOUNTER ++
} 
While($ATTEMPTCOUNTER -ne 150)

if($RELEASE_POD_CHECKED_STATUS -ne "passed")
{
	echo "WARNING!!! THE APPLICATION CANNOT START AFTER 25 MINUTES OF TRYING...PLEASE USE KUBECTL TO INVESTIGATE"

	exit 1
}

echo "Giving application 15 extra seconds to initialize"

Start-Sleep -Seconds 15 

echo "Application is now ready"
