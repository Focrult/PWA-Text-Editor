const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Click the button to install!';

butInstall.addEventListener('click', async () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Already installed on your machine!';
});
});
window.addEventListener('appinstalled', (event) => {
    butInstall.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
});
