function popUp(message){
    
 return `
 <div class="popUp">
    <span>
        ${ message }
    </span>
    <button id="closeModalButt">
        ok
    </button>
 </div>`;
}

export default popUp;