FROM openjdk:17
EXPOSE 8080
ADD perch/target/perch.jar perch.jar
ENTRYPOINT ["java", "-jar", "/perch.jar"]
