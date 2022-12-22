FROM openjdk:17
EXPOSE 8080
ADD target/perch.jar perch.jar
ENTRYPOINT ["java", "-jar", "/perch.jar"]
