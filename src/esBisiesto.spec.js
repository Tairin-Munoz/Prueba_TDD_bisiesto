import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como año bisiesto", () => 
{
    expect(esBisiesto(2000)).toEqual(true);
  });


});

