
const addBtn = document.querySelector(".addBtn");
const main = document.querySelector("main");
addBtn.addEventListener("click", () => {
  addNotes();
});

const saveNotes = ()=>{
    const notes = document.querySelectorAll('textarea')
        const data = [];
        notes.forEach(element=>{
            data.push(element.value)
        })
        // console.log(data)
        if(data.length === 0){
            localStorage.removeItem('notes')
        }else{
            localStorage.setItem('notes',JSON.stringify(data))
        }
    }

const addNotes = (text='') => {
  const note = document.createElement("div");
  note.innerHTML = `<div class='notes'>
    <div class="icons">
    <i class=" save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea>${text}</textarea>
</div>`;
const trash = note.querySelector('.trash')
const save = note.querySelector('.save')
    trash.addEventListener('click',()=>{
        note.remove()
        saveNotes()
    })
    save.addEventListener('click',()=>{
        saveNotes()
    })
    note.querySelector('textarea').addEventListener('focusout',()=>{
        saveNotes()
    })
    main.append(note)
    saveNotes()
};
(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem('notes'))
        if(lsNotes === null){
            addNotes()
        }else{
            lsNotes.forEach(element=>{
                addNotes(element)
            })
        }
    }
)()
