let selection = document.querySelector('.selection');
let radio1 = document.querySelector('.radio1');
let radio = '';
radio1.addEventListener('click',() => {
    radio = 'region'
    selection.removeAttribute('disabled');
    while(selection.firstChild){
        selection.removeChild(selection.firstChild);
          }
    for (const value of externalService.getRegionsList()) {
        const option = document.createElement('option');
        option.className ='option';
        option.textContent = option.value = value;
        selection.append(option)
    }
},);

let radio2 = document.querySelector('.radio2');
radio2.addEventListener('click',() => {
    radio = 'language'
    selection.removeAttribute('disabled');
    while(selection.firstChild){
        selection.removeChild(selection.firstChild);
          }
    for (const value of externalService.getLanguagesList()) {
        const option = document.createElement('option');
        option.className ='option';
        option.textContent = option.value = value;
        selection.append(option)
    }
});

function getSelectValue(){
    let selectedValue = document.getElementById('list').value;
    if(radio === 'region'){
        let region = externalService.getCountryListByRegion(selectedValue);
  console.log('Region',selectedValue,region);
  function language(){
    let langShow =region[i].languages; 
    let values = Object.values(langShow);
    return values;
} 

let trs = document.querySelectorAll('.tr__class');
trs.forEach(function(elem){
    elem.parentNode.removeChild(elem)
})
for(i = 0;i< region.length;i++ ){
  myTable.insertAdjacentHTML('afterend',
  `<tr class="tr__class">
              <td >${region[i].name}</td>
              <td>${region[i].capital}</td>
              <td>${region[i].region}</td>
              <td>${language()}</td>
              <td>${region[i].area} km²</td>
              <td><img class='img' src='${region[i].flagURL}'></td>
  </tr>`)
}
    }
    if(radio === 'language'){
        let region = externalService.getCountryListByLanguage(selectedValue);
  console.log('Language',selectedValue,region);
  function language(){
    let langShow =region[i].languages; 
    let values = Object.values(langShow);
    return values;
}
let trs = document.querySelectorAll('.tr__class');
trs.forEach(function(elem){
    elem.parentNode.removeChild(elem)
})
for(i = 0;i< region.length;i++ ){
  myTable.insertAdjacentHTML('afterend',
  `<tr class="tr__class">
              <td >${region[i].name}</td>
              <td>${region[i].capital}</td>
              <td>${region[i].region}</td>
              <td>${language()}</td>
              <td>${region[i].area} km²</td>
              <td><img class='img' src='${region[i].flagURL}'></td>
  </tr>`)
}
    }
}

/*
list of all regions
externalService.getRegionsList();
list of all languages
externalService.getLanguagesList();
get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/