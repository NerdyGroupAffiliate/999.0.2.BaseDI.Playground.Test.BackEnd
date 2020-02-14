param([string]$serverStorageLocation,[string]$serverName,[string]$serverVersion,[string]$serverBuild,[string]$buildDirectory) 

echo "========================================================================"
echo "CLEANING UP LOCAL CONTAINERS"
echo "========================================================================"

echo $serverStorageLocation
echo $serverName
echo $serverVersion
echo $serverBuild

docker image rm ${$serverStorageLocation}/${$serverName}:${$serverVersion}.${$serverBuild} --force


