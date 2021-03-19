const app = require("./app");

function intializer() {
    const port = app.get('port');
    app.listen(port, () => console.log(`App listening on port ${port}`));
}

intializer();