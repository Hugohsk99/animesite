# usa a imagem python latest como base
FROM python:latest

# define o diretório de trabalho no container
WORKDIR /app/

# copia o arquivo de requisitos para o container
COPY requirements.txt ./

# instala as dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# copia todos os arquivos do diretório atual para o container
COPY . .

# copia o diretório templates para dentro do diretório /app no container
# note que a pasta templates deve estar no mesmo diretório que o Dockerfile
COPY templates ./templates

# copia o diretório static para dentro do diretório /app no container
# note que a pasta static deve estar no mesmo diretório que o Dockerfile
COPY static ./static

# define o comando para rodar quando o container iniciar
CMD ["gunicorn", "run:app", "-b", "0.0.0.0:8000"]
