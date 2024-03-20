# Directory cleanup
rm -rf dist
rm -rf node_modules
rm -rf package.json
# Init the "package"
npm init -y
npm install
# Types and packages
sudo npm install -g typescript
sudo npm install @turbowarp/types
sudo npm install @turbowarp/types@git+https://github.com/TurboWarp/types-tw.git#tw
sudo npm install --save-dev ts-loader
sudo npm i webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env babel-loader rimraf
