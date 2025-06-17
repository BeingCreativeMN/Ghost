const {addSetting} = require('../../utils');

module.exports = addSetting({
    key: 'traffic_analytics',
    value: 'true',
    type: 'boolean',
    group: 'analytics'
});