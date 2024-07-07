# JIP Image Processing approach

1. Automatic Downloading of the raw RGB image from JUNO website using its ID. 

2. Applying the CLAHE algorithm for histogram equalization for each RGB channel. It is a variant of Adaptive histogram equalization (AHE) which takes care of over-amplification of the contrast.

3. Applying a median filter to remove artifacts.

4. Reducing noise. 

5. Improving the details clarity using a sharpening filter (high pass filter).

![JIP](https://sa-2019.s3.amazonaws.com/media/images/d0221d70-541c-4250-b19b-e4fbe35df709.max-1000x1000.jpg)

# JIP Image Segmentation approach
We could see storms' distribution over the planet : storms with the same color share the same caracteristics.

![JIP](https://sa-2019.s3.amazonaws.com/media/images/32dc4692-82d6-4a89-a1a1-77af4b82703f.max-1000x1000.jpg)


A tracked storm changing position is clear in our Demo video, we aim to save time and energy of the manual JunoCam process, as we also provide tools for a deep scientific analysis, as well as serving art and fun purposes.
