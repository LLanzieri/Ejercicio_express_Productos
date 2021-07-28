const error = ((req, res, next) => {
    return res.status(404).render('error404');
    next();
});

module.exports = error;