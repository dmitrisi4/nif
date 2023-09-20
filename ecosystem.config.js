const port = process.env['PM2_APP_PORT'] || 4000;

module.exports = {
  apps : [{
    name   : "nif-server",
    script : "./index.js",
    instances : "max",
    exec_mode : "cluster",
    args: 'start -H 127.0.0.1 -p ' + port,
  }]
}