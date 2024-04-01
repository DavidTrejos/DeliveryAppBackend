const User = require ('../models/user');

module.exports = {
    register(req,res){
        const user = req.body; //Capture the data of the client
        User.create(user,(err,data) => {

            if(err){
                console.log("ERr")
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({

                    success: true,
                    message: 'Registro éxitoso',
                    data: data //New user ID
            });
        });
    }
}