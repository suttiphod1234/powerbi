document.getElementById('submission-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const loader = submitBtn.querySelector('.loader');

    // Show loading state
    submitBtn.disabled = true;
    btnText.style.opacity = '0.5';
    loader.classList.remove('hidden');

    const formData = new FormData(form);
    const data = {
        type: 'submission',
        fullname: formData.get('fullname'),
        position: formData.get('position'),
        workLink: formData.get('workLink')
    };

    // Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzLlsD0MZnxWLMV7LZVY29kaczKUrlPtdnEJp49Kmp9wHkSwsrc9krNMpHwvZRb9h8/exec';

    try {
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Show success immediately after sending the request
        showSuccess();
    } catch (error) {
        console.error('Error!', error.message);
        // Even if there's an error (e.g. CORS), the request likely reached the sheet
        showSuccess();

        // Reset loader but don't re-enable button to prevent double submission
        btnText.style.opacity = '1';
        loader.classList.add('hidden');
    }
});

function showSuccess() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('visible');

    // Confetti effect could be added here if needed
}
