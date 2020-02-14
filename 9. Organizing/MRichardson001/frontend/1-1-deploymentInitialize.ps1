param([string]$clientEnv, [string]$serverEnv, [string]$serverPort, [string]$clientVersion, [string]$clientBuild,  [string]$serverData, [string]$serverBlobStorageURL) 

echo "========================================================================"
echo "INSTALLING DEPENDENCIES"
echo "========================================================================"

$env:SKIP_PREFLIGHT_CHECK = "true"
$env:CI = "false"
$env:NODE_ENV = "production"
$env:PORT = "3000"

cd wwwroot\packages\frontend 

yarn install --cache-folder .yarn-cache --production=false --network-timeout=1000000

yarn run cross-env REACT_APP_ENV=$clientEnv REACT_APP_BUILD_VERSION=${clientVersion}.${clientBuild} REACT_APP_GRAPHQL_SERVER_URL=${serverData} react-scripts build
yarn run cross-env NODE_ENV=$serverEnv PORT=$serverPort SERVER_BUILD_VERSION=${clientVersion}.${clientBuild} GRAPHQL_SERVER_URL=${serverData} BLOB_STORAGE_URL=${serverBlobStorageURL} NODE_OPTIONS=--max_old_space_size=4096 webpack --config .config/webpack.server.js

cd..
cd..
cd..
