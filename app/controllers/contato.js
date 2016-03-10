var contatos = [
  {_id: 1, nome: 'Fulano Sicrano', email: 'fulano@empresa.com.br'},
  {_id: 2, nome: 'Beltrano de Tal', email: 'beltrano@empresa.com.br'},
  {_id: 3, nome: 'Sicrano Beltrano', email: 'sicrano@empresa.com.br'}
];

module.exports = function(app) {
  var controller = app.controllers.contato;
  controller.listaContatos = function(req, res){
    res.json(contatos);
  };
  controller.obtemContato = function(req, res){
    var idContato = req.params.id;
    var contato = contatos.filter(function(contato){
      return contato._id == idContato;
    })[0];

    contato ? res.json(contato) : res.status(404).send('contato não encontrado');
  }

  controller.removeContato = function(req, res){
    var idContato = req.params.id;
    contatos = contatos.filter(function(contato){
      return contato._id != idContato;
    });
    res.sendStatus(204).end();
    console.log('API: removeContato: ' + idContato);
  };

  app.route('/contatos/:id')
  .delete(controller.removeContato);

  return controller;
}
