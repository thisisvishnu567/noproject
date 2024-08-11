export function initializePointerTracking() {
  document.querySelectorAll('.plan-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      item.style.setProperty('--pointer-x', `${percentX}%`);
      item.style.setProperty('--pointer-y', `${percentY}%`);
    });

    item.addEventListener('mouseleave', () => {
      item.style.setProperty('--pointer-x', '50%');
      item.style.setProperty('--pointer-y', '50%');
    });
  });
}
