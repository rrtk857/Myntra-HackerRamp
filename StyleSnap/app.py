from flask import Flask, render_template, Response
import cv2
import numpy as np

app = Flask(__name__)

frame_width = 800
frame_height = 800
ID = 0
offset = 0

def gen_frames():
    global offset, ID
    cap = cv2.VideoCapture(0)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, frame_width)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, frame_height)
    if not cap.isOpened():
        print("Unable to open Camera")

    while True:
        success, frame = cap.read()
        if not success:
            break

        # Resize the frame
        frame = cv2.resize(frame, (frame_width, frame_height))

        # Your virtual dressing room logic
        shirts_type = ['images/wtshirt.jpg', 'images/wtshirt.jpg']
        threshold = [200, 254]
        shirt_id = ID
        imgshirt = cv2.imread(shirts_type[shirt_id])
        musgray = cv2.cvtColor(imgshirt, cv2.COLOR_BGR2GRAY)
        ret, orig_mask = cv2.threshold(musgray, threshold[ID], 255, cv2.THRESH_BINARY)
        orig_mask_inv = cv2.bitwise_not(orig_mask)
        origshirtHeight, origshirtWidth = imgshirt.shape[:2]
        face_cascade = cv2.CascadeClassifier('./haarcascade_frontalface_default.xml')
        img_h, img_w = frame.shape[:2]
        cap.set(3, frame_width)
        cap.set(4, frame_height)
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)

        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 0), 1)
            face_w = w
            face_h = h
            face_x1 = x
            face_x2 = face_x1 + face_w
            face_y1 = y
            face_y2 = face_y1 + face_h

            # shirt size w.r.t tracked face
            shirtWidth = int(2.9 * face_w + offset)
            shirtHeight = int((shirtWidth * origshirtHeight / origshirtWidth) + offset / 3)

            # shirt centered w.r.t recognized face
            shirt_x1 = face_x2 - int(face_w / 2) - int(shirtWidth / 2)
            shirt_x2 = shirt_x1 + shirtWidth
            shirt_y1 = face_y2 + 5
            shirt_y2 = shirt_y1 + shirtHeight

            if shirt_x1 < 0:
                shirt_x1 = 0
            if shirt_y1 < 0:
                shirt_y1 = 0
            if shirt_x2 > img_w:
                shirt_x2 = img_w
            if shirt_y2 > img_h:
                shirt_y2 = img_h

            shirtWidth = shirt_x2 - shirt_x1
            shirtHeight = shirt_y2 - shirt_y1
            if shirtWidth < 0 or shirtHeight < 0:
                continue

            # Re-sizing original image and masks to shirt sizes
            shirt = cv2.resize(imgshirt, (shirtWidth, shirtHeight), interpolation=cv2.INTER_AREA)
            mask = cv2.resize(orig_mask, (shirtWidth, shirtHeight), interpolation=cv2.INTER_AREA)
            mask_inv = cv2.resize(orig_mask_inv, (shirtWidth, shirtHeight), interpolation=cv2.INTER_AREA)

            roi = frame[shirt_y1:shirt_y2, shirt_x1:shirt_x2]

            roi_bg = cv2.bitwise_and(roi, roi, mask=mask)
            roi_fg = cv2.bitwise_and(shirt, shirt, mask=mask_inv)
            dst = cv2.add(roi_bg, roi_fg)

            kernel = np.ones((5, 5), np.float32) / 25
            imgshirt = cv2.filter2D(dst, -1, kernel)

            if face_y1 + shirtHeight + face_h < frame_height:
                frame[shirt_y1:shirt_y2, shirt_x1:shirt_x2] = dst
            else:
                print('Too close to the camera')

        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True, port=7000)
