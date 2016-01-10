module.exports = function (req, res) {
    return function (message) {
        if (! arguments.length) {
            message = 'Not found';
        }

        res.status(404).send(message);
    };
};
