param([string]$serverEnv,[string]$serverPort, [string]$clientVersion,[string]$clientBuild,[string]$serverDataAccess,[string]$serverBlobStorageURL,[string]$clientEnv,[string]$clientName,[string]$clientDomain,[string]$clientStorageLocation,[string]$applicationPackagingInstructions) 

echo "========================================================================"
echo "PACKAGING CONTAINER"
echo "========================================================================"

cd wwwroot\packages\frontend 

echo $clientName
echo $clientVersion
echo $clientBuild
echo $clientDomain
echo $clientEnv
echo $serverBlobStorageURL
echo $clientStorageLocation
echo $serverPort
echo $serverEnv
echo $applicationPackagingInstructions

docker build --no-cache --build-arg NODE_ENV=$serverEnv --build-arg PORT=$serverPort --build-arg SERVER_BUILD_VERSION=${clientVersion}.${clientBuild} --build-arg GRAPHQL_SERVER_URL=${serverDataAccess} --build-arg BLOB_STORAGE_URL=${serverBlobStorageURL} --build-arg REACT_APP_BUILD_VERSION=${clientVersion}.${clientBuild} --build-arg REACT_APP_ENV=$clientEnv --build-arg DOMAIN_NAME=$clientDomain -t ${clientStorageLocation}/${clientName}:${clientVersion}.${clientBuild} -f ${applicationPackagingInstructions} .

cd..
cd..
cd..