// Lógica menu para abertura e fechamento do nav toggle.
const navToggle = document.querySelector('.nav_toggle');
        const navMenu = document.querySelector('.nav_menu');

        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

// Abrindo uma função para validação do form.
        function valideForm() {
            // Recuperando campos pelo DOM
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value; 
            var mensage = document.getElementById('mensage').value;
            var mensageDiv = document.getElementById('mensageDiv');
// Se todos campos estiverem diferente de vazio, ou seja preenchidos, exibir mensagem agradecendo o contato.
            if(name !== '' && email !== '' && mensage !== '') {
                mensageDiv.innerHTML = "Agradecemos o contato!";

                // Resetando campos
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('mensage').value = '';
// Caso o nome ou o email esteja vazio, exibir mensagem pedindo pra preencer os dados.
            }else if(name === '' || email === ''){
                mensageDiv.innerHTML = "Por favor preencha seus dados!";
// Caso apenas mensagem esteja vazio, pedir que escreva uma mensagem.
            }else if(mensage === ''){
                mensageDiv.innerHTML = "Digite sua mensagem!";
            }

        }