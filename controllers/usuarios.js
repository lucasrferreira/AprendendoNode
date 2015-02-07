module.exports = function(app){

  var UsuariosController ={
    index: function(req, res){
      res.render("usuarios/index");
    }
  }

  return UsuariosController;

}
