param([string]$applicationDeploymentLocation,[string]$applicationDeploymentInstructions,[string]$clientName,[string]$clientVersion,[string]$clientBuild,[string]$clientStorageLocation) 

echo "========================================================================"
echo "DEPLOYING CONTAINER"
echo "========================================================================"

cd wwwroot\packages\frontend\kubernetes\helm\charts\development

$clientVersionTransformed = $clientVersion.Replace(".","-")
$deploymentName = $($clientName) + "-" + $($clientVersionTransformed) + "-" + $($clientBuild)

echo $clientStorageLocation
echo $clientVersion
echo $clientVersionTransformed
echo $clientBuild

echo "Deploying the package named..."
echo $deploymentName

kubectl config use-context $($applicationDeploymentLocation)

helm install --name $deploymentName -f $applicationDeploymentInstructions . --set release.version=${clientVersion}.${clientBuild} --set image.repository=$clientStorageLocation --set image.name=${clientName} --set image.tag=${clientVersion}.${clientBuild} 

cd..
cd..
cd..
cd..
cd..
cd..
cd..