document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach(bar => {
        const height = bar.getAttribute('style');
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = height;
        }, 100);
    });
});
