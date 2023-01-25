import {Application, Container, Sprite} from "pixi.js";

export function _01Container():void {
    const app = new Application({
        view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        backgroundColor: 0x6495ed,
        width: 720,
        height: 480
    });

    const conty:Container = makeContainer(300, 0);
    app.stage.addChild(conty);
    const conty2: Container = makeContainer(50, 0);
    app.stage.addChild(conty2);

    const clampy: Sprite = Sprite.from("assets/clampy.png");
    clampy.x = 100;
    clampy.y = 100;
    conty.addChild(clampy);

    const clampy2: Sprite = Sprite.from("assets/clampy.png");
    clampy2.x = 100;
    clampy2.y = 0;
    conty2.addChild(clampy2);

    function makeContainer(x:number, y:number): Container {
        const conty: Container = new Container();
        conty.x = x;
        conty.y = y;
        return conty;
    }
}
