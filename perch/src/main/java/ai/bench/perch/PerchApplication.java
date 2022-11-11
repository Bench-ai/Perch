package ai.bench.perch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class PerchApplication {

    public static void main(String[] args) {
        SpringApplication.run(PerchApplication.class, args);
    }

}
