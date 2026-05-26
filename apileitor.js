const PORTA = 5757;
const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Ler CSV
const fs = require('fs');
const neatCsv = require('neat-csv');

let customers = [];
fs.readFile('./customers_dataset.csv', 'latin1',
async function (err, data) {
    if(err) throw err;
    customers = await neatCsv(data,{separator: ';', skipLines: 2 });    
});


let orderItems = [];
fs.readFile('./order_items_dataset.csv', 'latin1',
async function (err, data) {
    if(err) throw err;
    orderItems = await neatCsv(data,{separator: ';', skipLines: 2 });    
});


let sellers = [];
fs.readFile('./sellers_dataset.csv', 'latin1',
async function (err, data) {
    if(err) throw err;
    sellers = await neatCsv(data,{separator: ';', skipLines: 2 });    
});

let orderPayments = [];
fs.readFile('./order_payments_dataset.csv', 'latin1',
async function (err, data) {
    if(err) throw err;
    orderPayments = await neatCsv(data,{separator: ';', skipLines: 2 });    
});

let orders = [];
fs.readFile('./orders_dataset.csv', 'latin1',
async function (err, data) {
    if(err) throw err;
    orders = await neatCsv(data,{separator: ';', skipLines: 2 });    
});

let products = [];
fs.readFile('./products_dataset.csv', 'latin1',
async function (err, data) {
    if(err) throw err;
    products = await neatCsv(data,{separator: ';', skipLines: 2 });    
});


let geolocation = [];
fs.readFile('./geolocation_dataset.csv', 'latin1',
async function (err, data) {
    if(err) throw err;
    geolocation = await neatCsv(data,{separator: ';', skipLines: 2 });    
});

let orderReviewDataset = [];
fs.readFile('./order_reviews_dataset.csv', 'latin1',
async function (err, data) {
    if(err) throw err;
    orderReviewDataset = await neatCsv(data,{separator: ';', skipLines: 2 });    
});

app.get('/payment', (req, res) => {
  const RegistrosFiltrados = [];
  for (const registro in MAP){
    if(
      ((MAP[registro]['Registro ANS']).toUpperCase()).indexOf(ans)>-1 &&
      ((MAP[registro]['CNPJ']).toUpperCase()).indexOf(cnpj)>-1 &&
      ((MAP[registro]['Razão Social']).toUpperCase()).indexOf(razaoSocial)>-1 &&
      ((MAP[registro]['Nome Fantasia']).toUpperCase()).indexOf(nome)>-1 &&
      ((MAP[registro]['Modalidade']).toUpperCase()).indexOf(modalidade)>-1 &&
      ((MAP[registro]['Endereço eletrônico']).toUpperCase()).indexOf(email)>-1 &&
      ((MAP[registro]['Cargo Representante']).toUpperCase()).indexOf(representante)>-1 &&
      ((MAP[registro]['Data Registro ANS']).toUpperCase()).indexOf(dataRegistro)>-1
    ){
      RegistrosFiltrados.push(MAP[registro]);
    }
  }
  res.json(RegistrosFiltrados);
})
app.get('/lsa', (req, res) =>{
    res.json("teste")
})

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`)
})