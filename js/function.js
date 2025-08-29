const click= document.getElementById('click');
const time = document.getElementById('time');
let open = false;

click.onclick = function(){
    if(!open){
        time.innerHTML = Date();
        open = true;
    }   
    else
        {
            time.innerHTML = '';
            open = false
        }
}