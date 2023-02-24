import chalk from "chalk";
import app, { init } from "./app.js";


const port = +process.env.PORT || 5000;

init().then(() => {
  app.listen(port, () => {
    console.log(chalk.bold.blue(`Servidor funfando na port ${port}`));
  });
});