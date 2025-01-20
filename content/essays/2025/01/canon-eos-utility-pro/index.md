---
title: "Canon EOS Webcam Utility Pro is misleading"
date: "2025-01-20"
image: "canon_usb.jpg"
draft: false
---

Canon released a subscription service (Canon EOS Webcam Utility Pro) to turn their cameras into webcams and their marketing is misleading causing both incorrect outrage at it as well as misleading people to pay for things they are not actually getting or do not need to pay for in the first place.
<!--more-->

# Few Canon cameras support 1080p video over USB
The main thing I have seen people complaining about is that Canon is locking 1080p behind a subscription. This feels wrong because people already spent hundreds if not thousands of dollars on the camera. However, almost all of Canon's cameras do not support 1080p over USB. I am very aware of this because I own one of the few older Canon cameras that can do 1080p liveview. I will cover this later in the stop motion firmware section. They are basically selling snake oil and people are mad because the snake oil is a subscription.

USB tethering has been an important feature for stop motion for years. Canon has been historically the best at this which is the reason they are the industry standard for stop motion. Dragonframe is the industry standard software for stop motion and has a great [resource](https://www.dragonframe.com/camera-support/) about what resolution output is supported by camera model. Most Canon cameras only support 960 x 640 resolution over USB. That is not even 720p resolution. Canon is aware of this which is why you notice if you look closely they mention 720p and 1080p upscaling. Upscaling is taking a lower resolution image and increasing it artificially to a higher resolution and applying different algorithms to try to make up for the missing data. It will never be the same quality as if it was the native resolution. This is not to say that upscaling is always bad, when done well it can be helpful. But it should be something the customer is made aware is being done to the image. The Canon EOS Webcam Utility Pro for most cameras is not native 1080p but instead they are apply upscaling to achieve 1080p. I think paying a monthly subscription just to upscale 960x640 to 1920x1080 resolution is ridiculous.

## Canon Stop Motion Firmware

The low resolution of the tethering mode has been slightly annoying for stop motion. It would be nice to have a high resolution image to look at when animating. The tethering mode was designed for commercial applications to get a preview of framing and basic settings rather than to be used as final output. For people who want high resolution tethering Canon offers [Stop Motion Firmware](https://www.usa.canon.com/explore/stop-motion-animation-firmware) that provides 1080p liveview as well as some additional features like aperture lock and focus peaking.

This is speculation on my part but I don't think this upgrade is just new firmware. To get this firmware you have to ship the camera to Canon for them to apply it. When I did my EOS R it was about $120 in total. I think along with the firmware there is a hardware change that routes the HDMI output to whatever is used to make USB tethering work. I've not taken apart my camera to confirm this yet but maybe someday. I think this is the case because you loose the HDMI output when you have the firmware. On new models you can turn this feature on and off to get the HDMI back on cameras with the stop motion firmware. This is an extremely niche feature and is probably not worth the cost of the additional hardware to support in all their cameras. When you are selling millions of units an extra 10 cents to the Bill of Materials adds up to a lot let alone the extra work that has to be done to validate and test. That is why it's a paid hardware upgrade. I highly doubt they are selling enough of these upgrade for it to be that profitable. If it was just a firmware upgrade it would make Canon more money to sell it and have the user apply it just like a normal firmware upgrade.

# There is basically no reason to pay the subscription

There are several alternatives which I will cover in the following sections. Just because a company offers a program does not make it the only way to do something and a lot of times third party software is better. Before 2020 Canon did not even offer this kind of thing for their camera. This kind of use case has become a bigger market because of streaming and the increase use of online meetings because of COVID.

## UVC

If you own one of the newer cameras that supports UVC you can enable it and your camera will basically behave as a webcam without the needed to install any software. Look up how to enable UVC in the camera's manual and you are not impacted by this in anyway unless you want some of the video customization features in which case see the OBS section. UVC (USB video device class) is a USB specification that standardizes the interface to interact with cameras over USB. Drivers that support this are built into basically all operating systems. This why when you plug in a webcam it just works. Enabling this effectively makes your camera a webcam. This is the way this feature should be implemented and I would hope Canon supports it in all new cameras going forward.

## OBS

If you look at the feature list they are up selling you on with the Pro version which feature set is almost all things [OBS Studio](https://obsproject.com/) does already. OBS is a very popular open source streaming software. Although it can do a lot more than just streaming. You can use an OBS virtual camera as an input to other applications following this [guide](https://obsproject.com/kb/virtual-camera-guide).

| Feature                                                              | Canon Free | Canon Subscription | OBS Studio |
|:---------------------------------------------------------------------|:-----------|:-------------------|:-----------|
|Default Scene                                                         | ✔          | ✔                  | ✔          |
|User Custom Scenes                                                    | ✖          | MULTIPLE           | MULTIPLE   |
|Multiple Camera Connection                                            | ✖          | UP TO 5            | UNLIMITED  |
|Wireless Connection                                                   | ✖          | 1 CONNECTION       | ✖          |
|Stream to Multiple Channels                                           | ✖          | ✔                  | ✔          |
|UVC Video Input Support Including Capture Cards                       | ✖          | ✔                  | ✔          |
|Camera Setting Control                                                | Manual     | CONTROL FROM UI    | Manual     |
|Global Image Adjustment                                               | ✖          | ✔                  | ✔          |
|Scene Layout Editing                                                  | ✖          | ✔                  | ✔          |
|HD 720 Support (Digital Upscale)                                      | ✔          | ✔                  | ✔          |
|Full HD 1080 Support (Digital Upscale)                                | ✖          | ✔                  | ✔          |
|Up to 60fps Support                                                   | ✖          | ✔                  | ✔          |
|Control Content by Channel                                            | ✖          | ✔                  | ✔          |
|Video Input Layout Option to Fill/Fit Screen                          | ✖          | ✔                  | ✔          |
|Flip/Rotate/Resize Video Input                                        | ✖          | ✔                  | ✔          |
|Crop Video Input                                                      | ✖          | ✔                  | ✔          |
|Water Mark Insertion - JPEG, JPG, PNG (Alpha Channel Support for PNG) | ✖          | ✔                  | ✔          |
|Crossfade Transition Between Scene                                    | ✖          | ✔                  | ✔          |
|Hot Key Setting                                                       | ✖          | ✔                  | ✔          |
|Window Capture                                                        | ✖          | ✔                  | ✔          |
|Startup Scene Configuration                                           | ✖          | ✔                  | ✔          |
|New Version Reminder/Install                                          | ✔          | ✔                  | ✔          |
|Dark Mode                                                             | ✔          | ✔                  | ✔          |
|Global Hot Key Support                                                | ✖          | ✔                  | ✔          |
|Full Screen Sharing                                                   | ✖          | ✔                  | ✔          |
|Canon Camera UVC Input Support                                        |One Connection| ✔                | ✔          |
|Text Overlay                                                          | ✖          | ✔                  | ✔          |
|Dynamic Driver\*1                                                     | ✖          | ✔                  | ✖          |
|Elgato Stream Deck Support\*2                                         | ✖          | ✔                  | ✔          |
|Template Support                                                      | ✖          | ✔                  | ✔          |
|Language Support (Spanish, Portuguese, French)                        | ✔          | ✔                  | ✔          |
|Battery Info Display                                                  | ✔          | ✔                  | ✖          |
|Background Blur/Removal                                               | ✖          | ✔                  | ✔          |

1. Only supported on Windows
2. Tested with the Stream Deck Mini, Stream Deck Neo, Stream Deck 12, Stream Deck XL, and Stream Deck (All Stream Deck Devices were tested with Stream Deck App 6.6.1)


## Other third part software

Canon has for years made available a [SDK](https://developercommunity.usa.canon.com/) to control their cameras for other developers to integrate into their own software. Because of this there are programs that exist to control settings on the camera remotely. I have already mention Dragonframe but that is paid professional software not really designed for this use case. [digiCamControl](https://digicamcontrol.com/) is an open source program that lets you control settings on your Canon camera remotely. Because Canon as both an SDK and API there are a lot of software solutions out their to adjust camera settings remotely. I recommend playing around with options and finding one that does what you want. Some cameras also support an [API](https://developercommunity.usa.canon.com/s/article/Introduction-to-Camera-Control-API-CCAPI) so if you have a camera that support that you can adjust settings via curl or whatever way you prefer to send RESTful commands. 

## HDMI Capture Card

HDMI capture cards can be purchased inexpensively now and will allow you to take output from the camera's HDMI port and use it in your computer. This is the highest quality but I get why some people just want a plug and play option like what Canon is claiming. I just wanted to mention this way because for streaming this is the standard way of doing things.

## Linux can do all of this without Canon

You actually do not need to use Canon software at all. There is a library called [libgphoto2](https://github.com/gphoto/libgphoto2) that gives software control of a lot of cameras. Not just Canon cameras. It is excellent and is used in a lot of great software on Linux. To do the webcam thing specifically I will link to this [tutorial](https://www.crackedthecode.co/how-to-use-your-dslr-as-a-webcam-in-linux/) by Ben Chapman. Following this you can use your Canon camera as a webcam without any Canon software.

# Canon's marketing should be better
This software is designed for people who well wouldn't be reading this. They just want to install it, use their camera for video calls with maybe a bit of tweaking, and move on with their life. If you look at older version of the [site](https://web.archive.org/web/20221229025358/https://www.usa.canon.com/cameras/eos-webcam-utility) they show the interface of the application with a Streaming Video Output Resolution selection box. This gives 360p, 720p, and 1080p outputs. I think this is where the confusion happened. I don't expect most people to know the technical details on how Canon cameras work nor should they. So articles were written with this confusion baked in. Canon should be more upfront that most of their cameras do not support 1080p video output over USB and they are using software to upscale the output to other software. I think part of the reason they don't do that is it makes their software seem less valuable but that is speculation on my part.

Blog posts like the one written by [Roman Zipp](https://romanzipp.com/blog/no-you-cant-use-your-6299-canon-camera-as-a-webcam) does a great job showing why this is a bad product. The user interface is confusing. It says a lot when the better world is one in which this software does not exist at all. In such a world people would find the options I listed earlier but instead they are pushed into a bad user experience. I think Canon would do better release a program that does less but does it well. Nikon has done this with their software [Nikon Webcam Utility](https://www.nikonusa.com/content/webcam-utility). Most of Nikon's cameras only support 1024x680 or 640x426 resolution but no where does Nikon offer 1080p. Canon should make it obvious the hardware limitations of the camera being used. I do think it's kind of unfair to be mad at Canon for poorly implementing a camera feature they never advertised as a selling point of the camera when sold. The free version of the Canon tool offers more features than the Nikon tool but is a more confusing experience. That being said because they are charging money for this software that should be scrutinized. In my opinion the software is not worth downloading let alone paying a monthly subscription.

