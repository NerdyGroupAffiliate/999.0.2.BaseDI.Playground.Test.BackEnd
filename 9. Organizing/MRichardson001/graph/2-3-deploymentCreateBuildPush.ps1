param([string]$serverStorageLocation,[string]$serverName,[string]$serverVersion,[string]$serverBuild) 

echo "========================================================================"
echo "STORING CONTAINER"
echo "========================================================================"

echo $serverStorageLocation
echo $serverName
echo $serverVersion
echo $serverBuild

docker push ${serverStorageLocation}/${serverName}:${serverVersion}.${serverBuild}

