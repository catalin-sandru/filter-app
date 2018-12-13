// get input element
let filterInput = document.getElementById('filterInput');
// add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  // get value from input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  // get names ul
  let ul  = document.getElementById('names')
  // get list from ul
  let li = ul.querySelectorAll('li.collection-item')

  // loop through collection item list
  for(i = 0; 1 < li.length; i++){
    let a = li[i].getElementsByTagName('a')[0];
    // if match
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
