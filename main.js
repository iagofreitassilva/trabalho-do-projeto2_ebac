const form = document.getElementById('form-agenda');
form.addEventListener('submit',function(e) {
    e.preventDefault();

    const inputNomeContato  = document.getElementById('nome-contato');
    const inpuNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha    += `<td>${inputNomeContato.value}</td>`;
    linha    += `<td>${inputNumeroContato.value}</td>`;
    linha    += `<td>${inputNomeContato.value = String ? 'Salvo' : 'Não salvo'}</td>`;
    linha    += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;

});