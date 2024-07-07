from ..dataloader import ImageLoader
import numpy as np 
import cv2 as cv
from scipy.ndimage import median_filter

class ImageProcessor(ImageLoader):
    def __init__(self, id: str = None, img : bytes = None):
        super().__init__(id, img)
        self.image = self.load()
    
    def enhance(self, clipLimit = 10.0, window = 50, sharpen = True):

        sharpen_kernel = np.array([[0, -1, 0],
                        [-1, 5, -1],
                        [0, -1, 0]])


        clahe = cv.createCLAHE(clipLimit = clipLimit, tileGridSize = (window, window))

        img_result = np.zeros(self.image.shape)

        img_result[:,:,0] = clahe.apply(self.image[:,:,0])
        img_result[:,:,1] = clahe.apply(self.image[:,:,1])
        img_result[:,:,2] = clahe.apply(self.image[:,:,2])


        #img_result = median_filter(img_result.astype('uint8'), 3)
        img_result = img_result.astype("uint8")
        img_result= cv.bilateralFilter(img_result, 3, 31, 31)
    
        if sharpen :
            img_result[:,:,2] = cv.filter2D(src=img_result[:,:,2], ddepth=-1, kernel=sharpen_kernel)
        return img_result

    @staticmethod
    def enhance_static(img:np.array, clipLimit = 10.0, window = 50):
        sharpen_kernel = np.array([[0, -1, 0],
                        [-1, 5, -1],
                        [0, -1, 0]])

        clahe = cv.createCLAHE(clipLimit = clipLimit, tileGridSize = (window, window))

        img_result = np.zeros(img.shape)

        img_result[:,:,0] = clahe.apply(img[:,:,0])
        img_result[:,:,1] = clahe.apply(img[:,:,1])
        img_result[:,:,2] = clahe.apply(img[:,:,2])

        img_result= cv.bilateralFilter(img_result.astype("uint8"), 3, 31, 31)
    
        img_result[:,:,2] = cv.filter2D(src=img_result[:,:,2], ddepth=-1, kernel=sharpen_kernel)
        
        return img_result

    @staticmethod
    def enhance_large_scale_clouds(img:np.array):
        return ImageProcessor.enhance_static(img, window=15)
    
    @staticmethod
    def enhance_small_scale_clouds(img:np.array):
        return ImageProcessor.enhance_static(img, window=70)
    
    @staticmethod
    def denoise(img: np.array):
        img_denoised = cv.bilateralFilter(img, 3, 31, 31)
        return img_denoised
    
    @staticmethod
    def gamma_corrector(img:np.array, gamma = 1.3):
        lookUpTable = np.empty((1,256), np.uint8)
        for i in range(256):
            lookUpTable[0,i] = np.clip(pow(i / 255.0, gamma) * 255.0, 0, 255)
        res = cv.LUT(img, lookUpTable)
        return res 
    
    @staticmethod
    def enhance_brightness(img: np.array, beta:int = 5):
        return np.clip((img + beta).astype('uint8'), 0, 255)
    
    @staticmethod
    def enhance_contrast(img:np.array, alpha:float = 1.2):
        return np.clip((img * alpha).astype('uint8'), 0, 255)
    
    @staticmethod
    def gray_scale(img:np.array):
        return cv.cvtColor(img, cv.COLOR_RGB2GRAY)

    @staticmethod
    def processing_pipeline(img : np.array, jsn):
        list_of_processing = []

        functions = {"enhance_small_scale_clouds": ImageProcessor.enhance_small_scale_clouds,
        "enhance_large_scale_clouds": ImageProcessor.enhance_large_scale_clouds,
        "denoising" : ImageProcessor.denoise, 
        "enhance_contrast" : ImageProcessor.enhance_contrast, 
        "enhance_brightness": ImageProcessor.enhance_brightness,
        "gamma_correction" : ImageProcessor.gamma_corrector,
        "gray_scale" : ImageProcessor.gray_scale,
        }

        for func in jsn:
            if jsn[func]:
                list_of_processing.append(func)

        if len(list_of_processing) == 0:
            return ImageProcessor.enhance_static(img)

        img_result = functions[list_of_processing[0]](img)

        for i in range(1, len(list_of_processing)):
            img_result = functions[list_of_processing[i]](img_result)
        return img_result
    

    def enhance_2(self, clipLimit = 10.0, window = 50, denoising = True, sharpen=True):
        sharpen_kernel = np.array([[0, -1, 0],
                        [-1, 5, -1],
                        [0, -1, 0]])

        clahe = cv.createCLAHE(clipLimit = clipLimit, tileGridSize = (window, window))

        img_result = np.zeros(self.image.shape)
        img_result[:,:,0] = clahe.apply(self.image[:,:,0])
        img_result[:,:,1] = clahe.apply(self.image[:,:,1])
        img_result[:,:,2] = clahe.apply(self.image[:,:,2])

        #img_result = median_filter(img_result.astype('uint8'), 3)
        img_result = img_result.astype("uint8")
        img_result = cv.bilateralFilter(img_result, 9, 41, 41)

        if denoising :
            img_result = cv.fastNlMeansDenoisingColored(img_result, None, 3, 3)

        if sharpen :
            img_result = cv.filter2D(src=img_result, ddepth=-1, kernel=sharpen_kernel)

        return img_result