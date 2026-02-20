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
        const response = await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors', // Apps Script requires no-cors for simple redirects
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Since mode is 'no-cors', we can't read the response body.
        // We assume success if no error is thrown during fetch.
        showSuccess();
    } catch (error) {
        console.error('Error!', error.message);
        alert('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง');

        // Reset button state on error
        submitBtn.disabled = false;
        btnText.style.opacity = '1';
        loader.classList.add('hidden');
    }
});

function showSuccess() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('visible');

    // Confetti effect could be added here if needed
}
