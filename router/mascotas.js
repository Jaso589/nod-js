const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: 'jddd', nombre: 'rex', descripcion: 'rex desc'},
            {id: 'jaaa', nombre: 'toby', descripcion: 'sac desc'},
        ]
    })
})

module.exports = router;