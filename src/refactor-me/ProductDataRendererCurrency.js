function ProductDataRendererCurrency() { }

ProductDataRendererCurrency.prototype.render = function () {
  var renderTable = function (currency) {

    var table = '<table class="table">'+
                '<thead class="bg-light">'+
                '<tr class="border-0">'+
                '<th class="border-0">#</th>'+
                '<th class="border-0">Name</th>'+
                '<th class="border-0">Type</th>'+
                '<th class="border-0">Price</th>'+
                '</thead>';
    
    var products = ProductDataConsolidator.getRepository();
    var id = 1;

    var currencyList = ["NZD","USD","EURO"];
    currencyList.forEach((currency) => {
      var id = 1;
    //for (var i = 0; i < products.length; i++) {
     
      table +='<tr> <td colspan="4" class="font-weight-bold"> Currency ('+ currency+ ')</td></tr>';
        for (var i = 0; i < products.length; i++) {
       table +='<tr>' +
        '<td>' + id + '</td>' +
        '<td>' + products[i].name + '</td>' +
        '<td>' + products[i].type + '</td>' +
        '<td>' + ProductDataConsolidator.convertCurrency(products[i].price,currency) + '</td>' +
        '</tr>';
        id++;
    } })
    table += '</tbody></table>';
    return table;
  };

  document.getElementById("productslistcurrency").innerHTML = renderTable();
}