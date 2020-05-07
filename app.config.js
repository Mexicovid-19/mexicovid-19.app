module.exports = {
    apps : [{
      name        : "mexicovid-19-api",
      script      : "./api/bin/www",
      watch       : true,
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
       "NODE_ENV": "production"
      }
    },
    {
      name       : "mexicovid-19-client",
      script     : "./client/server.js",
      watch       : true,
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
        "NODE_ENV": "production"
      }
    }]
  }