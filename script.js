let p = document.querySelector(".quote-p");
const currentLocation = window.location.href;



function selectedText(){
    // Get the selection object
    let selection = window.getSelection();
   
    // Get the selected text as a string
    let selectedText = selection.toString();
   
    // Log the selected text to the console
   
    p.value = selectedText;
    alert(selectedText)
   }
   
//
window.document.addEventListener('keydown', function(event) {
    if ( event.shiftKey) {
       alert('Ctrl+Shift+X pressed');
    selectedText()
    } 
    if (event.metaKey && event.shiftKey && event.key === 'x') {
        console.log('Command+Shift+X pressed');
        // Call another function here if needed
    }
});


