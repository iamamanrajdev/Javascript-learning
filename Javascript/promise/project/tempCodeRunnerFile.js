
placeOrder(cart , (order)=>{
    preparingOrder(order , (foodDetails)=>{
        pickupOrder(foodDetails, (droplocation)=>{
            deliverOrder(droplocation);
        });
    })
});