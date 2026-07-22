let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function cadastrarCliente(){
    console.log("Funcionou!");
    
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;

    if(nome == "" || telefone == "" || email == ""){
        alert("Preencha todos os campos.")
        return;
    }

    clientes.push({
        nome,
        telefone,
        email
    });

    console.log(clientes);

    localStorage.setItem("clientes",JSON.stringify(clientes));

    document.getElementById("nome").value="";
    document.getElementById("telefone").value="";
    document.getElementById("email").value="";

    listarClientes();
}

function listarClientes(){

    let tabela = document.getElementById("listaClientes")

    tabela.innerHTML="";

    clientes.forEach((cliente,index)=>{
        tabela.innerHTML += `
        <tr>
            <td>${cliente.nome}</td>
            <td>${cliente.telefone}</td>
            <td>${cliente.email}</td>

            <td>
                <button onclick="editarCliente(${index})">Editar</button>   
                <button onclick="excluirCliente(${index})">Excluir</button>
            </td>

        </tr>
        `;
    });
}

function excluirCliente(index){
    clientes.splice(index,1);

    localStorage.setItem("clientes",JSON.stringify(clientes));

    listarClientes();

}

listarClientes();

function editarCliente(index){

    const cliente = clientes[index];

    document.getElementById("nome").value = cliente.nome;
    document.getElementById("telefone").value = cliente.telefone;
    document.getElementById("email").value = cliente.email;

    clientes.splice(index, 1);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    listarClientes();
}