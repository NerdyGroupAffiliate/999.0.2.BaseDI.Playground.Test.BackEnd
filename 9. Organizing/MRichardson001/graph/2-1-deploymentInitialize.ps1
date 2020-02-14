param([string]$serverVersion,[string]$serverBuild) 

echo "========================================================================"
echo "INSTALLING DEPENDENCIES"
echo "========================================================================"

$env:SKIP_PREFLIGHT_CHECK = "true"
$env:CI = "false"
$env:NODE_ENV = "production"
$env:PORT = "8000"

cd wwwroot\packages\graphql-server 

yarn install --cache-folder .yarn-cache --production=false --network-timeout=1000000

yarn build

cd..
cd..
cd..
