param([string]$clientName, [string]$clientVersion,[string]$clientBuild)

echo "========================================================================"
echo "UPDATING APPLICATION TO NEW VERSION"
echo "========================================================================"

echo $clientName
echo $clientVersion
echo $clientBuild

$namespace = $clientName
$namespaceTransformed = $namespace.Replace("-east", "")
$namespaceTransformed = $namespaceTransformed.Replace("-central", "")
$namespaceTransformed = $namespaceTransformed.Replace("-data", "")

echo "Updating service namespace"
echo $namespace

$serviceName = $clientName
$serviceName = $serviceName.Replace("-east", "")
$serviceName = $serviceName.Replace("-central", "")

$serviceVersion = ${clientVersion} + "." + ${clientBuild}

echo "Updating to service version"
echo $serviceVersion

echo "Updating service to new pod version"

$sv = '{\"spec\": {\"selector\": {\"version\":\"versionReplace\"}}}'
$sv = $sv.Replace("versionReplace", $serviceVersion)

kubectl patch service $serviceName  --namespace $namespaceTransformed --patch $sv