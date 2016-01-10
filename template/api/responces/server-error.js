module.exports = function (req, res) {
    return function (message) {
        if (! arguments.length) {
            message = 'Server error';
        }

        res.status(500).end(message);
    };
};
