# Za pomocą tego pliku postawimy kontener
FROM python:2.7-slim
FROM jenkins/jenkins:lts
# Set the working directory to /app
WORKDIR /DevOpps

# Copy the current directory contents into the container at /app
COPY . /DevOpps

CMD ["python", "HelloWorld.py"]
	
RUN docker run dockercloud/cli -h