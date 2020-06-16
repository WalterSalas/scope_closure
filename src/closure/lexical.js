const bulidCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};

const myCount = bulidCount(1);
const myOtherCount = bulidCount(10);

myOtherCount();
myCount();
myOtherCount();
myCount();
myOtherCount();
myCount();