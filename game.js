let piano = 0;
let base = 0;
let horn = 0;
let strings = 0;
let bottle = 0;
class StartRoom extends AdventureScene {
    constructor() {
        super("StartRoom", "Put Your Mouse Over The Bottle");
    }

    onEnter() {
        
        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "🍾 Empty bottle")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I wonder if you can blow air into it and make a sound?"))
            .on('pointerdown', () => {
                this.lilGuy();
                this.playSound(0,0,0,0,1,0);
                this.showMessage("What a pretty song. I wonder if we can add anything to it?");
                this.gainItem('🍾 Empty bottle');
                bottle = 1;
                this.tweens.add({
                    targets: clip,
                    y: '+=' + this.s/2,
                    repeat: 6,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 500
                });
            });
            let speaker = this.add.text(this.w * 0.4, this.h * 0.9, "🚪 A Live Performance Hall")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Make Sure you have found all the instruments before you try to perform");
            })
            .on('pointerdown', () => {
                if (this.hasItem("🍾 Empty bottle")&&this.hasItem("🎸 A bass")&&this.hasItem("🎻🎻🎻 A full orchestra")&&this.hasItem("🎺 A Horn")&&this.hasItem("🎻 A Sigle Violin")) {
                    this.playSound(0,0,0,0,0,1);
                    this.gotoScene('Outro');
                }
                else {(this.showMessage("You dont have enough Instruments to perform yet"));
            }
            });
            //Phaser.Math.Between(1, 2);
            let baseDoor = this.add.text(this.w * 0.55, this.h * .5, "🚪 Based door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Lets go find some instruments?");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('BaseRoom');
                
            });
            let hornyDoor = this.add.text(this.w * 0.05, this.h * 0.5, "🚪 Horned door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Lets go find some instruments?");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('HornRoom');
                
            });
            let pianoDoor = this.add.text(this.w * 0.25, this.h * 0.05, "🚪 A door to a large room")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Lets go find some instruments?");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('PianoRoom');
                
            });
            let violinDoor = this.add.text(this.w * 0.05, this.h * 0.9, "🚪 A lonely Door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Lets go find some instruments?");
            })
            .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('ViolinRoom');
                
            });
    }
}

class BaseRoom extends AdventureScene {
    constructor() {
        super("BaseRoom", "WOW A BASS!!.");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "🎸 A smooth bass!")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.playSound(0,1,0,0,0,0);
                this.gainItem("🎸 A bass");
                base = 1;
            });

        let finish = this.add.text(this.w * 0.55, this.h * 0.1, '🔊 A Speaker')
            .setFontSize(36)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('Maybe it will play all your instruments for you');
            })
            .on('pointerdown', () => {
                if (piano+base+horn+strings+bottle == 0){
                    this.showMessage('You dont got any instruments big fella');
                }
                else {
                    this.lilGuy();
                    this.showMessage('MMMM thats GROOOOVY!');
                    this.playSound(piano,base,horn,strings,bottle,0);
                }
            });
        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 A door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Lets go Back?");
            })
            .on('pointerdown', () => {
                this.gotoScene('StartRoom');
                
            });
    }
}

class PianoRoom extends AdventureScene {
    constructor() {
        super("PianoRoom", "The whole gang is here");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "🎻🎻🎻 A full orchestra")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Try playing them.");
            })
            .on('pointerdown', () => {
                this.playSound(1,0,0,0,0,0);
                this.gainItem("🎻🎻🎻 A full orchestra");
                piano = 1;
            });

        let finish = this.add.text(this.w * 0.55, this.h * 0.1, '🔊 A Speaker')
            .setFontSize(36)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('Maybe it will play all your instruments for you');
            })
            .on('pointerdown', () => {
                if (piano+base+horn+strings+bottle == 0){
                    this.showMessage('You dont got any instruments big fella');
                }
                else {
                    this.lilGuy();
                    this.showMessage('MMMM thats GROOOOVY!');
                    this.playSound(piano,base,horn,strings,bottle,0);
                }
            });
        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 A door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Lets go Back?");
            })
            .on('pointerdown', () => {
                this.gotoScene('StartRoom');
                
            });
    }
}
class HornRoom extends AdventureScene {
    constructor() {
        super("HornRoom", "Wow that a Horn");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "🎺 A Horn")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Try playing them.");
            })
            .on('pointerdown', () => {
                this.playSound(0,0,1,0,0,0);
                this.gainItem("🎺 A Horn");
                horn = 1;
            });

        let finish = this.add.text(this.w * 0.55, this.h * 0.1, '🔊 A Speaker')
            .setFontSize(36)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('Maybe it will play all your instruments for you');
            })
            .on('pointerdown', () => {
                if (piano+base+horn+strings+bottle == 0){
                    this.showMessage('You dont got any instruments big fella');
                }
                else {
                    this.lilGuy();
                    this.showMessage('MMMM thats GROOOOVY!');
                    this.playSound(piano,base,horn,strings,bottle,0);
                }
            });
        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 A door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Lets go Back?");
            })
            .on('pointerdown', () => {
                this.gotoScene('StartRoom');
                
            });
    }
}
class ViolinRoom extends AdventureScene {
    constructor() {
        super("ViolinRoom", "Just a lonely guy and his violin.");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "🎻 A Sigle Violin")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Try playing them.");
            })
            .on('pointerdown', () => {
                this.playSound(0,0,0,1,0,0);
                this.gainItem("🎻 A Sigle Violin");
                strings = 1;
            });

        let finish = this.add.text(this.w * 0.55, this.h * 0.1, '🔊 A Speaker')
            .setFontSize(36)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('Maybe it will play all your instruments for you');
            })
            .on('pointerdown', () => {
                this.lilGuy();
                if (piano+base+horn+strings+bottle == 0){
                    this.showMessage('You dont got any instruments big fella');
                }
                else {
                    this.showMessage('MMMM thats GROOOOVY!');
                    this.playSound(piano,base,horn,strings,bottle,0);
                }
            });
        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 A door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Lets go Back?");
            })
            .on('pointerdown', () => {
                this.gotoScene('StartRoom');
                
            });
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.cameras.main.setBackgroundColor('#145000');
        this.add.text(50,50, "Composition Crusaders").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.add.text(50,200, "This is an audio based game. ").setFontSize(40);
        this.add.text(50,250, "If you want to have fun use headphones").setFontSize(40);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('StartRoom'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
      super('Outro');
    }
  
    preload() {
      this.load.image('lilGuy', 'audio/HeadGuy.png');
    }
  
    lilGuy() {
      const w = this.game.config.width;
      const h = this.game.config.height;
  
      const image = this.add.image(Phaser.Math.Between(100, w), Phaser.Math.Between(100, h), 'lilGuy').setScale(1);
      this.tweens.add({
        targets: image,
        y: image.y + 20,
        repeat: -1,
        yoyo: true,
        ease: 'Sine.inOut',
        duration: 500
      });
    }
  
    create() {
      // Set background color to dark green
      this.cameras.main.setBackgroundColor('#145000');
      this.time.delayedCall(1150, () => {
      const timer = this.time.addEvent({
        delay: 2000, // call every 3 seconds
        callback: this.lilGuy,
        callbackScope: this,
        loop: 30 // repeat indefinitely
      });
    });
      // Remove all images after a minute
      this.time.delayedCall(60000, () => {
      this.add.text(50, 50, "That's all folks!").setFontSize(50);
      this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
      this.input.on('pointerdown', () => this.scene.start('intro'));
    })
}
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, StartRoom, BaseRoom ,PianoRoom,ViolinRoom,HornRoom, Outro],
    title: "Adventure Game",
});

