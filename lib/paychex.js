/*
 * Paychex
 * https://github.com/GMali/paychex
 *
 * Copyright (c) 2014 Gaurav Mali
 * Licensed under the MIT license.
 */

'use strict';

// Dependencies
var _         = require("underscore"),
    PDFParser = require("pdf2json/pdfparser");


/**
 * @class
 */
var Paychex = module.exports = function Paychex( file ){
    this.parsePDF(file);
};

/**
 * Event handler on successful PDF parsing
 * @param  {JSON} parsedData a big, ugly chunk of JSON data that is unreadable
 */
Paychex.prototype.onParseSuccess = function( parsedData ) {
    var texts = parsedData.data.Pages[0].Texts;
    var words = _.chain(texts)
        .pluck('R')
        .flatten()
        .pluck('T')
        .map(function(word) { return decodeURIComponent(word); })
        .value();

    console.log(words);
};

/**
 * Event handler on for PDF parsing gone wrong
 * @param  {JSON} error
 */
Paychex.prototype.onParseError = function( error ) {
    console.error("Paychex: Library pdf2json threw an error");
    console.error(error.data);
};


/**
 * Parses a Paychex's PDF file into JSON format
 * @param  {String} file Relative path for the PDF file
 */
Paychex.prototype.parsePDF = function( file ) {
    var pdfParser = new PDFParser();
    pdfParser.on("pdfParser_dataReady", this.onParseSuccess);
    pdfParser.on("pdfParser_dataError", this.onParseError);
    pdfParser.loadPDF(file);
};
