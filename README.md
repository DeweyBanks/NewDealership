*Adding Sequelize and Sequelize/cli to application

1. npm install sequelize --save
2. npm install sequelize-cli --save

see: https://github.com/sequelize/cli

* To allow sequelize CLI initialize the project's directory *
in command line - node_modules/.bin/sequelize init
Running this command will create the folders config, migrations and models.


*allow sequelize to sync models and database before application starts the server

3. in file bin/www

var debug = require('debug')('app-name');
var app = require('../app');
var models = require("../models");

app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
  });
});

4. Use Sequelize command line tool to generate models
sequelize model:create --name User --attributes first_name:string,last_name:string,bio:text

*for help use:
sequelize help:<task-name>
help:seed:create, help:model:create














