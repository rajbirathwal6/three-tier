docker run -d --name jenkins \
  -u root \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkins/jenkins:lts

chmod 666 /var/run/docker.sock
docker build -t frontend .
cd ../backend
docker build -t backend .
cd ..
docker-compose up -d
docker ps
