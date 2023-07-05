const textElement = 
document.getElementById('text');
const newText = 'ボタンをクリックしました';

//2秒後切替
setTimeout (() => {
  textElement.innerText=newText;
},2000);

