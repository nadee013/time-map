Package.describe({
  summary: "An algorithm that maps server time with client time"
});

Package.on_use(function (api, where) {
  api.use('livedata');

  api.add_files(['server.js'], 'server');
  api.add_files(['client.js'], 'client');

  if(api.export) {
    api.export('ServerDate');
  }
});