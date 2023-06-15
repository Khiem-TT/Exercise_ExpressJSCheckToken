export const checkToken = (req, res, next) => {
    let token = req.body.token;
    if (token === '14112001') {
        next();
    } else {
        res.status(401).json({message: 'Unauthorized!'});
    }
}