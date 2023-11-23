let campoNome = document.querySelector('#nomeCrianca');
let campoAcompanhante = document.querySelector('#nomeAcompanhante');
let campoNascimento = document.querySelector('#dataNascimento');
let campoDataAgendamento= document.querySelector('#dataAgendamento');
let campoHorario = document.querySelector('#horarioAtendimento');
let buttonAgendar = document.querySelector('.button');

buttonAgendar.addEventListener ("click", ()=>{
    alert(`Agendamento finalizado com Sucesso! Cliente: ${campoNome.value}, Data de Agendamento: ${campoDataAgendamento.value}, ás: ${campoHorario.value} `)

     
        localStorage.setItem('nome', campoNome.value);
        localStorage.setItem('Acompanhante', campoAcompanhante.value );
        localStorage.setItem('Agendamento', campoDataAgendamento.value);
        localStorage.setItem('Horario', campoHorario.value);
        localStorage.setItem('Data de Nascimento', campoNascimento.value);
    
       
} )

