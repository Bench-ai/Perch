FROM openjdk:17
ADD perch/target/perch.jar perch.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "perch.jar"]
