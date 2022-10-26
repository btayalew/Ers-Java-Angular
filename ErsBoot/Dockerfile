FROM openjdk:8-jdk-alpine
ADD target/horizon2.jar app.jar
ADD deployment.yaml app-config.yml
EXPOSE 8020
ENTRYPOINT ["java","-jar","/app.jar"]

