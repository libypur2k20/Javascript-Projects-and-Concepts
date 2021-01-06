////////////////////////////////////////
/* 118. CODING CHALLENGE 8 - SOLUTION */
////////////////////////////////////////

class TownElement {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }

    calculateAge(){
        return (new Date().getFullYear() - this.buildYear);
    }


    static calcArray(arr,avgPrecision){
        
        const total = arr.reduce((total,num) => total + num);
        return [total, (total/arr.length).toFixed(avgPrecision)];
    }


    static streetLengthClassification(size){

        const classificationMap = new Map();
        classificationMap.set(1,'tiny');
        classificationMap.set(2,'small');
        classificationMap.set(3,'normal');
        classificationMap.set(4,'big');
        classificationMap.set(5,'huge');

        if (classificationMap.has(size))
            return classificationMap.get(size);
        else
            return 'unknown';

    }

    static printReport(elementType, elements){
        console.log(`----- ${elementType.toUpperCase()} -----`);

        let statsLine = `Our ${elements.length} ${elementType}`;
        if(elementType === 'streets')
        {
            const [totalLength,avgLength] = TownElement.calcArray(elements.map(el => el.length),3);
            statsLine += ` have a total length of ${totalLength} km, with an average of ${avgLength} km.`;
        }
        else if (elementType === 'parks')
        {
            const [totalAge,avgAge] = TownElement.calcArray(elements.map(el => el.calculateAge()),2);
            statsLine +=  ` have an average age of ${avgAge} years.`;
        }

        console.log(statsLine);

        let has1000MoreTreesString = '';
        for(const el of elements){
            if(elementType === 'streets')
                console.log(`${el.name}, built in ${el.buildYear}, is a ${TownElement.streetLengthClassification(el.size)} street.`);
            else if(elementType === 'parks')
            {
                console.log(`${el.name} has a tree density of ${el.treeDensity()} trees per square km.`);
                if (el.has1000MoreTrees())
                    has1000MoreTreesString += (has1000MoreTreesString.length > 0 ? '\n' : '') + `${el.name} has more than 1000 trees.`;
            }
        }

        if(has1000MoreTreesString.length > 0)
            console.log(has1000MoreTreesString);

    }
};

class Park extends TownElement {

    constructor(name,buildYear,numberOfTrees,area)
    {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    treeDensity(){
        return (this.area === 0 ? 0 : parseFloat((this.numberOfTrees / this.area).toFixed(2)));
    }

    has1000MoreTrees(){
        return (this.numberOfTrees ? (this.numberOfTrees >= 1000) : false);
    }

}

class Street extends TownElement {

    constructor(name,buildYear,length, size = 3)
    {
        super(name,buildYear);
        this.length = length;
        this.size = size;
    }
}

let townElements = new Map();
townElements.set('parks', []);
townElements.set('streets',[]);

townElements.get('parks').push(new Park('Green Park',1974,925,0.5));
townElements.get('parks').push(new Park('National Park',1992,13400,4.5));
townElements.get('parks').push(new Park('Oak Park',1941,1450,1.5));

townElements.get('streets').push(new Street('Ocean Avenue',1999,1.2,4));
townElements.get('streets').push(new Street('Evergreen Street',2008,0.215,2));
townElements.get('streets').push(new Street('4th street',2015,0.72));
townElements.get('streets').push(new Street('Sunset Boulevard',1982,2.3,5));

for(const [key,value] of townElements.entries())
{
    if(value.length > 0)
        TownElement.printReport(key,value);
}
