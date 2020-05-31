import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import * as colors from '../../constants/colors';

//Demanda Agregada :D

// (Constantes INEGI PIB 2019) 
// Las de los siguientes años se obtienen al usar la función TC
//C: Consumo
const C = {'2019': 12502876.50};
//G: Gasto
const G = {'2019': 2174999.06};
//I: Inversión
const I = {'2019': 3572212.47};
//Inv: Inventarios 
const Inv = {'2019': 97777.99};
//NX: Exportaciones
const NX = {'2019': 41559.77};
//e: Discrepancia Estadística 
const e = {'2019': 135182.63};
//PIB por año 
const PIB = {
    '2019': 18524608.41, 
}
const PIB_r = {

}

const PIB_n = {

}

//TC de 2020
const TC_C2020 = 0; 
const TC_G2020 = 0.9/100;
const TC_I2020 = 0; 
const TC_Inv2020 = 0; 
const TC_NX2020 = 0; 
const TC_e2020 = 0; 

//TC por año
const TC_C = {
    '2020': TC_C2020,
}
const TC_G = {
    '2020': TC_G2020
}
const TC_I = {
    '2020': TC_I2020
}
const TC_Inv = {
    '2020': TC_Inv2020
}
const TC_NX = {
    '2020': TC_NX2020
}
const TC_e = {
    '2020': TC_e2020
}
const TC_DABASE = { //Output del módulo
    '2020': -11.2/100,
}

const TC_PIB = { 
    '2020': PIB[2020]/PIB[2019]-1,
    //Estimado por Banxico
    '2021': 2.2/100,
    '2022': 2/100,
    '2023': 2/100,
    '2024': 2/100,
    '2025': 2/100,
}



// A. Escenario Base SIN estímulo 2020
//Calcular PIB en t
function PIB(t){
    PIB[t] = C[t] + G[t] + I[t] + Inv[t] + NX[t] + e[t];
    // TC_PIB[t] = PIB[t]/PIB[t-1] - 1;
    return PIB[t];
}


function parametersUpdate(t){
    C[t] = C[t-1]*( 1 + TC_C[t]);
    G[t] = G[t-1]*( 1 + TC_G[t]);
    I[t] = I[t-1]*( 1 + TC_I[t]);
    Inv[t] = Inv[t-1]*( 1 + TC_Inv[t]);
    NX[t] = NX[t-1]*( 1 + TC_NX[t]);
    e[t] = e[t-1]*( 1 + TC_e[t]);
}

function estimacionPIBConBaseEnTC(t){
    parametersUpdate(t);
    return C[t] + G[t] + I[t] + Inv[t] + NX[t] + e[t];
}

//B. Cálculo del PIB CON Estímulo 

//Índice Nacional de Pesos al Consumidor
const INPC = {
    '2019': 126652151895488,
    '2020':0,
}

// EF por año
const EF = { 
}

//Exógena
let EFN = 0;

//Multiplicador Estimado por Standard & Poors
const MULT = 1.3; 

function EF(t){
    EF[t] = EFN/INPC[t]
    return EFN/INPC[t];
}

function EF_parametersUpdate(t){
    G[t] = G[t-1]*( 1 + TC_G[t]);
    C[t] = C[t-1]*( 1 + TC_C[t]) + EF(t)*(MULT-1)*( C[t-1]/PIB[t-1] );
    I[t] = I[t-1]*( 1 + TC_I[t]) + EF(t)*(MULT-1)*( I[t-1]/PIB[t-1] );
    Inv[t] = Inv[t-1]*( 1 + TC_Inv[t]) + EF(t)*(MULT-1)*( Inv[t-1]/PIB[t-1] );
    NX[t] = NX[t-1]*( 1 + TC_DABASE[t]);
    e[t] = e[t-1]*( 1 + TC_e[t]) + EF(t)*(MULT-1)*( e[t-1]/PIB[t-1] );
}

//C. PIB Real
function PIBreal(t){ //Output del módulo
    PIB_r[t] = PIB[t-1]*(1+TC_PIB[t]);
    return PIB_r[t];
}

//D. PIB Nominal
function PIBNominal(t){
    PIB_n[t] = PIB[t]*INCP[t]
    return PIB_n[t];
}


//Finanzas Públicas (Módulo 2) D:

