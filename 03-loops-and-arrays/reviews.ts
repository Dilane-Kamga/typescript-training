let reviews: number[] = [4, 4.5, 5, 4, 3.5];

let total: number = 0;

for(let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}

let average = total / reviews.length;

console.log(`The average review is ${average}`);