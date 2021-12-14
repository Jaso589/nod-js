const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render("index",{titulo : "mi title dinamico"} ) //antes en render era send
})
router.get('/home', (req, res) => {
    res.render('home', {tituloServicios: "este es un mensaje dinamico de servicios"})
})

router.get('/nosotros', (req, res) => {
    res.render('nosotros', {tituloServicios: "este es un mensaje dinamico de servicios"})
})

router.get('/proyectos', (req, res) => {
    res.render('proyectos', {tituloServicios: "este es un mensaje dinamico de servicios"})
})

router.get('/contacto', (req, res) => {
    res.render('contacto', {class: "modal-open"})
})
router.get('/unirse', (req, res) => {
    res.render('unirse', {body: "text-center"})
})

module.exports = router;