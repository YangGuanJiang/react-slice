export const pics = [
    {id: 1, pic : "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"},
    {id: 2, pic : "https://cnet2.cbsistatic.com/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"},
    {id: 3, pic : "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"},
    {id: 4, pic : "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?cs=srgb&dl=pexels-pixabay-207962.jpg&fm=jpg"},
    {id: 5, pic : "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400"},
    {id: 6, pic : "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg"}
];
export const getPictures = (n) => {
    let promises = [];
    for(let i = 0; i < n; i++) {
        promises.push(fetch(`https://source.unsplash.com/random/${ i }`).then(res => res.url))
    }
    return promises;
}

