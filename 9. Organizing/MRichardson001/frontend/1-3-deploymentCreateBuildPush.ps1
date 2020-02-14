param([string]$clientStorageLocation,[string]$clientName,[string]$clientVersion,[string]$clientBuild) 

echo "========================================================================"
echo "STORING CONTAINER"
echo "========================================================================"

echo $clientStorageLocation
echo $clientName
echo $clientVersion
echo $clientBuild

docker push ${clientStorageLocation}/${clientName}:${clientVersion}.${clientBuild}

