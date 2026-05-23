import urllib.request
import sys

url = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3'
req = urllib.request.Request(url, headers={
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
})

try:
    print("Downloading...")
    with urllib.request.urlopen(req) as response:
        data = response.read()
        # Verify it's actually an audio file and not a block screen
        if data.startswith(b'ID3') or data.startswith(b'\xff\xfb') or b'html' not in data[:1000].lower():
            with open('public/relaxing-jazz.mp3', 'wb') as f:
                f.write(data)
            print("Success! Verified MP3.")
        else:
            print("Failed: Server returned HTML (blocked).")
except Exception as e:
    print("Error:", e)
