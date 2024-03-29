from fastapi.testclient import TestClient
from main import app
from queries.favoritos import FavoriteOut, FavoriteRepository
from routers import auth

client = TestClient(app)

favorites_db = {
    "favoritos": [
        {
            "id": 7,
            "user_id": 0,
            "anime_title": "Bleach",
            "date": "2023-01-24",
            "img_url": "bleach.png",
        },
        {
            "id": 8,
            "user_id": 1,
            "anime_title": "Attack on Titan",
            "date": "2023-01-24",
            "img_url": "aot.jpg",
        },
    ]
}


def set_favorites_db():
    return favorites_db


class FakeFavoriteRespository:
    def get_all(self, user_id) -> list[FavoriteOut]:
        results = []
        target_list = favorites_db["favoritos"]
        for item in target_list:
            if item["user_id"] == user_id:
                results.append(item)
        return results


class FakeAuthenticator:
    def get_current_account_data(self):
        return {
            "id": 0,
            "first_name": "string",
            "last_name": "string",
            "email": "string",
            "username": "string",
        }


def test_get_all_favorites():
    app.dependency_overrides[FavoriteRepository] = FakeFavoriteRespository
    app.dependency_overrides[
        auth.authenticator.get_current_account_data
    ] = FakeAuthenticator
    response = client.get("/favoritos/1")
    assert response.status_code == 200
    assert response.json()["favoritos"][0] == favorites_db["favoritos"][1]
    app.dependency_overrides = {}