const RFSP = {'2019': -2.3/100}
const RFSP_P = {'2019': 1.8/100}
const PCPIB_R = {'2019': 30.2/100}
const PCPIB_R_OIL = {'2019': 1.8/100}
const PCPIB_R_PEMEX = {'2019': 2.2/100}
const PCPIB_R_TAX = {'2019': 14.7/100}
const PCPIB_R_PNF = {'2019': 10/100}
const PCPIB_R_PF = {'2019': 1.5/100}
const PCPIB_E = {'2019': 28.5/100}
const PCPIB_E_CENTRAL = {'2019': 14.5/100}
const PCPIB_E_R28 = {'2019': 3.6/100}
const PCPIB_E_NF = {'2019': 9.5/100}
const PCPIB_E_F = {'2019': 0.8/100}
const PCPIB_CF = {'2019': 4.1/100}
const PCPIB_CF_C = {'2019': 2.6/100}
const PCPIB_CF_O = {'2019': 1.5/100}

// A. Identidades

//Funciones para obtener los valores en pesos reales
function r(t){
    return PCPIB_R[t] * PIB[t];
}

function r_oil(t){
    return PCPIB_R_OIL[t] * PIB[t];
}

function r_pemex(t){
    return PCPIB_R_PEMEX[t] * PIB[t];
}

function r_tax(t){
    return PCPIB_R_TAX[t] * PIB[t];
}

function r_pnf(t){
    return PCPIB_R_PNF[t] * PIB[t];
}

function r_pf(t){
    return PCPIB_R_PF[t] * PIB[t];
}

function E(t){
    return PCPIB_R_E[t] * PIB[t];
}

function e_central(t){
    return PCPIB_E_CENTRAL[t] * PIB[t];
}

function e_r28(t){
    return PIB_E_R28[t] * PIB[t];
}

function e_nf(t){
    return PCPIB_E_NF[t]*PIB[t]
}

function e_f(t){
    return PIB_E_F[t] * PIB[t];
}

function cf(t){
    return PIB_CF[t] * PIB[t];
}

function cf_c(t){
    return PIB_CF_C[t] * PIB[t];
}

function cf_o(t){
    return PIB_CF_O[t] * PIB[t];
}

//Funciones para calcular valores en pesos nominales
function nom_r(t){
    return PCPIB_R[t] * PIB[t]*INCP[t];
}

function nom_r_oil(t){
    return PCPIB_R_OIL[t] * PIB[t]*INCP[t];
}

function nom_r_pemex(t){
    return PCPIB_R_PEMEX[t] * PIB[t]*INCP[t];
}

function nom_r_tax(t){
    return PCPIB_R_TAX[t] * PIB[t]*INCP[t];
}

function nom_r_pnf(t){
    return PCPIB_R_PNF[t] * PIB[t]*INCP[t];
}

function nom_r_pf(t){
    return PCPIB_R_PF[t] * PIB[t]*INCP[t];
}

function nom_e(t){
    return PCPIB_R_E[t] * PIB[t]*INCP[t];
}

function nom_e_central(t){
    return PCPIB_E_CENTRAL[t] * PIB[t]*INCP[t];
}

function nom_e_r28(t){
    return PIB_E_R28[t] * PIB[t]*INCP[t];
}

function nom_e_nf(t){
    return PCPIB_E_NF[t]*PIB[t]*INCP[t];
}

function nom_e_f(t){
    return PIB_E_F[t] * PIB[t]*INCP[t];
}

function nom_cf(t){
    return PIB_CF[t] * PIB[t]*INCP[t];
}

function nom_cf_c(t){
    return PIB_CF_C[t] * PIB[t]*INCP[t];
}

function nom_cf_o(t){
    return PIB_CF_O[t] * PIB[t]*INCP[t];
}

//B. Definiciones 

//Déficit RFS
function rfs(t){
    return r[t]-E[t]-cf[t];
}

//RFSP
function rfsp(t){
    return r[t]-E[t];
}

//Ingresos
function R(t){
    return R_OIL[t]+R_PEMEX[t]+R_TAX[t]+R_PNF[t]+R_PF[t]
}

//Gasto primario
function E(t){
    return PCPIB_E_CENTRAL[t] + PCPIB_E_R28[t] + PCPIB_E_NF[t] + PCPIB_E_F[t];
}

//Costo financiero
function EF(t){
    return CF_C[t]+CF_O[t];
}