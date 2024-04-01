let p = document.querySelector("#pop-quote-p");
let source = document.querySelector("#pop-url");
let popUpContainer = document.querySelector("#pop-wrapper");
let container = document.querySelector("#container");

const currentLocation = window.location.href;



window.document.addEventListener('keydown', function(event) {
    if ( event.shiftKey) {
    alert('Ctrl+Shift+X pressed');
    
    selectedText();
    popUpContainer.style.display = "block";
    container.style.display = "none";

    } 
    if (event.metaKey && event.shiftKey && event.key === 'x') {
        console.log('Command+Shift+X pressed');
        selectedText()
    }
});


function selectedText(){
    // Get the selection object
    let selection = window.getSelection();
   
    // Get the selected text as a string
    let selectedText = selection.toString();
   
    // Log the selected text to the console
   
    p.value = selectedText;
    source.value = currentLocation;

   }