/*ADD personalization, "Thank you Mary, for shopping"
Add choice 1:an option to go back to shopping once logged in and stay logged in,
         Need sticky values in product display
         Add a button "continue shopping"
    Choice 2: send back to product display but log out. 
                no user sticky data for user id and values purchased
                ass a button "logout"
Add Logout functionality aafter purchase validation
         


*/



// Get the URL
let params = (new URL(document.location)).searchParams;


// On load, if there is no 'valid' key, redirect the user back to the Home page
window.onload = function() {
    if (!params.has('valid')) {
        document.write(`
            <head>
                <link rel="stylesheet" href="syle.css">
            </head>
            <body style="text-align: center; margin-top: 10%;">
                <h2>ERROR: No form submission detected.</h2>
                <h4>Return to <a href="index.html">Home</a></h4> 
            </body>
        `)
    }else {  //assignment 2 addition that personalizes shopping experience.
        document.getElementById('helloMsg').innerHTML = `Thank you ${params.get('name')}!`
    }
}

let subtotal = 0;

let qty = [];

for (let i in products) {
    qty.push(params.get(`qty${i}`));
}

for (let i in qty) {
    if (qty[i] == 0 || qty[i] == '') continue;

    extended_price = (params.get(`qty${i}`) * products[i].Price).toFixed(2);
    subtotal += Number(extended_price);

    document.querySelector('#invoice_table').innerHTML += `
        <tr style="border: none;">
            <td width="10%"><img src="${products[i].Image}" alt="${products[i].alt}" class="img-thumbnail" style="border-radius: 5px; width: 10px; height: 15px;"></td>
            <td>${products[i].Make}</td>
            <td>${products[i].Model}</td>
            <td>${products[i].Year}</td>
            <td>${qty[i]}</td>
            <td>${products[i].qty_available}</td>
            <td>$${products[i].Price.toFixed(2)}</td>
            <td>$${extended_price}</td>
        </tr>
    `;
}

// Sales tax
let tax_rate = (4.7/100);
let tax_amt = subtotal * tax_rate;

// Shipping
if (subtotal < 300) {
    shipping = 5;
    shipping_display = `$${shipping.toFixed(2)}`;
    total = Number(tax_amt + subtotal + shipping);
}
else if (subtotal >= 1500 && subtotal < 3000) {
    shipping = 250;
    shipping_display = `$${shipping.toFixed(2)}`;
    total = Number(tax_amt + subtotal + shipping);
}
else {
    shipping = 0;
    shipping_display = 'FREE';
    total = Number(tax_amt + subtotal + shipping);
}

document.querySelector('#total_display').innerHTML += `
    <tr style="border-top: 2px solid black;">
        <td colspan="5" style="text-align:center;">Sub-total</td>
        <td>$${subtotal.toFixed(2)}</td>
    </tr>
    <tr>
        <td colspan="5" style="text-align:center;">Tax @ ${Number(tax_rate) * 100}%</td>
        <td>$${tax_amt.toFixed(2)}</td>
    </tr>
    <tr>
        <td colspan="5" style="text-align:center;">Shipping</td>
        <td>${shipping_display}</td>
    </tr>
    <tr>
        <td colspan="5" style="text-align:center;"><b>Total</td>
        <td><b>$${total.toFixed(2)}</td>
    </tr>
`;

