window.onload = () => {

  function getEl(tag) {
    let arr, 
        arr2 = [], 
        count = 0;
        
    arr = document.body.querySelectorAll('*'); // получаем конструктор всех элементов в body
    
    for(let i = 0; i < arr.length; i++) {
      arr2[i] = arr[i].tagName.toLowerCase();
    } // создаем массив из всех тегов в body

    arr2.forEach(function(el) {
      if(el === tag) {
        count++;
      }      
    }); // считаем теги, соответсвующие искомому

    alert(`Данных тегов на странице ${count}`);
  }

  getEl(prompt('Enter tag name', ''));
}