import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.contas import AccountQueries, AccountOut, AccountOutWithPassword


class MyAuthenticator(Authenticator):
    async def get_account_data(
        self,
        username: str,
        contas: AccountQueries,
    ):

        return contas.get_one(username)

    def get_account_getter(
        self,
        contas: AccountQueries = Depends(),
    ):

        return contas

    def get_hashed_password(self, account: AccountOutWithPassword):

        return account.hashed_password

    def get_account_data_for_cookie(self, account: AccountOut):

        return account.username, AccountOut(**account.dict())


authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
