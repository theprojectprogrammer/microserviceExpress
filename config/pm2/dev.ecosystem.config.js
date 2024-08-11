const name = require('../../package.json').name;
module.exports = {
    apps: [
        {
            name: name,
            script: 'src/app.js',
            watch: ['src'],
            ignore_watch: ['node_modules'],
            max_restarts: 3,
            min_uptime: 10 * 1000,
            restart_delay: 3000,
            instaces: 2,
            autorestart: true,
            watch: true,
            max_memory_restart: '1024M', 
            log_date_format: 'YYYY-MM-DD HH:mm Z',
            log_file: 'logs/nodejs/pm2_log_file.log',
            error_file: 'logs/nodejs/pm2_error_file.log',
            out_file: 'logs/nodejs/pm2_out_file.log'
        }
    ]
};