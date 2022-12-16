export async function CreatePayment (product: any)
  { 
    const itemsJson = []

    itemsJson.push({
      title: product.attributes.name,
      quantity: 1,
      currency_id: "BRL",
      unit_price: product.attributes.precoAtual,
    })

    let mercadoPagoPost = {
      notification_url: "https://patrickanywhere.pythonanywhere.com/webhook",
      external_reference: "31353512ABC",
      items: itemsJson
    };

    //APP_USR-8275282535268600-062615-9116c5dd6b18a48dc20f464f66351da6-205053078
    //TEST-8275282535268600-062615-73f2c867d47c674f101605ada8c4ad7d-205053078
    //https://api.mercadopago.com/checkout/preferences?access_token=
    if (JSON.stringify(product) == "[]") return;

    var result = await fetch('https://api.mercadopago.com/checkout/preferences?access_token=TEST-8275282535268600-062615-73f2c867d47c674f101605ada8c4ad7d-205053078', 
                              {
                                method:'POST',
                                body: JSON.stringify(mercadoPagoPost),
                                headers: {
                                  'Content-Type': 'application/json'
                                }
                              })

    const data = await result.json();
    return data;
  }