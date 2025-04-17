from fastapi import FastAPI, UploadFile, File
import openai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = FastAPI()

# Get API key from environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.get("/")
async def root():
    return {"message": "Hello from InsightCanvas backend!"}

@app.post("/upload/")
async def create_upload_file(file: UploadFile = File(...)):
    # You might want to process the file, extract text (using OCR if needed), and call OpenAI API.
    content = await file.read()
    text = content.decode("utf-8", errors="replace")
    
    # Example: Generate summary using OpenAI API (customize the parameters as needed)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": f"Summarize this document: {text}"}],
        max_tokens=150,
    )

    summary = response["choices"][0]["message"]["content"]
    return {"summary": summary}
