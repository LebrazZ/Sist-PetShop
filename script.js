const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
const pets = JSON.parse(localStorage.getItem("pets")) || [];
const servicos = JSON.parse(localStorage.getItem("servicos")) || [];
const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

document.getElementById("totalClientes").textContent = clientes.length;
document.getElementById("totalPets").textContent = pets.length;
document.getElementById("totalServicos").textContent = servicos.length;
document.getElementById("totalAgendamentos").textContent = agendamentos.length;




