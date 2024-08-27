import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
    /*it("El 2000 deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(2000)).toEqual(true);
    });*/

    it("El 1700 no deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(1700)).toEqual(false);
    });
    it("El 1800 no deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(1800)).toEqual(false);
    });
    it("El 1900 no deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(1900)).toEqual(false);
    });
    it("El 2100 no deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(2100)).toEqual(false);
    });

    it("El 2008 deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(2008)).toEqual(true);
    });
    it("El 2012 deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(2012)).toEqual(true);
    });
    it("El 2016 deberia considerarse como año bisiesto", () => 
    {
         expect(esBisiesto(2016)).toEqual(true);
    });
/*
    it("El 1700 no deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(1700)).toEqual(false);
    });
    it("El 1800 no deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(1800)).toEqual(false);
    });
    it("El 1900 no deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(1900)).toEqual(false);
    });
    it("El 2100 no deberia considerarse como año bisiesto", () => 
    {
        expect(esBisiesto(2100)).toEqual(false);
    });*/
});

