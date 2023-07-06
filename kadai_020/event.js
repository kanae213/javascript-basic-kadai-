document.addEventListener('DOMContentLoaded', () => {
  const targetElement = 
  document.getElementById('text');
  const buttonElement = 
  document.getElementById('btn');

  function handleClick() {
    setTimeout(() => {
      targetElement.textContent = 'ボタンをクリックしました';
    }, 2000);
  }

buttonElement.addEventListener('click',handleClick);
});