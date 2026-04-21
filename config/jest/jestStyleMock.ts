// config/jest/jestStyleMock.js
module.exports = new Proxy({}, {
    get: function(target, key) {

        if (key === '__esModule') {
            return true;
        }

        return key;
    }
});