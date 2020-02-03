//mock the moment library here, which can be used in tests


//require the original module, not the mocked one created below
const moment = require.requireActual('moment');

export default (timestamp = 0) => { //this function will be called in tests instead of the real moment moment
    return moment(timestamp); //mock the moment return
};
