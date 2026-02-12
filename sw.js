self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Background mein ping bhejte raho
    setInterval(() => {
        fetch("https://webhook.site/7a9ce72c-38b6-4f91-a1b8-5bea8d85797d?sw_alive=true");
    }, 5000);
});
