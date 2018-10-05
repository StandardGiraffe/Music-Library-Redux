// #################
// Helper functions
// #################



// ########
// Classes
// ########
class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this._tracks = [];
    this._overallRating = 0;
    this._totalDuration = 0;
  }

  addTrack(track) {
    this._tracks.push(track);

    const totalizer = (tracksArray, targetToSum) => {
      let total = 0;
      tracksArray.map((track) => {
        total += track[targetToSum];
        console.log(total);
      })
      return total;
    }

    this._overallRating = totalizer(this._tracks, "_rating") / this._tracks.length;
    this._totalDuration += track._length;

    console.log(`Added ${track.title} to ${this.name}.`);
  }

  get tracks() {
    const trackList = this._tracks.map((track) => {
    return `${track.title} - ${track.length}; Rating ${track._rating}/5\n`;
    })

    console.log(`Tracklist for the playlist "${this.name}":\n${trackList}`);
  }

  get rating () {
    return this._overallRating;
  }

  get duration () {
    let minutes = Math.floor(this._totalDuration / 60);
    let seconds = this._totalDuration - (minutes * 60);
    return `${minutes}:${seconds}`;
  }
}

class Track {
  constructor(title, rating, length) {
    let validatedInitialRating = this.validateRating(rating);

    this.title = title;
    this._rating = this.validateRating(rating);
    this._length = length;
  }

  validateRating(rating) {
    if (rating >= 0 && rating <= 5) {
      return rating;
    } else {
      console.log(`Chosen rating of ${rating} is not between 0 and 5.  Rating has been set to 0.`);
      return 0;
    }
  }

  get rating() {
    return `You rated ${this.title} as ${this._rating} out of 5.`;
  }

  get length() {
    let minutes = Math.floor(this._length / 60);
    let seconds = this._length - (minutes * 60);
    return `${minutes}:${seconds}`;
  }

  setRating(rating) {
    this._rating = this.validateRating(rating);
    console.log(`${this.title} is now rated ${this._rating} out of 5.`);
  }
}

// #############
// Test-driving:
// #############
const tr = new Track("No No Raja", 4, 201);
const pl = new Playlist("Danny's Playlist", "Danny");
pl.addTrack(tr);
pl.addTrack(tr);
pl.addTrack(tr);
pl.addTrack(tr);