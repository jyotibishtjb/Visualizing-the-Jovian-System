# Jovian Image Processing (JIP)  
Visualizing the Jovian System Like Never Before  

## 🚀 Introduction  
**Jovian Image Processing (JIP)** is a web application designed to visualize images of the **Jovian system** captured by NASA’s **JunoCam**. The application processes raw images from the **Juno spacecraft** using the **OpenCV library** to enhance image quality and extract key features. JIP provides detailed visualizations of **Jupiter and its moons**, highlighting atmospheric phenomena and surface features, significantly contributing to the understanding of the Jovian system.  

### 🌌 What is JIP?  
![JIP](https://sa-2019.s3.amazonaws.com/media/images/b0710629-5e6c-4b09-8f72-7394c00176c1.max-1000x1000.png)  

JIP is a **web application** coded with **Python (Back-End)** and **Angular (Front-End)** to process and visualize **JunoCam raw images**. The system allows automatic processing and manual correction, enabling users to enhance images and visualize details according to their preference. It also features **image recognition** and **planet reconstruction** using Juno's collected data, serving both scientific and artistic purposes.  

## 🧠 Key Technologies  
- **Python**: Back-End processing using image enhancement algorithms.  
- **Angular**: Front-End for user interaction and visualization.  
- **OpenCV**: Image processing and visualization.  
- **JunoCam Data**: Raw images from the Juno spacecraft.  

## 💡 Features  
1. **Automatic Image Download**: Fetch raw RGB images from the **JunoCam website** using the image ID.  
2. **Image Enhancement with CLAHE**: Uses the **CLAHE algorithm** for histogram equalization, maintaining contrast without over-amplification.  
3. **Artifact Removal**: Applies **median filtering** to clean up image artifacts.  
4. **Noise Reduction**: Reduces noise for clearer visual representation.  
5. **Detail Enhancement**: Uses a **sharpening filter (high pass filter)** to highlight finer details.  
6. **Image Segmentation**: Automatically segments images to isolate key features.  
7. **Flexible Processing**: Allows users to make additional corrections and adjustments.  
8. **Image Recognition & Planet Reconstruction**: Visualizes planetary details in an intuitive and detailed manner.  
  
Use the JIP interface to:  
   - Download raw images from the JunoCam website.  
   - Enhance, filter, and segment images.  
   - View processed images with improved clarity.  

## 📈 Results  
JIP successfully visualizes the Jovian system, providing enhanced images that reveal atmospheric phenomena and planetary features. The project aids both scientific exploration and creative visualization.  

## 🔗 Resources   
- [JunoCam Raw Images](https://www.missionjuno.swri.edu/junocam)  

## 🤝 Contributions  
We welcome contributions and ideas! Please feel free to submit pull requests or open issues.  
