const controller = require('app/http/controllers/controller');

class homeController extends controller {
    
    async index(req , res) {
        res.render('home/index');
    }

}

module.exports = new homeController();