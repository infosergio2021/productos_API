const Product = require('../models/producto');

module.exports = {
    list: function (req,res) {
        Product.find({},(err,productos)=>{
            if (err){ res.status(400).json({message:err.message}); }
            res.status(200).json({productos:productos});
        });
    },
    create: function (req,res) {
        let producto = new Product({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            cantidad: req.body.cantidad
        });

        producto.save((err) =>{
            if(err){ res.status(400).json({message: err.message}); }
            res.status(200).json({producto: producto});
        });
        
    },
    update: function (req,res) {
        //cargamos los datos del formulario
        unProducto = {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                cantidad: req.body.cantidad
        }
        // buscamos y actualizamos
        Product.findByIdAndUpdate( req.params.id, unProducto, ( err,result ) => {
                    if(err){ res.status(400).json({message: err.message}); }
                    res.status(200).json({producto: result});
                });
    },
    details: function (req,res) {
        Product.findById(req.params.id ,(err,result)=>{
            if(err){ res.status(400).json({message: err.message}); }
            res.status(200).json({producto: result});
        });
    },
    delete: function (req,res) {
        Product.findByIdAndDelete(req.params.id, (err) => {
            if(err){ res.status(400).json({message: err.message}) }
            else {
                res.status(200).json({ producto: 'se ha borrado exitosamente' })
            }
        });
    }
}


