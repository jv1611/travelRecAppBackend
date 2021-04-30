var table = module.exports = require('azure-mobile-apps').table();

table.read(function (context) {
    return context.execute();
});

table.insert(function (context) {
    // voorbeeld hieronder straks weghalen
    // context.item.createdAt = DateTime(); // zou moeten werken
    return context.execute();
});

table.update(function (context) {
    return context.execute();
});

table.delete(function (context) {
    return context.execute();
});