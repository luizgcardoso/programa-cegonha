import { NotFoundError } from "../utils/api-error";

export default class ViaCepService {
  static async buscar(cep: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    // if (!response.ok) throw new Error("Erro ao consultar CEP");

    // return response.json();
    const data = await response.json();

    if (data.erro) {
      throw new NotFoundError("CEP não encontrado");
    }

    return data;
  }
}
