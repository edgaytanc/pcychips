document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    // Replace with your actual Formspree form ID
    // Sign up at formspree.io to get a unique URL like https://formspree.io/f/mqkvyqwr
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqeazdwj';

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            const formData = new FormData(form);
            const statusContainer = document.createElement('div');
            statusContainer.className = 'mt-4 text-sm font-bold text-center p-3 rounded-lg hidden';

            // Allow re-submission retry by removing old status
            const oldStatus = form.querySelector('.form-status');
            if (oldStatus) oldStatus.remove();

            statusContainer.classList.add('form-status');
            form.appendChild(statusContainer);

            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span>Enviando...</span>
                <span class="material-symbols-outlined animate-spin ml-2">progress_activity</span>
            `;

            try {
                const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                statusContainer.classList.remove('hidden');

                if (response.ok) {
                    // Success state
                    form.reset();
                    statusContainer.textContent = "¡Gracias! Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.";
                    statusContainer.classList.add('bg-green-100', 'text-green-800', 'border', 'border-green-200');
                    submitBtn.classList.add('bg-green-600', 'hover:bg-green-700');

                    setTimeout(() => {
                        submitBtn.innerHTML = `
                        <span>Mensaje Enviado</span>
                        <span class="material-symbols-outlined text-xl ml-2">check_circle</span>
                        `;
                    }, 500);

                } else {
                    // Service error
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        statusContainer.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        statusContainer.textContent = "Hubo un problema al enviar el formulario. Por favor intenta de nuevo.";
                    }
                    statusContainer.classList.add('bg-red-100', 'text-red-800', 'border', 'border-red-200');
                }
            } catch (error) {
                // Network error
                statusContainer.classList.remove('hidden');
                statusContainer.textContent = "Error de conexión. Por favor verifica tu internet e intenta de nuevo.";
                statusContainer.classList.add('bg-red-100', 'text-red-800', 'border', 'border-red-200');
                console.error('Error submitting form:', error);
            } finally {
                if (!statusContainer.classList.contains('bg-green-100')) {
                    // Reset button if error
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                }
            }
        });
    }
});
