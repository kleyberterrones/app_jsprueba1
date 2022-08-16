document.addEventListener('DOMContentLoaded', function () {
    // dom diice que no nos ejecute el javascript hasta que todo el HTML aya cargado
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const alert = document.getElementById('alert');
    let id=1;
    const btnagregar = document.getElementById('add');
    //btnagregar.addEventListener('click',function (){
    //console.log('click');  
    //})
    function removetodo(id){
    document.getElementById(id).remove();
    }
    function addtodo() {
        if (title.value === '' || description.value === '') {
           alert.classList.remove('d-none');
           alert.innerText='Ingrese los datos';
           return;
        }
        else {
            alert.classList.add('d-none');
            const row=table.insertRow();
            row.setAttribute('id',id++);
            row.innerHTML=`
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
             <input type="checkbox">
          </td>
          <td class="text-right">
                <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
                </button>
                
          </td>
            `;
            const removebtn=document.createElement('button');
            removebtn.classList.add('btn','btn-danger','mb-1');
            removebtn.innerHTML='<i class="fa fa-trash"></i>';
            removebtn.onclick=function(){
               removetodo(row.getAttribute('id'));
            }
            row.children[3].appendChild(removebtn);
        }
    }
    btnagregar.onclick = addtodo


});


