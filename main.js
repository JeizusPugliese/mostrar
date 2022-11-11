document.getElementById("show-element").onclick = function()
{
    var element = document.getElementById('to-show');
    if(element.className === "hide") {
        element.className ='show';
        document.getElementById('body')[0].className='on';
        document.getElementById('show-element').className='active';
    } else {
        element.className ='hide';
        document.getElementsByTagName('body')[0].className='off';
        document.getElementById('show-element').className="";
    }
}

function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML = value;
}