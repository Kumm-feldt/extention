let p = document.querySelector(".quote-p");



//
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'x') {
        // Your function here
        console.log('Ctrl+Shift+X pressed');
    } 
    if (event.metaKey && event.shiftKey && event.key === 'x') {
        // Your function here
        console.log('Command+Shift+X pressed');
        
    }
});


function selectedText(){
 // Get the selection object
 let selection = window.getSelection();

 // Get the selected text as a string
 let selectedText = selection.toString();

 // Log the selected text to the console
 alert(selectedText)
}

