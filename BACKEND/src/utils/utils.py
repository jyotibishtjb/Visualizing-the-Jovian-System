import numpy as np 
import cv2 as cv 
import json 

class Utils():

    def __init__(self) -> None:
        pass

    def decode(self, img_coded):
        arr = np.asarray(bytearray(img_coded), dtype=np.uint8)
        img = cv.imdecode(arr, -1) # 'Load it as it is'

        return img
    
    
