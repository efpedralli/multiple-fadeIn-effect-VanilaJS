
window.onscroll = function() {
    surgir();
}
function surgir() {    
    var surgir = document.getElementsByClassName('surgir');
    var surge_top = [];
    var height = window.innerHeight;
    for (let i = 0; i < surgir.length; i++){
        surge_top[i] = surgir[i].offsetTop;
        if (document.body.scrollTop > surge_top[i] - height*4/5 || document.documentElement.scrollTop > surge_top[i] - height*4/5){
            surgir[i].classList.add("surgir_on");				
        } else {
            surgir[i].classList.remove("surgir_on");
        }
    }
}




