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
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
    console.log(`Added ${track.title} to ${this.name}.`);
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
    return `The length of ${this.title} is ${minutes}:${seconds}.`;
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