# JovianImageProcessing
Visualizing the Jovian System Like Never Before

# What is JIP ?

![JIP](https://sa-2019.s3.amazonaws.com/media/images/b0710629-5e6c-4b09-8f72-7394c00176c1.max-1000x1000.png)

Jovian Image Processing, is a Web application coded with Python for Back-End and Angular for Front-End, to edit or process JunoCam raw images in order to display details and different zones. We have provided an automatic processing, as users might take the initiative for adding necessary corrections to make a concrete vision of their thoughts. It can also provide image recognition and planet reconstruction from Juno collected images. These features can serve for either science, fun or art purposes.
JIP does directly download raw images from JunoCam Website.

# JIP features

1. Automatic Downloading of the raw RGB image from JUNO website using its ID. 

2. Applying the CLAHE algorithm for histogram equalization for each RGB channel. It is a variant of Adaptive histogram equalization (AHE) which takes care of over-amplification of the contrast.

3. Applying a median filter to remove artifacts.

4. Reducing noise. 

5. Improving the details clarity using a sharpening filter (high pass filter).

6. Image automatic segmentation

and many other features are coming .. 

