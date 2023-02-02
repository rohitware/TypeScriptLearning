interface IProduct {
    id: number;
    name: string;
    description: string;
    price?: number;
    display(): number; // only declaration 
}


class Product implements IProduct {
    id: number;
    name: string;
    description: string;
    price?: number | undefined;
    display(): number {
        throw new Error("Method not implemented.");
    }

}


// abstarct class ad interface 

// abstarct class have abstarct method or non abstarct method.
// we have only abstarct method.


// 

interface IPrint {
    print(): void;
}

class EXCEL implements IPrint {
    print(): void {
        console.log('EXCEL');
    }

}

class DOC implements IPrint {
    print(): void {
        console.log("DOC");
    }

}

class PDF implements IPrint {
    print(): void {
        console.log("PDF");
    }

}

let objEXCEL = new EXCEL();
objEXCEL.print();