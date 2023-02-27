import { signUpService } from "../service/sign.up,service.js";

export async function postSignUp(req, res) {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }
  
    try {
      const user = await signUpService.createCartItem(avatar, username);
  
      return res.status(200).send('OK deu tudo certo');
    } catch (error) {
      return res.status(500).send({});
    }
  }