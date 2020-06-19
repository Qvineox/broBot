const prefix = "/";
let token = 'NzIxMzY4NzcxMzAxNzM2NDU5.XuTiqQ.0rYRR6HyR5fAOFSEEK9jOSkudUs';

//sql connection settings
var sqlConfig = {
    server: 'local',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'k155YA77'
        }
    },
    options: {
        database: 'master'
    }
}

module.exports.sqlConfig = sqlConfig;
module.exports.token = token;
module.exports.prefix = prefix;

