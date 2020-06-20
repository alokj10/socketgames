import Tokens from "../../common/Tokens"
import YellowTokenPath from "../../common/YellowTokenPath";
import BlueTokenPath from "../../common/BlueTokenPath";
import RedTokenPath from "../../common/RedTokenPath";
import GreenTokenPath from "../../common/GreenTokenPath";

describe('Tokens tests', () => {
    test('initialize all tokens', () => {
        let token = new Tokens();
        token.Initialize();
    })

    test('initialize all tokens', () => {
        let token = new Tokens();
        token.Initialize();
        expect(token.yellowTokenPath.path.size).toBe(57);
        expect(token.redTokenPath.path.size).toBe(57);
        expect(token.blueTokenPath.path.size).toBe(57);
        expect(token.greenTokenPath.path.size).toBe(57);
    })

    test('yellow token path validation', () => {
        let token = new Tokens();
        token.PrepareYellowTokenPath();
        expect(token.yellowTokenPath).toBeInstanceOf(YellowTokenPath);
        let path = token.yellowTokenPath.path;
        expect(path.head.data.position).toBe('Y1');
        let yellowPath = token.yellowTokenPath.GetYellowTokenPath();
        let tail = path.head;
        yellowPath.map((item, index) => {
            let { position } = tail.data;
            expect(position).toBe(item);
            // console.log(`position: ${position}`);
            tail = tail.next;
        })
    })
    
    test('blue token path validation', () => {
        let token = new Tokens();
        token.PrepareBlueTokenPath();
        expect(token.blueTokenPath).toBeInstanceOf(BlueTokenPath);
        let path = token.blueTokenPath.path;
        expect(path.head.data.position).toBe('B1');
        let bluePath = token.blueTokenPath.GetBlueTokenPath();
        let tail = path.head;
        bluePath.map((item, index) => {
            let { position } = tail.data;
            expect(position).toBe(item);
            // console.log(`position: ${position}`);
            tail = tail.next;
        })
    })
    
    test('red token path validation', () => {
        let token = new Tokens();
        token.PrepareRedTokenPath();
        expect(token.redTokenPath).toBeInstanceOf(RedTokenPath);
        let path = token.redTokenPath.path;
        expect(path.head.data.position).toBe('R1');
        let redPath = token.redTokenPath.GetRedTokenPath();
        let tail = path.head;
        redPath.map((item, index) => {
            let { position } = tail.data;
            expect(position).toBe(item);
            // console.log(`position: ${position}`);
            tail = tail.next;
        })
    })
    
    test('green token path validation', () => {
        let token = new Tokens();
        token.PrepareGreenTokenPath();
        expect(token.greenTokenPath).toBeInstanceOf(GreenTokenPath);
        let path = token.greenTokenPath.path;
        expect(path.head.data.position).toBe('G1');
        let greenPath = token.greenTokenPath.GetGreenTokenPath();
        let tail = path.head;
        greenPath.map((item, index) => {
            let { position } = tail.data;
            expect(position).toBe(item);
            // console.log(`position: ${position}`);
            tail = tail.next;
        })
    })
})