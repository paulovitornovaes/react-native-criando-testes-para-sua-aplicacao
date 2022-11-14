import { obtemLeiloes } from "../../src/repositorio/leilao";
import apiLeiloes from '../../src/servicos/apiLeiloes'

jest.mock('../../src/servicos/apiLeiloes');

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'Descrição do leilão'
    }
];

const mockRequisicao = (retorno) => {
    return new Promisse((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno
            })
        }, 200);
    });
}

describe('repositorio/leilao', () => {
    
    describe('obtemLeiloes',() => {

        it('deve retornar uma lista de leilões', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes));
            const leiloes = await obtemLeiloes();
            console.log(leiloes);
        });
    
    });

});
