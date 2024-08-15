cd frontend
docker build -t frontend .
cd . ../backend
docker build -t backend .
cd ..
docker-compose up -d
docker ps

