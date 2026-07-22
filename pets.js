let pets = JSON.parse(localStorage.getItem("pets")) || [];

function cadastrarPet() {

    let nome = document.getElementById("nomePet").value;
    let especie = document.getElementById("especie").value; 
    let raca = document.getElementById("raca").value;
    let porte = document.getElementById("porte").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tutor = document.getElementById("tutor").value;

    if(nome=="" || especie=="" || raca=="" || porte=="" || idade=="" || peso=="" || tutor==""){
        alert("Preencha todos os campos.");
        return;
    }

    pets.push({

        nome,
        especie,
        raca,
        porte,
        idade,
        peso,
        tutor

    });

    localStorage.setItem("pets",JSON.stringify(pets));

    limparCampos();

    listarPets();

}

function listarPets(){

    let tabela=document.getElementById("listaPets");

    tabela.innerHTML="";

    pets.forEach((pet,index)=>{

        tabela.innerHTML+=`

        <tr>

            <td>${pet.nome}</td>
            <td>${pet.especie}</td>
            <td>${pet.raca}</td>
            <td>${pet.porte}</td>
            <td>${pet.idade}</td>
            <td>${pet.peso} kg</td>
            <td>${pet.tutor}</td>

            <td>

                <button onclick="excluirPet(${index})">Excluir</button>

            </td>

        </tr>

        `;

    });

}

function excluirPet(index){

    pets.splice(index,1);

    localStorage.setItem("pets",JSON.stringify(pets));

    listarPets();

}

function limparCampos(){

    document.getElementById("nomePet").value="";
    document.getElementById("especie").value="";
    document.getElementById("raca").value="";
    document.getElementById("porte").value="";
    document.getElementById("idade").value="";
    document.getElementById("peso").value="";
    document.getElementById("tutor").value="";

}

listarPets();