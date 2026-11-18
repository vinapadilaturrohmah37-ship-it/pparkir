function hideMessage(el, time) {
    setTimeout(() => { el.style.display = 'none'; }, time);
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showMainPage(initial, name) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('userAvatar').textContent = initial;
    document.getElementById('userName').textContent = name;
}

function loginWithEmail() {
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let errorMsg = document.getElementById('errorMsg');
    let successMsg = document.getElementById('successMsg');

    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';

    if (email === '' || password === '') {
        errorMsg.textContent = '⚠️ Silakan isi email dan password!';
        errorMsg.style.display = 'block';
        hideMessage(errorMsg, 3000);
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        errorMsg.textContent = '⚠️ Masukkan email yang valid!';
        errorMsg.style.display = 'block';
        hideMessage(errorMsg, 3000);
        return;
    }

    if (password.length < 4) {
        errorMsg.textContent = '⚠️ Password minimal 4 karakter!';
        errorMsg.style.display = 'block';
        hideMessage(errorMsg, 3000);
        return;
    }

    successMsg.textContent = '✅ Berhasil masuk! Selamat datang 👋';
    successMsg.style.display = 'block';

    setTimeout(() => {
        let nameFromEmail = email.split('@')[0];
        nameFromEmail = capitalizeFirstLetter(nameFromEmail);
        showMainPage(email.charAt(0).toUpperCase(), nameFromEmail);
    }, 800);
}

function loginWithGoogle() {
    let successMsg = document.getElementById('successMsg');
    successMsg.textContent = 'Membuka login Google...';
    successMsg.style.display = 'block';

    setTimeout(() => {
        successMsg.textContent = '✅ Berhasil masuk dengan Google! Selamat datang 👋';
    }, 1000);

    setTimeout(() => {
        showMainPage('U', 'Pengguna Google');
    }, 2000);
}

function logout() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('errorMsg').style.display = 'none';
    document.getElementById('successMsg').style.display = 'none';
    document.getElementById('successMsg').textContent = '✅ Berhasil masuk! Selamat datang 👋';
}

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let loginPage = document.getElementById('loginPage');
        if (loginPage.style.display !== 'none') {
            loginWithEmail();
        }
    }
});
