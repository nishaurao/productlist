function ProductDataRenderer() { }

ProductDataRenderer.prototype.render = function () {
  var renderTable = function (currency) {

    var table = '<table class="table">'+
                '<thead class="bg-light">'+
                '<tr class="border-0">'+
                '<th class="border-0">#</th>'+
                '<th class="border-0">Image</th>'+
                '<th class="border-0">Name</th>'+
                '<th class="border-0">Type</th>'+
                '<th class="border-0">Price (NZD)</th>'+
                '<th class="border-0">Price (USD)</th>'+
                '<th class="border-0">Price (EURO)</th>'+
                '</thead>';
    
    var products = ProductDataConsolidator.getRepository();
    var id = 1;
    var productImage = ['lawnmover.jpg','lawnmover1.jpeg','lawnmover2.jpg','phone_case2.jpg','phone_case3.jpg',
    'shirt1.jpg','shirt2.png','shirt3.jpg'];
    for (var i = 0; i < products.length; i++) {
      table +=
        '<tr>' +
        '<td>' + id + '</td>' +
        '<td><img src="./assets/images/'+productImage[i]+ '" alt="" ></td>'+
        '<td>' + products[i].name + '</td>' +
        '<td>' + products[i].type + '</td>' +
        '<td>' + products[i].price_nzd + '</td>' +
        '<td>' + products[i].price_usd + '</td>' +
        '<td>' + products[i].price_euro + '</td>' +
        '</tr>';
        id++;
    }
    table += '</tbody></table>';
    return table;
  };
  document.getElementById("productslist").innerHTML = renderTable();
}

