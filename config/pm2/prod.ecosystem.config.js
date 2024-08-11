const name = require('../package.json').name;
module.exports = {
    apps: [
        {
            name: name,
            script: 'bin/www',
            watch: ['src'],
            ignore_watch: ['node_modules'],
            max_restarts: 3,
            min_uptime: 10 * 1000,
            restart_delay: 3000,
            instaces: 2,
            exec_mode: 'cluster',
            autorestart: true,
            watch: false,
            max_memory_restart: '1024M', 
            pid_file: `/log/nodejs/${name}/pm2.pid`,
            out_file: `/log/nodejs/${name}/pm2.log`,
            error_file: `/log/nodejs/${name}/pm2_err.log`
        }
    ]
};