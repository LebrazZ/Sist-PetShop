let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

function agendar(){
    
    let cliente = document.getElementById("cliente").value;
    let pet = document.getElementById("pet").value;
    let servico = document.getElementById("servico").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let status = document.getElementById("status").value;

    if(cliente=="" || pet=="" || servico=="" || data=="" || hora==""){

        alert("Preencha todos os campos. ");
        
        return;

    }

    agendamentos.push({
        cliente,
        pet,
        servico,
        data,
        hora,
        status

    });

    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    limparCampos();

    listarAgendamentos();

}

function listarAgendamentos(){

    let tabela=document.getElementById("listaAgendamentos");

    tabela.innerHTML="";

    agendamentos.forEach((agendamento,index)=>{

        tabela.innerHTML+=`
        <tr>

            <td>${agendamento.cliente}</td>
            <td>${agendamento.pet}</td>
            <td>${agendamento.servico}</td>
            <td>${agendamento.data}</td>
            <td>${agendamento.hora}</td>
            <td>${agendamento.status}</td>

            <td>

                <button onclick="excluirAgendamento(${index})">
                
                Excluir

                </button>
            </td>
            
        </tr>    
                
        `;

    });

}

function limparCampos(){

    document.getElementById("cliente").value="";
    document.getElementById("pet").value="";
    document.getElementById("servico").value="";
    document.getElementById("data").value="";
    document.getElementById("hora").value="";
    document.getElementById("status").value="Agendado";

}

listarAgendamentos();

function excluirAgendamento(index){

    agendamentos.splice(index,1);

    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    listarAgendamentos();

}