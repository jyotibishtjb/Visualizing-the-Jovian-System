import cv2 as cv
from fastapi import FastAPI, UploadFile, File
import pathlib
import os
import sys
from fastapi.middleware.cors import CORSMiddleware

parent_path = pathlib.Path(os.path.realpath(__file__)).parent.parent
sys.path.append(str(parent_path))

from src import ImageLoader, ImageProcessor

app = FastAPI()

#fix the Cross-Origin Resource Sharing with angular
origins = [
    "http://localhost:4200",
    "http://localhost",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/process_by_link/")
async def process_img_by_link(img_file : UploadFile= File(...)):
    img = await img_file.read()
    image_processor = ImageProcessor(img = img)

    img_processed = image_processor.enhance()
    raw_img = image_processor.image

    cv.imwrite(f"{str(parent_path)}/data/raw/test.png", raw_img)
    cv.imwrite(f"{str(parent_path)}/data/processed/test.png", img_processed)
    
    return {"img_raw": f"{str(parent_path)}/data/raw/test.png", 
    "img_processed" : f"{str(parent_path)}/data/processed/test.png"
    }


@app.get("/process_by_id/{img_id}")
def process_img_by_id(img_id : str):
    img_raw = ImageLoader(id = img_id).load()
    img_processed = ImageProcessor(id = img_id).enhance()
    cv.imwrite(f"{str(parent_path)}/data/raw/{img_id}.png", img_raw)
    cv.imwrite(f"{str(parent_path)}/data/processed/{img_id}.png", img_processed)
    
    return {"img_raw": f"{str(parent_path)}/data/raw/{img_id}.png", 
    "img_processed" : f"{str(parent_path)}/data/processed/{img_id}.png"
    }