import LinkedList from "./LinkedList";

class RedTokenPath {

    path = {};

    constructor() {
        this.path = new LinkedList();
    }

    PreparePath = () => {
        RPath.map((pathItem, pathIndex) => {
            let data = {
                position: pathItem,
            }
            this.path.InsertToTail(data);
        })
    }
    
    Print = () => {
        this.path.Print();
    }
    
    GetRedTokenPath = () => {
        return RPath;
    }
}
export default RedTokenPath;

const RPath = [
    "R1","R2","R3","R4","R5",
    "G6","G7","G8","G9","G10","G11",
    "G12",
    "G0","G1","G2","G3","G4","G5",
    "Y6","Y7","Y8","Y9","Y10","Y11",
    "Y12",
    "Y0","Y1","Y2","Y3","Y4","Y5",
    "B6","B7","B8","B9","B10","B11",
    "B12",
    "B0","B1","B2","B3","B4","B5",
    "R6","R7","R8","R9","R10","R11",
    "R12",
    "R13","R14","R15","R16","R17","R18"
];
