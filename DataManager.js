import db from './assets/sounds/sounds.json';
import {Audio} from 'expo';


class DataManager {

    constructor() {
        this.path = './assets/sounds/';
        this.db = db;
        this.soundsArray = this.db['sounds'];
        this.soundsArray.forEach(s => {
            s.audio = new AudioFile(s.filename, s.url);
            s.key = s.filename + s.url;
           
        });
        this.categoriesArray = this.db['categories'];
    }
}

class AudioFile {
    constructor(filename, path) {
        this.filename = filename;
        this.audio = new Audio.Sound();
        this.playing = false;
        this.duration = 0;
        this.position = 0;
        this.playAudio = async () => {
            if (!this.playing) {
                try {
                    await this.audio.unloadAsync()
                    await this.audio.loadAsync({uri: path});
                    await this.audio.playAsync();
                    this.audio.setOnPlaybackStatusUpdate((status) => {
                        this.duration = status.durationMillis;
                        this.position = status.positionMillis;
                        console.log('Duration: ' + status.durationMillis + '   --  Position: ' + status.positionMillis);
                    })
                    this.playing = true;
                    this.audio.setVolumeAsync(1.0);
                } catch (err) {
                    console.warn("Couldn't Play audio", err)
                }
            } else {
                let v = 1.0;
                let fadeout = setInterval(() => {
                    v = v - 0.1;
                    if (v > 0) {
                        this.audio.setVolumeAsync(v);


                    } else {
                        this.audio.setPositionAsync(this.duration);
                        clearInterval(fadeout);
                        this.playing = false;
                        this.audio.unloadAsync();
                    }
                }, 200);
            }
        }


        // this._getPlaybackTimestamp() = () => {
        //     if (
        //       this.audio != null &&
        //       this.state.soundPosition != null &&
        //       this.state.soundDuration != null
        //     ) {
        //       return `${this._getMMSSFromMillis(this.state.soundPosition)} / ${this._getMMSSFromMillis(this.state.soundDuration)}`;
        //     }
        //     return '';
        //   }
    }
}

export default DataManager;