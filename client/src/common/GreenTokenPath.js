import LinkedList from "./LinkedList";

class GreenTokenPath {

    path = {};

    constructor() {
        this.path = new LinkedList();
    }
    
    PreparePath = () => {
        GPath.map((pathItem, pathIndex) => {
            let data = {
                position: pathItem,
            }
            this.path.InsertToTail(data);
        })
    }
    
    Print = () => {
        this.path.Print();
    }
    
    GetGreenTokenPath = () => {
        return GPath;
    }
}
export default GreenTokenPath;

const GPath = [
    "G1","G2","G3","G4","G5",
    "Y6","Y7","Y8","Y9","Y10","Y11",
    "Y12",
    "Y0","Y1","Y2","Y3","Y4","Y5",
    "B6","B7","B8","B9","B10","B11",
    "B12",
    "B0","B1","B2","B3","B4","B5",
    "R6","R7","R8","R9","R10","R11",
    "R12",
    "R0","R1","R2","R3","R4","R5",
    "G6","G7","G8","G9","G10","G11",
    "G12",
    "G13","G14","G15","G16","G17","G18"
];
