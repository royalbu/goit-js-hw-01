function getElementWidth(content, padding, border) {
    return (Number.parseFloat(content) + 2 * Number.parseFloat(padding) + 2 * Number.parseFloat(border));
};

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


// Like task-1 & task-2
function getElementWidth2(content2, padding2, border2) {
    const totalWidth2 = Number.parseFloat(content2) + 2 * Number.parseFloat(padding2) + 2 * Number.parseFloat(border2);
    return `Total width of your object is ${totalWidth2}px`;
};

console.log(getElementWidth2("56px", "18px", "12.5px")); // 74
console.log(getElementWidth2("60px", "22px", "8.5px")); // 101
console.log(getElementWidth2("420px", "3.5px", "6px")); // 200
