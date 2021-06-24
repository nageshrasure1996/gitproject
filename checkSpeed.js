checkSpeed(74);
function checkSpeed(speed){
    const speedLimit=70;
    const kmPerPoint=5;
    if(speed<speedLimit+kmPerPoint)
    console.log('ok');
    else{
        let points=(speed-speedLimit)/kmPerPoint;
        if(points>=12)
            console.log('license suspended');
        else
            console.log('points', points);
    }
}