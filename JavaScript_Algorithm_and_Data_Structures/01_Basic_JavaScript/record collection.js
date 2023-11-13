// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
  
    let workingObject = records[id];
  
    if (value === "") {
      delete workingObject[prop];
    }
  
    else if (prop != "tracks") {
      workingObject[prop] = value;
    }
  
    else if (prop == "tracks") {
      if (workingObject.hasOwnProperty("tracks")) {
        workingObject.tracks.push(value);
      }
  
      else {
        workingObject.tracks = [];
        workingObject.tracks.push(value);
      }
    }
  
    records[id] = workingObject;
  
    return records;
  }
  
  //updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");