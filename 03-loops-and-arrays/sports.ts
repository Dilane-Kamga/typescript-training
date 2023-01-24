let sports: string[] = ["Football", "Handball", "Gym", "Running"];

for (let sport of sports){
    if (sport == "Running"){
        console.log(`${sport} <<< My Favorite`);
    }
    else {
        console.log(sport);
    }
}