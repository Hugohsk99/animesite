from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import contas, auth

app = FastAPI()
app.include_router(contas.router)
app.include_router(auth.authenticator.router)

origins = [
    os.environ.get("CORS_HOST", "http://localhost:3000"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(contas.router)
