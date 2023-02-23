import AppController from "./AppController";

AppController.listen(process.env.PORT || 8080, () => {
    console.log(`npm run dev: Servidor rodando na porta ${process.env.PORT || 8080}`);
});
