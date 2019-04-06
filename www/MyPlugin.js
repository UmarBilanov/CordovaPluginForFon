module.exports = {
    runBackground: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'MyPlugin', 'runBackground', [])
    }
};
