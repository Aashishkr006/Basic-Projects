const add_task = document.getElementById('add_task');
const add_btn = document.getElementById('add_btn');
const delete_all_btn = document.getElementById('delete_all_btn');

const task_list = document.getElementById('task_list');

add_btn.addEventListener('click', () => {
    const value= add_task.value;
    const task = document.createElement('li');
    const remove_btn = document.createElement('button');

    task.innerHTML=value;
    remove_btn.innerHTML="x";

    task_list.appendChild(task);
    task.appendChild(remove_btn);

    add_task.value=''


    remove_btn.addEventListener('click', ()=>{
        task.remove()
    })

    delete_all_btn.addEventListener('click', ()=>{
        task_list.innerHTML='';
    })
})
