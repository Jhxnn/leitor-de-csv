//apagar depois
class Conta {
	constructor(id, data, saldo, nome) {
		this.id = id;
		this.data = data;
		this.saldo = Number(saldo);
		this.nome = nome;
	}
}

class Customer {
	constructor(id, state, city) {
		this.id = id;
		this.state = state;
		this.city = city;
	}
}

class OrderPayments{
    constructor(orderId, paymentType, paymentValue ){
        this.orderId = orderId;
        this.paymentType = paymentType;
        this.paymentValue = paymentValue;
    }
}

class Orders{
    constructor(id, customerId, status, deliveredCustomer, estimatedDelivery){
        this.id = id;
        this.customerId = customerId;
        this.status = status;
        this.deliveredCustomer = deliveredCustomer;
        this.estimatedDelivery = estimatedDelivery;
    }
}

class ProductCategory{
    constructor(name){
        this.name = name
    }
}


class Geolocation {
	constructor(geolocationId, city, state) {
		this.geolocationId = geolocationId;
    this.city = city;
    this.state = state;
	}
}

class Order_Items {
	constructor(orderId, itemId, productId, sellerId, shippingLimitDate, price, freightValue) {
	this.orderId = orderId;
	this.itemId = itemId;
	this.productId = productId;
	this.sellerId = sellerId;
	this.shippingLimitDate = shippingLimitDate;
	this.price = price;
	this.freightValue = freightValue;
	}	
} 

class Order_Payments {
	constructor(orderId, paymentSequential, paymentType, paymentValue) {
	this.orderId = orderId;
	this.paymentSequential = paymentSequential;
	this.paymentType = paymentType;
	this.paymentValue = paymentValue;
	}
}

class Order_Reviews_Dataset {
	constructor(reviewsId, score) {
	this.score = score;
  this.reviews = reviewsId;
	}
}

class Products {
	constructor(productId, categoryName, productNameLength, productDescriptionLength, productPhotosQty, productWeightG, productLengthCm, productHeightCm, productWidthCm) {
	this.productId = productId;
	this.categoryName = categoryName;
	this.productNameLength = productNameLength;
	this.productDescriptionLength = productDescriptionLength;
	this.productPhotosQty = productPhotosQty;
	this.productWeightG = productWeightG;
	this.productLengthCm = productLengthCm;
	this.productHeightCm = productHeightCm;
	this.productWidthCm = productWidthCm;
	}
}

class Sellers {
	constructor(sellerId, sellerZipCodePrefix, sellerCity, sellerState) {
	this.sellerId = sellerId;
	this.sellerZipCodePrefix = sellerZipCodePrefix;
	this.sellerCity = sellerCity;
	this.sellerState = sellerState;
	}
}

var leitorDeCSV = new FileReader();
var leitorDeCSV2 = new FileReader();

var totalArquivoTipo1 = 0;
var totalArquivoTipo2 = 0;

window.onload = function init() {
	leitorDeCSV.onload = leCSV;
	leitorDeCSV2.onload = leCSV2;
}

function pegaCSV(inputFile) {
	var file = inputFile.files[0];
	leitorDeCSV.readAsText(file);
}

function pegaCSV2(inputFile) {
	var file = inputFile.files[0];
	leitorDeCSV2.readAsText(file);
}

function converterCsvContasParaObjeto(csv) {
	var linhas = csv.split('\n');
	var contas = [];

	for (var i = 1; i < linhas.length; i++) {
		var campos = linhas[i].split(';');
		if (campos.length < 3) continue;

		if (campos.length == 3)
			contas.push(new Conta(campos[0], null, campos[1], campos[2]));
		if (campos.length == 4)
			contas.push(new Conta(campos[0], campos[1], campos[2], campos[3]));
	}

	return contas;
}

function leCSV(evt) {
	var contas = converterCsvContasParaObjeto(evt.target.result);

	totalArquivoTipo1 = 0;
	for (var i in contas) {
		totalArquivoTipo1 += contas[i].saldo;
	}

	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';

	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			strDiv += '<td>' + fileLine[j].trim() + '</td>';
		}
		strDiv += '</tr>';
	}
	// Imprime total 2
	strDiv += '<tr>';
	strDiv += '<td>Total</td>';
	strDiv += '<td>' + totalArquivoTipo1 + '</td>';
	strDiv += '</tr>';

	strDiv += '</table>';

	var CSVsaida = document.getElementById('CSVsaida');
	CSVsaida.innerHTML = strDiv;
}

function leCSV2(evt) {
	var contas = converterCsvContasParaObjeto(evt.target.result);

	totalArquivoTipo2 = 0;
	for (var i in contas) {
		totalArquivoTipo2 += contas[i].saldo;
	}

	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';

	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			strDiv += '<td>' + fileLine[j].trim() + '</td>';
		}
		strDiv += '</tr>';
	}

	// Imprime total 2
	strDiv += '<tr>';
	strDiv += '<td>Total</td>';
	strDiv += '<td>' + totalArquivoTipo2 + '</td>';
	strDiv += '</tr>';
	strDiv += '</table>';

	var CSVsaida = document.getElementById('CSVsaida2');
	CSVsaida.innerHTML = strDiv;
}

// le

