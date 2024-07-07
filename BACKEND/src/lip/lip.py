import numpy as np
import matplotlib.pyplot as plt 

class LIP():
    '''
    This is the Logarithmic Image Processing model
    '''
    def __init__(self, M):
        self.M = M

    def addition_lip(self, F, G):
        self.f = F - np.finfo(float).eps
        self.g = G - np.finfo(float).eps
        
        return  self.f + self.g - self.f * self.g / self.M

    def multiplication_lip(self, lampda, F):
        self.f = F - np.finfo(float).eps
        return self.M - self.M * (1 - self.f / self.M) ** lampda

    def difference_lip(self, F, G):
        self.f = F - np.finfo(float).eps
        self.g = G - np.finfo(float).eps
        
        return self.M * (self.f - self.g)/ (self.M - self.g)

    def PHI(self, F):
        self.f = F - np.finfo(float).eps
        return -self.M * np.log(1- self.f/self.M)

    def PHI_1(self, F):
        self.f = F - np.finfo(float).eps
        return self.M * ( 1 - np.exp(- self.f / self.M ))