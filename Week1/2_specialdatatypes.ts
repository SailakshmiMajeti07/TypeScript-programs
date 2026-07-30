let productInfo: any = 500;
productInfo = "Wireless Mouse";
productInfo = false;

let inputValue: unknown = "TypeScript Programming";

if (typeof inputValue === "string") {
    console.log("Length of the text:", inputValue.length);
}

function showMessage(message: string): void {
    console.log("MESSAGE:", message);
}

showMessage("Product details loaded successfully!");