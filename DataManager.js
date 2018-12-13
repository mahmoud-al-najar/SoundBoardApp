import db from './assets/sounds/sounds.json';
import { Audio } from 'expo';

class DataManager {
    
    constructor(){
        this.path = './assets/sounds/';
        this.db = db;
        this.soundsArray = this.db['sounds'];
        this.soundsArray.forEach(s => { 
            s.audio = new AudioFile(s.filename, s.url);
            s.key = s.filename + s.url;
            s.tagsText = '';
            s.tags.forEach(t => s.tagsText += t.name + ' ');
          });
        this.categoriesArray = this.db['categories'];
    }
}

class AudioFile {
    constructor(filename, path){
        this.filename = filename;
        this.audio = new Audio.Sound();
        this.playing = false;
        this.duration = 0;
        this.position = 0;
        this.playAudio = async () => {
            if (!this.playing){
                try {
                    await this.audio.unloadAsync()
                    await this.audio.loadAsync({uri: path});
                    await this.audio.playAsync();
                    this.audio.setOnPlaybackStatusUpdate((status)=>{
                        this.duration = status.durationMillis;
                        this.position = status.positionMillis;
                        if (!status.isPlaying){
                            this.audio.stopAsync();
                            this.playing = false;                            
                        }
                    })
                    this.playing = true;
                    this.audio.setVolumeAsync(1.0); 
                } catch (err) {
                    console.warn("Couldn't Play audio", err)
                }
            } else {
                let v = 1.0;
                let fadeout = setInterval( () => {
                    v = v - 0.1;
                    if (v > 0){
                        this.audio.setVolumeAsync(v);
                        
                    } else {
                        this.audio.stopAsync();
                        this.playing = false;
                        clearInterval(fadeout);
                    }
                }, 200);
            }
        }
    }
}

export default DataManager;