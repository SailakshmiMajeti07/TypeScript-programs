function calculateFinalPriceTraditional(price: number, discountRate: number): number {
    return price - (price * discountRate);
}

const calculateFinalPriceArrow = (price: number, discountRate: number): number => {
    return price - (price * discountRate);
}

const getStoreMessage = (store: string): string => {
    return `Welcome to ${store} Online Store!`;
}

const productPrice: number = 1500;
const discountRate: number = 0.20;

console.log(getStoreMessage("TechMart"));

const finalPrice1 = calculateFinalPriceTraditional(productPrice, discountRate);
console.log("Final Price (Traditional):", `₹${finalPrice1}`);

const finalPrice2 = calculateFinalPriceArrow(productPrice, discountRate);
console.log("Final Price (Arrow):", `₹${finalPrice2}`);