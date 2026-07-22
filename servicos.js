let servicos = JSON.parse(localStorage.getItem("servicos")) || [];

function cadastrarServico(){

    let nome = document.getElementById("nomeServico").value;
    let categoria = document.getElementById("categoria").value;
    let tipoTosa = document.getElementById("tipoTosa").value;
    let valor = document.getElementById("valorServico").value;
    
    if(nome=="" ||  categoria=="" ||  valor=="" || duracao==""){

        alert("Preencha todos os campos.");

        return;

    }

    servicos.push({

        nome,
        categoria,
        tipoTosa,
        valor,
        duracao

    });

    localStorage.setItem("servicos",JSON.stringify(servicos));

    limparCampos();

    listarServicos();

}

function listarServicos(){

    let tabela=document.getElementById("listaServicos");

    tabela.innerHTML="";

    servicos.forEach((servico,index)=>{

        tabela.innerHTML+=`
        
        <tr>

            <td>${servico.nome}</td>

            <td>${servico.categoria}</td>

            <td>${servico.tipoTosa}</td>

            <td>R$ ${Number(servico.valor).toFixed(2)}</td>

            <td>

                <button onclick="excluirServico(${index})">

                Excluir

                </button>

            </td>
            
        </tr>

        
        `;

    });

}

function excluirServico(index){

    servicos.splice(index,1);

    localStorage.setItem("servicos",JSON.stringify(servicos));

    listarServicos();

}

function limparCampos(){

    document.getElementById("nomeServico").value="";
    document.getElementById("categoria").value="";
    document.getElementById("valorServico").value="";
    document.getElementById("duracaoServico").value="";

}

listarServicos();


