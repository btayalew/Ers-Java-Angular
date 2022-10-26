FROM openjdk:8-jdk-alpine
ADD target/horizon2.jar app.jar
EXPOSE 8020
ENTRYPOINT ["java","-jar","/app.jar"]

