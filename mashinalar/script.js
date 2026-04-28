
const firma = {
    nomi: "Chevrolet",
    logo: "chevrolet_logo.png",
    moshinalar: [
        {
            name: "Gentra",
            category: { id: 1, name: "Sedan" },
            brand: { name: "Chevrolet", id: 10, img: "logo.png" },
            price: 13000,
            color: "Oq",
            bak_oil: "60L",
            weight: "1245kg",
            long: "4515mm",
            guarantiya: "1 yil",
            hp: 105,
            max_speed: 180,
            img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400"
        },
        {
            name: "Malibu 2",
            category: { id: 1, name: "Sedan" },
            brand: { name: "Chevrolet", id: 10, img: "logo.png" },
            price: 28000,
            color: "Qora",
            bak_oil: "62L",
            weight: "1450kg",
            long: "4923mm",
            guarantiya: "3 yil",
            hp: 250,
            max_speed: 250,
            img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400"
        },
        {
            name: "Tahoe",
            category: { id: 2, name: "SUV" },
            brand: { name: "Chevrolet", id: 10, img: "logo.png" },
            price: 80000,
            color: "Kulrang",
            bak_oil: "98L",
            weight: "2500kg",
            long: "5350mm",
            guarantiya: "5 yil",
            hp: 420,
            max_speed: 200,
            img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400"
        },
        {
        name: "Cobalt 1",
    categoriya: "Sedan",
    brand: "Chevrolet",
    speed_100hp: "11.2s",
    price: 14500,
    color: "White",
    bak_oil: "45L",
    weight: "1085kg",
    long: "4479mm",
    guarantiya: "3 years",
    hp: 106,
    max_speed: "170 km/h",
    img:"https://uz.kursiv.media/wp-content/uploads/2025/10/photo_2025-10-14_11-21-01-1280x720.jpg"
        }
    ]
};

function firmagaKirish() {
    const joy = document.getElementById("maydon");
    joy.innerHTML = ""; 

    firma.moshinalar.forEach(moshina => {
        joy.innerHTML += `
            <div class="karta">
                <img src="${moshina.img}" class="rasm">
                <h3>${moshina.name}</h3>
                <p><b>Kategoriya:</b> ${moshina.category.name}</p>
                <p><b>Narxi:</b> $${moshina.price}</p>
                <p><b>Rangi:</b> ${moshina.color}</p>
                <p><b>Bak:</b> ${moshina.bak_oil}</p>
                <p><b>Vazni:</b> ${moshina.weight}</p>
                <p><b>Uzunligi:</b> ${moshina.long}</p>
                <p><b>Kafolat:</b> ${moshina.guarantiya}</p>
                <p><b>Ot kuchi:</b> ${moshina.hp} hp</p>
                <p><b>Tezligi:</b> ${moshina.max_speed} km/h</p>
            </div>
        `;
    });
}