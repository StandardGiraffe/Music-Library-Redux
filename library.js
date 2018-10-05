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
    this.length = length;
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
    return this._rating;
  }

  setRating(rating) {
    this._rating = this.validateRating(rating);
    console.log(`${this.title} is now rated ${this._rating} out of 5.`);
  }
}

// #############
// Test-driving:
// #############
const myTrack = new Track("No No Raja", 4, 201);