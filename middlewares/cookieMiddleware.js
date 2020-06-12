let cookies = {
    rememberColour: function (req, res, next) {
        
        if (req.cookies.recordarColor != undefined && req.session.colourPicked == undefined) {
            req.session.colourPicked = req.cookies.recordarColor;
        }
        
        next();
    }
}

module.exports = cookies;