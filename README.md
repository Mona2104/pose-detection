# pose-detection
PoseNet Skeleton Tracker
A real-time human pose detection web app built with p5.js and ml5.js (PoseNet) that overlays keypoints and skeleton lines on a live webcam feed.
Demo
The app detects your body in real time and draws:

🔴 Red dots on 17 body keypoints (nose, eyes, ears, shoulders, elbows, wrists, hips, knees, ankles)
🔴 Red lines connecting keypoints to form a skeleton

Project Structure
poseNet/
├── index.html
├── sketch.js
└── images/
    └── Aish.png
Dependencies

p5.js
ml5.js v0.12.2

Add these to your index.html:
html<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
<script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js"></script>
<script src="sketch.js"></script>
How to Run

Clone or download the project
Open the folder in VS Code
Run with Live Server (right-click index.html → Open with Live Server)
Allow webcam access when prompted


⚠️ Must be run via a local server (e.g. Live Server). Opening index.html directly as a file will block webcam access.

How It Works

Webcam feed is captured using createCapture(VIDEO)
ml5 PoseNet model loads and listens for poses via posenet.on('pose', receivedPoses)
Each frame, keypoints and skeleton data are extracted from poses[0]
p5.js draws ellipses at each keypoint and lines between connected joints

Controls
ActionResultShow webcamPose detection starts automatically on loadMove in frameKeypoints and skeleton update in real time
Notes

Works best with good lighting and a clear background
Only detects a single person (uses poses[0])
Image overlay (Aish.png) is implemented but currently commented out — can be enabled to place an image at the nose position
