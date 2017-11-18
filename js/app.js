console.log(data);

var numTotal = 0;
var totalGeneracion = 0;
var dropoutPorcentaje = 0;
var metaSuperada = 0;
var porcentajeTotalSuperada = 0;
var nps = 0;
var metaSuperadaTec = 0;
var metaSuperadaHSE = 0;
var satisfaccion = 0;
var promedioProfesores = 0;
var promedioJedis = 0;

//cuantas alumnas siguen en laboratoria
for (var i = 0; i < data.SCL["2017-2"].students.length; i++) {
	if (data.SCL["2017-2"].students[i].active == true) {
		numTotal++;
	}
}

document.getElementById("numTotal").innerHTML = numTotal;


//total alumnas semestre 2 chile
var totalChile2 = data.SCL["2017-2"].students.length;

//alumnas desertoras
var dropout = 0;
for (var i = 0; i < data.SCL["2017-2"].students.length; i++) {
	if (data.SCL["2017-2"].students[i].active == false) {
		dropout++;
	}
}
dropoutPorcentaje = Math.round((dropout * 100) / totalChile2);

document.getElementById("dropoutPorcentaje").innerHTML = dropoutPorcentaje + "%";


