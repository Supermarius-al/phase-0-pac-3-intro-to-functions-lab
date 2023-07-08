function shout(string) {
  // to do;
  return string.toUpperCase(); // "HELLO!"
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
  return string;
}

function logWhisper(string) {
  console.log(string.toLowerCase());
  return string;
}

function sayHiToHeadphonedRoommate(string) {
  switch (string) {
    case string.toLowerCase():
      return "I can't hear you!";
      break;
    case string.toUpperCase():
      return "YES INDEED!";
      break;
    case "Let's have dinner together!":
      return "I would love to!";
      break;
  }
}
