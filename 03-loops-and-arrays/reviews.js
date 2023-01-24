var reviews = [4, 4.5, 5, 4, 3.5];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("The average review is ".concat(average));
