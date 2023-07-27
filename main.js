function fun(did) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const box = document.createElement('div');
      box.className = 'box';
      document.getElementById('contain').appendChild(box);
      resolve(); 
    }, did);
  });
}

async function funTwo() {
  const numBox = document.getElementById('numBox').value;
  if (numBox < 1 || numBox > 100) {
    alert('Пожалуйста, выберите число от 1 до 100');
    return;
  }

  
const contain = document.getElementById('contain');
  contain.innerHTML = '';

  for (let i = 0; i < numBox; i++) {
    await fun(300); 
  }
}