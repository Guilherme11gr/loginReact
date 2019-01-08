import { HttpServices } from "./httpServices";

export class LoginServices {
  static async getUser(email, senha) {
    const response = {};
    const token = `Basic ${btoa(`${email}:${senha}`)}`;
    const res = await HttpServices.get('https://pimquatro.herokuapp.com/api/atendentes', token);
    const data = res.data;
    if (res.ok) {
      const user = data.filter((users) => users.email == email ? users : null);
      localStorage.setItem('user', JSON.stringify(user));
      response.status = true;
      localStorage.setItem('token', token);
      window.location = 'https://pimquatro.github.io/App/';
    } else {
      response.msg = res.data.message === 'Unauthorized' ? 'Email ou senha inválidos !' : res.data.message;
      response.status = false;
    }
    return response;
  }
}