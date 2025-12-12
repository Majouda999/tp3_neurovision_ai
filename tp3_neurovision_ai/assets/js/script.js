

document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const input = document.getElementById(targetId);
            if (!input) return;
            if (input.type === 'password') {
                input.type = 'text';
                button.textContent = 'Masquer';
            } else {
                input.type = 'password';
                button.textContent = 'Afficher';
            }
        });
    });

    
    document.querySelectorAll('form').forEach(form => {
       
        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', () => {
                input.style.backgroundColor = 'rgba(107, 91, 214, 0.1)';
            });
            input.addEventListener('blur', () => {
                input.style.backgroundColor = '';
            });
        });

        
        form.addEventListener('submit', (event) => {
            let valid = true;
            form.querySelectorAll('input[required]').forEach(input => {
                
                input.classList.remove('input-error');
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add('input-error');
                }
            });
            if (!valid) {
                event.preventDefault();
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    });
});