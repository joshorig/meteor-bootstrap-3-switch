Package.describe({
    summary: "Bootstrap 3 switch icons"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/bootstrap-switch.js'
        ,'css/bootstrap-switch.css'
    ], 'client');
});