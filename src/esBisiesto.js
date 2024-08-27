/*function esBisiesto (anio)
{
    if (anio % 400 === 0)
    {
        return true;
    }
    return false;
}*/



function esBisiesto (anio)
{
    if (anio % 100 === 0 && anio % 4 ===0)
    {
        return false;
    }
    else if (anio % 4 === 0)
    {
        return true;
    }
    
}

export default esBisiesto;