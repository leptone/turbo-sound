module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index');
    });
    app.get('/system', (req, res) => {
        res.render('system');
    });
    app.get('/clients', (req, res) => {
        let clients = require('./data/clients');
        res.render('clients', { clients: clients });
    });
    app.get('/contact', (req, res) => {
        res.render('contact');
    });

};
