let colourController = {

    form: function (req, res, next) {
        let colour = req.session.colourPicked;
        res.render('colour', {colour:colour});
    },
    show : function (req, res, next) {

        let colour = req.body.colours;
        req.session.colourPicked = colour;

        if (req.body.remember != undefined) {
            res.cookie("recordarColor", req.session.colourPicked, {maxAge: 60000});
        }

        res.render('colourPicked', {colour:colour});
    },
    showDos : function (req, res, next) {

        let colour = req.session.colourPicked;
        res.render('colourPicked', {colour:colour});
    }

}

module.exports = colourController