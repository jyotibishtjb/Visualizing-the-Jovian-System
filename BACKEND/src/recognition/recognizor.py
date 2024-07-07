from ..preprocessing import ImageProcessor
from sklearn.cluster import KMeans
from skimage.color import label2rgb


class Recognizor(ImageProcessor):
    def __init__(self, id: str):
        super().__init__(id)
    
    def segment(self, n_clusters = 6):
        kmeans = KMeans(n_clusters=n_clusters)
        return kmeans.fit_predict(self.img.reshape(-1, 3))
    
    def show_classification(self):
        labels = self.segment()
        norm_image_labelise = label2rgb(labels, image = self.img, alpha = 0.5, bg_label = labels[0])

        return norm_image_labelise


