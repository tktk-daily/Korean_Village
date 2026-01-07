// スクロールでヘッダー影をつける
const header = document.querySelector('.header');


window.addEventListener('scroll', () => {
if (window.scrollY > 20) {
header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
} else {
header.style.boxShadow = 'none';
}
});