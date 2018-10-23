/**
 * Code
 */

 window.addEventListener('load',main);

 function main(){
    var flag = false;
    var itemBtn = document.getElementById('btn-menu');
    var itemNav = document.getElementById('respon');

    itemBtn.addEventListener('click',() => {
        if(flag){
            flag = false;
            itemNav.style.marginLeft = "0%";
        }else{
            flag = true;
            itemNav.style.marginLeft = "-100%";
        }
    },false);
    
}