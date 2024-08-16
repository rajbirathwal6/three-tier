cd frontend
sudo chmod 666 /var/run/docker.sock
docker build -t frontend .
cd . ../backend
docker build -t backend .
cd ..
docker-compose up -d
docker ps

