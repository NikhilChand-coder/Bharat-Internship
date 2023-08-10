document.getElementById('convert1').onclick = tempConvertc;
document.getElementById('convert2').onclick = tempConvertf;

function tempConvertc(){
    var celsius = document.getElementById('celsius').value;

    fehrenheit = (parseFloat(celsius)*1.8) + 32;

    document.getElementById('fehResult').value = parseFloat(fehrenheit).toFixed(1);
}

function tempConvertf(){
    var fehrenheit = document.getElementById('fehrenheit').value;

    celsius = (parseFloat(fehrenheit) -32)/1.8;

    document.getElementById('celResult').value = parseFloat(celsius).toFixed(1);
}