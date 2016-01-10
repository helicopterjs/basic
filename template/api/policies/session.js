module.exports = function (req, res, next) {
    var session = req.session;

    if (!('createdAt' in session)) {
        session.createdAt = new Date();
    }

    next();
};
