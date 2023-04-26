let placa1, placa2
let npendejos1, vpasajes1, tpasajes1
let npendejos2, vpasajes2, tpasajes2

placa1 = prompt('ingrese el numero de placa de bus 1')
npendejos1 = Number(prompt('cuantos pendejos son del bus 1'))
vpasajes1 = Number(prompt('ingrese el precio del pasaje del bus 1'))

placa2 = prompt('ingrese el numero de placa del bus 2')
npendejos2 = Number(prompt('cuantos pendejos son del bus 2'))
vpasajes2 = Number(prompt('ingrese el precio del pasaje del bus 2'))

//procedimiento
tpasajes1=npendejos1+vpasajes1
tpasajes2=npendejos2+vpasajes2

if (tpasajes1<tpasajes2){
    alert('el bus que recojio mas dinero fue el de la placa: '+ placa1)
}
else if(tpasajes2<tpasajes1){
    alert('el bus que recojio mas dinero fue el de la placa: '+ placa2)
}