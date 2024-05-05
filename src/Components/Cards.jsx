import { useState } from "react";

export default function Cards({ money, setMoney }) {
    const [Products, setProducts] = useState([
        {
            id: 1,
            name: "Big Mac",
            image: "https://neal.fun/spend/images/big-mac.jpg",
            price: 2,
            quantity: 0,
        },
        {
            id: 2,
            name: "Flip Flops",
            image: "https://neal.fun/spend/images/flip-flops.jpg",
            price: 3,
            quantity: 0,
        },
        {
            id: 3,
            name: "Coca Cola Pack",
            image: "https://neal.fun/spend/images/coca-cola-pack.jpg",
            price: 20,
            quantity: 0,
        },
        {
            id: 4,
            name: "Movie Ticket",
            image: "https://neal.fun/spend/images/movie-ticket.jpg",
            price: 12,
            quantity: 0,
        },
        {
            id: 5,
            name: "Book",
            image: "https://neal.fun/spend/images/book.jpg",
            price: 15,
            quantity: 0,
        },
        {
            id: 6,
            name: "Video Game",
            image: "https://neal.fun/spend/images/video-game.jpg",
            price: 60,
            quantity: 0,
        },
        {
            id: 7,
            name: "Amazon Echo",
            image: "https://neal.fun/spend/images/amazon-echo.jpg",
            price: 99,
            quantity: 0,
        },
        {
            id: 8,
            name: "Year Of Netflix",
            image: "https://neal.fun/spend/images/year-of-netflix.jpg",
            price: 100,
            quantity: 0,
        },
        {
            id: 9,
            name: "Air Jordens",
            image: "https://neal.fun/spend/images/air-jordans.jpg",
            price: 125,
            quantity: 0,
        },
    ]);

    function CalcMoney(product, value, isDeleted) {
        const prevQuantity = product.quantity;
        const quantityDiff = value - prevQuantity;

        // Toplam fiyatı hesapla
        const totalCost = product.price * Math.abs(quantityDiff);

        if (prevQuantity > value) {
            const total = (prevQuantity - value) * product.price;
            setMoney(money + total);
        } else {
            setMoney(money - totalCost);
        }

        // Ürün miktarını güncelle
        product.quantity = value;
    }

    return (
        <div className="grid grid-cols-3 mt-6 gap-[6px] mb-10 box-border">
            {Products.map((product, index) => (
                <div
                    key={index}
                    className="gap-y-3 items-center flex-col justify-center flex min-w-[316px] min-h-[320px] bg-white border border-zinc-200"
                >
                    <img className="h-32" src={product.image} alt="" />
                    <h2 className="font-bold text-xl">{product.name}</h2>
                    <p className="text-green-500 text-xl font-extrabold">${product.price}</p>

                    <div className="flex-col flex gap-y-2">
                        <input
                            min={0}
                            type="number"
                            value={product.quantity}
                            onChange={(e) => CalcMoney(product, parseInt(e.target.value), false)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
