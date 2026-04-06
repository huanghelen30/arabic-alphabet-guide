# Audio Files

Audio pronunciation files are **not bundled** with this project.

They are sourced from [Wikimedia Commons](https://commons.wikimedia.org/) and
resolved at runtime via the Wikimedia Commons API.

## Source

Each letter's audio is identified by a filename stored in `data/letters.js`
(the `audioFile` field). The app fetches the actual CDN URL at page load using:

```
https://commons.wikimedia.org/w/api.php?action=query&titles=File:{filename}&prop=imageinfo&iiprop=url&format=json&origin=*
```

If a file does not exist or the API is unreachable, the play button for that
letter is hidden silently.

## License

All audio files from Wikimedia Commons are licensed under
[Creative Commons Attribution-ShareAlike (CC BY-SA)](https://creativecommons.org/licenses/by-sa/3.0/).

When using or redistributing audio, credit the original Wikimedia Commons
contributors and link to the CC BY-SA license.

## Adding Audio

To add or update audio for a letter:

1. Find or upload the file on Wikimedia Commons
2. Update the `audioFile` field in `data/letters.js` with the exact filename
   (e.g. `Ar-ba.ogg`)
3. The app will resolve the URL automatically at runtime
