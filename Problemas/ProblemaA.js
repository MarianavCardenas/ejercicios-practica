 let dineroRoberto= prompt (`cuanto dinero tiene roberto ?`)
 let dineroPedro= prompt (`cuanto dinero tiene Pedro ?`)
 let dineroCofla= prompt (`cuanto dinero tiene Cofla ?`)

 dineroCofla = parseInt (dineroCofla);

 if (dineroCofla >= 0.6 && dineroCofla<1) {document.write (`Cofla:Palito de helado de agua y te sobran ${dineroCofla - 0.6}`)}
    else if (dineroCofla >= 1 && dineroCofla<1.6) {document.write (`Cofla:Palito de helado de crema y te sobran ${dineroCofla - 1}`)}
    else if (dineroCofla >= 1.6 && dineroCofla<1.7) {document.write (`Cofla:Palito de helado marca Heladix y te sobran ${dineroCofla - 1.6}`)}
    else if (dineroCofla >= 1.7 && dineroCofla<1.8) {document.write (`Cofla:Palito de helado marca Heladovich y te sobran ${dineroCofla - 1.7}`)}
    else if (dineroCofla >= 1.8 && dineroCofla<2.9) {document.write (`Cofla:Palito de helado marca Helardo y te sobran ${dineroCofla - 1.8}`)}
    else if (dineroCofla >= 2.9) {document.write (`Cofla:Potecito de helado con confites o Pote de 1/4 kg y te sobran ${dineroCofla-2.9 }`)}
    else {document.write (`Cofla:No te alcanza para comprar nada, rata`)}

 document.write("<br>");

 if (dineroRoberto >= 0.6 && dineroRoberto<1) {document.write (`Roberto:Palito de helado de agua y te sobra ${dineroRoberto - 0.6}`)}
    else if (dineroRoberto >= 1 && dineroRoberto<1.6) {document.write (`Roberto:Palito de helado de crema y te sobra ${dineroRoberto - 1}`)}
    else if (dineroRoberto >= 1.6 && dineroRoberto<1.7) {document.write (`Roberto:Palito de helado marca Heladix y te sobra ${dineroRoberto - 1.6}`)}
    else if (dineroRoberto >= 1.7 && dineroRoberto<1.8) {document.write (`Roberto:Palito de helado marca Heladovich y te sobra ${dineroRoberto - 1.7}`)}
    else if (dineroRoberto >= 1.8 && dineroRoberto<2.9) {document.write (`Roberto:Palito de helado marca Helardo y te sobra ${dineroRoberto - 11.8}`)}
    else if (dineroRoberto >= 2.9) {document.write (`Roberto:Potecito de helado con confites o Pote de 1/4 kg y te sobra ${dineroRoberto - 2.9}`)}
    else {document.write (`Roberto:No te alcanza para comprar nada, rata`)}

document.write("<br>")

if (dineroPedro >= 0.6 && dineroPedro<1) {document.write (`Pedro:Palito de helado de agua y te sobran ${dineroPedro - 0.6}`)}
    else if (dineroPedro >= 1 && dineroPedro<1.6) {document.write (`Pedro:Palito de helado de crema y te sobran ${dineroPedro - 1}`)}
    else if (dineroPedro >= 1.6 && dineroPedro<1.7) {document.write (`Pedro:Palito de helado marca Heladix y te sobran ${dineroPedro - 1.6}`)}
    else if (dineroPedro >= 1.7 && dineroPedro<1.8) {document.write (`Pedro:Palito de helado marca Heladovich y te sobran ${dineroPedro - 1.7}`)}
    else if (dineroPedro >= 1.8 && dineroPedro<2.9) {document.write (`Pedro:Palito de helado marca Helardo y te sobran ${dineroPedro - 1.68}`)}
    else if (dineroPedro >= 2.9) {document.write (`Pedro:Potecito de helado con confites o Pote de 1/4 kg y te sobran ${dineroPedro - 2.9}`)}
    else {document.write (`Pedro:No te alcanza para comprar nada,rata`)}
