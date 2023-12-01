function degree(hour,mini)
{
    if(mini>6){
        mini -=12;
    }
    console.log(mini*60);
}
degree(3,12)