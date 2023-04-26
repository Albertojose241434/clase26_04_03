let edad;

edad = Number(prompt('ingrese la edad'));

if(edad<10){
    console.log('la persona es un niño')
    alert('es un niño');
    document.write('es un niño')

}
else if (edad>=10 && edad<15){
    console.log('la persona es un preadolecente')
    alert('es un preadolecente');
    document.write('es un preadolecente')
}
else if (edad>=15 && edad<18){
    console.log('la persona es un adolecente')
    alert('es un adolecente');
    document.write('es un adolecente')
}
else if (edad>18 && edad<50){
    console.log('la persona es un adulto')
    alert('es un adulto');
    document.write('es un adulto')
}
else if (edad>50){
    console.log('la persona es un adulto mayor')
    alert('es un adulto mayor');
    document.write('es un adulto mayor')
}