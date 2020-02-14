param([string]$serverName, [string]$serverVersion,[string]$serverBuild)

echo "========================================================================"
echo "UPDATING APPLICATION TO NEW VERSION"
echo "========================================================================"

$namespace = $serverName
$namespaceTransformed = $namespace.Replace("-east", "")
$namespaceTransformed = $namespaceTransformed.Replace("-central", "")
$namespaceTransformed = $namespaceTransformed.Replace("-data", "")

echo $serverName
echo $serverVersion
echo $serverBuild
echo $namespaceTransformed

$serviceName = $serverName
$serviceName = $serviceName.Replace("-east", "")
$serviceName = $serviceName.Replace("-central", "")

$serviceVersion = ${serverVersion} + "." + ${serverBuild}

echo "Updating service to new pod version"

$sv = '{\"spec\": {\"selector\": {\"version\":\"versionReplace\"}}}'
$sv = $sv.Replace("versionReplace", $serviceVersion)

kubectl patch service $serviceName  --namespace $namespaceTransformed --patch $sv