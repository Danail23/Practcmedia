let input = window.document.querySelector('input');
let textarea = window.document.querySelector('textarea');

let noteList =[];
let noteId = -1;

const updateNote = () => {


}

const createNewNote =() => {
    let date = moment (new Date());
    let object = {
        id: noteList.length,
        name: input.value,
        number: input.value,
        date: date.format('LL')
    }
    noteList.push(object);
}

const backIconClick = () => { 
    createNewNote();
}
const saveNote = () =>{
    if(input.value){
        if( noteId < 0) createNewNote();
        else updateNote();
    }
}
const addNoteIconClick = () =>{

}
const createNewTableRow = () =>{
    // <div class="info">
    //     <img src="img/conta.jpg" width="50px" height="50px">
    //     <div class="namepho">
    //         <span>Name</span>
    //         <span>Namber</span>
    //     </div>
    //     <div class="favoritedel">
    //         <img src="img/heart.png" width="20px" height="20px">
    //         <img src="img/del.png" width="20px" height="20px">
    //     </div>
    // </div>
    let row = window.document.createElement('tr');
    let titleColumn = window.document.createElement
}
const onLoad = () =>{
    noteList = window.localStorage.getItem('noteList')
    ? JSON.parse(window.localStorage.getItem('noteList'))
    :[];
    if(noteList){
        noteList.map(elem =>{
            createNewTableRow(elem.id, elem.name,elem.number);
        });
    }

}
onLoad();