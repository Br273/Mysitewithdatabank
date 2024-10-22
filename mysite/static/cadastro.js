document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const cpf = document.getElementById('cpf').value;
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const idade = document.getElementById('idade').value;
    const funcao = document.getElementById('funcao').value;

    // Aqui você pode fazer algo com os dados, como enviar para um servidor
    console.log('Dados do Cadastro:', { cpf, nome, endereco, idade, funcao });

    // Exemplo de alerta com os dados
    alert(`Cadastro realizado:\nNome: ${nome}\nCPF: ${cpf}\nEndereço: ${endereco}\nIdade: ${idade}\nFunção: ${funcao}`);
});
