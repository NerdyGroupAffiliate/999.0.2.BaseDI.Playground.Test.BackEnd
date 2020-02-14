param([string]$serverDeploymentLocation,[string]$serverDeploymentInstructions,[string]$serverName,[string]$serverVersion,[string]$serverBuild,[string]$serverStorageLocation) 

echo "========================================================================"
echo "DEPLOYING CONTAINER"
echo "========================================================================"

cd wwwroot\packages\graphql-server\kubernetes\helm\charts\development

$serverVersionTransformed = $serverVersion.Replace(".","-")
$deploymentName = $($serverName) + "-" + $($serverVersionTransformed) + "-" + $($serverBuild)

echo $serverStorageLocation
echo $serverVersion
echo $serverVersionTransformed
echo $serverBuild

echo "Deploying the package named..."
echo $deploymentName

kubectl config use-context $($serverDeploymentLocation)

helm install --name $deploymentName -f $serverDeploymentInstructions . --set release.version=${serverVersion}.${serverBuild} --set image.name=${serverName} --set image.repository=$serverStorageLocation --set image.tag=${serverVersion}.${serverBuild} 

cd..
cd..
cd..
cd..
cd..
cd..
cd..