param([string]$clientStorageLocation,[string]$clientName,[string]$clientVersion,[string]$clientBuild,[string]$buildDirectory) 

echo "========================================================================"
echo "CLEANING UP LOCAL CONTAINERS"
echo "========================================================================"

echo $clientStorageLocation
echo $clientName
echo $clientVersion
echo $clientBuild

docker image rm ${clientStorageLocation}/${clientName}:${clientVersion}.${clientBuild} --force

