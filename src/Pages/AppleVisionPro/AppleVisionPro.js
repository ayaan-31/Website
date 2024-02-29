import React from "react";
import Helmet from "react-helmet";
import Persona from "./persona.jpeg";
import Game from "./Game.mp4";
import SteveJobstheater from "./SteveJobsThreatre.mp4";
import Viva3DAppStore from "./viva3d-apple-store.PNG";
import Viva3D from "./Viva3D.mp4";
import ConferenceRoom from "./conference-room.PNG";
import Dino from "./dino.PNG";
import MultipleWindows from "./multiple-avp-windows.PNG";
import NotesInMountains from "./notes-in-the-mountains.PNG";
import MovieTheater from "./movie-theater.jpg";
import Rig from "./rig.PNG";
import "./AppleVisionPro.css";

function AppleVisionPro() {
    return (
        <section className="apple-vision-pro">
            <Helmet>
                <title>Apple Vision Pro</title>
            </Helmet>

            <div className="heading">
                Apple Vision Pro
            </div>

            <p>
                I got a chance to use the Apple Vision Pro for about 20 days. I can describe it as an expensive but a fun toy with lots of incredible technology built-in.
                None of the screenshots or screen recordings do justice to what you actually see and feel when you have the headset on. The screenshots aren't as high quality
                as you see the virtual objects in the headset because Apple uses <a href="https://en.wikipedia.org/wiki/Foveated_rendering">Foveated rendering</a> to only render
                what you're actively looking at in the highest possible quality while other things aren't prioritized as much.
            </p>

            <p>
                You just have to try it for yourself.
            </p>


            <h3>Productivity</h3>
            <p>
                Apple markets the Vision Pro as a productivity device. With Environments, you can transport yourself to places like Yosemite, Mount Hood, or the Moon and have multiple
                windows in front of you to work. This means you can extent your small room into an infinite canvas.
            </p>
            <p>
                With a strong ecosystem of other Apple devices, you can easily mirror your Mac's screen and drag and drop content between apps running on your Mac and those running on the
                Vision Pro. Truly magical!
            </p>
            <img src={MultipleWindows} alt="Multiple Windows" className="media" />

            <p>
                Using this virtual keyboard was a pain, however. You either have to "press" each key using your index fingers only or look at each key and pinch your fingers.
                I found the latter to be easier, but usually relied on dictation for an even faster experience. I do love the little "Text Preview" right above the keyboard
                that shows you what you're typing. This saves you from having to move your head too much while typing.
            </p>
            <p>
                That said you can very easily use a physical keyboard and it works flawlessly!
            </p>

            <img src={NotesInMountains} alt="Notes in Mountains" className="media" />

            <h3>Entertainment</h3>
            <p>
                One of the first things I tried on the Vision Pro was the dinosaur experience where a butterfly flies towards you and lands on your hand,
                a dinosaur comes out of the window in front of you and into your space. Though this is primarily a visual device, the speakers on the Apple Vision Pro
                support Surround Sound and are very crisp making you feel the dinosaur is in fact right in front of your eyes.
            </p>
            <p>

            </p>
            <img src={Dino} alt="Dino" className="media" />

            <p>
                While the App Store does not have too many apps that fully take advantage of Spatial Computing yet, I did find an app that lets you put a Formula 1 car
                or an airplane engine in your space. You can rotate and scale them or walk around them. You can even interact with the 3D objects and pull pieces off of them. Imagine
                having a Vision Pro in every classroom and students can learn about the human body, airplanes engines, and observe even chemical reactions.
            </p>
            <img src={Rig} alt="Rig" className="media" />

            <p>
                Then, there are some games you can play. Playing Fruit Ninja where you can slice fruits with your hands is so much more fun!
            </p>
            <video controls className="media" >
                <source src={Game} type="video/mp4" />
            </video>

            <p>
                One of my favorite experiences was transporting myself into a movie theater and watching a film on a 110-feet screen.
                The images projected on the screen are reflected off the walls and the ground, providing an immersive experience.
                The directional speakers positioned above your ears enhance the experience, making it truly captivating.
            </p>
            <img src={MovieTheater} alt="Movie theater" className="media" />

            <h3>Persona</h3>
            <p>
                When you first set up the device, Apple walks you through a series of steps to capture your hands, palm, and your face to build a 3D representation of you that
                they call "Persona". I had to do it for a few times and on different visionOS versions to get the best results. Mostly, the Persona does look like you,
                but there are some things that are a little off about it that makes your brain not fully accept that is the same person that you think it is.
            </p>
            <p>
                If you FaceTime someone with your Vision Pro on, they see your Persona and the wide array of cameras on the device are used to convey your facial expressions too.
            </p>
            <img src={Persona} alt="Persona" className="media" />

            <h3>Keynote</h3>
            <p>
                Apple really optimized their apps to take full advantage of their platform. With apps like Keynote, you can present your slides in either a conference room or the one and
                only - Steve Jobs theater. The screens in those places actually display your slides as you go through them!
            </p>
            <img src={ConferenceRoom} alt="Conference Room" className="media" />
            <video controls className="media">
                <source src={SteveJobstheater} type="video/mp4" />
            </video>

            <h3>App Store</h3>
            <p>
                Making my own visionOS app and releasing on the App Store it was quick and easy. You can do everything with SwiftUI and with some knowledge about RealityKit and
                UI Kit, you can create almost anything you want. Resources online are limited right now, but Apple has done a great job with their documentation, demo apps, and WWDC sessions.
            </p>
            <p>
                Not to mention, Apple takes care of giving your app windows the glass effect, casting shadows, and forwarding the user eye and hand data so everything "just works."
            </p>

            <p>
                The app I created is called <a href="https://apps.apple.com/us/app/viva3d/id6477419515">Viva3D</a>. It is very simple with two 3D models that you can rotate and interact with
                in your space. It was fun developing and publishing it!
            </p>
            <img src={Viva3DAppStore} alt="Viva 3D App Store" className="media" />
            <video controls className="media">
                <source src={Viva3D} type="video/mp4" />
            </video>

            <h3>Conclusion</h3>
            <ul>
                <li>It is a great device, but the bands mess up your hair and having 4K displays on your eyes cause eye strain after about 30-40 minutes of use. I did get used to it after a couple days, however.</li>
                <li>Eye tracking is precise and magical but as with all technology, it fails sometimes.</li>
                <li>Vision Pro needs light to look at your hands so you would have a hard time using it in a dark room.</li>
                <li>In love with the developer experience. If you have done any iOS app before, visionOS won't be a steep learning curve.</li>
                <li>Carrying the battery pack around with you might be messy and if you're doing an activity that involves walking around, the cord might get in the way.</li>
                <li>For now, more than one person can't be in the same space physically or virtually to look at the same content in their space.</li>
                <li>Eye Sight - a digital representation of your eyes on the external display of the Vision Pro for people around you - is blurry and very faint.</li>
                <li>There's a lot of potential for this device to learn, create, entertain, and interact. I can't wait see the improvements Apple will make in the coming years!</li>
                <li></li>
            </ul>

            <h3>Want to learn more?</h3>
            <p>
                <a href="https://youtu.be/hdwaWxY11jQ?si=_IxMdohUxvY_oQG4">Apple Vision Pro review: magic, until it’s not</a> by The Verge.
            </p>
            <p>
                <a href="https://youtu.be/dtp6b76pMak?si=iJd9CnbfcC3jXSvA">Using Apple Vision Pro: What It’s Actually Like!</a> by MKBHD.
            </p>
        </section>
    );
}

export default AppleVisionPro;
