function ProductDataConsolidator() { }

ProductDataConsolidator.get = function () {
   
    var repositories = [
        { repository: new LawnmowerRepository(), type: "Lawnmower" },
        { repository: new PhoneCaseRepository(), type: "Phone Case" },
        { repository: new TShirtRepository(), type: "T-Shirt" }
    ]
    return repositories;
}

ProductDataConsolidator.getRepository = function(){
    var products = [];
    ProductDataConsolidator.get().forEach(function (repo) {
        var items = repo.repository.getAll();
        var detailArray = [];
        //console.log(items);
        items.forEach(function (item) {
            products.push({
                id: item.id,
                name: item.name,
                type: repo.type,
                price:item.price,
                price_nzd: ProductDataConsolidator.convertCurrency(item.price,"NZD"),
                price_usd: ProductDataConsolidator.convertCurrency(item.price,"USD"),
                price_euro: ProductDataConsolidator.convertCurrency(item.price,"EUR")
            
            });
        });
    });
    return products;
}

ProductDataConsolidator.convertCurrency = function (price, currency) {
    var conversionRate = 1;
    if (currency === "USD") {
        conversionRate = 0.76;
    }
    if (currency === "EUR") {
        conversionRate = 0.67;
    }
    var getPrice =  (price * conversionRate).toFixed(2);
    return getPrice;
}




