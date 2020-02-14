param([string]$serverPort,[string]$serverEnv,[string]$apiEnv,[string]$apiMainAPI,[string]$apiEmailAPI,[string]$apiPricingAPI,[string]$apiRealPageAPI,[string]$apiPrismicAPI,[string]$authToken,[string]$reviewEmail,[string]$reviewPassword,[string]$serverStorageLocation,[string]$serverName,[string]$serverVersion,[string]$serverBuild,[string]$applicationPackagingInstructions) 

echo "========================================================================"
echo "PACKAGING CONTAINER"
echo "========================================================================"

cd wwwroot\packages\graphql-server  

echo $serverPort
echo $serverEnv
echo $apiEnv
echo $apiMainAPI
echo $apiEmailAPI
echo $apiPricingAPI
echo $apiRealPageAPI
echo $apiPrismicAPI
echo $authToken
echo $reviewEmail
echo $reviewPassword
echo $serverStorageLocation
echo $serverName
echo $serverVersion
echo $serverBuild
echo $applicationPackagingInstructions

docker build --no-cache  --build-arg PORT=$serverPort --build-arg NODE_ENV=$serverEnv --build-arg APP_ENV=$apiEnv --build-arg AMLI_API_URL=$apiMainAPI --build-arg AMLI_EMAIL_API=$apiEmailAPI --build-arg AMLI_PRICING_API_URL=$apiPricingAPI --build-arg AMLI_REALPAGE_API_URL=$apiRealPageAPI --build-arg PRISMIC_URL=$apiPrismicAPI --build-arg AMLI_AUTH_TOKEN=$authToken --build-arg REVIEWPUSH_EMAIL=$reviewEmail --build-arg REVIEWPUSH_PASSWORD=$reviewPassword -t ${serverStorageLocation}/${serverName}:${serverVersion}.${serverBuild} -f $applicationPackagingInstructions .

cd..
cd..
cd..