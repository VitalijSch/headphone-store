function Routes(app, db) {
    const LOGIN_ROUTE = "/login";
    const ARTICLE_ROUTE = "/article";

    function handleError(error, res) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }

    app.get(LOGIN_ROUTE, async (req, res) => {
        try {
            const [row] = await db.query("SELECT * FROM users");
            res.send(row);
        } catch (error) {
            handleError(error, res);
        }
    });

    app.get(ARTICLE_ROUTE, async (req, res) => {
        try {
            const [row] = await db.query("SELECT * FROM article");
            res.send(row);
        } catch (error) {
            handleError(error, res);
        }
    });
}

export default Routes;