import YellowTokenPath from "./YellowTokenPath";
import GreenTokenPath from "./GreenTokenPath";
import BlueTokenPath from "./BlueTokenPath";
import RedTokenPath from "./RedTokenPath";

class Tokens {
    yellowTokenPath = {};
    greenTokenPath = {};
    blueTokenPath = {};
    redTokenPath = {};
    
    Initialize = () => {
        this.PrepareRedTokenPath();
        this.PrepareGreenTokenPath();
        this.PrepareYellowTokenPath();
        this.PrepareBlueTokenPath();
    }

    PrepareYellowTokenPath = () => {
        console.log('initializing yellow tokens');
        this.yellowTokenPath = new YellowTokenPath();
        this.yellowTokenPath.PreparePath();
        // this.yellowTokenPath.Print();
    }
    
    PrepareGreenTokenPath = () => {
        console.log('initializing green tokens');
        this.greenTokenPath = new GreenTokenPath();
        this.greenTokenPath.PreparePath();
        // this.greenTokenPath.Print();
    }
    
    PrepareBlueTokenPath = () => {
        console.log('initializing blue tokens');
        this.blueTokenPath = new BlueTokenPath();
        this.blueTokenPath.PreparePath();
        // this.blueTokenPath.Print();
    }
    
    PrepareRedTokenPath = () => {
        console.log('initializing red tokens');
        this.redTokenPath = new RedTokenPath();
        this.redTokenPath.PreparePath();
        // this.redTokenPath.Print();
    }
}
export default Tokens;