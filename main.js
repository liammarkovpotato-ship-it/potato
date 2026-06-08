// ⚠️ החלף את YOUR_FORM_ID בקוד שמקבלים מ-formspree.io
const FORMSPREE_ID = 'YOUR_FORM_ID';

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.btn-text');
  const success = document.getElementById('formSuccess');
  const error = document.getElementById('formError');

  success.style.display = 'none';
  error.style.display = 'none';
  btn.textContent = 'שולח...';

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch(`https://formspree.io/f/xkoaoalk`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      form.reset();
      success.style.display = 'block';
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    } else {
      error.style.display = 'block';
    }
  } catch {
    error.style.display = 'block';
  } finally {
    btn.textContent = 'שלח הודעה 🥔';
  }
}
