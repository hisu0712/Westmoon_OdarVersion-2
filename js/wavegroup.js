import{
  Wave
} from './wave.js';

export class WaveGroup{
  constructor(){
    this.totalWaves = 3;
    this.totalPoints = 6;

    //this.color = ['rgba(0,199,235,0.2)', 'rgba(0,146,199,0.3)', 'rgba(0,87,158,0.3)'];
    //this.color = ['#3276ec62', '#325aec62', '#234eeb47'];
    this.color = ['#def359e8', '#f7f987c7', '#fcfea081'];

    this.waves = [];

    for (let i =0; i < this.totalWaves; i++){
      const wave =new Wave(
        i,
        this.totalPoints,
        this.color[i],
      );
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight){
    for(let i=0; i<this.totalWaves; i++){
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx){
    for(let i=0; i<this.totalWaves; i++){
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}